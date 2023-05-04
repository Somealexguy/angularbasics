import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  add(key:string,item){
    localStorage.setItem(key,JSON.stringify(item));
  }
  remove(key:string){
    localStorage.removeItem(key);
  }
  get<T>(key:string){
    const json =localStorage.getItem(key);

    const obj= JSON.parse(json) as T;
    return obj;
  }
}
