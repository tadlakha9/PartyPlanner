import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm = this.fb.group({
    empId: [null],
    password: [null]
  });
  constructor(private authService : AuthService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signIn(this.loginForm.value);
  }

}
