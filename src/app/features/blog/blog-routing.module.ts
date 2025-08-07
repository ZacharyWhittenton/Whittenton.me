import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard'; // ✅ Import the guard

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
