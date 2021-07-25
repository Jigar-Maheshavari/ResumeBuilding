import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api_key: any = 'https://resumebuilding-94522-default-rtdb.europe-west1.firebasedatabase.app/';
  credentials: any = { email: '', password: '' };
  userAdded: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient, private router: Router, private firestore: AngularFirestore) { }

  createUser(payload: any) {
    return this.firestore.collection('signUpUsers').add(payload);
  }

  getAllUser() {
    return this.firestore.collection('signUpUsers').snapshotChanges();
  }

  validateUser(payload: any) {
    return this.getAllUser().subscribe((value: any) => {
      let array = value.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      })
      for (let i = 0; i < array.length; i++) {
        if (array[i].email == payload.email && payload.password == array[i].password) {
          this.credentials = array[i];
          this.userAdded.next(this.credentials);
          this.activeUser(this.credentials);
          localStorage.setItem('credentials', JSON.stringify(this.credentials));
          return this.router.navigateByUrl('/home', {
            replaceUrl: true
          });
        }
        if (i >= array.length - 1) {
          return alert('email or password incorrecct!!!');
        }
      }
    })
  }

  activeUser(payload: any) {
    return this.firestore.collection('activeUsers').add({email:payload.email,password:payload.password});
  }

  getAllActiveUser() {
    return this.firestore.collection('activeUsers').snapshotChanges();
  }

  removeUser() {
    let activeUser: any = { id: '' };
    let allUsers: any;
    this.getAllActiveUser().subscribe((data: any) => {
      allUsers = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      })
      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == this.credentials.email ) {
          activeUser.id = allUsers[i].id;
        }
      }
      this.firestore.doc('activeUsers/' + activeUser.id).delete();
      this.userAdded.next(null);
      return this.router.navigateByUrl('/auth/login', {
        replaceUrl: true
      })
    });
  }
}
