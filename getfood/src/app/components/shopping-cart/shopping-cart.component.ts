import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ShoppingCartItem } from '../../interfaces/transaction';
import { tap } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent {
  items$ = this.shoppingCartService.activeItems$.pipe(
    tap((items) => {
      if(items.length === 0) {
        this.dialogRef.close();
      }
    }),
    tap(items => this.totalCost = items.reduce((cost, transaction) => cost += transaction.cost * transaction.amount, 0)),
  );
  totalCost: number;

  displayedColumns = ['item', 'amount', 'cost'];

  constructor(public dialogRef: MatDialogRef<ShoppingCartComponent>, private readonly shoppingCartService: ShoppingCartService) {

  }

  rowClicked(row: ShoppingCartItem) {
    //todo show description in tooltip or something
  }

  updateItems(e:any,item:ShoppingCartItem) {
    //ToDo should debounce this
    const value = e.target.value;
    const number= Number.parseInt(value);
    if(item && !isNaN(number))
    this.shoppingCartService.updateItem(item,number);

  }
  removeItem(item:any) {
    this.shoppingCartService.removeItem(item.id);
  }
  checkIfemptyFieldOnBlur(e,item){
    const value= e?.target?.value;
    if(!value || value===''){
      this.shoppingCartService.updateItem(item,0);
    }
  }
}
