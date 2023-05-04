import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { tap } from 'rxjs';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart-icon',
  templateUrl: './shopping-cart-icon.component.html',
  styleUrls: ['./shopping-cart-icon.component.scss']
})
export class ShoppingCartIconComponent {
  icon = faShoppingCart;
  items$ = this.shoppingCartService.activeItems$.pipe(
    tap((items) => this.itemCount = items.reduce((count, item) => count += item.amount, 0))
  );

  itemCount: number = 0;

  constructor(private readonly shoppingCartService: ShoppingCartService, private readonly matDialog: MatDialog) {

  }

  openShoppingCart() {
    this.matDialog.open(ShoppingCartComponent);
  }

}
