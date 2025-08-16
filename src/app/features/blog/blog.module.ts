import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogRoutingModule } from './blog-routing.module';

// Shell
import { BlogComponent } from './blog.component';

// Pages
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BlogRoutingModule,
  ],
})
export class BlogModule {}
