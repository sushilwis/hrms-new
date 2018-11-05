import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss',
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

export class RequestsComponent implements OnInit {

  public rows = [
    { application: 'Personal Leave', unit: '0.5 day', status: 'Pending'},
    { application: 'Overtime', unit: '2 day', status: 'Approved'},  
    { application: 'Overtime', unit: '1 day', status: 'Rejected'} 
  ];

  constructor() { }

  ngOnInit() {
  }

}
