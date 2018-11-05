import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {transition, trigger, style, animate} from '@angular/animations';
import {Http} from '@angular/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss',
  '../../../../assets/icon/icofont/css/icofont.scss',
  '../../../../../node_modules/sweetalert2/src/sweetalert2.scss'
  ],

  encapsulation: ViewEncapsulation.None,
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

export class OrganizationStructureComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  rows = [
    { code: "001"},
    { code: "001"},
    { code: "001"}
  ];
  selected = [];

  showDialog = false;
  @Input() visible: boolean;
  public config: any;

  constructor(public http: Http) { }

  ngOnInit() {
    // this.getdata();
  }
  // getdata(){
  //   this.http.get(`assets/data/issue-list.json`)
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.rows = data.json();
  //     });
  // }

}
