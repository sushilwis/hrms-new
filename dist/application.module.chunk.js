webpackJsonp(["application.module"],{

/***/ "./src/app/theme/application/application-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/theme/application/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sick_leave_sick_leave_component__ = __webpack_require__("./src/app/theme/application/sick-leave/sick-leave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_leave_personal_leave_component__ = __webpack_require__("./src/app/theme/application/personal-leave/personal-leave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requests_requests_component__ = __webpack_require__("./src/app/theme/application/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leave_application_leave_application_component__ = __webpack_require__("./src/app/theme/application/leave-application/leave-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__overtime_application_overtime_application_component__ = __webpack_require__("./src/app/theme/application/overtime-application/overtime-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__outdoor_application_outdoor_application_component__ = __webpack_require__("./src/app/theme/application/outdoor-application/outdoor-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__work_from_home_application_work_from_home_application_component__ = __webpack_require__("./src/app/theme/application/work-from-home-application/work-from-home-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reimbursement_application_reimbursement_application_component__ = __webpack_require__("./src/app/theme/application/reimbursement-application/reimbursement-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__change_shift_change_shift_component__ = __webpack_require__("./src/app/theme/application/change-shift/change-shift.component.ts");
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
        path: "sick-leave",
        component: __WEBPACK_IMPORTED_MODULE_3__sick_leave_sick_leave_component__["a" /* SickLeaveComponent */]
    },
    {
        path: "personal-leave",
        component: __WEBPACK_IMPORTED_MODULE_4__personal_leave_personal_leave_component__["a" /* PersonalLeaveComponent */]
    },
    {
        path: "requests",
        component: __WEBPACK_IMPORTED_MODULE_5__requests_requests_component__["a" /* RequestsComponent */]
    },
    {
        path: "leave-application",
        component: __WEBPACK_IMPORTED_MODULE_6__leave_application_leave_application_component__["a" /* LeaveApplicationComponent */]
    },
    {
        path: "overtime-application",
        component: __WEBPACK_IMPORTED_MODULE_7__overtime_application_overtime_application_component__["a" /* OvertimeApplicationComponent */]
    },
    {
        path: "outdoor-application",
        component: __WEBPACK_IMPORTED_MODULE_8__outdoor_application_outdoor_application_component__["a" /* OutdoorApplicationComponent */]
    },
    {
        path: "work-from-home-application",
        component: __WEBPACK_IMPORTED_MODULE_9__work_from_home_application_work_from_home_application_component__["a" /* WorkFromHomeApplicationComponent */]
    },
    {
        path: "reimbursement-application",
        component: __WEBPACK_IMPORTED_MODULE_10__reimbursement_application_reimbursement_application_component__["a" /* ReimbursementApplicationComponent */]
    },
    {
        path: "change-shift",
        component: __WEBPACK_IMPORTED_MODULE_11__change_shift_change_shift_component__["a" /* ChangeShiftComponent */]
    },
];
var ApplicationRoutingModule = /** @class */ (function () {
    function ApplicationRoutingModule() {
    }
    ApplicationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ApplicationRoutingModule);
    return ApplicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/application/application.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationModule", function() { return ApplicationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_calendar__ = __webpack_require__("./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__application_routing_module__ = __webpack_require__("./src/app/theme/application/application-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/theme/application/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sick_leave_sick_leave_component__ = __webpack_require__("./src/app/theme/application/sick-leave/sick-leave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__requests_requests_component__ = __webpack_require__("./src/app/theme/application/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__leave_application_leave_application_component__ = __webpack_require__("./src/app/theme/application/leave-application/leave-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__overtime_application_overtime_application_component__ = __webpack_require__("./src/app/theme/application/overtime-application/overtime-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__outdoor_application_outdoor_application_component__ = __webpack_require__("./src/app/theme/application/outdoor-application/outdoor-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__work_from_home_application_work_from_home_application_component__ = __webpack_require__("./src/app/theme/application/work-from-home-application/work-from-home-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reimbursement_application_reimbursement_application_component__ = __webpack_require__("./src/app/theme/application/reimbursement-application/reimbursement-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__change_shift_change_shift_component__ = __webpack_require__("./src/app/theme/application/change-shift/change-shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__personal_leave_personal_leave_component__ = __webpack_require__("./src/app/theme/application/personal-leave/personal-leave.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
var ApplicationModule = /** @class */ (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__application_routing_module__["a" /* ApplicationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular_calendar__["b" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_color_picker__["a" /* ColorPickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__sick_leave_sick_leave_component__["a" /* SickLeaveComponent */], __WEBPACK_IMPORTED_MODULE_11__requests_requests_component__["a" /* RequestsComponent */], __WEBPACK_IMPORTED_MODULE_12__leave_application_leave_application_component__["a" /* LeaveApplicationComponent */], __WEBPACK_IMPORTED_MODULE_13__overtime_application_overtime_application_component__["a" /* OvertimeApplicationComponent */], __WEBPACK_IMPORTED_MODULE_14__outdoor_application_outdoor_application_component__["a" /* OutdoorApplicationComponent */], __WEBPACK_IMPORTED_MODULE_15__work_from_home_application_work_from_home_application_component__["a" /* WorkFromHomeApplicationComponent */], __WEBPACK_IMPORTED_MODULE_16__reimbursement_application_reimbursement_application_component__["a" /* ReimbursementApplicationComponent */], __WEBPACK_IMPORTED_MODULE_17__change_shift_change_shift_component__["a" /* ChangeShiftComponent */], __WEBPACK_IMPORTED_MODULE_18__personal_leave_personal_leave_component__["a" /* PersonalLeaveComponent */]]
        })
    ], ApplicationModule);
    return ApplicationModule;
}());



/***/ }),

/***/ "./src/app/theme/application/change-shift/change-shift.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Change Shift\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success float-right btn-sm header-button\" [routerLink]=\"['/application/home']\">\r\n              <i></i>\r\n              Apply\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-sm-12 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"row\">\r\n\r\n\r\n              <div class=\"col-sm-7\">\r\n                  <div class=\"m-4\">\r\n\r\n                      <div class=\"row mb-3\">\r\n                        <div class=\"col-sm-3\">\r\n                          <p>Approver*</p>\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <select class=\"form-control\">\r\n                                <option value=\"\">--Select--</option>\r\n                                <option>Option-1</option>\r\n                            </select> \r\n                        </div>\r\n                      </div>\r\n          \r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Date*</p>\r\n                          </div>\r\n                          <div class=\"col-sm-9\">\r\n                              <div class=\"row\">\r\n                                  <!-- <div class=\"col-sm-2\">\r\n                                    <p>Date</p>\r\n                                  </div> -->\r\n                                  <div class=\"col-sm-6\">\r\n                                      <input type=\"date\" class=\"form-control\"> \r\n                                  </div>\r\n                                  <div class=\"col-sm-6\">\r\n                                      <input type=\"date\" class=\"form-control\"> \r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n          \r\n                      <!-- <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\"></div>\r\n                          <div class=\"col-sm-9\">\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-sm-2\">\r\n                                    <p>Time</p>\r\n                                  </div>\r\n                                  <div class=\"col-sm-5\">\r\n                                      <input type=\"text\" class=\"form-control\"> \r\n                                  </div>\r\n                                  <div class=\"col-sm-5\">\r\n                                      <input type=\"text\" class=\"form-control\"> \r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div> -->\r\n          \r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Shift Timing*</p>\r\n                          </div>\r\n                          <div class=\"col-sm-9\">\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-sm-2\">\r\n                                    <p>Old</p>\r\n                                  </div>\r\n                                  <div class=\"col-sm-5\">\r\n                                      <input type=\"text\" class=\"form-control\"> \r\n                                  </div>\r\n                                  <div class=\"col-sm-5\">\r\n                                      <input type=\"text\" class=\"form-control\"> \r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n          \r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\"></div>\r\n                          <div class=\"col-sm-9\">\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-sm-2\">\r\n                                    <p>New</p>\r\n                                  </div>\r\n                                  <div class=\"col-sm-5\">\r\n                                      <input type=\"text\" class=\"form-control\"> \r\n                                  </div>\r\n                                  <div class=\"col-sm-5\">\r\n                                      <input type=\"text\" class=\"form-control\"> \r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n          \r\n                      <!-- <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Time*</p>\r\n                          </div>\r\n                          <div class=\"col-sm-9\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-6\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"From\"> \r\n                              </div>\r\n                              <div class=\"col-sm-6\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"To\"> \r\n                              </div>\r\n                            </div>                                      \r\n                          </div>\r\n                      </div> -->\r\n          \r\n                      <!-- <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Amount*</p>\r\n                          </div>\r\n                          <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control\">                         \r\n                          </div>\r\n                      </div> -->\r\n          \r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Remark</p>\r\n                          </div>\r\n                          <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control\">                         \r\n                          </div>\r\n                      </div>\r\n          \r\n                      <!-- <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Substitute</p>\r\n                          </div>\r\n                          <div class=\"col-sm-9\">\r\n                              <select class=\"form-control\">\r\n                                  <option value=\"\">--Select--</option>\r\n                                  <option>Option-1</option>\r\n                              </select>                                   \r\n                          </div>\r\n                      </div> -->\r\n          \r\n                      <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Attachments*</p>\r\n                          </div>\r\n                          <div class=\"col-sm-9\">\r\n                            <div class=\"upload-btn-wrapper\">\r\n                                <button class=\" btn btn-primary upload-button\">Choose File</button>\r\n                                <input type=\"file\" name=\"myfile\" />\r\n                            </div>                                   \r\n                          </div>\r\n                      </div>\r\n          \r\n                      </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"col-sm-5\"></div>\r\n\r\n\r\n            </div>            \r\n          </app-card>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-sm-5 body-top-margin\">\r\n          <app-card>\r\n          \r\n          </app-card>\r\n        </div> -->\r\n                \r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/application/change-shift/change-shift.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/change-shift/change-shift.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeShiftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangeShiftComponent = /** @class */ (function () {
    function ChangeShiftComponent() {
    }
    ChangeShiftComponent.prototype.ngOnInit = function () {
    };
    ChangeShiftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-shift',
            template: __webpack_require__("./src/app/theme/application/change-shift/change-shift.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/change-shift/change-shift.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangeShiftComponent);
    return ChangeShiftComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Application\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">              \r\n            <a class=\"btn bg-dark float-right btn-sm header-button text-white\" [routerLink]=\"['/application/home']\">\r\n                <i></i>\r\n                Apply\r\n            </a>\r\n            <a class=\"btn btn-light float-right btn-sm header-button table-action-btn\" [routerLink]=\"['/application/requests']\">\r\n              <i></i>\r\n              Request\r\n            </a>\r\n            \r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n<div class=\"container body-pad\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 body-top-margin\">\r\n      \r\n        <div class=\"row m-b-30\">\r\n          <div class=\"col-md-12\">\r\n            \r\n            <div class=\"md-tabs\" >\r\n              <ngb-tabset>\r\n\r\n                <ngb-tab title=\"Leave\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                      \r\n                        <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n                          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\r\n                  \r\n                          <ngx-datatable-column name=\"Leave Type\" [width]=\"120\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              Sick Leave\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n\r\n                          <ngx-datatable-column name=\"Start Date\" [width]=\"120\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              01/02/2018\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n\r\n                          <ngx-datatable-column name=\"End Date\" [width]=\"120\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              10/02/2018\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n\r\n                          <ngx-datatable-column name=\"Unit\" [width]=\"110\"></ngx-datatable-column>\r\n                          <ngx-datatable-column name=\"Status\" [width]=\"110\"></ngx-datatable-column>\r\n\r\n                          <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              <button type=\"button\" class=\"btn btn-danger btn-sm datatable-button\" style=\"margin-left: 0px !important;\">Withdraw</button>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n\r\n                          <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              <a [routerLink]=\"['/application/sick-leave']\">\r\n                                <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn\" style=\"margin-left: 0px !important;\">View</button>\r\n                              </a>  \r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n                        </ngx-datatable>\r\n\r\n                     \r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n\r\n                <ngb-tab title=\"Overtime\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                      \r\n\r\n                        <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n                        [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [rows]=\"rows1\">\r\n                \r\n                        <ngx-datatable-column name=\"Overtime\" [width]=\"120\">\r\n                          <!-- <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            Sick Leave\r\n                          </ng-template> -->\r\n                        </ngx-datatable-column>\r\n\r\n                        <ngx-datatable-column name=\"Date\" [width]=\"120\">\r\n                            <!-- <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              Sick Leave\r\n                            </ng-template> -->\r\n                        </ngx-datatable-column>\r\n\r\n                        <ngx-datatable-column name=\"Start Time\" [width]=\"120\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            4:00 pm\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n\r\n                        <ngx-datatable-column name=\"End Time\" [width]=\"120\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            6:00 pm\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n\r\n                        <!-- <ngx-datatable-column name=\"Unit\"></ngx-datatable-column> -->\r\n                        <ngx-datatable-column name=\"Status\" [width]=\"120\"></ngx-datatable-column>\r\n\r\n                        <ngx-datatable-column [width]=\"100\" [sortable]=\"false\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-sm datatable-button\" style=\"margin-left: 0px !important;\">Withdraw</button>\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n\r\n                        <ngx-datatable-column [width]=\"100\" [sortable]=\"false\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn\" style=\"margin-left: 0px !important;\">View</button>\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n\r\n                        </ngx-datatable>\r\n\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n\r\n                <ngb-tab title=\"Outdoor\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                    \r\n                        <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n                          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [rows]=\"rows2\">\r\n                  \r\n                          <ngx-datatable-column name=\"Outdoor\" [width]=\"70\">\r\n                            <!-- <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              Sick Leave\r\n                            </ng-template> -->\r\n                          </ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column name=\"Start Date\" [width]=\"100\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              01/02/2018\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column name=\"End Date\" [width]=\"100\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              05/02/2018\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n\r\n                          <ngx-datatable-column name=\"Start Time\" [width]=\"100\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                4:00 pm\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n    \r\n                          <ngx-datatable-column name=\"End Time\" [width]=\"100\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                6:00 pm\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n  \r\n                          <!-- <ngx-datatable-column name=\"Unit\"></ngx-datatable-column> -->\r\n                          <ngx-datatable-column name=\"Status\" [width]=\"100\"></ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column [width]=\"110\" [sortable]=\"false\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              <button type=\"button\" class=\"btn btn-danger btn-sm datatable-button\">Withdraw</button>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column [width]=\"110\" [sortable]=\"false\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn\">View</button>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>  \r\n                        </ngx-datatable>\r\n\r\n                   \r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n\r\n                <ngb-tab title=\"Work from Home\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                \r\n                          <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n                          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [rows]=\"rows3\">\r\n                  \r\n                          <ngx-datatable-column name=\"WFH\" [width]=\"70\">\r\n                            <!-- <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              Sick Leave\r\n                            </ng-template> -->\r\n                          </ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column name=\"Start Date\" [width]=\"100\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              01/02/2018\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column name=\"End Date\" [width]=\"100\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              05/02/2018\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n\r\n                          <ngx-datatable-column name=\"Start Time\" [width]=\"90\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                4:00 pm\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n    \r\n                          <ngx-datatable-column name=\"End Time\" [width]=\"90\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                6:00 pm\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n  \r\n                          <!-- <ngx-datatable-column name=\"Unit\"></ngx-datatable-column> -->\r\n                          <ngx-datatable-column name=\"Status\" [width]=\"100\"></ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column [width]=\"110\" [sortable]=\"false\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              <button type=\"button\" class=\"btn btn-danger btn-sm datatable-button\">Withdraw</button>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n  \r\n                          <ngx-datatable-column [width]=\"110\" [sortable]=\"false\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn\">View</button>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>  \r\n\r\n                        </ngx-datatable>\r\n                \r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n\r\n                <ngb-tab title=\"Reimbursement\" >\r\n                    <ng-template ngbTabContent>\r\n                      <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                      \r\n\r\n                            <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n                            [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows4\">\r\n                    \r\n                            <ngx-datatable-column name=\"Claim Type\" [width]=\"120\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                Travel\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column name=\"Start Date\" [width]=\"120\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                01/02/2018\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column name=\"End Date\" [width]=\"120\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                05/02/2018\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n  \r\n                            <!-- <ngx-datatable-column name=\"Start Time\">\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                  4:00 pm\r\n                                </ng-template>\r\n                            </ngx-datatable-column>\r\n      \r\n                            <ngx-datatable-column name=\"End Time\">\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                  6:00 pm\r\n                                </ng-template>\r\n                            </ngx-datatable-column> -->\r\n    \r\n                            <!-- <ngx-datatable-column name=\"Unit\"></ngx-datatable-column> -->\r\n                            <ngx-datatable-column name=\"Amount\" [width]=\"100\"></ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Status\" [width]=\"100\"></ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column [width]=\"100\" [sortable]=\"false\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm datatable-button\" style=\"margin-left: 0px !important;\">Withdraw</button>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column [width]=\"100\" [sortable]=\"false\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn\" style=\"margin-left: 0px !important;\">View</button>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>  \r\n  \r\n                          </ngx-datatable>\r\n\r\n                 \r\n                      </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n\r\n                <ngb-tab title=\"Change Shift\">\r\n                    <ng-template ngbTabContent>\r\n                      <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                            <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n                            [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows5\">\r\n                    \r\n                            <ngx-datatable-column name=\"Old Date\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                01/02/2018 - 10/02/2018\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column name=\"Old Shift\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                4:00pm - 6:00pm\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column name=\"New Shift\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                4:00pm - 6:00pm\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n  \r\n                            <ngx-datatable-column name=\"Status\" [width]=\"100\"></ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column [width]=\"100\" [sortable]=\"false\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                <button type=\"button\" class=\"btn btn-danger btn-sm datatable-button\">Withdraw</button>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n    \r\n                            <ngx-datatable-column [width]=\"100\" [sortable]=\"false\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn\">View</button>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>  \r\n  \r\n                          </ngx-datatable>\r\n                   \r\n                      </div>\r\n                    </ng-template>\r\n                </ngb-tab>  \r\n\r\n              </ngb-tabset>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"position:absolute; top: 0px; right: 16px;\">\r\n              <div ngbDropdown class=\"dropdown-primary\">\r\n\r\n                  <button ngbDropdownToggle class=\"btn btn-primary ripple light\" type=\"button\">Apply <i class=\"fas fa-caret-down\"></i></button>\r\n\r\n                  <div ngbDropdownMenu class=\"float-left\" style=\"left: -140px !important;\">\r\n                    <a class=\"dropdown-item ripple light\" [routerLink]=\"['/application/leave-application']\">Leave Application</a>\r\n                    <a class=\"dropdown-item ripple light\" [routerLink]=\"['/application/overtime-application']\">Overtime Application</a>\r\n                    <a class=\"dropdown-item ripple light\" [routerLink]=\"['/application/outdoor-application']\">Outdoor Application</a>\r\n                    <!-- <div class=\"dropdown-divider\"></div> -->\r\n                    <a class=\"dropdown-item ripple light\" [routerLink]=\"['/application/work-from-home-application']\">Work form Home Application</a>\r\n                    <a class=\"dropdown-item ripple light\" [routerLink]=\"['/application/reimbursement-application']\">Reimbursement Application</a>\r\n                    <a class=\"dropdown-item ripple light\" [routerLink]=\"['/application/change-shift']\">Change Shift</a>\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n\r\n        </div>\r\n    \r\n    </div>  \r\n  </div>\r\n</div>  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/application/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.rows = [
            { unit: '2 Days', status: 'pending' },
            { unit: '1 Days', status: 'withdrawn' },
            { unit: '0.5 Days', status: 'rejected' },
            { unit: '3 Days', status: 'rejected' },
        ];
        this.rows1 = [
            { overtime: 'OT1', date: '01/02/2018', status: 'Pending' },
            { overtime: 'OT2', date: '01/02/2018', status: 'Approved' },
            { overtime: 'OT3', date: '01/02/2018', status: 'Rejected' },
            { overtime: 'OT4', date: '01/02/2018', status: 'Rejected' }
        ];
        this.rows2 = [
            { outdoor: '1', status: 'Pending' },
            { outdoor: '2', status: 'Approved' },
            { outdoor: '3', status: 'Rejected' },
            { outdoor: '4', status: 'Rejected' }
        ];
        this.rows3 = [
            { wfh: '1', status: 'Pending' },
            { wfh: '2', status: 'Approved' },
            { wfh: '3', status: 'Rejected' },
            { wfh: '4', status: 'Rejected' }
        ];
        this.rows4 = [
            { amount: '12500', status: 'Pending' },
            { amount: '4000', status: 'Approved' },
            { amount: '100', status: 'Rejected' },
            { amount: '500', status: 'Rejected' }
        ];
        this.rows5 = [
            { status: 'Pending' },
            { status: 'Approved' },
            { status: 'Rejected' },
            { status: 'Rejected' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/theme/application/home/home.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/home/home.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/leave-application/leave-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Leave Application\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success float-right btn-sm header-button\" [routerLink]=\"['/application/home']\">\r\n              <i></i>\r\n              Apply\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-sm-7 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"m-4\">\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-sm-3\">\r\n                <p>Approver*</p>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                    <option value=\"\">--Select--</option>\r\n                    <option>Option-1</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Leave Type</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <select class=\"form-control\">\r\n                      <option value=\"\">--Select--</option>\r\n                      <option>Option-1</option>\r\n                  </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Leave</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"date\" class=\"form-control\"> \r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"date\" class=\"form-control\"> \r\n                    </div>\r\n                  </div>                                      \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Remark</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\">                                    \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Substitute</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <select class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option>Option-1</option>\r\n                    </select>                                   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Attachments</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"upload-btn-wrapper\">\r\n                    <button class=\" btn btn-primary upload-button\">Choose File</button>\r\n                    <input type=\"file\" name=\"myfile\" />\r\n                  </div>                                    \r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n          </app-card>\r\n        </div>\r\n\r\n        <div class=\"col-sm-5 body-top-margin\">\r\n          <app-card>\r\n              <div class=\"w-100\">                  \r\n                  <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [displayMonths]=\"displayMonths\" [navigation] = \"arrows\"></ngb-datepicker>\r\n              </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-12\">\r\n\r\n          <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\r\n\r\n          <ngx-datatable-column name=\"Leaves\" [sortable]=\"false\"></ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Carry Forward\" [sortable]=\"false\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" style=\"width: 75px\">\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Entitlement\" [sortable]=\"false\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <input type=\"text\" class=\"form-control form-control-sm\" style=\"width: 75px\">\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"YTD Availed\" [sortable]=\"false\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <input type=\"text\" class=\"form-control form-control-sm\" style=\"width: 75px\">\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Balance\" [sortable]=\"false\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <input type=\"text\" class=\"form-control form-control-sm\" style=\"width: 75px\">\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n        </ngx-datatable>\r\n      </div>\r\n\r\n      \r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/application/leave-application/leave-application.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/leave-application/leave-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cmyk */
/* unused harmony export colors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, OnInit } from '@angular/core';



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
var LeaveApplicationComponent = /** @class */ (function () {
    function LeaveApplicationComponent(parserFormatter, calendar, cpService) {
        var _this = this;
        this.parserFormatter = parserFormatter;
        this.calendar = calendar;
        this.cpService = cpService;
        this.rows = [
            { leaves: 'Personal Leave' },
            { leaves: 'Casual Leave' },
            { leaves: 'Sick Leave' },
            { leaves: 'Personal Leave' }
        ];
        this.items = [];
        this.view = 'month';
        this.viewDate = new Date();
        this.isChecked = true;
        this.colorOption = ['red', 'blue', 'yellow', 'green'];
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                }
            }
        ];
        this.externalEvents = [
            {
                title: 'My Event One',
                color: colors.yellow,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            },
            {
                title: 'My Event Two',
                color: colors.blue,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            },
            {
                title: 'My Event Three',
                color: colors.blue,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            },
            {
                title: 'My Event Four',
                color: colors.blue,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            }
        ];
        this.events = [
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.green,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.displayMonths = 4;
        this.navigation = 'label';
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
            this.displayMonths = 1;
            this.navigation = 'none';
        }
    }
    LeaveApplicationComponent.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
    };
    LeaveApplicationComponent.prototype.eventDropped = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        var externalIndex = this.externalEvents.indexOf(event);
        if (externalIndex > -1) {
            if (!this.isChecked) {
                this.externalEvents.splice(externalIndex, 1);
            }
            console.log(event);
            this.events.push(event);
        }
        event.start = newStart;
        if (newEnd) {
            event.end = newEnd;
        }
        this.viewDate = newStart;
        this.activeDayIsOpen = true;
    };
    LeaveApplicationComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    LeaveApplicationComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    LeaveApplicationComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    LeaveApplicationComponent.prototype.ngOnInit = function () {
    };
    LeaveApplicationComponent.prototype.onAdd = function (event) {
        var color = this.colorOption[Math.floor(Math.random() * this.colorOption.length)];
        this.externalEvents.push({
            title: event.value,
            start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["endOfDay"])(new Date()),
            color: colors[color],
            draggable: true,
            actions: this.actions
        });
        this.refresh.next();
    };
    LeaveApplicationComponent.prototype.setEvent = function () {
        this.isChecked = !this.isChecked;
    };
    LeaveApplicationComponent.prototype.lookup = function (date) {
        for (var i = 0, len = this.externalEvents.length; i < len; i++) {
            if (this.externalEvents[i] === date) {
                return true;
            }
        }
        return false;
    };
    LeaveApplicationComponent.prototype.selectToday = function () {
        this.modelPopup = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    LeaveApplicationComponent.prototype.onDateChange = function (date) {
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
    LeaveApplicationComponent.prototype.onChangeColor = function (color) {
        return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
    };
    LeaveApplicationComponent.prototype.rgbaToCmyk = function (rgba) {
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
    LeaveApplicationComponent.prototype.onChangeColorHex8 = function (color) {
        return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Date)
    ], LeaveApplicationComponent.prototype, "testRangeDate", void 0);
    LeaveApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leave-application',
            template: __webpack_require__("./src/app/theme/application/leave-application/leave-application.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/leave-application/leave-application.component.scss"), __webpack_require__("./node_modules/angular-calendar/css/angular-calendar.css"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCalendar */], __WEBPACK_IMPORTED_MODULE_2_ngx_color_picker__["b" /* ColorPickerService */]])
    ], LeaveApplicationComponent);
    return LeaveApplicationComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/outdoor-application/outdoor-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Outdoor Application\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success float-right btn-sm header-button\" [routerLink]=\"['/application/home']\">\r\n              <i></i>\r\n              Apply\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-7 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"m-4\" style=\"min-height: 300px;\">\r\n\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-sm-3\">\r\n                <p>Approver*</p>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                    <option value=\"\">--Select--</option>\r\n                    <option>Option-1</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Date*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\"> \r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\"> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Time*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\"> \r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\"> \r\n                    </div>\r\n                  </div>                                      \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Remark</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\">                         \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Attachments*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"upload-btn-wrapper\">\r\n                    <button class=\" btn btn-primary upload-button\">Choose File</button>\r\n                    <input type=\"file\" name=\"myfile\" />\r\n                  </div>                                   \r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-5 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"w-100\">\r\n                <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [displayMonths]=\"displayMonths\" [navigation] = \"arrows\"></ngb-datepicker>\r\n                <!-- <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [displayMonths]=\"displayMonths\" [navigation] = \"arrows\"></ngb-datepicker> -->\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n        \r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/application/outdoor-application/outdoor-application.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/outdoor-application/outdoor-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cmyk */
/* unused harmony export colors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutdoorApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_color_picker__ = __webpack_require__("./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
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
var OutdoorApplicationComponent = /** @class */ (function () {
    function OutdoorApplicationComponent(parserFormatter, calendar, cpService) {
        var _this = this;
        this.parserFormatter = parserFormatter;
        this.calendar = calendar;
        this.cpService = cpService;
        this.rows = [
            { leaves: 'Personal Leave' },
            { leaves: 'Casual Leave' },
            { leaves: 'Sick Leave' },
            { leaves: 'Personal Leave' }
        ];
        this.items = [];
        this.view = 'month';
        this.viewDate = new Date();
        this.isChecked = true;
        this.colorOption = ['red', 'blue', 'yellow', 'green'];
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                }
            }
        ];
        this.externalEvents = [
            {
                title: 'My Event One',
                color: colors.yellow,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            },
            {
                title: 'My Event Two',
                color: colors.blue,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            },
            {
                title: 'My Event Three',
                color: colors.blue,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            },
            {
                title: 'My Event Four',
                color: colors.blue,
                start: new Date(),
                end: new Date(),
                draggable: true,
                actions: this.actions
            }
        ];
        this.events = [
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.green,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.displayMonths = 4;
        this.navigation = 'label';
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
            this.displayMonths = 1;
            this.navigation = 'none';
        }
    }
    OutdoorApplicationComponent.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
    };
    OutdoorApplicationComponent.prototype.eventDropped = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        var externalIndex = this.externalEvents.indexOf(event);
        if (externalIndex > -1) {
            if (!this.isChecked) {
                this.externalEvents.splice(externalIndex, 1);
            }
            console.log(event);
            this.events.push(event);
        }
        event.start = newStart;
        if (newEnd) {
            event.end = newEnd;
        }
        this.viewDate = newStart;
        this.activeDayIsOpen = true;
    };
    OutdoorApplicationComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    OutdoorApplicationComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    OutdoorApplicationComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    OutdoorApplicationComponent.prototype.ngOnInit = function () {
    };
    OutdoorApplicationComponent.prototype.onAdd = function (event) {
        var color = this.colorOption[Math.floor(Math.random() * this.colorOption.length)];
        this.externalEvents.push({
            title: event.value,
            start: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["endOfDay"])(new Date()),
            color: colors[color],
            draggable: true,
            actions: this.actions
        });
        this.refresh.next();
    };
    OutdoorApplicationComponent.prototype.setEvent = function () {
        this.isChecked = !this.isChecked;
    };
    OutdoorApplicationComponent.prototype.lookup = function (date) {
        for (var i = 0, len = this.externalEvents.length; i < len; i++) {
            if (this.externalEvents[i] === date) {
                return true;
            }
        }
        return false;
    };
    OutdoorApplicationComponent.prototype.selectToday = function () {
        this.modelPopup = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    OutdoorApplicationComponent.prototype.onDateChange = function (date) {
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
    OutdoorApplicationComponent.prototype.onChangeColor = function (color) {
        return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
    };
    OutdoorApplicationComponent.prototype.rgbaToCmyk = function (rgba) {
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
    OutdoorApplicationComponent.prototype.onChangeColorHex8 = function (color) {
        return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Date)
    ], OutdoorApplicationComponent.prototype, "testRangeDate", void 0);
    OutdoorApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-outdoor-application',
            template: __webpack_require__("./src/app/theme/application/outdoor-application/outdoor-application.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/outdoor-application/outdoor-application.component.scss"), __webpack_require__("./node_modules/angular-calendar/css/angular-calendar.css"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDateParserFormatter */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbCalendar */], __WEBPACK_IMPORTED_MODULE_2_ngx_color_picker__["b" /* ColorPickerService */]])
    ], OutdoorApplicationComponent);
    return OutdoorApplicationComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/overtime-application/overtime-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Overtime Application\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success float-right btn-sm header-button\" [routerLink]=\"['/application/home']\">\r\n              <i></i>\r\n              Apply\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-7 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"m-4\" style=\"min-height: 300px;\">\r\n\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-sm-3\">\r\n                <p>Approver*</p>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                    <option value=\"\">--Select--</option>\r\n                    <option>Option-1</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Date*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <select class=\"form-control\">\r\n                      <option value=\"\">--Select--</option>\r\n                      <option>Option-1</option>\r\n                  </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Time*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"date\" class=\"form-control\"> \r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"date\" class=\"form-control\"> \r\n                    </div>\r\n                  </div>                                      \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Remark</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\">                         \r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Substitute</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <select class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option>Option-1</option>\r\n                    </select>                                   \r\n                </div>\r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Attachments*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"upload-btn-wrapper\">\r\n                    <button class=\" btn btn-primary upload-button\">Choose File</button>\r\n                    <input type=\"file\" name=\"myfile\" />\r\n                  </div>                                    \r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-5 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"w-100\">\r\n                <!-- <h4 class=\"sub-title\">Simple Inline</h4> -->\r\n                <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [displayMonths]=\"displayMonths\" [navigation] = \"arrows\"></ngb-datepicker>\r\n                <!-- <pre class=\"m-t-20\">Selected Month/Year: {{ date.month }}/{{ date.year }}</pre> -->\r\n                <!-- <pre>Selected Date: {{ parserFormatter.format(model) }}</pre> -->\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n        \r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/application/overtime-application/overtime-application.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/overtime-application/overtime-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OvertimeApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OvertimeApplicationComponent = /** @class */ (function () {
    function OvertimeApplicationComponent() {
    }
    OvertimeApplicationComponent.prototype.ngOnInit = function () {
    };
    OvertimeApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overtime-application',
            template: __webpack_require__("./src/app/theme/application/overtime-application/overtime-application.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/overtime-application/overtime-application.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OvertimeApplicationComponent);
    return OvertimeApplicationComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/personal-leave/personal-leave.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/requests']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Personal Leave\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-md-5\">\r\n              <a class=\"btn btn-danger float-right btn-sm header-button\">\r\n                <i></i>\r\n                Reject\r\n              </a>\r\n              <a class=\"btn btn-success float-right btn-sm header-button\">\r\n                <i></i>\r\n                Approve\r\n              </a>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 body-top-margin\">\r\n          <app-card>\r\n\r\n            <div class=\"row mb-1\">\r\n              <div class=\"col-sm-2\">\r\n                <p>Employee Name</p> \r\n              </div>\r\n\r\n              <div class=\"col-sm-10\">\r\n                <p>John Doe</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Application Type</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <p>Personal Leave</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Leave</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <input type=\"date\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <input type=\"date\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Applied on</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                        <input type=\"date\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-sm-2\"></div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Remark</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <p>Hospitalize due to dengue</p> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Substitute</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <p>xyz abc</p> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Attachments</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-2\">\r\n                  <p>hospitalreports.pdf</p> \r\n                </div>\r\n\r\n                <div class=\"col-sm-2\">\r\n                    <a class=\"btn btn-success btn-sm header-button\" [routerLink]=\"['']\">\r\n                        Download\r\n                    </a> \r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>My Remark</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-4\">\r\n                  <textarea name=\"\" cols=\"41\"></textarea> \r\n                </div>\r\n            </div>\r\n\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/theme/application/personal-leave/personal-leave.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/personal-leave/personal-leave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalLeaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalLeaveComponent = /** @class */ (function () {
    function PersonalLeaveComponent() {
    }
    PersonalLeaveComponent.prototype.ngOnInit = function () {
    };
    PersonalLeaveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-personal-leave',
            template: __webpack_require__("./src/app/theme/application/personal-leave/personal-leave.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/personal-leave/personal-leave.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalLeaveComponent);
    return PersonalLeaveComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/reimbursement-application/reimbursement-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Reimbursement Application\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success float-right btn-sm header-button\" [routerLink]=\"['/application/home']\">\r\n              <i></i>\r\n              Apply\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-7 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"m-4\">\r\n\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-sm-3\">\r\n                <p>Claim Type*</p>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                    <option value=\"\">--Select--</option>\r\n                    <option>Option-1</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Date*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\"> \r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\"> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Time*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"From\"> \r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"To\"> \r\n                    </div>\r\n                  </div>                                      \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Amount*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\">                         \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Remark</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\">                         \r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Substitute</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <select class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option>Option-1</option>\r\n                    </select>                                   \r\n                </div>\r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Attachments*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"upload-btn-wrapper\">\r\n                    <button class=\" btn btn-primary upload-button\">Choose File</button>\r\n                    <input type=\"file\" name=\"myfile\" />\r\n                  </div>                                  \r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-5 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"w-100\">\r\n                <!-- <h4 class=\"sub-title\">Simple Inline</h4> -->\r\n                <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [displayMonths]=\"displayMonths\" [navigation] = \"arrows\"></ngb-datepicker>\r\n                <!-- <pre class=\"m-t-20\">Selected Month/Year: {{ date.month }}/{{ date.year }}</pre> -->\r\n                <!-- <pre>Selected Date: {{ parserFormatter.format(model) }}</pre> -->\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n        \r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/application/reimbursement-application/reimbursement-application.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/reimbursement-application/reimbursement-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReimbursementApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReimbursementApplicationComponent = /** @class */ (function () {
    function ReimbursementApplicationComponent() {
    }
    ReimbursementApplicationComponent.prototype.ngOnInit = function () {
    };
    ReimbursementApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reimbursement-application',
            template: __webpack_require__("./src/app/theme/application/reimbursement-application/reimbursement-application.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/reimbursement-application/reimbursement-application.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReimbursementApplicationComponent);
    return ReimbursementApplicationComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/requests/requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"page-header header-boxshadow\">\r\n    <div class=\"page-block\">\r\n      <div class=\"row align-items-center\">\r\n\r\n        <div class=\"col-md-7\">\r\n          <div class=\"page-header-title\">\r\n            <span>\r\n              <h4 class=\"m-b-10 headtext\">\r\n                <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                  <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                Requests\r\n              </h4>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-5\">\r\n          <a class=\"btn btn-light float-right btn-sm header-button table-action-btn\" [routerLink]=\"['/application/home']\">\r\n            <i></i>\r\n            Apply\r\n          </a>\r\n          <a class=\"btn bg-dark float-right btn-sm header-button text-white\" [routerLink]=\"['/application/requests']\">\r\n            <i></i>\r\n            Request\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n  <div class=\"container body-pad\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 body-top-margin\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-9\"></div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group has-feedback has-search\">\r\n              <i class=\"fa fa-search form-control-feedback\"></i>\r\n              <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control shadow border-rm\" placeholder=\"Search\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\" style=\"width: 100% !important;\">\r\n\r\n          <ngx-datatable-column name=\"Employee Name\" style=\"width: 15% !important;\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              John Doe\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Application\" style=\"width: 15% !important;\">\r\n\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Start Date\" [width]=\"110\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              01/02/2018\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"End Date\" [width]=\"110\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              05/02/2018\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Unit\" [width]=\"80\"></ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Status\" [width]=\"90\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <span *ngIf=\"value == 'Pending'\" style=\"color: red;\">{{value}}</span>\r\n              <span *ngIf=\"value == 'Approved'\" style=\"color: green;\">{{value}}</span>\r\n              <span *ngIf=\"value == 'Rejected'\" style=\"color: red;\">{{value}}</span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" name=\"\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <a class=\"btn btn-light btn-sm datatable-button table-action-btn\" style=\"margin-left: 0px !important;\"\r\n                [routerLink]=\"['/application/personal-leave']\">View</a>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/application/requests/requests.component.scss":
/***/ (function(module, exports) {

module.exports = "datatable-body.datatable-body {\n  margin-top: 15px !important; }\n\n.datatable-body-cell-label span [title~=Approved] {\n  color: #e00000 !important; }\n\n.datatable-body-cell-label span [title~=Rejected] {\n  color: #e00000 !important; }\n\n.pending-color {\n  color: red !important; }\n"

/***/ }),

/***/ "./src/app/theme/application/requests/requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestsComponent = /** @class */ (function () {
    function RequestsComponent() {
        this.rows = [
            { application: "Personal Leave", unit: "0.5 day", status: "Pending" },
            { application: "Overtime", unit: "2 day", status: "Approved" },
            { application: "Overtime", unit: "1 day", status: "Rejected" }
        ];
    }
    RequestsComponent.prototype.ngOnInit = function () { };
    RequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-requests",
            template: __webpack_require__("./src/app/theme/application/requests/requests.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/requests/requests.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])("fadeInOutTranslate", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(":enter", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("400ms ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(":leave", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: "translate(0)" }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("400ms ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/sick-leave/sick-leave.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Sick Leave\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 body-top-margin\">\r\n          <app-card>\r\n\r\n            <div class=\"row mb-1\">\r\n              <div class=\"col-sm-2\">\r\n                <p>Approver</p> \r\n              </div>\r\n\r\n              <div class=\"col-sm-10\">\r\n                <p>John Doe</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Leave Type</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <p>Sick Leave</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Leave</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-2\">\r\n                        <input type=\"date\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"col-sm-2\">\r\n                        <input type=\"date\" class=\"form-control\">\r\n                    </div>\r\n                    <!-- <div class=\"col-sm-8\"></div> -->\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Remark</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <p>Hospitalize due to dengue</p> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Substitute</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <p>xyz abc</p> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-1\">\r\n                <div class=\"col-sm-2\">\r\n                  <p>Attachments</p> \r\n                </div>\r\n  \r\n                <div class=\"col-sm-10\">\r\n                  <p>hospitalreports.pdf</p> \r\n                </div>\r\n            </div>\r\n\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>              \r\n"

/***/ }),

/***/ "./src/app/theme/application/sick-leave/sick-leave.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/sick-leave/sick-leave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SickLeaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SickLeaveComponent = /** @class */ (function () {
    function SickLeaveComponent() {
    }
    SickLeaveComponent.prototype.ngOnInit = function () {
    };
    SickLeaveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sick-leave',
            template: __webpack_require__("./src/app/theme/application/sick-leave/sick-leave.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/sick-leave/sick-leave.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SickLeaveComponent);
    return SickLeaveComponent;
}());



/***/ }),

/***/ "./src/app/theme/application/work-from-home-application/work-from-home-application.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/application/home']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Work From Home Application\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success float-right btn-sm header-button\" [routerLink]=\"['/application/home']\">\r\n              <i></i>\r\n              Apply\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-7 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"m-4\" style=\"min-height: 300px;\">\r\n\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-sm-3\">\r\n                <p>Approver*</p>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <select class=\"form-control\">\r\n                    <option value=\"\">--Select--</option>\r\n                    <option>Option-1</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Date*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\"> \r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\"> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Time*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"From\"> \r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"To\"> \r\n                    </div>\r\n                  </div>                                      \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Remark</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\">                         \r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"row mb-3\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Substitute</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <select class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option>Option-1</option>\r\n                    </select>                                   \r\n                </div>\r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <p>Attachments*</p>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"upload-btn-wrapper\">\r\n                    <button class=\" btn btn-primary upload-button\">Choose File</button>\r\n                    <input type=\"file\" name=\"myfile\" />\r\n                  </div>                                    \r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-5 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"w-100\">\r\n                <!-- <h4 class=\"sub-title\">Simple Inline</h4> -->\r\n                <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [displayMonths]=\"displayMonths\" [navigation] = \"arrows\"></ngb-datepicker>\r\n                <!-- <pre class=\"m-t-20\">Selected Month/Year: {{ date.month }}/{{ date.year }}</pre> -->\r\n                <!-- <pre>Selected Date: {{ parserFormatter.format(model) }}</pre> -->\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n        \r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/application/work-from-home-application/work-from-home-application.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/application/work-from-home-application/work-from-home-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkFromHomeApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkFromHomeApplicationComponent = /** @class */ (function () {
    function WorkFromHomeApplicationComponent() {
    }
    WorkFromHomeApplicationComponent.prototype.ngOnInit = function () {
    };
    WorkFromHomeApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-from-home-application',
            template: __webpack_require__("./src/app/theme/application/work-from-home-application/work-from-home-application.component.html"),
            styles: [__webpack_require__("./src/app/theme/application/work-from-home-application/work-from-home-application.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkFromHomeApplicationComponent);
    return WorkFromHomeApplicationComponent;
}());



/***/ })

});
//# sourceMappingURL=application.module.chunk.js.map