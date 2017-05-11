import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  navOpened: boolean = true;

  constructor() { }

  ngOnInit() {
    this.navOpened = true;
  }

  openNav() :void {
    this.navOpened = !this.navOpened;
  }

}
