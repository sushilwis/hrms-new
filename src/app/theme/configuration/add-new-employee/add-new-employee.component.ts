import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-new-employee",
  templateUrl: "./add-new-employee.component.html",
  styleUrls: [
    "./add-new-employee.component.scss",
    "../../../../assets/icon/icofont/css/icofont.scss",
    "../../../../../node_modules/sweetalert2/src/sweetalert2.scss"
  ]
})
export class AddNewEmployeeComponent implements OnInit {
  hasBaseDropZoneOver: any;
  uploader: any;
  fileOverBase: any;
  constructor() {}

  ngOnInit() {}
}
