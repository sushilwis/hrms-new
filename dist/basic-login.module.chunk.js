webpackJsonp(["basic-login.module"],{

/***/ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_login_component__ = __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_login_component__["a" /* BasicLoginComponent */],
        data: {
            title: 'Simple Login'
        }
    }
];
var BasicLoginRoutingModule = /** @class */ (function () {
    function BasicLoginRoutingModule() {
    }
    BasicLoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicLoginRoutingModule);
    return BasicLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body bg-primary\" style=\"height: 100vh;\">\r\n    <div class=\"body-pad\" style=\"display: flex; align-items: center; justify-content: center; height: 100%;  background: url(assets/images/workplace.png) no-repeat; background-position: center; background-size: cover;\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n\r\n            <div class=\"content-center\">\r\n              <div class=\"bg-white p-4 text-dark rounded\" style=\"width: 400px\">\r\n                <div class=\"row m-2\">\r\n\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <img src=\"assets/images/logo-cf.png\" alt=\"logo\">\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <h4 class=\"text-right\">Login</h4>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Company code\">\r\n                  </div>\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n                  </div>\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Password\">\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12\">\r\n                      <div class=\"row\">\r\n\r\n                        <div class=\"col-sm-6 mt-3\">\r\n                          <!-- <input type=\"checkbox\" class=\"form-control\">\r\n                          <label for=\"\">Remember me</label> -->\r\n                          <label class=\"container-checkbox f-12\"> Remember me\r\n                            <input type=\"checkbox\">\r\n                            <span class=\"checkmark-checkbox\"></span>\r\n                          </label>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6 mt-3 text-right\">\r\n                          <a>Forgot Password ?</a>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6 mt-2\">\r\n                          <p class=\"f-12\">Not Registered Yet? <a [routerLink]=\"['/profile/sign-up']\">Sign up</a></p>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6 mt-2\">\r\n                          <button class=\"btn btn-primary rounded pull-right\">Login</button>\r\n                        </div>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>            \r\n\r\n"

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLoginComponent; });
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

var BasicLoginComponent = /** @class */ (function () {
    function BasicLoginComponent() {
    }
    BasicLoginComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    };
    BasicLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-login',
            template: __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicLoginComponent);
    return BasicLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function() { return BasicLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_login_component__ = __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_login_routing_module__ = __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicLoginModule = /** @class */ (function () {
    function BasicLoginModule() {
    }
    BasicLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_login_routing_module__["a" /* BasicLoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_login_component__["a" /* BasicLoginComponent */]]
        })
    ], BasicLoginModule);
    return BasicLoginModule;
}());



/***/ })

});
//# sourceMappingURL=basic-login.module.chunk.js.map