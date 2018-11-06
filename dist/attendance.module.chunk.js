webpackJsonp(["attendance.module"],{

/***/ "./src/app/theme/attendance/attendance-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/theme/attendance/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__regularization_regularization_component__ = __webpack_require__("./src/app/theme/attendance/regularization/regularization.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: "regularization",
        component: __WEBPACK_IMPORTED_MODULE_3__regularization_regularization_component__["a" /* RegularizationComponent */]
    },
];
var AttendanceRoutingModule = /** @class */ (function () {
    function AttendanceRoutingModule() {
    }
    AttendanceRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AttendanceRoutingModule);
    return AttendanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/attendance/attendance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceModule", function() { return AttendanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attendance_routing_module__ = __webpack_require__("./src/app/theme/attendance/attendance-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/theme/attendance/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_calendar__ = __webpack_require__("./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_draggable_droppable__ = __webpack_require__("./node_modules/angular-draggable-droppable/esm5/angular-draggable-droppable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__regularization_regularization_component__ = __webpack_require__("./src/app/theme/attendance/regularization/regularization.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import {MwlUtilsCalendarHeaderComponent} from './mwl-utils-calendar-header/mwl-utils-calendar-header.component';




// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormPickerComponent } from './form-picker.component';
// import {FormPickerRoutingModule} from './form-picker-routing.module';
// import {SharedModule} from '../../../../../shared/shared.module';

// import { ColorPickerModule} from 'ngx-color-picker';
var AttendanceModule = /** @class */ (function () {
    function AttendanceModule() {
    }
    AttendanceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__attendance_routing_module__["a" /* AttendanceRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_calendar__["b" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular_draggable_droppable__["a" /* DragAndDropModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_color_picker__["a" /* ColorPickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__regularization_regularization_component__["a" /* RegularizationComponent */]]
        })
    ], AttendanceModule);
    return AttendanceModule;
}());



/***/ }),

/***/ "./src/app/theme/attendance/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Attendance\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">          \r\n            \r\n            <a class=\"btn btn-light float-right btn-sm header-button table-action-btn\" [routerLink]=\"['/attendance/regularization']\">\r\n              <i></i>\r\n              Regularization\r\n            </a>\r\n\r\n            <a class=\"btn btn-sm bg-dark float-right header-button text-white\" [routerLink]=\"['/attendance']\">\r\n              <i></i>\r\n              Attendance\r\n            </a>\r\n\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-sm-5 body-top-margin\">\r\n          <button class=\"btn btn-success btn-sm ml-1 header-button\">\r\n              <i></i>\r\n              Check-in\r\n          </button>\r\n          <button class=\"btn btn-light btn-sm ml-1 header-button\">\r\n              <i></i>\r\n              check-out\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-7 body-top-margin\">  \r\n          <div class=\"row\">\r\n            <div class=\"col-sm-2\"><p>00:00 Hrs</p></div>\r\n            <div class=\"col-sm-8 text-center\">\r\n              <div style=\"background:#fff; border-radius: 10px; width: 100%; height: 26px; display: flex; align-items: center; justify-items: center; justify-content: center;\">\r\n                <span style=\"margin:0px; padding:0px; background: rgb(183, 222, 253); width: 70%; height: 26px; border-left: 2px solid rgb(77, 171, 245); border-right: 2px solid rgb(77, 171, 245); \">09:00 a.m - 19:30 p.m</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2 text-right\"><p>23:59 Hrs</p></div>\r\n          </div>      \r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <div class=\"m-1\">         \r\n                  <!-- <div class=\"card-header\"> -->\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"btn-group pull-left color-heading\">\r\n                            <a mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"viewDateChange.next(viewDate)\">\r\n                              <i class=\"fa fa-chevron-left fa-lg\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                            <!-- <button class=\"btn btn-default btn-outline btn-sm\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"viewDateChange.next(viewDate)\"><i class=\"feather icon-arrow-right\"></i></button> -->\r\n                            <!-- <button class=\"btn btn-primary btn-outline btn-sm m-l-5\" mwlCalendarToday [(viewDate)]=\"viewDate\" (viewDateChange)=\"viewDateChange.next(viewDate)\"> Today </button> -->\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-4 text-center color-heading\">\r\n                          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle') : locale }}</h3>\r\n                        </div>\r\n                        <div class=\"col-md-4 color-heading\">\r\n                            <a class=\"pull-right\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"viewDateChange.next(viewDate)\">\r\n                              <i class=\"fa fa-chevron-right fa-lg\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                          <!-- <div class=\"btn-group pull-right\">\r\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"viewChange.emit('month')\" [class.active]=\"view === 'month'\">Month</button>\r\n                            <button class=\"btn btn-default btn-sm\" (click)=\"viewChange.emit('week')\" [class.active]=\"view === 'week'\">Week</button>\r\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"viewChange.emit('day')\" [class.active]=\"view === 'day'\">Day</button>\r\n                          </div> -->\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                  <!-- </div> -->\r\n                  <div class=\"card-block\">\r\n\r\n\r\n                    <ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\r\n                      <div class=\"cal-cell-top\">\r\n                        <!-- <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span> -->\r\n                        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\r\n                        <!-- <span class=\"cal-day-number\">{{ day.date }}</span> -->\r\n                      </div>\r\n\r\n                      <small style=\"margin: 5px\" *ngIf=\"(day.date | calendarDate:'monthViewDayNumber':locale) == 4\">\r\n                        <div class=\"bg-success border border-success rounded\">\r\n                            <p class=\"m-0 pl-1 text-white\">P (9:00-18:02)</p>\r\n                        </div>\r\n                      </small>\r\n\r\n                      <small style=\"margin: 5px\" *ngIf=\"(day.date | calendarDate:'monthViewDayNumber':locale) == 21\">\r\n                        <div class=\"bg-danger border border-danger rounded\">\r\n                            <p class=\"m-0 pl-1 text-white\">A (9:00-18:02)</p>\r\n                        </div>\r\n                      </small>\r\n                    </ng-template>\r\n\r\n\r\n                    <div [ngSwitch]=\"view\">\r\n                      <mwl-calendar-month-view\r\n                        [events]=\"events\"\r\n                        *ngSwitchCase=\"'month'\"\r\n                        [viewDate]=\"viewDate\"\r\n                        [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                        [refresh]=\"refresh\"\r\n                        [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                        [cellTemplate]=\"customCellTemplate\"\r\n                        (dayClicked)=\"dayClicked($event.day)\"\r\n                        (eventTimesChanged)=\"eventDropped($event)\">\r\n                      </mwl-calendar-month-view>\r\n\r\n                      <mwl-calendar-week-view\r\n                        *ngSwitchCase=\"'week'\"\r\n                        [viewDate]=\"viewDate\"\r\n                        [refresh]=\"refresh\"\r\n                        (eventTimesChanged)=\"eventDropped($event)\">\r\n                      </mwl-calendar-week-view>\r\n                      \r\n                      <mwl-calendar-day-view\r\n                        *ngSwitchCase=\"'day'\"\r\n                        [viewDate]=\"viewDate\"\r\n                        [refresh]=\"refresh\"\r\n                        (eventTimesChanged)=\"eventDropped($event)\">\r\n                      </mwl-calendar-day-view>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n                \r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/attendance/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".color-heading {\n  color: #2196F3; }\n\n.ng-tns-c6-29 > div.cal-open-day-events {\n  display: none; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #fff !important; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.2em !important;\n  background-color: #015df7 !important;\n  border-radius: 50% !important;\n  color: white !important;\n  display: inline-block !important;\n  width: 28px !important;\n  text-align: center !important;\n  height: 28px !important; }\n\n.cal-open-day-events {\n  display: none !important; }\n"

/***/ }),

/***/ "./src/app/theme/attendance/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomDateFormatter */
/* unused harmony export colors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_calendar__ = __webpack_require__("./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomDateFormatter = /** @class */ (function (_super) {
    __extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
    };
    return CustomDateFormatter;
}(__WEBPACK_IMPORTED_MODULE_1_angular_calendar__["a" /* CalendarDateFormatter */]));

var colors = {
    red: {
        primary: '#e74a25',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#00bbd9',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    },
    green: {
        primary: '#2ecc71',
        secondary: '#b1fdcf'
    }
};
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // events: any;
        this.items = [];
        this.view = 'month';
        this.viewDate = new Date();
        this.isChecked = true;
        this.colorOption = ['red', 'blue', 'yellow', 'green'];
        // public actions: CalendarEventAction[] = [
        //   {
        //     label: '<i class="fa fa-fw fa-times"></i>',
        //     onClick: ({ event }: { event: CalendarEvent }): void => {
        //       this.events = this.events.filter(iEvent => iEvent !== event);
        //     }
        //   }
        // ];
        // externalEvents: CalendarEvent[] = 
        // [
        //   {
        //     title: 'My Event One',
        //     color: colors.yellow,
        //     start: new Date(),
        //     end: new Date(),
        //     draggable: true,
        //     // actions: this.actions
        //   },
        //   {
        //     title: 'My Event Two',
        //     color: colors.blue,
        //     start: new Date(),
        //     end: new Date(),
        //     draggable: true,
        //     // actions: this.actions
        //   },
        //   {
        //     title: 'My Event Three',
        //     color: colors.blue,
        //     start: new Date(),
        //     end: new Date(),
        //     draggable: true,
        //     // actions: this.actions
        //   },
        //   {
        //     title: 'My Event Four',
        //     color: colors.blue,
        //     start: new Date(),
        //     end: new Date(),
        //     draggable: true,
        //     // actions: this.actions
        //   }
        // ];
        // events: CalendarEvent[] = [
        //   {
        //     start: subDays(startOfDay(new Date()), 1),
        //     end: addDays(new Date(), 1),
        //     title: 'A 3 day event',
        //     color: colors.red
        //     // actions: this.actions
        //   },
        //   {
        //     start: startOfDay(new Date()),
        //     title: 'An event with no end date',
        //     color: colors.yellow,
        //     // actions: this.actions
        //   },
        //   {
        //     start: subDays(endOfMonth(new Date()), 3),
        //     end: addDays(endOfMonth(new Date()), 3),
        //     title: 'A long event that spans 2 months',
        //     color: colors.blue
        //   },
        //   {
        //     start: addHours(startOfDay(new Date()), 2),
        //     end: new Date(),
        //     title: 'A draggable and resizable event',
        //     color: colors.green,
        //     // actions: this.actions,
        //     resizable: {
        //       beforeStart: true,
        //       afterEnd: true
        //     },
        //     draggable: true
        //   }
        // ];
        this.activeDayIsOpen = true;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    // eventDropped({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    //   const externalIndex: number = this.externalEvents.indexOf(event);
    //   if (externalIndex > -1) {
    //     if (!this.isChecked) {
    //       this.externalEvents.splice(externalIndex, 1);
    //     }
    //     console.log(event);
    //     // this.events.push(event);
    //   }
    //   event.start = newStart;
    //   if (newEnd) {
    //     event.end = newEnd;
    //   }
    //   this.viewDate = newStart;
    //   this.activeDayIsOpen = true;
    // }
    HomeComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
                console.log(this.viewDate);
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    // onAdd(event) {
    //   const color = this.colorOption[Math.floor(Math.random() * this.colorOption.length)];
    //   this.externalEvents.push({
    //     title: event.value,
    //     start: startOfDay(new Date()),
    //     end: endOfDay(new Date()),
    //     color: colors[color],
    //     draggable: true,
    //     // actions: this.actions
    //   });
    //   this.refresh.next();
    // }
    HomeComponent.prototype.setEvent = function () {
        this.isChecked = !this.isChecked;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/theme/attendance/home/home.component.html"),
            styles: [__webpack_require__("./src/app/theme/attendance/home/home.component.scss"), __webpack_require__("./node_modules/angular-calendar/css/angular-calendar.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1_angular_calendar__["a" /* CalendarDateFormatter */],
                    useClass: CustomDateFormatter
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/theme/attendance/regularization/regularization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/attendance']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Regularization\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">          \r\n            <a class=\"btn btn-sm bg-dark float-right header-button text-white\">\r\n              <i></i>\r\n              Regularization\r\n            </a>\r\n\r\n            <a class=\"btn btn-light float-right btn-sm header-button table-action-btn\" [routerLink]=\"['/attendance']\">\r\n              <i></i>\r\n              Attendance\r\n            </a>\r\n\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 body-top-margin\">\r\n\r\n\r\n          <app-card>\r\n            <div class=\"m-3\">  \r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-sm-7\">\r\n\r\n                  <div class=\"row mb-3\">\r\n                    <div class=\"col-md-4\">\r\n                      <p>Employee*</p>\r\n                    </div>\r\n                    <div class=\"col-md-8 search-icon\">\r\n                      <input type=\"text\" class=\"search-control\">\r\n                      <i class=\"fa fa-search\"></i>\r\n                    </div>\r\n                  </div>                   \r\n                <!-- </div> -->\r\n\r\n                <!-- <div class=\"col-sm-6\"> -->\r\n                    <div class=\"row mb-3\">\r\n                      <div class=\"col-md-4\">\r\n                        <p>Type</p>\r\n                      </div>\r\n                      <div class=\"col-md-8\">\r\n                          <select class=\"form-control\">\r\n                              <option value=\"\">--Select--</option>\r\n                              <option>Check-in</option>\r\n                              <option>Check-out</option>\r\n                              <option>Both</option>\r\n                          </select> \r\n                      </div>\r\n                    </div>                   \r\n                <!-- </div> -->\r\n\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-sm-4\">\r\n                        <p>Date*</p>\r\n                      </div>\r\n                      <div class=\"col-sm-8\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-sm-6\">\r\n                                <!-- <form class=\"form-inline\" action=\"javascript:\"> -->\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"input-group\">\r\n                                      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"modelPopup\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                      <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" (click)=\"d.toggle()\">\r\n                                          <i class=\"icofont icofont-ui-calendar\"></i>\r\n                                        </span>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                <!-- </form> -->\r\n                              </div>\r\n                              <div class=\"col-sm-6\">\r\n                                <!-- <form class=\"form-inline\" action=\"javascript:\"> -->\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"input-group\">\r\n                                      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"modelPopup\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                      <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" (click)=\"d.toggle()\">\r\n                                          <i class=\"icofont icofont-ui-calendar\"></i>\r\n                                        </span>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                <!-- </form> -->\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                </div> \r\n\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-sm-4\">\r\n                        <!-- <p>Time*</p> -->\r\n                      </div>\r\n                      <div class=\"col-sm-8\">\r\n                          <!-- <div class=\"row\">\r\n                              <div class=\"col-sm-6\">\r\n                                  <input type=\"text\" class=\"form-control\"> \r\n                              </div>\r\n                              <div class=\"col-sm-6\">\r\n                                  <input type=\"text\" class=\"form-control\"> \r\n                              </div>\r\n                          </div> -->\r\n                      </div>\r\n                </div>\r\n\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"offset-sm-4\"></div>\r\n                    <div class=\"col-sm-8\">\r\n                        <button class=\"btn btn-success float-right btn-sm header-button\">\r\n                          Regularize\r\n                        </button>  \r\n                    </div>\r\n                </div>\r\n\r\n                </div> \r\n\r\n                <div class=\"col-sm-6\"></div>\r\n              </div>\r\n\r\n            </div>\r\n          </app-card>\r\n\r\n\r\n        </div>                \r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/attendance/regularization/regularization.component.scss":
/***/ (function(module, exports) {

module.exports = ".search-icon {\n  position: relative; }\n\n.search-icon i {\n  position: absolute;\n  top: 10px;\n  left: 28px; }\n\n.search-control {\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap; }\n\n.ng-untouched.ng-pristine.ng-valid {\n  width: 60% !important; }\n"

/***/ }),

/***/ "./src/app/theme/attendance/regularization/regularization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cmyk */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var now = new Date();
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());

var RegularizationComponent = /** @class */ (function () {
    function RegularizationComponent(parserFormatter, calendar, cpService) {
        var _this = this;
        this.parserFormatter = parserFormatter;
        this.calendar = calendar;
        this.cpService = cpService;
        this.displayMonths = 3;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        this.disabled = true;
        this.toggle = false;
        this.color = '#2889e9';
        this.color2 = 'hsla(300,82%,52%)';
        this.color3 = '#fff500';
        this.color4 = 'rgb(236,64,64)';
        this.color5 = 'rgba(45,208,45,1)';
        this.color13 = 'rgba(0, 255, 0, 0.5)';
        this.color14 = 'rgb(0, 255, 255)';
        this.color15 = '#a51ad633';
        this.basicColor = '#4099ff';
        this.showColorCode = '#db968d';
        this.showColorCodeHSAL = 'hsl(149,27%,65%)';
        this.showColorCodeRGBA = 'rgb(221,14,190)';
        this.changeMeColor = '#523698';
        this.arrayColors = {};
        this.selectedColor = 'color';
        this.modelDisabled = {
            year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
        };
        this.cmyk = new Cmyk(0, 0, 0, 0);
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        this.arrayColors['color'] = '#2883e9';
        this.arrayColors['color2'] = '#e920e9';
        this.arrayColors['color3'] = 'rgb(255,245,0)';
        this.arrayColors['color4'] = 'rgb(236,64,64)';
        this.arrayColors['color5'] = 'rgba(45,208,45,1)';
        var windowWidth = window.innerWidth;
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.displayMonths = 2;
            this.navigation = 'select';
        }
        else if (windowWidth < 768) {
            this.displayMonths = 1;
            this.navigation = 'select';
        }
        else {
            this.displayMonths = 3;
            this.navigation = 'none';
        }
    }
    RegularizationComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    RegularizationComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    RegularizationComponent.prototype.ngOnInit = function () {
    };
    RegularizationComponent.prototype.selectToday = function () {
        this.modelPopup = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    RegularizationComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    RegularizationComponent.prototype.onChangeColor = function (color) {
        return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
    };
    RegularizationComponent.prototype.rgbaToCmyk = function (rgba) {
        var cmyk = new Cmyk(0, 0, 0, 0);
        var k;
        k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        cmyk.c = (1 - rgba.r - k) / (1 - k);
        cmyk.m = (1 - rgba.g - k) / (1 - k);
        cmyk.y = (1 - rgba.b - k) / (1 - k);
        cmyk.k = k;
        return cmyk;
    };
    RegularizationComponent.prototype.onChangeColorHex8 = function (color) {
        return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Date)
    ], RegularizationComponent.prototype, "testRangeDate", void 0);
    RegularizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regularization',
            template: __webpack_require__("./src/app/theme/attendance/regularization/regularization.component.html"),
            styles: [__webpack_require__("./src/app/theme/attendance/regularization/regularization.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCalendar */], __WEBPACK_IMPORTED_MODULE_2_ngx_color_picker__["b" /* ColorPickerService */]])
    ], RegularizationComponent);
    return RegularizationComponent;
}());



/***/ })

});
//# sourceMappingURL=attendance.module.chunk.js.map