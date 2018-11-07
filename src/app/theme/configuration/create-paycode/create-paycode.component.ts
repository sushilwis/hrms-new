import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-paycode",
  templateUrl: "./create-paycode.component.html",
  styleUrls: [
    "./create-paycode.component.scss",
    "../../../../assets/icon/icofont/css/icofont.scss"
  ]
})
export class CreatePaycodeComponent implements OnInit {
  filterQuery: any;
  public rows = [
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" },
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" },
    { paycode: "BSC", description: "Basic", type: "Taxable", taxable: "Yes" }
  ];

  constructor() {}

  ngOnInit() {}
}
