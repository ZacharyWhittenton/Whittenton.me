import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

function match(otherControlName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const parent = control.parent as any;
    if (!parent) return null;
    const other = parent.get(otherControlName);
    if (!other) return null;
    return control.value === other.value ? null : { mismatch: true };
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  loading = false;
  error = '';
  returnUrl = '/';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    confirmPassword: ['', [Validators.required, match('password')]],
    role: ['Member'], // or 'Admin'
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    const ru = this.route.snapshot.queryParamMap.get('returnUrl');
    if (ru) this.returnUrl = ru;
  }

  submit() {
    this.error = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    const v = this.form.getRawValue();

    const res = this.auth.register({
      name: v.name!.trim(),
      email: v.email!.trim(),
      password: v.password!,
      role: (v.role as 'Admin' | 'Member') ?? 'Member',
    });

    this.loading = false;
    if (!res.ok) {
      this.error = res.error || 'Registration failed.';
      return;
    }
    // Auto-logged in by AuthService.register()
    this.router.navigateByUrl(this.returnUrl);
  }
}
