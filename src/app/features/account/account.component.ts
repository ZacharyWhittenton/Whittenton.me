import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  loading = false;
  error = '';
  success = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    dob: [''],   // yyyy-mm-dd
    phone: [''],
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    const u = this.auth.user;
    if (u) {
      this.form.patchValue({
        name: u.name ?? '',
        email: u.email ?? '',
        dob: u.dob ?? '',
        phone: u.phone ?? '',
      });
    }
  }

  save() {
    this.error = '';
    this.success = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    const v = this.form.getRawValue();
    const res = this.auth.updateProfile({
      name: v.name!.trim(),
      email: v.email!.trim(),
      dob: v.dob || null,
      phone: v.phone || null,
    });
    this.loading = false;
    if (!res.ok) {
      this.error = res.error || 'Failed to update profile.';
      return;
    }
    this.success = 'Profile saved.';
  }
}
