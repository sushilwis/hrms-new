import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss',
  '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class ManageEmployeesComponent implements OnInit {

  public rows = [
    { employeecode: 'AB', employeename: 'Absent', designation: 'Manager', location: 'Mumbai'},
    { employeecode: 'SL', employeename: 'Sick Leave', designation: 'Manager', location: 'Chennai'}    
  ];

  constructor() { }

  ngOnInit() {
  }

}
