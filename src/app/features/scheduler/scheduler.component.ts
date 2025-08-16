import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../core/services/auth.service';
import { SchedulerService } from './services/scheduler.service';
import { Meeting } from './models/meeting.model';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent implements OnInit {
  user: User | null = null;
  upcoming: Meeting[] = [];
  meetingsForMe: Meeting[] = [];

  constructor(
    private auth: AuthService,
    private scheduler: SchedulerService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(u => {
      this.user = u;
      this.reload();
    });
  }

  reload() {
    if (!this.user) { this.upcoming = []; this.meetingsForMe = []; return; }
    this.upcoming = this.scheduler.upcomingForUser(this.user.email, 8);
    this.meetingsForMe = this.scheduler.listForUser(this.user.email);
  }
}
