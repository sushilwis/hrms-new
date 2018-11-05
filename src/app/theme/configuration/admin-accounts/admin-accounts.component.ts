import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-admin-accounts",
  templateUrl: "./admin-accounts.component.html",
  styleUrls: [
    "./admin-accounts.component.scss",
    // '../../../../../assets/icon/icofont/css/icofont.scss'
    "../../../../assets/icon/icofont/css/icofont.scss"
  ]
})
export class AdminAccountsComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = "";
  public sortBy = "";
  public sortOrder = "desc";
  // public data: any;
  // public sortOrder = 'desc';
  public rows = [
    // { name: 'Austin', rights: 'Payroll Management',permissions:'Read-only', active: 'checked' },
    // { name: 'Dany', rights: 'Payroll Management ', permissions:'Read-only', active: 'checked'},
    // { name: 'Molly', rights: 'Time Management', permissions:'Read-only', active: 'checked' },
  ];

  constructor(public http: Http) {}

  ngOnInit() {
    //this.getdata();
  }
  getdata() {
    this.http.get(`assets/data/issue-list.json`).subscribe(data => {
      console.log(data);
      this.data = data.json();
    });
  }
}
