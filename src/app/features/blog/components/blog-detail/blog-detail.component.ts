import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, Post } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blog: BlogService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.post = this.blog.getBySlug(slug);
    if (!this.post) {
      this.router.navigate(['/blog']);
    }
  }

  edit() {
    if (this.post) this.router.navigate(['/blog', this.post.slug, 'edit']);
  }

  delete() {
    if (!this.post) return;
    if (confirm('Delete this post?')) {
      this.blog.delete(this.post.slug);
      this.router.navigate(['/blog']);
    }
  }
}
