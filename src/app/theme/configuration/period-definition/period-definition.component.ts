import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-period-definition",
  templateUrl: "./period-definition.component.html",
  styleUrls: [
    "./period-definition.component.scss",
    "../../../../assets/icon/icofont/css/icofont.scss"
  ]
})
export class PeriodDefinitionComponent implements OnInit {
  filterQuery: any;
  public rows = [
    {
      period: "01",
      startdate: "01/01/2004",
      enddate: "31/01/2004",
      workdays: "24",
      hours: "12",
      fixeddays: "04"
    },
    {
      period: "01",
      startdate: "01/01/2005",
      enddate: "31/01/2004",
      workdays: "25",
      hours: "12",
      fixeddays: "04"
    },
    {
      period: "01",
      startdate: "01/01/2006",
      enddate: "31/01/2004",
      workdays: "26",
      hours: "12",
      fixeddays: "04"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
