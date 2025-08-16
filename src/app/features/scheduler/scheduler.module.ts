import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerComponent } from './scheduler.component';
import { MeetingFormComponent } from './components/meeting-form/meeting-form.component';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';

@NgModule({
  declarations: [
    SchedulerComponent,
    MeetingFormComponent,
    MeetingListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SchedulerRoutingModule,
  ],
})
export class SchedulerModule {}
