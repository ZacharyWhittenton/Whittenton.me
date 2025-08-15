import { Component, OnInit } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: Date;
  slug?: string;
  tags?: string[];
  readMinutes?: number;
}

type SortKey = 'date_desc' | 'date_asc' | 'title_asc' | 'title_desc';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  loading = true;
  error: string | null = null;

  // Data
  posts: BlogPost[] = [];

  // UI state
  query = '';
  selectedTags: string[] = [];
  sort: SortKey = 'date_desc';
  page = 1;
  pageSize = 6;

  ngOnInit() {
    // Simulate API call
    setTimeout(() => {
      try {
        this.posts = [
          {
            id: 1,
            title: 'Getting Started with Angular',
            excerpt: 'Learn how to build dynamic web apps using Angular...',
            author: 'Jane Doe',
            date: new Date('2025-08-01'),
            slug: 'getting-started-with-angular',
            tags: ['angular', 'beginner'],
            readMinutes: 6
          },
          {
            id: 2,
            title: 'TailwindCSS for Angular',
            excerpt: 'Integrating TailwindCSS into your Angular project...',
            author: 'John Smith',
            date: new Date('2025-08-05'),
            slug: 'tailwindcss-for-angular',
            tags: ['tailwind', 'styling', 'angular'],
            readMinutes: 4
          }
        ];
        this.loading = false;
      } catch (e) {
        this.error = 'Failed to load posts.';
        this.loading = false;
      }
    }, 800);
  }

  // Derived data
  get availableTags(): string[] {
    const set = new Set<string>();
    for (const p of this.posts) (p.tags || []).forEach(t => set.add(t));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }

  get filteredAndSorted(): BlogPost[] {
    const q = this.query.trim().toLowerCase();

    let list = this.posts.filter(p => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);
      const matchesTags =
        this.selectedTags.length === 0 ||
        (p.tags && this.selectedTags.every(t => p.tags!.includes(t)));
      return matchesQuery && matchesTags;
    });

    switch (this.sort) {
      case 'date_desc':
        list = list.sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case 'date_asc':
        list = list.sort((a, b) => a.date.getTime() - b.date.getTime());
        break;
      case 'title_asc':
        list = list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title_desc':
        list = list.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return list;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredAndSorted.length / this.pageSize));
  }

  get pagedPosts(): BlogPost[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredAndSorted.slice(start, start + this.pageSize);
  }

  // Handlers
  onSearch(term: string): void {
    this.query = term;
    this.page = 1;
  }

  toggleTag(tag: string): void {
    const idx = this.selectedTags.indexOf(tag);
    if (idx >= 0) this.selectedTags.splice(idx, 1);
    else this.selectedTags.push(tag);
    this.page = 1;
  }

  onSortChange(s: SortKey): void {
    this.sort = s;
    this.page = 1;
  }

  clearFilters(): void {
    this.query = '';
    this.selectedTags = [];
    this.page = 1;
  }

  goToPage(p: number): void {
    this.page = Math.min(Math.max(1, p), this.totalPages);
  }

  reload(): void {
    this.loading = true;
    this.error = null;
    this.ngOnInit();
  }
}
