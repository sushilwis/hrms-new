import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss',
  '../../../../assets/icon/icofont/css/icofont.scss',
  '../../../../../node_modules/sweetalert2/src/sweetalert2.scss'
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
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
