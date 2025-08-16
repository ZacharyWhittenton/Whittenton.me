import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../../../core/services/auth.service';
import { BlogService, Post } from '../../../blog/services/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  recentPosts: Post[] = [];

  totalUsers = 0;
  admins = 0;
  members = 0;

  totalPosts = 0;
  publishedPosts = 0;
  draftPosts = 0;

  constructor(private auth: AuthService, private blog: BlogService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadPosts();
  }

  private loadUsers() {
    this.users = this.auth.listUsers();
    this.totalUsers = this.users.length;
    this.admins = this.users.filter(u => u.roles.includes('Admin')).length;
    this.members = this.users.filter(u => u.roles.includes('Member')).length;
  }

  private loadPosts() {
    this.posts = this.blog.list();
    this.totalPosts = this.posts.length;
    this.publishedPosts = this.posts.filter(p => p.published).length;
    this.draftPosts = this.totalPosts - this.publishedPosts;
    this.recentPosts = this.posts.slice(0, 5);
  }

  tagText(p: Post): string {
    return (p.tags ?? []).join(', ');
  }
}
