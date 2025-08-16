import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';

import { AuthGuard } from '../../core/guards/auth.guard';
import { RoleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', component: BlogListComponent }, // list in the shell

      // Admin-only: create/edit
      {
        path: 'new',
        component: BlogEditorComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Admin'] },
      },
      {
        path: ':id/edit',
        component: BlogEditorComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Admin'] },
      },

      // Public: read a post
      { path: ':id', component: BlogDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
