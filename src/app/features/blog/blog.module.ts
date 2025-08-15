// src/app/features/blog/blog.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';

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
    FormsModule,          // <-- needed if your templates use [(ngModel)]
    ReactiveFormsModule,  // <-- keep for editor forms
    BlogRoutingModule     // <-- provides RouterModule.forChild(...)
  ]
})
export class BlogModule {}
