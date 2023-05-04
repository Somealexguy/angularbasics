import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_ENDPOINT } from '../interfaces/constants';
import { Product } from '../interfaces/product';
import { HttpService } from './http-service.service';

@Injectable()
export class ProductsService {
  private httpService: HttpService<Product>
  constructor(httpService: HttpService<Product>) {
    this.httpService = httpService;
  }
  getProducts() {
    const observable: Observable<Product[]> = this.httpService.get(PRODUCTS_ENDPOINT);
    return observable;
  }
  getProduct(id:string) {
    const observable: Observable<Product> = this.httpService.getById(PRODUCTS_ENDPOINT,id);
    return observable;
  }
}
