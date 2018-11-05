import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-requests',
  templateUrl: './task-requests.component.html',
  styleUrls: ['./task-requests.component.scss']
})
export class TaskRequestsComponent implements OnInit {

  public rows = [
    {status: 'Aproved'},
    {status: 'Aproved'},
    {status: 'Aproved'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
