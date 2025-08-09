// src/app/features/blog/blog.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    BlogEditorComponent,
    BlogListComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule  // <-- REQUIRED
  ]
})
export class BlogModule {}
