import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {FileUploader} from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-add-new-shifts-ot',
  templateUrl: './add-new-shifts-ot.component.html',
  styleUrls: ['./add-new-shifts-ot.component.scss',
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
export class AddNewShiftsOtComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  public rows = [
    { name: 'B1', type: 'Overtime1', totaltime: '2:00 hr', deductible: 'Yes'},
    { name: 'B2', type: 'Overtime2', totaltime: '60 min', deductible: 'Yes'},
    { name: 'B3', type: 'General', totaltime: '8:00 hr', deductible: 'Yes'}    
  ];

  constructor() { }

  ngOnInit() {
  }

}
