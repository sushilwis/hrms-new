// import { Component, OnInit } from '@angular/core';
import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {transition, trigger, style, animate} from '@angular/animations';
import swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-run-new-payroll',
  templateUrl: './run-new-payroll.component.html',
  styleUrls: ['./run-new-payroll.component.scss',
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
export class RunNewPayrollComponent implements OnInit {

  showDialog = false;
  @Input() visible: boolean;
  public config: any;

  period: String = null;
  showForm: Boolean = false;
  isDisabled: Boolean = true; 
  normal: any;
  special: any;
  
  isAbpc: Boolean = true; 
  // isAbec: Boolean = true;

  public rows = [
    {code: '001'},
    {code: '002'},
    {code: '003'}
  ];

  constructor( private router: Router ) { }

  ngOnInit() {
  }



  onChangePeriod() {
    console.log(this.period);

    if(this.period === '' || this.period === null){
      this.showForm = false;
    }else{
      this.showForm = true;
    }

    console.log(this.showForm);
  }


  onChangeRadioNormal() {
    console.log("Normal Value : ", this.normal);
    this.special = null;
    console.log("Special Value : ", this.special);
    this.isDisabled = true;
  }

  onChangeRadioSpecial() {    
    console.log("Special Value : ", this.special);
    this.normal = null;
    console.log("Normal Value : ", this.normal);
    this.isDisabled = false;
  }

  onClickAbpc () {
    this.isAbpc = true;
    // this.isAbec = false
  }

  onClickAbec () {
    this.isAbpc = false;
  }




  openConfirmsSwal() {
    swal({
      title: '<p>Confirm Payroll?</p>',
      type: 'success',
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      confirmButtonClass: 'btn btn-success header-button',
      cancelButtonClass: 'btn btn-danger header-button',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      width: '24rem',
      buttonsStyling: false,
      reverseButtons: true      
    }).then((result) => {
      if (result.value) {
        console.log('Yes Clicked!');
      }else {
        console.log('No Clicked!');
        this.router.navigate(['/payroll/home']);
      }
    });
  }




}
