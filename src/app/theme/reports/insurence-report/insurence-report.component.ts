import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurence-report',
  templateUrl: './insurence-report.component.html',
  styleUrls: ['./insurence-report.component.scss']
})
export class InsurenceReportComponent implements OnInit {

  public rows = [
    {status: 'open'},
    {status: 'open'},
    {status: 'open'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
