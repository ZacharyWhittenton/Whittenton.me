import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../../services/blog.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(
    private blogService: BlogService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.blogService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  goToCreate(): void {
    this.router.navigate(['/blog/create']);
  }
}
