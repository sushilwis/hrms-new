import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-edit-paycode",
  templateUrl: "./edit-paycode.component.html",
  styleUrls: ["./edit-paycode.component.scss"]
})
export class EditPaycodeComponent implements OnInit {
  formulaType: boolean;

  constructor() {}

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
