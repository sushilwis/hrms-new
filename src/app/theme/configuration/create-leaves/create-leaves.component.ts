import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-leaves',
  templateUrl: './create-leaves.component.html',
  styleUrls: ['./create-leaves.component.scss',
  '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class CreateLeavesComponent implements OnInit {

  public rows = [
    { leavecode: 'AB', name: 'Absent', type: 'Unpaid', level: 'Main-Leave'},
    { leavecode: 'SL', name: 'Sick Leave', type: 'Paid', level: 'Sub-Leave'},
    // { leavecode: 'ST1', name: 'General', type: '8:00 hr', level: '2:00 hr'},    
  ];

  constructor() { }

  ngOnInit() {
  }

}
