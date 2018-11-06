webpackJsonp(["dashboard.module"],{

/***/ "./src/app/theme/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hr_dashboard_hr_dashboard_component__ = __webpack_require__("./src/app/theme/dashboard/hr-dashboard/hr-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directory_directory_component__ = __webpack_require__("./src/app/theme/dashboard/directory/directory.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__hr_dashboard_hr_dashboard_component__["a" /* HrDashboardComponent */]
    },
    {
        path: 'directory',
        component: __WEBPACK_IMPORTED_MODULE_3__directory_directory_component__["a" /* DirectoryComponent */]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__("./src/app/theme/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hr_dashboard_hr_dashboard_component__ = __webpack_require__("./src/app/theme/dashboard/hr-dashboard/hr-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directory_directory_component__ = __webpack_require__("./src/app/theme/dashboard/directory/directory.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__hr_dashboard_hr_dashboard_component__["a" /* HrDashboardComponent */], __WEBPACK_IMPORTED_MODULE_6__directory_directory_component__["a" /* DirectoryComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/directory/directory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"page-header header-boxshadow\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n  \r\n          <div class=\"col-md-7\">\r\n            <div class=\"page-header-title\">\r\n              <span>\r\n                <h4 class=\"m-b-10 headtext\">\r\n                  <a class=\"\" [routerLink]=\"['/dashboard']\">\r\n                    <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  Directory\r\n                </h4>\r\n              </span>\r\n            </div>\r\n          </div>  \r\n  \r\n          <div class=\"col-md-5\"></div>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <div class=\"page-body\">\r\n    <div class=\"container body-pad\">\r\n      <div class=\"row\">\r\n  \r\n        <div class=\"col-sm-3 offset-sm-9 body-top-margin\">\r\n            <div class=\"form-group has-feedback has-search\">\r\n                <i class=\"fa fa-search form-control-feedback\"></i>\r\n                <input type=\"text\" [(ngModel)]=\"filterQuery\" class=\"form-control shadow border-rm\" placeholder=\"Search\">\r\n            </div>\r\n        </div>\r\n  \r\n        <div class=\"col-sm-4\">\r\n          <app-card>\r\n              <div class=\"client-detail\">\r\n                <div class=\"row align-items-center\" [routerLink]=\"['/profile']\">\r\n                  <div class=\"col-sm-5 client-profile\">\r\n                    <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                  </div>\r\n                  <div class=\"col-sm-7 client-contain\">\r\n                      <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                      <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                      <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                  </div>\r\n                </div>  \r\n              </div>\r\n          </app-card>\r\n        </div>\r\n  \r\n        <div class=\"col-sm-4\">\r\n          <app-card>\r\n              <div class=\"client-detail\">\r\n                  <div class=\"row align-items-center no-gutters\" [routerLink]=\"['/profile']\">\r\n                    <div class=\"col-sm-5 client-profile\">\r\n                      <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                    </div>\r\n                    <div class=\"col-sm-7 client-contain\">\r\n                        <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                        <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                        <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                    </div>\r\n                  </div>  \r\n              </div>\r\n          </app-card>\r\n        </div>\r\n  \r\n        <div class=\"col-sm-4\">\r\n          <app-card>\r\n              <div class=\"client-detail\">\r\n                  <div class=\"row align-items-center no-gutters\">\r\n                    <div class=\"col-sm-5 client-profile\">\r\n                      <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                    </div>\r\n                    <div class=\"col-sm-7 client-contain\">\r\n                        <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                        <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                        <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                    </div>\r\n                  </div>  \r\n                </div>\r\n          </app-card>\r\n        </div>\r\n  \r\n        <div class=\"col-sm-4\">\r\n            <app-card>\r\n                <div class=\"client-detail\">\r\n                  <div class=\"row align-items-center no-gutters\">\r\n                    <div class=\"col-sm-5 client-profile\">\r\n                      <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                    </div>\r\n                    <div class=\"col-sm-7 client-contain\">\r\n                        <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                        <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                        <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                    </div>\r\n                  </div>  \r\n                </div>\r\n            </app-card>\r\n          </div>\r\n    \r\n          <div class=\"col-sm-4\">\r\n            <app-card>\r\n                <div class=\"client-detail\">\r\n                    <div class=\"row align-items-center no-gutters\">\r\n                      <div class=\"col-sm-5 client-profile\">\r\n                        <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"col-sm-7 client-contain\">\r\n                          <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                        <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                        <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                      </div>\r\n                    </div>  \r\n                </div>\r\n            </app-card>\r\n          </div>\r\n    \r\n          <div class=\"col-sm-4\">\r\n            <app-card>\r\n                <div class=\"client-detail\">\r\n                    <div class=\"row align-items-center no-gutters\">\r\n                      <div class=\"col-sm-5 client-profile\">\r\n                        <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"col-sm-7 client-contain\">\r\n                        <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                        <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                        <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                      </div>\r\n                    </div>  \r\n                  </div>\r\n            </app-card>\r\n          </div>\r\n  \r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/theme/dashboard/directory/directory.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/dashboard/directory/directory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryComponent; });
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

var DirectoryComponent = /** @class */ (function () {
    function DirectoryComponent() {
    }
    DirectoryComponent.prototype.ngOnInit = function () {
    };
    DirectoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-directory',
            template: __webpack_require__("./src/app/theme/dashboard/directory/directory.component.html"),
            styles: [__webpack_require__("./src/app/theme/dashboard/directory/directory.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryComponent);
    return DirectoryComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/hr-dashboard/hr-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"page-header header-boxshadow\">\r\n    <div class=\"page-block\">\r\n      <div class=\"row align-items-center\">\r\n\r\n        <div class=\"col-md-7\">\r\n          <div class=\"page-header-title\">\r\n            <span>\r\n              <h4 class=\"m-b-10 headtext\">\r\n                <!-- <a class=\"\">\r\n                  <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                </a> -->\r\n                Dashboard\r\n              </h4>\r\n            </span>\r\n          </div>\r\n        </div>  \r\n\r\n        <div class=\"col-md-5\"></div>  \r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n  <div class=\"container body-pad\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 body-top-margin\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-7\">\r\n                <!-- <div class=\"client-detail\"> -->\r\n                    <div class=\"row align-items-center\">\r\n                      <div class=\"col-sm-2 client-profile\">\r\n                        <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"col-sm-10 client-contain\">\r\n                        <h6 class=\"mb-2\">John Doe</h6>\r\n                        <h6 class=\"mb-2\">XYZ123</h6>\r\n                        <h6 class=\"mb-2\">HR</h6>\r\n                      </div>\r\n                    </div>\r\n                <!-- </div> -->\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3 count-content\">\r\n                    <div class=\"count\">\r\n                        <h3>05</h3>\r\n                      </div>  \r\n                  <p>Leaves Taken</p>\r\n                </div>\r\n                <div class=\"col-sm-3 count-content\">\r\n                  <div class=\"count\">\r\n                    <h3>03</h3>\r\n                  </div>\r\n                  <p>Leaves Balance</p>\r\n                </div>\r\n                <div class=\"col-sm-3 count-content\">\r\n                    <div class=\"progress blue\">\r\n                        <div class=\"progress-bar bg-c-blue\" [style.width]=\"'75%'\">70%</div>\r\n                      <!-- <h3>05</h3> -->\r\n                    </div>\r\n                  <p>My Profile</p>\r\n                </div>\r\n                <div class=\"col-sm-3 count-content\">\r\n                  <div class=\"progress green\">\r\n                    <div class=\"progress-bar bg-c-green\" [style.width]=\"'70%'\">70%</div>\r\n                  </div>\r\n                  <p>Company Profile</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-sm-7 mt-4\">\r\n              <app-card>\r\n                <p class=\"float-left\">Directory</p>\r\n                <p class=\"float-right\">\r\n                  <a [routerLink]=\"['/dashboard/directory']\" class=\"btn-light btn-sm table-action-btn\">View All</a>\r\n                </p>\r\n              </app-card>\r\n            </div>\r\n\r\n            <div class=\"col-sm-5 mt-4\">\r\n              <app-card>\r\n                <p class=\"float-left\">Check in/Check out</p>\r\n              </app-card>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-7\">\r\n                <app-card>\r\n                  <div class=\"text-center float-left\" style=\"width: 20%; padding-bottom: 18px !important;\">\r\n                      <div class=\"client-profile\">\r\n                          <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"client-contain\">\r\n                          <h6 class=\"mt-2\">John Doe</h6>\r\n                          <h6 class=\"mt-2\">Manager</h6>\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"text-center float-left\" style=\"width: 20%; padding-bottom: 18px !important;\">\r\n                      <div class=\"client-profile\">\r\n                          <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"client-contain\">\r\n                          <h6 class=\"mt-2\">John Doe</h6>\r\n                          <h6 class=\"mt-2\">UX Designer</h6>\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"text-center float-left\" style=\"width: 20%; padding-bottom: 18px !important;\">\r\n                      <div class=\"client-profile\">\r\n                          <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"client-contain\">\r\n                          <h6 class=\"mt-2\">John Doe</h6>\r\n                          <h6 class=\"mt-2\">Accountant</h6>\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"text-center float-left\" style=\"width: 20%; padding-bottom: 18px !important;\">\r\n                      <div class=\"client-profile\">\r\n                          <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"client-contain\">\r\n                          <h6 class=\"mt-2\">John Doe</h6>\r\n                          <h6 class=\"mt-2\">Sales Manager</h6>\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"text-center float-left\" style=\"width: 20%; padding-bottom: 18px !important;\">\r\n                      <div class=\"client-profile\">\r\n                          <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                      </div>\r\n                      <div class=\"client-contain\">\r\n                          <h6 class=\"mt-2\">John Doe</h6>\r\n                          <h6 class=\"mt-2\">UI Designer</h6>\r\n                      </div>\r\n                  </div>\r\n                </app-card>\r\n            </div>\r\n\r\n  \r\n            <div class=\"col-sm-5 text-center mx-auto\">\r\n             \r\n                <div style=\"background:#fff; min-height:184px; border-radius:5px; box-shadow: 0px 1px 3px 1px #d9d9d9; padding: 20px 0;\">\r\n                  \r\n                  <h5 class=\"mt-0 h5\" id=\"date-container\"></h5>\r\n\r\n                  <div id=\"time-container\" class=\"container h3\">00 : 00 : 00</div>\r\n\r\n\r\n                  <div class=\"mt-3\">                      \r\n                      <a class=\"btn btn-success btn-sm ml-1 header-button\" (click)=\"startTime()\" [ngClass]=\"{\r\n                        'btn-success':btnSuc === 'true',\r\n                        'btn-light':btnSuc === 'false'\r\n                      }\">\r\n                        Check-in\r\n                      </a>\r\n                      <a class=\"btn btn-light btn-sm ml-1 header-button\" (click)=\"stopTimer()\" [ngClass]=\"{\r\n                        'btn-success':btnSuc === 'false',\r\n                        'btn-light':btnSuc === 'true'\r\n                      }\">\r\n                        Check-out\r\n                      </a>\r\n                  </div>\r\n                </div>\r\n              \r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-7 mt-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <app-card>\r\n                        <p class=\"float-left\" style=\"margin-bottom:1.3rem !important;\">Important Links</p>\r\n                    </app-card>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <app-card>\r\n                        <p class=\"float-left\"  style=\"margin-bottom:1.3rem !important;\">Requests</p>\r\n                        <p>\r\n                          <a class=\"float-right btn-light btn-sm table-action-btn\" style=\"margin-top:-6px;\">View All</a>\r\n                        </p>\r\n                    </app-card>\r\n                </div>\r\n              </div>              \r\n            </div>\r\n\r\n            <div class=\"col-sm-5 mt-4\">\r\n              <app-card>\r\n                <p class=\"float-left\"  style=\"margin-bottom:1.3rem !important;\">Wishes</p>\r\n              </app-card>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-sm-7\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <app-card>\r\n                          <p class=\"import-links border-bottom\">\r\n                            <a> <i class=\"fas fa-link\"></i> Holiday List For 2018</a>\r\n                          </p>\r\n                          <p class=\"import-links border-bottom\">\r\n                            <a> <i class=\"fas fa-file\"></i> Understand Cloudforce HR</a>\r\n                          </p>\r\n                          <p class=\"import-links border-bottom\">\r\n                            <a> <i class=\"fas fa-link\"></i> Holiday List For 2018</a>\r\n                          </p>\r\n                          <p class=\"import-links\">\r\n                            <a> <i class=\"fas fa-file\"></i> Understand Cloudforce HR</a>\r\n                          </p>\r\n                      </app-card>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"request-height clearfix\" >\r\n                        <div class=\"request-height-child\">\r\n                         <p>John Doe has applied for leave.</p>\r\n                         <p>John Doe has applied for leave.</p>\r\n                         <p>John Doe requested for shift change.</p>\r\n                         <p>John Doe requested for shift change.</p>\r\n                         <p>Xyz abc has applied for leave.</p>\r\n                         <p>Xyz abc has applied for leave.</p>\r\n                         <p>John Doe requested for shift change.</p>\r\n                         <p>John Doe requested for shift change.</p>\r\n                         <p>Xyz abc has applied for leave.</p>                         \r\n                         <p>Xyz abc has applied for leave.</p>                         \r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>              \r\n            </div>\r\n  \r\n            <div class=\"col-sm-5\">\r\n                <app-card>\r\n                    <!-- <div class=\"client-detail\"> -->\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"label-icon\">\r\n                              <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-70 rounded\">                               \r\n                              <label class=\"badge badge-default badge-top-right \">\r\n                                  <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\r\n                              </label>\r\n                            </div>                     \r\n                          </div>\r\n                          <div class=\"col-sm-9 client-contain\">\r\n                              <h6 class=\"mb-2\">John Doe</h6>\r\n                              <h6 class=\"mb-2\">Work Anniversary</h6>\r\n                              <h6 class=\"mb-2\">16th Feb 2018</h6>\r\n                          </div>\r\n                        </div>  \r\n                    <!-- </div> -->\r\n\r\n                    <!-- <div class=\"client-detail\"> -->\r\n                        <div class=\"row align-items-center mt-4\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"label-icon\">\r\n                              <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-70 rounded\">\r\n                              <label class=\"badge badge-default badge-top-right\">\r\n                                  <i class=\"fa fa-birthday-cake\" aria-hidden=\"true\"></i>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-9 client-contain\">\r\n                              <h6 class=\"mb-2\">John Doe</h6>\r\n                              <h6 class=\"mb-2\">Birthday</h6>\r\n                              <h6 class=\"mb-2\">23th Feb 2018</h6>\r\n                          </div>\r\n                        </div>  \r\n                    <!-- </div> -->\r\n                </app-card>\r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n    </div> \r\n  </div>\r\n</div>       \r\n      \r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/hr-dashboard/hr-dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".count {\n  background: #ffffff;\n  padding: 10px;\n  border-radius: 8px;\n  -webkit-box-shadow: 0px 1px 5px #e0e0e0;\n          box-shadow: 0px 1px 5px #e0e0e0;\n  text-align: center; }\n\n.count-content p {\n  font-weight: 600;\n  margin: 10px 0; }\n\n.import-links {\n  padding: 8px 0;\n  margin: 0px !important;\n  color: #13b1f6;\n  font-size: 18px; }\n\n.import-links i {\n    margin-left: 10px; }\n\n.border-bottom {\n  border-bottom: 1px solid #999; }\n\n.request-height {\n  position: relative;\n  -webkit-box-shadow: 0px 1px 3px 1px #d9d9d9;\n          box-shadow: 0px 1px 3px 1px #d9d9d9; }\n\n.request-height p {\n    background: #eee;\n    margin-bottom: 5px;\n    padding: 5px;\n    font-size: 12px; }\n\n.request-height .request-height-child {\n    background: #fff;\n    padding: 20px 20px 0 20px;\n    max-height: 183px;\n    overflow-y: scroll;\n    -webkit-box-shadow: 0px 1px 3px 1px #d9d9d9;\n            box-shadow: 0px 1px 3px 1px #d9d9d9;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n\n.request-height::after {\n    display: block;\n    content: \"\";\n    height: 25px;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 100%;\n    background: white;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    -webkit-box-shadow: 0px 1px 3px 1px #d9d9d9;\n            box-shadow: 0px 1px 3px 1px #d9d9d9; }\n\n.progress {\n  height: 60px;\n  background-color: #ffffff;\n  color: #dddddd;\n  font-size: 22px;\n  -webkit-box-shadow: 0px 1px 5px #e0e0e0;\n          box-shadow: 0px 1px 5px #e0e0e0; }\n"

/***/ }),

/***/ "./src/app/theme/dashboard/hr-dashboard/hr-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HrDashboardComponent = /** @class */ (function () {
    function HrDashboardComponent() {
        this.btnSuc = null;
        this.btnDisable = true;
        this.timeStamp = null;
    }
    HrDashboardComponent.prototype.ngOnInit = function () {
        this.btnSuc = 'true';
        var now = __WEBPACK_IMPORTED_MODULE_1_moment__();
        this.currentDate = now.format('L');
        // localStorage.clear();
        this.countStartTime = 0;
        var stamp = localStorage.getItem('stamp');
        // console.log(stamp);
        if (stamp != null) {
            var current = __WEBPACK_IMPORTED_MODULE_1_moment__().unix();
            this.countStartTime = current - parseInt(stamp);
            var count_1 = this.countStartTime;
            this.btnDisable = false;
            this.btnSuc = 'false';
            var container = document.getElementById('time-container');
            this.countDown = setInterval(function () {
                container.innerHTML = __WEBPACK_IMPORTED_MODULE_1_moment__().hour(0).minute(0).second(count_1++).format('HH  :  mm  :  ss');
                // container.innerHTML = time;      
            }, 1000);
        }
        this.clock();
        // console.log(this.countStartTime);
    };
    HrDashboardComponent.prototype.getCheckInTime = function () {
        this.btnDisable = false;
        this.btnSuc = 'false';
        // var container = document.getElementById('time-container');
        // let count = this.countStartTime;
        this.timeStamp = __WEBPACK_IMPORTED_MODULE_1_moment__().unix();
        this.setToLocalStorage('checkInTime', this.timeStamp);
        // console.log(this.timeStamp);
        // this.countDown = setInterval(function(){
        //   // container.innerHTML = moment().hour(0).minute(0).second(count++).format('HH  :  mm  :  ss');
        //   container.innerHTML = moment().format('H:mm:ss');
        //   // container.innerHTML = time;      
        // }, 1000);
    };
    HrDashboardComponent.prototype.getCheckOutTime = function () {
        this.btnDisable = true;
        this.btnSuc = 'true';
        this.timeStamp = __WEBPACK_IMPORTED_MODULE_1_moment__().unix();
        this.setToLocalStorage('checkOutTime', this.timeStamp);
    };
    HrDashboardComponent.prototype.setToLocalStorage = function (key, val) {
        localStorage.setItem(key, val);
    };
    HrDashboardComponent.prototype.clock = function () {
        var timeContainer = document.getElementById('time-container');
        var dateContainer = document.getElementById('date-container');
        dateContainer.innerHTML = __WEBPACK_IMPORTED_MODULE_1_moment__().format('L');
        setInterval(function () {
            timeContainer.innerHTML = __WEBPACK_IMPORTED_MODULE_1_moment__().format('H:mm:ss');
        }, 1000);
        // container.innerHTML = moment().format('H:mm:ss');
        // $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
    };
    HrDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hr-dashboard',
            template: __webpack_require__("./src/app/theme/dashboard/hr-dashboard/hr-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/theme/dashboard/hr-dashboard/hr-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HrDashboardComponent);
    return HrDashboardComponent;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map