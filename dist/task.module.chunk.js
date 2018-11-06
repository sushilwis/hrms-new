webpackJsonp(["task.module"],{

/***/ "./src/app/theme/task/my-task/my-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/task']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  My Task\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">  \r\n            \r\n              <a class=\"btn btn-sm bg-dark float-right header-button text-white\" [routerLink]=\"['/task']\">\r\n                <i></i>\r\n                My Task\r\n              </a>\r\n            \r\n            <a class=\"btn btn-light float-right btn-sm header-button\" [routerLink]=\"['/task/requests']\">\r\n              <i></i>\r\n              Requests\r\n            </a>\r\n\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12 body-top-margin\">\r\n\r\n            <div class=\"row\">\r\n                  <div class=\"col-sm-7\"></div>\r\n  \r\n                  <div class=\"col-md-3\">\r\n                      <div class=\"form-group has-feedback has-search\">\r\n                        <i class=\"fa fa-search form-control-feedback\"></i>\r\n                        <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control shadow border-rm\" placeholder=\"Search\">\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-2\">\r\n                    <a class=\"btn btn-primary btn-sm pull-right header-button\" [routerLink]=\"['/task/new-task']\" (click)=\"modalDefault.show()\">\r\n                      New Task\r\n                    </a>\r\n                  </div>\r\n            </div>\r\n\r\n\r\n            <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\r\n  \r\n              <ngx-datatable-column name=\"Sl No.\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  001\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column name=\"Task Title\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  Presentation\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <!-- <ngx-datatable-column name=\"End Date\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  10/02/2018\r\n                </ng-template>\r\n              </ngx-datatable-column> -->\r\n\r\n              <!-- <ngx-datatable-column name=\"Unit\" [width]=\"110\"></ngx-datatable-column> -->\r\n              <ngx-datatable-column name=\"Status\" [width]=\"110\"></ngx-datatable-column>\r\n\r\n              <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <button type=\"button\" class=\"btn btn-success btn-sm datatable-button\" style=\"margin-left: 0px !important;\">Download</button>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <a>\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn header-button\" style=\"margin-left: 0px !important;\">View</button>\r\n                  </a>  \r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div> \r\n\r\n\r\n\r\n\r\n\r\n<app-modal-basic #modalDefault>\r\n    <div class=\"app-modal-header\">\r\n      <h4 class=\"modal-title\">\r\n        New Task\r\n      </h4>\r\n      <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n  \r\n  \r\n      <form action=\"javascript:\">\r\n        <!-- <div class=\"form-group row\">\r\n          <label class=\"col-sm-3 col-form-label\">Code</label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-3 col-form-label\">Short Name</label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-3 col-form-label\">Long Name</label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\">\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-sm-3\">\r\n              <p>Attachments*</p>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"upload-btn-wrapper\">\r\n                <button class=\"btn btn-primary upload-button\">Choose File</button>\r\n                <input type=\"file\" name=\"myfile\" />\r\n              </div>                                    \r\n            </div>\r\n        </div>\r\n      </form>\r\n  \r\n  \r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n      <!-- <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDefault.hide()\">Close</button> -->\r\n      <button type=\"button\" class=\"btn btn-success ripple light header-button\">Submit</button>\r\n    </div>\r\n  </app-modal-basic>\r\n"

/***/ }),

/***/ "./src/app/theme/task/my-task/my-task.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/task/my-task/my-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTaskComponent; });
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

var MyTaskComponent = /** @class */ (function () {
    function MyTaskComponent() {
        this.rows = [
            { status: 'Aproved' },
            { status: 'Aproved' },
            { status: 'Aproved' }
        ];
    }
    MyTaskComponent.prototype.ngOnInit = function () {
    };
    MyTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-task',
            template: __webpack_require__("./src/app/theme/task/my-task/my-task.component.html"),
            styles: [__webpack_require__("./src/app/theme/task/my-task/my-task.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyTaskComponent);
    return MyTaskComponent;
}());



/***/ }),

/***/ "./src/app/theme/task/presentation/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/task/requests']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Presentation\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">  \r\n            \r\n            <a class=\"btn btn-danger btn-sm float-right header-button text-white\">\r\n              <i></i>\r\n              Reject\r\n            </a>\r\n            \r\n            <a class=\"btn btn-success float-right btn-sm header-button text-white\">\r\n              <i></i>\r\n              Approve\r\n            </a>\r\n\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12 body-top-margin\">\r\n\r\n              <app-card>\r\n\r\n                  <div class=\"row mb-2\">\r\n                    <div class=\"col-sm-2\">\r\n                      <p>Employee Name</p> \r\n                    </div>\r\n      \r\n                    <div class=\"col-sm-10\">\r\n                      <p>John Doe</p>\r\n                    </div>\r\n                  </div>\r\n      \r\n                  <!-- <div class=\"row mb-1\">\r\n                      <div class=\"col-sm-2\">\r\n                        <p>Application Type</p> \r\n                      </div>\r\n        \r\n                      <div class=\"col-sm-10\">\r\n                        <p>Personal Leave</p>\r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"row mb-1\">\r\n                      <div class=\"col-sm-2\">\r\n                        <p>Leave</p> \r\n                      </div>\r\n        \r\n                      <div class=\"col-sm-10\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                              <input type=\"date\" class=\"form-control\">\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                              <input type=\"date\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"row mb-1\">\r\n                      <div class=\"col-sm-2\">\r\n                        <p>Applied on</p> \r\n                      </div>\r\n        \r\n                      <div class=\"col-sm-10\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                              <input type=\"date\" class=\"form-control\">\r\n                          </div>\r\n                          <div class=\"col-sm-2\"></div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"row mb-1\">\r\n                      <div class=\"col-sm-2\">\r\n                        <p>Remark</p> \r\n                      </div>\r\n        \r\n                      <div class=\"col-sm-10\">\r\n                        <p>Hospitalize due to dengue</p> \r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"row mb-1\">\r\n                      <div class=\"col-sm-2\">\r\n                        <p>Substitute</p> \r\n                      </div>\r\n        \r\n                      <div class=\"col-sm-10\">\r\n                        <p>xyz abc</p> \r\n                      </div>\r\n                  </div> -->\r\n      \r\n                  <div class=\"row mb-2\">\r\n                      <div class=\"col-sm-2\">\r\n                        <p>Attachments*</p> \r\n                      </div>\r\n        \r\n                      <div class=\"col-sm-2\">\r\n                        <p>hospitalreports.pdf</p> \r\n                      </div>\r\n      \r\n                      <div class=\"col-sm-2\">\r\n                          <a class=\"btn btn-success btn-sm header-button\">                     Download\r\n                          </a> \r\n                      </div>\r\n                  </div>\r\n      \r\n      \r\n                  <div class=\"row mb-1\">\r\n                      <div class=\"col-sm-2\">\r\n                        <p>My Remark</p> \r\n                      </div>\r\n        \r\n                      <div class=\"col-sm-4\">\r\n                        <textarea name=\"\" cols=\"35\"></textarea> \r\n                      </div>\r\n                  </div>\r\n      \r\n                </app-card>\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>            "

/***/ }),

/***/ "./src/app/theme/task/presentation/presentation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/task/presentation/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
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

var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__("./src/app/theme/task/presentation/presentation.component.html"),
            styles: [__webpack_require__("./src/app/theme/task/presentation/presentation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/theme/task/task-requests/task-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/task']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Task Requests\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\">  \r\n            \r\n              <a class=\"btn btn-light btn-sm float-right header-button\" [routerLink]=\"['/task']\">\r\n                <i></i>\r\n                My Task\r\n              </a>\r\n            \r\n            <a class=\"btn btn-sm bg-dark float-right header-button  text-white\" [routerLink]=\"['/task/requests']\">\r\n              <i></i>\r\n              Requests\r\n            </a>\r\n\r\n          </div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12 body-top-margin\">\r\n\r\n            <div class=\"row\">\r\n                  <div class=\"col-sm-9\"></div>\r\n  \r\n                  <div class=\"col-md-3\">\r\n                      <div class=\"form-group has-feedback has-search\">\r\n                        <i class=\"fa fa-search form-control-feedback\"></i>\r\n                        <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control shadow border-rm\" placeholder=\"Search\">                        \r\n                      </div>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"col-md-2\">\r\n                    <a class=\"btn btn-primary btn-sm pull-right header-button\" [routerLink]=\"['/task/new-task']\">\r\n                    <i></i>\r\n                      New Task\r\n                    </a>\r\n                  </div> -->\r\n            </div>\r\n\r\n\r\n            <ngx-datatable class=\"data-table fullscreen\" [columnMode]=\"'force'\" [scrollbarH]=\"true\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"0\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\r\n  \r\n              <ngx-datatable-column name=\"Sl No.\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  001\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column name=\"Task Title\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  Presentation\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <!-- <ngx-datatable-column name=\"End Date\" [width]=\"120\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  10/02/2018\r\n                </ng-template>\r\n              </ngx-datatable-column> -->\r\n\r\n              <!-- <ngx-datatable-column name=\"Unit\" [width]=\"110\"></ngx-datatable-column> -->\r\n              <ngx-datatable-column name=\"Status\" [width]=\"110\"></ngx-datatable-column>\r\n\r\n              <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <button type=\"button\" class=\"btn btn-success btn-sm datatable-button\" style=\"margin-left: 0px !important;\">Download</button>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column [width]=\"100\" [sortable]=\"false\" style=\"width: 15% !important;\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <a [routerLink]=\"['/task/presentation']\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm datatable-button table-action-btn header-button\" style=\"margin-left: 0px !important;\">View</button>\r\n                  </a>  \r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>            \r\n\r\n"

/***/ }),

/***/ "./src/app/theme/task/task-requests/task-requests.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/task/task-requests/task-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskRequestsComponent; });
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

var TaskRequestsComponent = /** @class */ (function () {
    function TaskRequestsComponent() {
        this.rows = [
            { status: 'Aproved' },
            { status: 'Aproved' },
            { status: 'Aproved' }
        ];
    }
    TaskRequestsComponent.prototype.ngOnInit = function () {
    };
    TaskRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-requests',
            template: __webpack_require__("./src/app/theme/task/task-requests/task-requests.component.html"),
            styles: [__webpack_require__("./src/app/theme/task/task-requests/task-requests.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskRequestsComponent);
    return TaskRequestsComponent;
}());



/***/ }),

/***/ "./src/app/theme/task/task-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_task_my_task_component__ = __webpack_require__("./src/app/theme/task/my-task/my-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_requests_task_requests_component__ = __webpack_require__("./src/app/theme/task/task-requests/task-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presentation_presentation_component__ = __webpack_require__("./src/app/theme/task/presentation/presentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__my_task_my_task_component__["a" /* MyTaskComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__my_task_my_task_component__["a" /* MyTaskComponent */]
    },
    {
        path: 'my-task',
        component: __WEBPACK_IMPORTED_MODULE_2__my_task_my_task_component__["a" /* MyTaskComponent */]
    },
    {
        path: 'requests',
        component: __WEBPACK_IMPORTED_MODULE_3__task_requests_task_requests_component__["a" /* TaskRequestsComponent */]
    },
    {
        path: 'presentation',
        component: __WEBPACK_IMPORTED_MODULE_4__presentation_presentation_component__["a" /* PresentationComponent */]
    },
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/task/task.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_routing_module__ = __webpack_require__("./src/app/theme/task/task-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_task_my_task_component__ = __webpack_require__("./src/app/theme/task/my-task/my-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_requests_task_requests_component__ = __webpack_require__("./src/app/theme/task/task-requests/task-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__presentation_presentation_component__ = __webpack_require__("./src/app/theme/task/presentation/presentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__task_routing_module__["a" /* TaskRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__my_task_my_task_component__["a" /* MyTaskComponent */], __WEBPACK_IMPORTED_MODULE_7__task_requests_task_requests_component__["a" /* TaskRequestsComponent */], __WEBPACK_IMPORTED_MODULE_8__presentation_presentation_component__["a" /* PresentationComponent */]]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ })

});
//# sourceMappingURL=task.module.chunk.js.map