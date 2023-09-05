import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { url } from 'src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string = '';
  private myApiUrl: string = '';

  constructor(private http: HttpClient) {
    this.myAppUrl = url.url;
    this.myApiUrl = 'api/login/';
  }

  singIn(user: User): Observable<User> {
    return this.http.post<User>(this.myAppUrl + this.myApiUrl + 'createUser', user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.myAppUrl + this.myApiUrl + 'loginUser', user);
  }
}
