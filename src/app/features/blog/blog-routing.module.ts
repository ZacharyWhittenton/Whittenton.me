import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent, // provides the shell & nested <router-outlet>
    children: [
      { path: '', component: BlogListComponent },                 // /blog
      { path: 'new', component: BlogEditorComponent },            // /blog/new
      { path: ':slug', component: BlogDetailComponent },          // /blog/:slug
      { path: ':slug/edit', component: BlogEditorComponent },     // /blog/:slug/edit
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
