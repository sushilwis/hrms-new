import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-hr-dashboard",
  templateUrl: "./hr-dashboard.component.html",
  styleUrls: ["./hr-dashboard.component.scss"]
})
export class HrDashboardComponent implements OnInit {
  currentDate: any;
  countSec: any;
  countMin: any;
  countYear: any;
  timeContainer: any;
  countDown: any;
  btnSuc: String = null;
  btnDisable: Boolean = true;
  timeStamp: any = null;
  countStartTime: any;
  StartTime: any;
  stopTime: any;

  constructor() {}

  ngOnInit() {
    this.btnSuc = "true";
    let now = moment();
    this.currentDate = now.format("L");
    // localStorage.clear();
    this.countStartTime = 0;
    var stamp = localStorage.getItem("stamp");
    // console.log(stamp);
    if (stamp != null) {
      var current = moment().unix();
      this.countStartTime = current - parseInt(stamp);
      let count = this.countStartTime;

      this.btnDisable = false;
      this.btnSuc = "false";
      var container = document.getElementById("time-container");

      this.countDown = setInterval(function() {
        container.innerHTML = moment()
          .hour(0)
          .minute(0)
          .second(count++)
          .format("HH  :  mm  :  ss");
        // container.innerHTML = time;
      }, 1000);
    }

    this.clock();
    // console.log(this.countStartTime);
  }

  getCheckInTime() {
    this.btnDisable = false;
    this.btnSuc = "false";
    // var container = document.getElementById('time-container');
    // let count = this.countStartTime;

    this.timeStamp = moment().unix();
    this.setToLocalStorage("checkInTime", this.timeStamp);

    // console.log(this.timeStamp);

    // this.countDown = setInterval(function(){
    //   // container.innerHTML = moment().hour(0).minute(0).second(count++).format('HH  :  mm  :  ss');
    //   container.innerHTML = moment().format('H:mm:ss');
    //   // container.innerHTML = time;
    // }, 1000);
  }

  getCheckOutTime() {
    this.btnDisable = true;
    this.btnSuc = "true";
    this.timeStamp = moment().unix();
    this.setToLocalStorage("checkOutTime", this.timeStamp);
  }

  setToLocalStorage(key, val) {
    localStorage.setItem(key, val);
  }

  clock() {
    var timeContainer = document.getElementById("time-container");
    var dateContainer = document.getElementById("date-container");

    dateContainer.innerHTML = moment().format("L");

    setInterval(function() {
      timeContainer.innerHTML = moment().format("H:mm:ss");
    }, 1000);
    // container.innerHTML = moment().format('H:mm:ss');
    // $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
  }
}
