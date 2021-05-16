import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../appService/auth.service';
import { AuthResponse } from '../authInterface/authResponse.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private _authService: AuthService) { }

  public loginMode = true;

  Form: FormGroup;

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  changeMode(): void {
    this.loginMode = !this.loginMode;
  }

  onSubmit(): void {
    if (this.Form.valid) {
      const email = this.Form.value.email;
      const password = this.Form.value.password;

      let authObservable: Observable<AuthResponse>;

      if (this.loginMode) {
        authObservable = this._authService.signIn(email, password);
      } else {
        authObservable = this._authService.signUp(email, password);
      }

      authObservable.subscribe(
        response => {
          console.log(response);
        },
        err => {
          console.log(err);
        });
    }
    else {
      console.log('not valid');
    }
  }
}
