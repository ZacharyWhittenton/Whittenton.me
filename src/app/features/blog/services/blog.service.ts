import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'apwu_blog_posts_v1';

export interface Post {
  id: string;           // uuid
  slug: string;         // url-safe unique
  title: string;
  body: string;         // markdown or plain text
  author?: string;
  tags?: string[];
  publishedAt: string;  // ISO
  updatedAt?: string;   // ISO
  published: boolean;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function loadInitial(): Post[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as Post[];
      if (Array.isArray(parsed)) return parsed;
    } catch {}
  }
  // Seed data so list shows something on first load
  const seed: Post[] = [
    {
      id: crypto.randomUUID(),
      slug: 'welcome-to-apwu-austin',
      title: 'Welcome to APWU Austin',
      body: 'This is your new blog. Edit or create posts from the Editor.',
      author: 'APWU Austin',
      tags: ['welcome'],
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      published: true,
    },
    {
      id: crypto.randomUUID(),
      slug: 'monthly-meeting-reminder',
      title: 'Monthly Meeting Reminder',
      body: 'Our monthly meeting is the first Thursday at 6pm.',
      author: 'Secretary',
      tags: ['meetings', 'reminder'],
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      published: true,
    },
  ];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
  return seed;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private _posts$ = new BehaviorSubject<Post[]>(loadInitial());
  posts$ = this._posts$.asObservable();

  private save(next: Post[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    this._posts$.next(next);
  }

  list(): Post[] {
    return this._posts$.getValue().slice().sort((a, b) =>
      (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '')
    );
  }

  getBySlug(slug: string): Post | undefined {
    return this._posts$.getValue().find(p => p.slug === slug);
  }

  create(input: Omit<Post, 'id' | 'slug' | 'publishedAt' | 'updatedAt'> & { slug?: string }): Post {
    const now = new Date().toISOString();
    const baseSlug = input.slug?.trim() ? slugify(input.slug) : slugify(input.title);
    const posts = this._posts$.getValue();
    let uniqueSlug = baseSlug;
    let i = 1;
    while (posts.some(p => p.slug === uniqueSlug)) uniqueSlug = `${baseSlug}-${i++}`;

    const post: Post = {
      id: crypto.randomUUID(),
      slug: uniqueSlug,
      title: input.title,
      body: input.body,
      author: input.author,
      tags: input.tags ?? [],
      publishedAt: now,
      updatedAt: now,
      published: !!input.published,
    };

    this.save([post, ...posts]);
    return post;
  }

  update(slug: string, changes: Partial<Post>): Post | undefined {
    const posts = this._posts$.getValue();
    const idx = posts.findIndex(p => p.slug === slug);
    if (idx < 0) return undefined;

    const existing = posts[idx];
    let nextSlug = existing.slug;

    if (changes.slug !== undefined || changes.title !== undefined) {
      const desired = changes.slug?.trim()
        ? slugify(changes.slug)
        : changes.title
          ? slugify(changes.title)
          : existing.slug;

      if (desired !== existing.slug) {
        nextSlug = desired;
        let i = 1;
        while (posts.some((p, j) => j !== idx && p.slug === nextSlug)) {
          nextSlug = `${desired}-${i++}`;
        }
      }
    }

    const next: Post = {
      ...existing,
      ...changes,
      slug: nextSlug,
      updatedAt: new Date().toISOString(),
    };

    const updated = posts.slice();
    updated[idx] = next;
    this.save(updated);
    return next;
  }

  delete(slug: string) {
    const filtered = this._posts$.getValue().filter(p => p.slug !== slug);
    this.save(filtered);
  }
}
