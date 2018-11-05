import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss',
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
export class TimeComponent implements OnInit {

  public rows = [
    {late: '20 min'},
    {late: '20 min'},
    {late: '20 min'},
  ];

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }



  redirectToProfileHome (){
    this.route.navigate(['/profile/home']);
  }

}
