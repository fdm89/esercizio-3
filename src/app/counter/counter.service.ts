import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counter = 0;
  get counter() {
    return this._counter
  }

  constructor() { }

  increase(number:number = 1){
  this._counter += number;
  console.log(this._counter)
}

decrease(number:number = 1){
  if(number > this._counter){
    throw Error("valore minore di 0")
  } else {this._counter -= number;
    console.log(this._counter)}
}



}


