import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm: any;
  constructor(private formBuilder: FormBuilder, private router:Router,private authenticationService: AuthenticationService) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  async validateUser() {
    this.authenticationService.validateUser(this.loginForm.value)
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

}
