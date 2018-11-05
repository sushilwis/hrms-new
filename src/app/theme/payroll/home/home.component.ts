import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rows = [
    {status: 'open'},
    {status: 'open'},
    {status: 'open'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
