webpackJsonp(["reports.module"],{

/***/ "./src/app/theme/reports/employee-reports/employee-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Reports\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">          \r\n            \r\n            <a class=\"btn btn-light float-right btn-sm header-button table-action-btn\" [routerLink]=\"['/reports/my-reports']\">\r\n              <i></i>\r\n              My Reports\r\n            </a>\r\n\r\n            <a class=\"btn btn-sm bg-dark float-right header-button text-white\" [routerLink]=\"['/reports/employee-reports']\">\r\n              <i></i>\r\n              Employee Reports\r\n            </a>\r\n\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12 body-top-margin\">\r\n            <div class=\"row\">\r\n\r\n\r\n                <div class=\"col-sm-3\">\r\n                    <app-card>\r\n                      <div class=\"text-center my-report-container\">\r\n                        <div [routerLink]=\"['/reports/insurence-report']\" class=\"circle-icon-holder\">                      \r\n                          <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                        </div>\r\n                        <h5 class=\"mt-3\">INSURENCE REPORTS</h5>\r\n                        <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                      </div>\r\n                    </app-card>\r\n                  </div>\r\n\r\n\r\n              <div class=\"col-sm-3\">\r\n                  <app-card>\r\n                    <div class=\"text-center my-report-container\">\r\n                      <div class=\"circle-icon-holder\">                      \r\n                        <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                      </div>\r\n                      <h5 class=\"mt-3\">PAYSLIP REPORTS</h5>\r\n                      <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                    </div>\r\n                  </app-card>\r\n              </div>\r\n\r\n\r\n\r\n                <div class=\"col-sm-3\">\r\n                    <app-card>\r\n                      <div class=\"text-center my-report-container\">\r\n                        <div class=\"circle-icon-holder\">                      \r\n                          <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                        </div>\r\n                        <h5 class=\"mt-3\">TAX REPORTS</h5>\r\n                        <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                      </div>\r\n                    </app-card>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-sm-3\">\r\n                      <app-card>\r\n                        <div class=\"text-center my-report-container\">\r\n                          <div class=\"circle-icon-holder\">                      \r\n                            <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                          </div>\r\n                          <h5 class=\"mt-3\">PERFORMANCE REPORTS</h5>\r\n                          <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                        </div>\r\n                      </app-card>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-sm-3\">\r\n                        <app-card>\r\n                          <div class=\"text-center my-report-container\">\r\n                            <div class=\"circle-icon-holder\">                      \r\n                              <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                            </div>\r\n                            <h5 class=\"mt-3\">LEAVE REPORTS</h5>\r\n                            <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                          </div>\r\n                        </app-card>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"col-sm-3\">\r\n                          <app-card>\r\n                            <div class=\"text-center my-report-container\">\r\n                              <div class=\"circle-icon-holder\">                      \r\n                                <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                              </div>\r\n                              <h5 class=\"mt-3\">SHIFT REPORTS</h5>\r\n                              <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                            </div>\r\n                          </app-card>\r\n                        </div>\r\n              \r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>            \r\n"

/***/ }),

/***/ "./src/app/theme/reports/employee-reports/employee-reports.component.scss":
/***/ (function(module, exports) {

module.exports = ".circle-icon-holder {\n  width: 70px;\n  height: 70px;\n  background: rgba(0, 173, 255, 0.54);\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0px auto; }\n\n.my-report-container h5 {\n  font-size: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/theme/reports/employee-reports/employee-reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeReportsComponent; });
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

var EmployeeReportsComponent = /** @class */ (function () {
    function EmployeeReportsComponent() {
    }
    EmployeeReportsComponent.prototype.ngOnInit = function () {
    };
    EmployeeReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-reports',
            template: __webpack_require__("./src/app/theme/reports/employee-reports/employee-reports.component.html"),
            styles: [__webpack_require__("./src/app/theme/reports/employee-reports/employee-reports.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeReportsComponent);
    return EmployeeReportsComponent;
}());



/***/ }),

/***/ "./src/app/theme/reports/insurence-report/insurence-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/reports']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Insurence Report\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div> \r\n\r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success btn-sm float-right header-button text-white\">\r\n              Download Report\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12 body-top-margin\">\r\n              <app-card>\r\n                <div class=\"row\">                  \r\n\r\n                    <div class=\"col-sm-2 align-middle\">\r\n                      <p>Date</p>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-4 align-middle\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\">\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <input type=\"date\" class=\"form-control\">\r\n                        </div>\r\n                      </div>                      \r\n                    </div>\r\n\r\n                    <div class=\"col-sm-2 align-middle\">\r\n                      <a class=\"btn btn-success btn-sm float-right header-button text-white\">\r\n                        Generate\r\n                      </a>\r\n                    </div>                  \r\n                </div>\r\n              </app-card>            \r\n          </div>\r\n\r\n          \r\n\r\n\r\n          <div class=\"col-sm-12\">\r\n            <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\r\n  \r\n              <ngx-datatable-column name=\"Download History\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  02/02/2018\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <button type=\"button\" class=\"btn btn-success btn-sm datatable-button\" style=\"margin-left: 0px !important;\">Download</button>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n            </ngx-datatable>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n</div>          \r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/reports/insurence-report/insurence-report.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/reports/insurence-report/insurence-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsurenceReportComponent; });
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

var InsurenceReportComponent = /** @class */ (function () {
    function InsurenceReportComponent() {
        this.rows = [
            { status: 'open' },
            { status: 'open' },
            { status: 'open' }
        ];
    }
    InsurenceReportComponent.prototype.ngOnInit = function () {
    };
    InsurenceReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-insurence-report',
            template: __webpack_require__("./src/app/theme/reports/insurence-report/insurence-report.component.html"),
            styles: [__webpack_require__("./src/app/theme/reports/insurence-report/insurence-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InsurenceReportComponent);
    return InsurenceReportComponent;
}());



/***/ }),

/***/ "./src/app/theme/reports/my-insurence-report/my-insurence-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/reports/my-reports']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Insurence Report\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div> \r\n\r\n  \r\n          <div class=\"col-md-5\">\r\n            <a class=\"btn btn-success btn-sm float-right header-button text-white\">\r\n              Download Report\r\n            </a>\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-sm-12 body-top-margin\">\r\n          <app-card>\r\n            <div class=\"row\">\r\n\r\n\r\n              <div class=\"col-sm-7\">\r\n                  <div class=\"m-4\">\r\n\r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Date</p>\r\n                          </div>\r\n                          <div class=\"col-sm-8\">\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-sm-6\">\r\n                                      <input type=\"date\" class=\"form-control\"> \r\n                                  </div>\r\n                                  <div class=\"col-sm-6\">\r\n                                      <input type=\"date\" class=\"form-control\"> \r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row mb-3\">\r\n                        <div class=\"col-sm-3\">\r\n                          <p>Department</p>\r\n                        </div>\r\n                        <div class=\"col-sm-8\">\r\n                            <select class=\"form-control \">\r\n                                <option value=\"\">--Select--</option>\r\n                                <option>Option-1</option>\r\n                            </select> \r\n                        </div>\r\n                      </div> \r\n                      \r\n                      \r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Designation</p>\r\n                          </div>\r\n                          <div class=\"col-sm-8\">\r\n                              <select class=\"form-control\">\r\n                                  <option value=\"\">--Select--</option>\r\n                                  <option>Option-1</option>\r\n                              </select> \r\n                          </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Location</p>\r\n                          </div>\r\n                          <div class=\"col-sm-8\">\r\n                              <select class=\"form-control\">\r\n                                  <option value=\"\">--Select--</option>\r\n                                  <option>Option-1</option>\r\n                              </select> \r\n                          </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Grade</p>\r\n                          </div>\r\n                          <div class=\"col-sm-8\">\r\n                              <select class=\"form-control\">\r\n                                  <option value=\"\">--Select--</option>\r\n                                  <option>Option-1</option>\r\n                              </select> \r\n                          </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Group</p>\r\n                          </div>\r\n                          <div class=\"col-sm-8\">\r\n                              <select class=\"form-control\">\r\n                                  <option value=\"\">--Select--</option>\r\n                                  <option>Option-1</option>\r\n                              </select> \r\n                          </div>\r\n                      </div>\r\n                      \r\n          \r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <p>Employee code/Name</p>\r\n                          </div>\r\n                          <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\" value=\"John Doe\">                         \r\n                          </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row mb-3\">\r\n                          <div class=\"col-sm-3\">\r\n                            <!-- <p>Employee code/Name</p> -->\r\n                          </div>\r\n                          <div class=\"col-sm-8\">\r\n                              <a class=\"btn btn-success btn-sm float-right header-button text-white pull-right\">Generate</a>      \r\n                          </div>\r\n                      </div>\r\n          \r\n                    </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"col-sm-5\"></div>\r\n\r\n\r\n            </div>            \r\n          </app-card>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-12\">\r\n          <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\r\n  \r\n              <ngx-datatable-column name=\"Employee code\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  XYZ003\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column name=\"Employee Name\" [width]=\"120\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    John Doe\r\n                  </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column name=\"Download History\" [width]=\"120\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    02/02/2018\r\n                  </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <button type=\"button\" class=\"btn btn-success btn-sm datatable-button\" style=\"margin-left: 0px !important;\">Download</button>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n            </ngx-datatable>\r\n          </div>\r\n\r\n\r\n                \r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/reports/my-insurence-report/my-insurence-report.component.scss":
/***/ (function(module, exports) {

module.exports = "select.form-control {\n  border: 1px solid #959595; }\n"

/***/ }),

/***/ "./src/app/theme/reports/my-insurence-report/my-insurence-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInsurenceReportComponent; });
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

var MyInsurenceReportComponent = /** @class */ (function () {
    function MyInsurenceReportComponent() {
        this.rows = [
            { status: 'open' },
            { status: 'open' },
            { status: 'open' }
        ];
    }
    MyInsurenceReportComponent.prototype.ngOnInit = function () {
    };
    MyInsurenceReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-insurence-report',
            template: __webpack_require__("./src/app/theme/reports/my-insurence-report/my-insurence-report.component.html"),
            styles: [__webpack_require__("./src/app/theme/reports/my-insurence-report/my-insurence-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyInsurenceReportComponent);
    return MyInsurenceReportComponent;
}());



/***/ }),

/***/ "./src/app/theme/reports/my-reports/my-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Reports\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">          \r\n            \r\n            <a class=\"btn float-right btn-sm bg-dark header-button text-white\" [routerLink]=\"['/reports/my-reports']\">\r\n              <i></i>\r\n              My Reports\r\n            </a>\r\n\r\n            <a class=\"btn btn-light btn-sm float-right header-button table-action-btn\" [routerLink]=\"['/reports/employee-reports']\">\r\n              <i></i>\r\n              Employee Reports\r\n            </a>\r\n          </div>  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12 body-top-margin\">\r\n            <div class=\"row\">\r\n\r\n\r\n              <div class=\"col-sm-3\">\r\n                <app-card>\r\n                  <div class=\"text-center my-report-container\">\r\n                    <div [routerLink]=\"['/reports/my-insurence-report']\" class=\"circle-icon-holder\">                      \r\n                      <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                    </div>\r\n                    <h5 class=\"mt-3\">INSURENCE REPORTS</h5>\r\n                    <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                  </div>\r\n                </app-card>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-sm-3\">\r\n                  <app-card>\r\n                    <div class=\"text-center my-report-container\">\r\n                      <div class=\"circle-icon-holder\">                      \r\n                          <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                      </div>\r\n                      <h5 class=\"mt-3\">TRAINING REPORTS</h5>\r\n                      <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                    </div>\r\n                  </app-card>\r\n              </div>\r\n\r\n\r\n\r\n                <div class=\"col-sm-3\">\r\n                    <app-card>\r\n                      <div class=\"text-center my-report-container\">\r\n                        <div class=\"circle-icon-holder\">                      \r\n                            <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                        </div>\r\n                        <h5 class=\"mt-3\">MANPOWER REPORTS</h5>\r\n                        <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                      </div>\r\n                    </app-card>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-sm-3\">\r\n                      <app-card>\r\n                        <div class=\"text-center my-report-container\">\r\n                          <div class=\"circle-icon-holder\">                      \r\n                              <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                          </div>\r\n                          <h5 class=\"mt-3\">EMPLOYEE DETAIL REPORTS</h5>\r\n                          <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                        </div>\r\n                      </app-card>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-sm-3\">\r\n                        <app-card>\r\n                          <div class=\"text-center my-report-container\">\r\n                            <div class=\"circle-icon-holder\">                      \r\n                                <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                            </div>\r\n                            <h5 class=\"mt-3\">LEAVE REPORTS</h5>\r\n                            <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                          </div>\r\n                        </app-card>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"col-sm-3\">\r\n                          <app-card>\r\n                            <div class=\"text-center my-report-container\">\r\n                              <div class=\"circle-icon-holder\">                      \r\n                                  <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                              </div>\r\n                              <h5 class=\"mt-3\">EMPLOYEE DEPENDENT</h5>\r\n                              <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                            </div>\r\n                          </app-card>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <app-card>\r\n                              <div class=\"text-center my-report-container\">\r\n                                <div class=\"circle-icon-holder\">                      \r\n                                    <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                </div>\r\n                                <h5 class=\"mt-3\">BIRTHDAY REPORT</h5>\r\n                                <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                              </div>\r\n                            </app-card>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"col-sm-3\">\r\n                              <app-card>\r\n                                <div class=\"text-center my-report-container\">\r\n                                  <div class=\"circle-icon-holder\">                      \r\n                                      <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                  </div>\r\n                                  <h5 class=\"mt-3\">PROBATION REPORT</h5>\r\n                                  <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                </div>\r\n                              </app-card>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                                <app-card>\r\n                                  <div class=\"text-center my-report-container\">\r\n                                    <div class=\"circle-icon-holder\">                      \r\n                                        <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                    </div>\r\n                                    <h5 class=\"mt-3\">NEW HIRE REPORT</h5>\r\n                                    <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                  </div>\r\n                                </app-card>\r\n                              </div>\r\n\r\n\r\n                              <div class=\"col-sm-3\">\r\n                                  <app-card>\r\n                                    <div class=\"text-center my-report-container\">\r\n                                      <div class=\"circle-icon-holder\">                      \r\n                                          <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                      </div>\r\n                                      <h5 class=\"mt-3\">OVERTIME REPORT</h5>\r\n                                      <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                    </div>\r\n                                  </app-card>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                    <app-card>\r\n                                      <div class=\"text-center my-report-container\">\r\n                                        <div class=\"circle-icon-holder\">                     \r\n                                            <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                        </div>\r\n                                        <h5 class=\"mt-3\">TIME TARDY REPORT</h5>\r\n                                        <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                      </div>\r\n                                    </app-card>\r\n                                  </div>\r\n\r\n\r\n                                  <div class=\"col-sm-3\">\r\n                                      <app-card>\r\n                                        <div class=\"text-center my-report-container\">\r\n                                          <div class=\"circle-icon-holder\">                   \r\n                                              <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                          </div>\r\n                                          <h5 class=\"mt-3\">TOP 10 LEAVE REPORT</h5>\r\n                                          <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                        </div>\r\n                                      </app-card>\r\n                                    </div>\r\n\r\n\r\n                                    <div class=\"col-sm-3\">\r\n                                        <app-card>\r\n                                          <div class=\"text-center my-report-container\">\r\n                                            <div class=\"circle-icon-holder\">                      \r\n                                                <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                            </div>\r\n                                            <h5 class=\"mt-3\">RETIREMENT REPORT</h5>\r\n                                            <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                          </div>\r\n                                        </app-card>\r\n                                      </div>\r\n\r\n\r\n                                      <div class=\"col-sm-3\">\r\n                                          <app-card>\r\n                                            <div class=\"text-center my-report-container\">\r\n                                              <div class=\"circle-icon-holder\">                      \r\n                                                  <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                              </div>\r\n                                              <h5 class=\"mt-3\">RESIGNATION REPORT</h5>\r\n                                              <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                            </div>\r\n                                          </app-card>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"col-sm-3\">\r\n                                            <app-card>\r\n                                              <div class=\"text-center my-report-container\">\r\n                                                <div class=\"circle-icon-holder\">                      \r\n                                                    <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                                </div>\r\n                                                <h5 class=\"mt-3\">TRANSFER & PROMOTE</h5>\r\n                                                <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                              </div>\r\n                                            </app-card>\r\n                                          </div>\r\n\r\n\r\n                                          <div class=\"col-sm-3\">\r\n                                              <app-card>\r\n                                                <div class=\"text-center my-report-container\">\r\n                                                  <div class=\"circle-icon-holder\">           \r\n                                                      <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                                  </div>\r\n                                                  <h5 class=\"mt-3\">LABOUR HOUR REPORT</h5>\r\n                                                  <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                                </div>\r\n                                              </app-card>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <app-card>\r\n                                                  <div class=\"text-center my-report-container\">\r\n                                                    <div class=\"circle-icon-holder\">              \r\n                                                        <img src=\"assets/images/icon-board.png\" alt=\"board-icon\">\r\n                                                    </div>\r\n                                                    <h5 class=\"mt-3\">TOP 10 OT REPORT</h5>\r\n                                                    <p class=\"mt-2\">There are many variations of passages of Lorem Ipsum available</p>\r\n                                                  </div>\r\n                                                </app-card>\r\n                                              </div>\r\n              \r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>            \r\n\r\n"

/***/ }),

/***/ "./src/app/theme/reports/my-reports/my-reports.component.scss":
/***/ (function(module, exports) {

module.exports = ".circle-icon-holder {\n  width: 70px;\n  height: 70px;\n  background: rgba(0, 173, 255, 0.54);\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0px auto; }\n\n.my-report-container h5 {\n  font-size: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/theme/reports/my-reports/my-reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyReportsComponent; });
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

var MyReportsComponent = /** @class */ (function () {
    function MyReportsComponent() {
    }
    MyReportsComponent.prototype.ngOnInit = function () {
    };
    MyReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-reports',
            template: __webpack_require__("./src/app/theme/reports/my-reports/my-reports.component.html"),
            styles: [__webpack_require__("./src/app/theme/reports/my-reports/my-reports.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyReportsComponent);
    return MyReportsComponent;
}());



/***/ }),

/***/ "./src/app/theme/reports/reports-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_reports_employee_reports_component__ = __webpack_require__("./src/app/theme/reports/employee-reports/employee-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_reports_my_reports_component__ = __webpack_require__("./src/app/theme/reports/my-reports/my-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__insurence_report_insurence_report_component__ = __webpack_require__("./src/app/theme/reports/insurence-report/insurence-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_insurence_report_my_insurence_report_component__ = __webpack_require__("./src/app/theme/reports/my-insurence-report/my-insurence-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__employee_reports_employee_reports_component__["a" /* EmployeeReportsComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__employee_reports_employee_reports_component__["a" /* EmployeeReportsComponent */]
    },
    {
        path: 'employee-reports',
        component: __WEBPACK_IMPORTED_MODULE_2__employee_reports_employee_reports_component__["a" /* EmployeeReportsComponent */]
    },
    {
        path: 'my-reports',
        component: __WEBPACK_IMPORTED_MODULE_3__my_reports_my_reports_component__["a" /* MyReportsComponent */]
    },
    {
        path: 'insurence-report',
        component: __WEBPACK_IMPORTED_MODULE_4__insurence_report_insurence_report_component__["a" /* InsurenceReportComponent */]
    },
    {
        path: 'my-insurence-report',
        component: __WEBPACK_IMPORTED_MODULE_5__my_insurence_report_my_insurence_report_component__["a" /* MyInsurenceReportComponent */]
    },
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_routing_module__ = __webpack_require__("./src/app/theme/reports/reports-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_reports_employee_reports_component__ = __webpack_require__("./src/app/theme/reports/employee-reports/employee-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_reports_my_reports_component__ = __webpack_require__("./src/app/theme/reports/my-reports/my-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__insurence_report_insurence_report_component__ = __webpack_require__("./src/app/theme/reports/insurence-report/insurence-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_insurence_report_my_insurence_report_component__ = __webpack_require__("./src/app/theme/reports/my-insurence-report/my-insurence-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__reports_routing_module__["a" /* ReportsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__employee_reports_employee_reports_component__["a" /* EmployeeReportsComponent */], __WEBPACK_IMPORTED_MODULE_7__my_reports_my_reports_component__["a" /* MyReportsComponent */], __WEBPACK_IMPORTED_MODULE_8__insurence_report_insurence_report_component__["a" /* InsurenceReportComponent */], __WEBPACK_IMPORTED_MODULE_9__my_insurence_report_my_insurence_report_component__["a" /* MyInsurenceReportComponent */]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

});
//# sourceMappingURL=reports.module.chunk.js.map