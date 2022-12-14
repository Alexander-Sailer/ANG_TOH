import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'property', 'check'];
  dataSource = HEROES; 

  constructor() { 
    console.log('constructor()');
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
  }
}
