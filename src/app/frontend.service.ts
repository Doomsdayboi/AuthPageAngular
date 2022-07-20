import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FrontendService
{
  constructor(private http: HttpClient) { }

  public loginUserfromRemote(user: User): Observable<any>
  {
    return this.http.post<any>("https://authpagev1-backend.herokuapp.com/user/login", user);
  }

  public signupUserfromRemote(user: User): Observable<any>
  {
    return this.http.post<any>("https://authpagev1-backend.herokuapp.com/user/signup", user);
  }
}
