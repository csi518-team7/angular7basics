import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Change App title below
  appTitle: string = 'TICKETING';

  constructor() { }

  ngOnInit() {
  }

}
