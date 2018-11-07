import { Component, OnInit } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
const URL = "https://evening-anchorage-3159.herokuapp.com/api/";

@Component({
  selector: "app-company-info",
  templateUrl: "./company-info.component.html",
  styleUrls: ["./company-info.component.scss"]
})
export class CompanyInfoComponent implements OnInit {
  hasBaseDropZoneOver: any;
  fileOverBase: any;

  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  constructor() {}

  ngOnInit() {}
}
