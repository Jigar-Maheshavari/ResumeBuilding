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
  propertyNames: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    this.createForm();
    this.getAllUser();
  }

  ngOnInit(): void {
  }

  getAllUser() {
    this.authenticationService.getAllUser().subscribe((data: any) => {
      this.allUsers = data.map((e:any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      })
    });
  }

  createUser() {
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].email == this.signUpForm.controls['email'].value) {
        this.exist = true;
      }
    }
    if (!this.exist) {
      this.authenticationService.createUser(this.signUpForm.value);
      this.router.navigate(['/auth/login']);
    }

    else {
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
