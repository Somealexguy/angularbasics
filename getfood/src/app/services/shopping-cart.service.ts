import { Injectable } from "@angular/core";
import { ShoppingCartItem } from "../interfaces/transaction";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "./storage.service";

@Injectable({providedIn: 'root'})
export class ShoppingCartService {
  // Todo should add userName to key so its spesific to the user
  private storageKey:string='shoppingCart';
  // Isolererer Subject. Andre komponenter eller tjenester bør ikke ha muligheten til å dytte nye verdier direkte. (Løsere kopling)
  private activeItemsSource = new BehaviorSubject<ShoppingCartItem[]>([]);
  activeItems$ = this.activeItemsSource.asObservable();

  constructor(private storageService:StorageService){
    const storedShoppingCart:ShoppingCartItem[] = this.storageService.get(this.storageKey);
    if(storedShoppingCart?.length>0){
      this.activeItemsSource.next(storedShoppingCart);
    }
  }
  add(item: ShoppingCartItem) {
    const items = this.activeItemsSource.getValue();
    const existingItem = items.find(x => x.id === item.id)
    if(existingItem) {
      existingItem.amount += item.amount;
    }
    else {
      items.push(item);
    }
    this.storageService.add(this.storageKey,items);

    this.activeItemsSource.next([...items]);
  }


  updateItem(item:ShoppingCartItem,amount) {
    const items = this.activeItemsSource.getValue();
   
   if(amount===0){
    this.removeItem(item.id);
    return;
   }
   const existingItem = items.find(x => x.id === item.id);
    existingItem.amount=amount;
    
    this.updateItems(items);
  }
  removeItem(id:number){
    const items:ShoppingCartItem[] = this.activeItemsSource.getValue();
    const updatedItems = items.filter(item => item.id!==id);
    this.updateItems(updatedItems);
  }
  private updateItems(items:ShoppingCartItem[]){
    this.updateLocalStorage(items)
    this.activeItemsSource.next([...items]);
  }
  private updateLocalStorage(items:ShoppingCartItem[]) {
    if (items.length > 0) {
      this.storageService.add(this.storageKey, items);
    } else {
      this.storageService.remove(this.storageKey);
    }
  }
}
