import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService, User } from '../../../../core/services/auth.service';
import { SchedulerService } from '../../services/scheduler.service';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css'],
})
export class MeetingFormComponent implements OnInit {
  @Output() created = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();

  me: User | null = null;
  users: User[] = [];

  error = '';
  success = '';

  form = this.fb.group({
    id: [''],
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
    date: ['', Validators.required],      // yyyy-mm-dd
    startTime: ['', Validators.required], // HH:mm
    endTime: ['', Validators.required],   // HH:mm
    location: [''],
    onlineLink: [''],
    participants: [[] as string[]],       // emails
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private scheduler: SchedulerService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(u => {
      this.me = u;
      this.users = this.auth.listUsers();
      // include me by default
      if (u && (this.participantsValue().length === 0)) {
        this.form.controls.participants.setValue([u.email]);
      }
    });
  }

  // ----- helpers for participants control -----
  participantsValue(): string[] {
    return (this.form.controls.participants.value as string[]) ?? [];
  }

  isSelected(email: string): boolean {
    return this.participantsValue().includes(email);
  }

  onToggleParticipant(email: string, event: Event) {
    const checked = (event.target as HTMLInputElement)?.checked ?? false;
    const list = [...this.participantsValue()];

    if (checked) {
      if (!list.includes(email)) list.push(email);
    } else {
      const idx = list.indexOf(email);
      if (idx >= 0) list.splice(idx, 1);
    }

    this.form.controls.participants.setValue(list);
  }
  // -------------------------------------------

  submit() {
    this.error = '';
    this.success = '';
    if (!this.me) { this.error = 'Not authenticated.'; return; }
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    const v = this.form.getRawValue();
    const start = isoFrom(v.date!, v.startTime!);
    const end   = isoFrom(v.date!, v.endTime!);
    const payload = {
      title: v.title!.trim(),
      description: v.description?.trim() || '',
      start, end,
      location: v.location?.trim() || null,
      onlineLink: v.onlineLink?.trim() || null,
      participants: this.participantsValue().length ? this.participantsValue() : [this.me.email],
      createdBy: this.me.email,
    };

    const res = this.scheduler.create(payload);
    if (!res.ok) { this.error = res.error || 'Failed to create meeting.'; return; }
    this.success = 'Meeting scheduled.';
    this.form.reset({ participants: [this.me.email] });
    this.created.emit();
  }
}

/* helpers */
function isoFrom(date: string, time: string): string {
  const [h, m] = time.split(':').map(Number);
  const d = new Date(date);
  d.setHours(h, m, 0, 0);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const mi = String(d.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}:00`;
}
