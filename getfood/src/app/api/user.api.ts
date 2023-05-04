import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { User } from "../interfaces/user";
import { AccessLevel } from "../interfaces/user-access.enum";
// Teknisk sett en tjeneste, men vanlig å separere tjenester for API til et eget lag
@Injectable({providedIn: 'root'})

export class UserApiService {

  login(username: string, password: string): Observable<User | null> {

    if(username === 'admin' && password === 'admin') {
      return of<User>({
        username,
        level: AccessLevel.Admin,
        accessToken: 'IveGotALovelyBunchOfAccessTokensDiddelidee'
      })
      // En kunstig liten delay for mocking purposes
      .pipe(delay(1500))
    }
      return of(null).pipe(delay(1500));
  }
}