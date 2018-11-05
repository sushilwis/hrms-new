import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-custom-paycode',
  templateUrl: './create-custom-paycode.component.html',
  styleUrls: ['./create-custom-paycode.component.scss']
})
export class CreateCustomPaycodeComponent implements OnInit {

  formulaType: boolean;

  constructor() { }  

  ngOnInit() {
    this.formulaType = true;
  }

  showFlatFormulaType() {
    this.formulaType = true;
  }

  showFormulaType() {
    this.formulaType = false;
  }

}
