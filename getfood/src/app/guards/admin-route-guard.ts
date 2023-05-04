import { Injectable } from '@angular/core';
import { UserService } from './../services/user.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
// Route-guards er en injectable som implementerer CanActivate-interface
export class AdminRouteGuard implements CanActivate {

  // Router inneholder informasjon om ruten man er i, samt metoder for å navigere rundt på sidene
  constructor(private readonly userService: UserService, private readonly router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    if(this.userService.loggedInUser) {
      return of(true);
    }
    else {
      return of(this.router.parseUrl('/login'))
    }
  }

}
