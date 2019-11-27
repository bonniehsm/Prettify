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
    trigger('ready', [
      state('loaded', style({
        opacity: 1,
      })),
      transition('* => loaded', [
        animate('1s')
      ]),
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
