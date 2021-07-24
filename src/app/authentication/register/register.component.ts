import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../core/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  allUsers: any;
  signUpForm: any;
  exist: boolean = false;
  propertyNames:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    this.createForm();
    this.getAllUser();
  }

  ngOnInit(): void {
  }

  getAllUser() {
    this.authenticationService.getAllUser().subscribe((response: any) => {
      this.allUsers = response;
      console.log(this.allUsers);
      this.propertyNames = Object.keys(this.allUsers);
    });
  }

  createUser() {
    for(let i=0;i<this.propertyNames.length;i++) {
      if (this.allUsers[this.propertyNames[i]].email == this.signUpForm.controls['email'].value) {
        this.exist = true;
      }
    }
    if (!this.exist) {
      this.authenticationService.createUser(this.signUpForm.value).subscribe((value) => {
        if (value) {
          alert('Your account has been created successfully you may logIn now.')
          this.router.navigate(['/auth/login']);
        }
      })
    }
    else{
      alert('email already taken..');
    }
  }

  createForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]]
    })
  }

}
