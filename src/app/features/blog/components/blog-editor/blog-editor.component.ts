import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, Post } from '../../services/blog.service';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css'],
})
export class BlogEditorComponent implements OnInit {
  isEdit = false;
  originalSlug?: string;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    slug: [''],
    author: [''],
    tags: [''],
    body: ['', [Validators.required, Validators.minLength(5)]],
    published: [true],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private blog: BlogService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const p = this.blog.getBySlug(slug);
      if (p) {
        this.isEdit = true;
        this.originalSlug = p.slug;
        this.form.patchValue({
          title: p.title,
          slug: p.slug,
          author: p.author || '',
          tags: (p.tags || []).join(', '),
          body: p.body,
          published: p.published,
        });
      }
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const payload = {
      title: v.title!.trim(),
      slug: (v.slug || '').trim(),
      author: (v.author || '').trim(),
      tags: (v.tags || '')
        .split(',')
        .map(t => t.trim())
        .filter(Boolean),
      body: v.body!,
      published: !!v.published,
    };

    if (this.isEdit && this.originalSlug) {
      const updated = this.blog.update(this.originalSlug, payload as Partial<Post>);
      if (updated) {
        this.router.navigate(['/blog', updated.slug]);
      }
    } else {
      const created = this.blog.create(payload as any);
      this.router.navigate(['/blog', created.slug]);
    }
  }

  cancel() {
    if (this.isEdit && this.originalSlug) {
      this.router.navigate(['/blog', this.originalSlug]);
    } else {
      this.router.navigate(['/blog']);
    }
  }
}
