import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-time-overtime-details',
  templateUrl: './time-overtime-details.component.html',
  styleUrls: ['./time-overtime-details.component.scss',
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

export class TimeOvertimeDetailsComponent implements OnInit {

  public rows = [
    {ot: 'ot1'},
    {ot: 'ot1'},
    {ot: 'ot1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
