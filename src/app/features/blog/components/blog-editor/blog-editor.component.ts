import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

interface BlogPostDto {
  title: string;
  content: string;
}

// Local structural type so we can satisfy the update() signature
type BlogPost = BlogPostDto & { id: number };

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html'
})
export class BlogEditorComponent implements OnInit {
  readonly postForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

  editing = false;
  postId: number | null = null;
  saving = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) return;

    const parsedId = Number(idParam);
    if (Number.isNaN(parsedId)) {
      this.router.navigate(['/blog']);
      return;
    }

    this.editing = true;
    this.postId = parsedId;

    this.blogService.get(this.postId).subscribe({
      next: (post) => {
        if (!post) {
          this.router.navigate(['/blog']);
          return;
        }
        this.postForm.patchValue({
          title: (post as any).title ?? '',
          content: (post as any).content ?? ''
        });
      },
      error: () => this.router.navigate(['/blog'])
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid || this.saving) return;

    this.saving = true;
    const dto: BlogPostDto = this.postForm.getRawValue();

    const req$ =
      this.editing && this.postId !== null
        // ✅ include id for update payload
        ? this.blogService.update(this.postId, { id: this.postId, ...dto } as BlogPost)
        : this.blogService.create(dto);

    req$.subscribe({
      next: () => this.router.navigate(['/blog']),
      error: () => {
        this.saving = false;
      }
    });
  }
}
