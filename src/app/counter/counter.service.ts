import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counter = 0;
  private counter$ = new BehaviorSubject <number>(this._counter);


  public error = false;


  get counter() {
    return this.counter$
  }

  constructor() { }

  increase(number:number = 1){
  this._counter += number;
  this.counter$.next(this._counter);
  console.log(this._counter)
}

decrease(number:number = 1){
  if(number > this._counter){
    this.error=true;
    throw Error("valore minore di 0")
  } else {this._counter -= number;
    this.counter$.next(this._counter);
    console.log(this._counter)}
}



}


