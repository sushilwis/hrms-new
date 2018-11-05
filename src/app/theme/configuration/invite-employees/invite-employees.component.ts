import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-employees',
  templateUrl: './invite-employees.component.html',
  styleUrls: ['./invite-employees.component.scss',
  '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class InviteEmployeesComponent implements OnInit {

  public rows = [
    { employeecode: 'AB', employeename: 'Absent', email: 'admin@gmail.com', username: 'Admin123'},
    { employeecode: 'SL', employeename: 'Sick Leave', email: 'admin2@gmail.com', username: 'Admin456'}    
  ];

  constructor() { }

  ngOnInit() {
  }

}
