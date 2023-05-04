

import {Component, Inject, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
export interface CustomSnackBarData{
  message:string;
}
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})

export class SnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: CustomSnackBarData,private readonly matDialog: MatDialog) {

  }
  openShoppingCart() {
    this.matDialog.open(ShoppingCartComponent);
  }
}
