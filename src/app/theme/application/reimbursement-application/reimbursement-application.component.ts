import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reimbursement-application",
  templateUrl: "./reimbursement-application.component.html",
  styleUrls: ["./reimbursement-application.component.scss"]
})
export class ReimbursementApplicationComponent implements OnInit {
  displayMonths: any;
  arrows: any;
  model: any;
  date: any;

  constructor() {}

  ngOnInit() {}
}
