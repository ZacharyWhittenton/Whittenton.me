import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
  returnUrl = '/';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    role: ['Member'], // or 'Admin'
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
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
    const ok = this.auth.login(v.email!, v.password!, (v.role as 'Admin' | 'Member') ?? 'Member');

    this.loading = false;
    if (ok) this.router.navigateByUrl(this.returnUrl);
    else this.error = 'Invalid credentials';
  }

  quickAdmin() {
    if (this.auth.loginAsAdmin()) this.router.navigateByUrl(this.returnUrl);
  }
  quickMember() {
    if (this.auth.loginAsMember()) this.router.navigateByUrl(this.returnUrl);
  }
}
