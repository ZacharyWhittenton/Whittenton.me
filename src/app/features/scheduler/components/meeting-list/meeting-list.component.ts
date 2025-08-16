import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SchedulerService } from '../../services/scheduler.service';
import { Meeting } from '../../models/meeting.model';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css'],
})
export class MeetingListComponent {
  @Input() title = 'Meetings';
  @Input() meetings: Meeting[] = [];
  @Output() refresh = new EventEmitter<void>();

  constructor(private scheduler: SchedulerService) {}

  cancel(m: Meeting) {
    const ok = confirm(`Cancel meeting "${m.title}"?`);
    if (!ok) return;
    const res = this.scheduler.cancel(m.id);
    if (res.ok) this.refresh.emit();
    else alert(res.error || 'Failed to cancel.');
  }
}
