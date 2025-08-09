import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

export interface BlogPostDto {
  title: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly baseUrl = '/api/blog';

  constructor(private http: HttpClient) {}

  // List all posts
  getAll(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.baseUrl);
  }

  // Get a single post by id
  get(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.baseUrl}/${id}`);
  }

  // Create a post (no id in body)
  create(post: BlogPostDto): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.baseUrl, post);
  }

  // Update a post by id (no id in body)
  update(id: number, post: BlogPostDto): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${this.baseUrl}/${id}`, post);
  }

  // Delete a post
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
