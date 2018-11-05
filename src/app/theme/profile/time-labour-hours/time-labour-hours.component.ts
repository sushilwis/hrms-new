import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-time-labour-hours',
  templateUrl: './time-labour-hours.component.html',
  styleUrls: ['./time-labour-hours.component.scss',
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
export class TimeLabourHoursComponent implements OnInit {

  public rows = [
    {date: '01/02/2018'},
    {date: '01/02/2018'},
    {date: '01/02/2018'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
