import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
interface LOGIN {
  email: string,
  password: string,
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  @Input() loginPage:Boolean = true
  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService
  ) { }

  loginForm = this.formBuilder.group<LOGIN>({
    email: '',
    password:''
  });


  onSubmit(): void{
    const { email, password } = this.loginForm.value;
     if (email && password) {
       this.loginPage ? this.authService.login(email, password)
        : this.authService.signUp(email, password);
    }
  }
}
