import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  model = {
    left: true,
    middle: false,
    right: false
  };

  ngOnInit() {
    console.log('Hello About');
  }

}
