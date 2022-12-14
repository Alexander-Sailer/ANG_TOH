import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  // console.log('fill hero interface object');
  hero: Hero = {
    id: 1, 
    name: 'Windstorm'
  };


  constructor() { 
    console.log('constructor()');
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
  }
}
