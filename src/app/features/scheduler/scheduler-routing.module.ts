import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { SchedulerComponent } from './scheduler.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: SchedulerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulerRoutingModule {}
