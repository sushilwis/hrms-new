import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss']
})
export class MyTaskComponent implements OnInit {

  public rows = [
    {status: 'Aproved'},
    {status: 'Aproved'},
    {status: 'Aproved'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
