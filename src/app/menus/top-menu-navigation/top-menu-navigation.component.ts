import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu-navigation',
  templateUrl: './top-menu-navigation.component.html',
  styleUrls: ['./top-menu-navigation.component.scss']
})
export class TopMenuNavigationComponent implements OnInit {
  @Input() brand: string;

  constructor() { }

  ngOnInit() {

  }

}
