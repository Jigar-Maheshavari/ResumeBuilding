import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api_key: any = 'https://resumebuilding-94522-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  createUser(payload: any) {
    let key = this.api_key + 'users.json'
    return this.http.post(key, payload);
  }

  getAllUser() {
    let key = this.api_key + 'users.json'
    return this.http.get(key);
  }
}
