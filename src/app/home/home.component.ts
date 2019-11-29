import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('loadedNotLoaded', [ 
      state('lowOpacity', style({
        opacity: 0,
      })),
      state('highOpacity', style({
        opacity: 1,
      })),
      state('offScreen', style({
        marginLeft: '-250px',
      })),
      state('onScreen', style({
        marginLeft: '0px',
      })),      
      transition('lowOpacity => highOpacity', [
        animate('2.2s ease-in-out')
      ]),
      transition('offScreen => onScreen', [
        animate('1.5s 1s ease-out')
      ]),      
    ]),
  ],
})

export class HomeComponent implements OnInit {
  isLoaded = false;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.isLoaded = true;
  }

  toggle(){
    this.isLoaded = !this.isLoaded;
  }

}
