import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-add-new-leaves",
  templateUrl: "./add-new-leaves.component.html",
  styleUrls: ["./add-new-leaves.component.scss"]
})
export class AddNewLeavesComponent implements OnInit {
  showAllEmployees: boolean;
  showExperience: boolean;
  showJobTitle: boolean;

  constructor() {}

  ngOnInit() {
    this.showAllEmployees = true;
    this.showExperience = false;
    this.showJobTitle = false;
  }

  showEmployeesSec(){
    this.showAllEmployees = true;
    this.showExperience = false;
    this.showJobTitle = false;
  }

  showExperienceSec() {
    this.showAllEmployees = false;
    this.showExperience = true;
    this.showJobTitle = false;
  }

  showJobTitleSec() {
    this.showJobTitle = true;
    this.showAllEmployees = false;
    this.showExperience = false;
  }
}
