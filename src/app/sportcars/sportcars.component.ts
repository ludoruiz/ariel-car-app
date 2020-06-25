import { Component, OnInit } from '@angular/core';
import { Sportcar } from '../sportcar';
import { SPORTCARS_LIST } from '../list-sportcars';

@Component({
  selector: 'app-sportcars',
  templateUrl: './sportcars.component.html',
  styleUrls: ['./sportcars.component.css']
})
export class SportcarsComponent implements OnInit {
  
  sportcars = SPORTCARS_LIST;
  selectedSportcar: Sportcar;
 
 /* sportcar: Sportcar = {
    id: 1,
    name: 'McLaren',
    model: 'X',
    price: 55555,
    year: 2019,
    race: 'Monaco'
  }; */

  constructor() { }

  ngOnInit() {
  }
  onSelect(sportcar: Sportcar): void {
    this.selectedSportcar = sportcar;
  }
}
