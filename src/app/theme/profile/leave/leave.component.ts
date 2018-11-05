import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss',
  '../../../../assets/icon/icofont/css/icofont.scss'
]
})
export class LeaveComponent implements OnInit {

  public rows = [
    { leaves: 'Personal Leave'},  
    { leaves: 'Casual Leave'},  
    { leaves: 'Sick Leave'},
    { leaves: 'Personal Leave'}  
  ];

  constructor() { }

  ngOnInit() {
  }

}
