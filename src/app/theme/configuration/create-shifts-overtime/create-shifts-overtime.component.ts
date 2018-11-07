import { Component, OnInit } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
const URL = "https://evening-anchorage-3159.herokuapp.com/api/";

@Component({
  selector: "app-create-shifts-overtime",
  templateUrl: "./create-shifts-overtime.component.html",
  styleUrls: [
    "./create-shifts-overtime.component.scss",
    "../../../../assets/icon/icofont/css/icofont.scss"
  ]
})
export class CreateShiftsOvertimeComponent implements OnInit {
  filterQuery: any;
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  public rows = [
    { shiftcode: "OT1", name: "Overtime1", shifthours: "2:00 hr" },
    { shiftcode: "OT2", name: "Overtime1", shifthours: "60 min" },
    { shiftcode: "ST1", name: "General", shifthours: "8:00 hr" }
  ];

  constructor() {}

  ngOnInit() {}
}
