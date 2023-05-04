import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AccessLevel } from '../interfaces/user-access.enum';

interface MenuItem {
  name: string;
  requiresAdmin?: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  protected menuItems: MenuItem[] = [
    {name: 'dashboard', requiresAdmin: true},
    {name: 'sales', requiresAdmin: true},
    {name: 'orders', requiresAdmin: true},
    {name: 'customers', requiresAdmin: true},
    {name: 'products'}
  ];

  activeMenuItems = this.userService.loggedInUser.pipe(
    map((user) => {
      if(!!user && user.level === AccessLevel.Admin) {
        return this.menuItems;
      }
      return this.menuItems.filter(x => !x.requiresAdmin)
    })
  )

  userIcon = faUser;
  userLoggedIn = this.userService.loggedInUser;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private readonly userService: UserService) {}

}
