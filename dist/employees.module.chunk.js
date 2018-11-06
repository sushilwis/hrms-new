webpackJsonp(["employees.module"],{

/***/ "./src/app/theme/employees/employees-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/theme/employees/home/home.component.ts");
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
    }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/employees/employees.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employees_routing_module__ = __webpack_require__("./src/app/theme/employees/employees-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/theme/employees/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { CalendarModule } from 'angular-calendar';



var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__employees_routing_module__["a" /* EmployeesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_chips__["a" /* TagInputModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/theme/employees/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"page-header header-boxshadow\">\r\n    <div class=\"page-block\">\r\n      <div class=\"row align-items-center\">\r\n\r\n        <div class=\"col-md-7\">\r\n          <div class=\"page-header-title\">\r\n            <span>\r\n              <h4 class=\"m-b-10 headtext\">\r\n                <a class=\"\" [routerLink]=\"['/config/home']\">\r\n                  <i class=\"\" class=\"fa fa-chevron-left headbackbtn\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                Employees\r\n              </h4>\r\n            </span>\r\n          </div>\r\n        </div>  \r\n\r\n        <div class=\"col-md-5\"></div>  \r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"page-body\">\r\n  <div class=\"container body-pad\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-3 offset-sm-9 body-top-margin\">\r\n          <div class=\"form-group has-feedback has-search\">\r\n              <i class=\"fa fa-search form-control-feedback\"></i>\r\n              <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control shadow border-rm\" placeholder=\"Search\">\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <app-card>\r\n            <div class=\"client-detail\">\r\n              <div class=\"row align-items-center\" [routerLink]=\"['/profile']\">\r\n                <div class=\"col-sm-5 client-profile\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                </div>\r\n                <div class=\"col-sm-7 client-contain\">\r\n                    <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                    <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                    <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                </div>\r\n              </div>  \r\n            </div>\r\n        </app-card>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <app-card>\r\n            <div class=\"client-detail\">\r\n                <div class=\"row align-items-center no-gutters\" [routerLink]=\"['/profile']\">\r\n                  <div class=\"col-sm-5 client-profile\">\r\n                    <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                  </div>\r\n                  <div class=\"col-sm-7 client-contain\">\r\n                      <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                      <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                      <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                  </div>\r\n                </div>  \r\n            </div>\r\n        </app-card>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <app-card>\r\n            <div class=\"client-detail\">\r\n                <div class=\"row align-items-center no-gutters\">\r\n                  <div class=\"col-sm-5 client-profile\">\r\n                    <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                  </div>\r\n                  <div class=\"col-sm-7 client-contain\">\r\n                      <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                      <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                      <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                  </div>\r\n                </div>  \r\n              </div>\r\n        </app-card>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n          <app-card>\r\n              <div class=\"client-detail\">\r\n                <div class=\"row align-items-center no-gutters\">\r\n                  <div class=\"col-sm-5 client-profile\">\r\n                    <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                  </div>\r\n                  <div class=\"col-sm-7 client-contain\">\r\n                      <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                      <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                      <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                  </div>\r\n                </div>  \r\n              </div>\r\n          </app-card>\r\n        </div>\r\n  \r\n        <div class=\"col-sm-4\">\r\n          <app-card>\r\n              <div class=\"client-detail\">\r\n                  <div class=\"row align-items-center no-gutters\">\r\n                    <div class=\"col-sm-5 client-profile\">\r\n                      <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                    </div>\r\n                    <div class=\"col-sm-7 client-contain\">\r\n                        <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                      <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                      <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                    </div>\r\n                  </div>  \r\n              </div>\r\n          </app-card>\r\n        </div>\r\n  \r\n        <div class=\"col-sm-4\">\r\n          <app-card>\r\n              <div class=\"client-detail\">\r\n                  <div class=\"row align-items-center no-gutters\">\r\n                    <div class=\"col-sm-5 client-profile\">\r\n                      <img src=\"assets/images/avatar-4.jpg\" alt=\"\" class=\"img-90 rounded\">\r\n                    </div>\r\n                    <div class=\"col-sm-7 client-contain\">\r\n                      <h6 class=\"mb-2\">Name : John Doe</h6>\r\n                      <h6 class=\"mb-2\">Code : XYZ123</h6>\r\n                      <h6 class=\"mb-2\">Designation : Manager</h6>\r\n                    </div>\r\n                  </div>  \r\n                </div>\r\n          </app-card>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/employees/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/employees/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/theme/employees/home/home.component.html"),
            styles: [__webpack_require__("./src/app/theme/employees/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

});
//# sourceMappingURL=employees.module.chunk.js.map