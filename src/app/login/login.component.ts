import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public loginMode = true;

  Form: FormGroup;

  ngOnInit( ): void {
  }

  changeMode(){
    this.loginMode = !this.loginMode;
  }
}
