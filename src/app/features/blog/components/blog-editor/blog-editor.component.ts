import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html'
})
export class BlogEditorComponent implements OnInit {
  postForm: FormGroup;
  editing = false;
  postId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editing = true;
      this.postId = Number(idParam);
      this.blogService.get(this.postId).subscribe(post => {
        this.postForm.patchValue(post);
      });
    }
  }

  onSubmit(): void {
    if (this.postForm.invalid) return;

    const post = this.postForm.value;
    if (this.editing && this.postId !== null) {
      this.blogService.update(this.postId, post).subscribe(() => {
        this.router.navigate(['/blog']);
      });
    } else {
      this.blogService.create(post).subscribe(() => {
        this.router.navigate(['/blog']);
      });
    }
  }
}
