import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-predefined-paycode",
  templateUrl: "./predefined-paycode.component.html",
  styleUrls: [
    "./predefined-paycode.component.scss",
    "../../../../assets/icon/icofont/css/icofont.scss"
  ]
})
export class PredefinedPaycodeComponent implements OnInit {
  filterQuery: any;
  public rows = [
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" },
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" },
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" }
  ];

  constructor() {}

  ngOnInit() {}
}
