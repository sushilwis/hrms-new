import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-insurence-report',
  templateUrl: './my-insurence-report.component.html',
  styleUrls: ['./my-insurence-report.component.scss']
})
export class MyInsurenceReportComponent implements OnInit {

  public rows = [
    {status: 'open'},
    {status: 'open'},
    {status: 'open'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
