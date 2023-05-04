import { BehaviorSubject } from 'rxjs';
import { UserApiService } from './../api/user.api';
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  private loggedInUserSource = new BehaviorSubject<User | null>(null);
  loggedInUser = this.loggedInUserSource.asObservable();

  constructor(private readonly userApi: UserApiService) {}

  login(username: string, password: string): Observable<User> {
    const loggedInUser = this.loggedInUserSource.getValue();
    if(!!loggedInUser) {
      return this.loggedInUser;
    }
    else {
      return this.userApi.login(username, password).pipe(
        tap((user) => this.loggedInUserSource.next(user))
      )
    }
  }
}
