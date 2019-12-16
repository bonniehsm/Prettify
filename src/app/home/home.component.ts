import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
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
        transform: 'translateX(-100%)',
      })),
      state('onScreen', style({
        transform: 'translateX(0)',
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
