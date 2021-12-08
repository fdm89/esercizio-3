import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Component({
  selector: 'eserciziotre-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {
value!:number
  constructor(public counterService:CounterService) { }

  ngOnInit(): void {
  }

}
