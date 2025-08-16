import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService, Post } from '../../services/blog.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [];
  query = '';

  constructor(
    private blog: BlogService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    const all = this.blog.list();
    const q = this.query.toLowerCase().trim();
    this.posts = q
      ? all.filter(p =>
          (p.title + ' ' + (p.tags ?? []).join(' ') + ' ' + p.body)
            .toLowerCase()
            .includes(q)
        )
      : all;
  }

  clearSearch() {
    this.query = '';
    this.refresh();
  }

  newPost() {
    // Double-check in TS as well (UI already hides this for non-admins)
    if (!this.auth.isAdmin()) return;
    this.router.navigate(['/blog/new']);
  }

  view(slug: string) {
    this.router.navigate(['/blog', slug]);
  }

  edit(slug: string, e?: MouseEvent) {
    e?.stopPropagation();
    if (!this.auth.isAdmin()) return;
    this.router.navigate(['/blog', slug, 'edit']);
  }

  remove(slug: string, e?: MouseEvent) {
    e?.stopPropagation();
    if (!this.auth.isAdmin()) return;
    if (confirm('Delete this post?')) {
      this.blog.delete(slug);
      this.refresh();
    }
  }

  statusClass(published: boolean): string {
    return published
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-200 text-gray-800';
  }
}
