import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-payslip-format",
  templateUrl: "./create-payslip-format.component.html",
  styleUrls: [
    "./create-payslip-format.component.scss",
    "../../../../assets/icon/icofont/css/icofont.scss"
  ]
})
export class CreatePayslipFormatComponent implements OnInit {
  filterQuery: any;
  public rows = [
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" },
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" },
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" }
  ];

  constructor() {}

  ngOnInit() {}
}
