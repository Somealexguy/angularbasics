import { UserService } from './../../services/user.service';
import { Observable, of, take, tap } from 'rxjs';
import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './login.form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm> = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  });

  loginLoading: boolean;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  login() {
    const formValues = this.loginForm.getRawValue();
    this.loginLoading = true;
    if (this.loginForm.valid) {
      this.userService
        .login(formValues.username, formValues.password)
        .pipe(take(1))
        .subscribe(() => {
          this.loginLoading = false;
          this.router.navigate(['/']);
        });
    }
  }
}
