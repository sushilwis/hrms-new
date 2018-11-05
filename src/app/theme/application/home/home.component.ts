import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
  '../../../../assets/icon/icofont/css/icofont.scss'
],

animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})


export class HomeComponent implements OnInit {

  public rows = [
    { unit: '2 Days', status: 'pending'}, 
    { unit: '1 Days', status: 'withdrawn'},
    { unit: '0.5 Days', status: 'rejected'},
    { unit: '3 Days', status: 'rejected'},   
  ];

  public rows1 = [
    { overtime: 'OT1', date: '01/02/2018', status: 'Pending'},
    { overtime: 'OT2', date: '01/02/2018', status: 'Approved'},
    { overtime: 'OT3', date: '01/02/2018', status: 'Rejected'},
    { overtime: 'OT4', date: '01/02/2018', status: 'Rejected'}       
  ];

  public rows2 = [
    { outdoor: '1', status: 'Pending'},
    { outdoor: '2', status: 'Approved'},
    { outdoor: '3', status: 'Rejected'},
    { outdoor: '4', status: 'Rejected'}       
  ];

  public rows3 = [
    { wfh: '1', status: 'Pending'},
    { wfh: '2', status: 'Approved'},
    { wfh: '3', status: 'Rejected'},
    { wfh: '4', status: 'Rejected'}       
  ];

  public rows4 = [
    { amount: '12500', status: 'Pending'},
    { amount: '4000', status: 'Approved'},
    { amount: '100', status: 'Rejected'},
    { amount: '500', status: 'Rejected'}       
  ];

  public rows5 = [
    { status: 'Pending'},
    { status: 'Approved'},
    { status: 'Rejected'},
    { status: 'Rejected'}       
  ];

  constructor() { }

  ngOnInit() {
  }

}
