webpackJsonp(["auth.module"],{

/***/ "./src/app/theme/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configure_configure_component__ = __webpack_require__("./src/app/theme/auth/configure/configure.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        data: {
            title: 'Authentication',
            status: false
        },
        children: [
            {
                path: 'login',
                loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'registration',
                loadChildren: './registration/registration.module#RegistrationModule'
            },
            {
                path: 'forgot',
                loadChildren: './forgot/forgot.module#ForgotModule'
            },
            {
                path: 'lock-screen',
                loadChildren: './lock-screen/lock-screen.module#LockScreenModule'
            },
            {
                path: 'configure',
                component: __WEBPACK_IMPORTED_MODULE_2__configure_configure_component__["a" /* ConfigureComponent */]
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__ = __webpack_require__("./src/app/theme/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configure_configure_component__ = __webpack_require__("./src/app/theme/auth/configure/configure.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__configure_configure_component__["a" /* ConfigureComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/configure/configure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body bg-primary\" style=\"height: 100vh;\">\r\n    <div class=\"body-pad\" style=\"display: flex; align-items: center; justify-content: center; height: 100%;  background: url(assets/images/workplace.png) no-repeat; background-position: center; background-size: cover;\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n\r\n            <div class=\"content-center\">\r\n              <div class=\"bg-white p-4 text-dark rounded\" style=\"width: 400px\">\r\n                <div class=\"row m-2\">\r\n\r\n                  <div class=\"col-sm-12\">                    \r\n                    <h4 class=\"text-center\">Configure</h4>                    \r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\">\r\n                  </div>\r\n                  <div class=\"col-sm-12 mt-3\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Your Company Code e.g TTT\">\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12 mt-2\">\r\n\r\n                      <div class=\"form-group row\">\r\n                          <label class=\"col-sm-4 col-form-label font mb-0\">Select Services</label>                          \r\n                          <div class=\"col-sm-8\">\r\n                            <label class=\"container-checkbox font mt-2 mb-0\">Payroll Management\r\n                                <input type=\"checkbox\" checked=\"checked\">\r\n                                <span class=\"checkmark-checkbox\"></span>\r\n                            </label>\r\n                          </div>\r\n\r\n                          <label class=\"col-sm-4 col-form-label mb-0 mt-0\"></label>\r\n                          <div class=\"col-sm-8 mb-0 mt-0\">\r\n                              <label class=\"container-checkbox font\">Time Management\r\n                                  <input type=\"checkbox\" checked=\"checked\">\r\n                                  <span class=\"checkmark-checkbox\"></span>\r\n                              </label>                \r\n                          </div>\r\n\r\n                          <label class=\"col-sm-4 col-form-label mt-0\"></label>\r\n                          <div class=\"col-sm-8 mt-0\">\r\n                              <label class=\"container-checkbox font mt-1\">Leave Management\r\n                                  <input type=\"checkbox\" checked=\"checked\">\r\n                                  <span class=\"checkmark-checkbox\"></span>\r\n                              </label>                \r\n                          </div>\r\n                      </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"mt-2\">\r\n                      <button class=\"btn btn-success btn-block rounded text-white\">Proceed</button>\r\n                    </div>                   \r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>            \r\n\r\n"

/***/ }),

/***/ "./src/app/theme/auth/configure/configure.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/configure/configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureComponent; });
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

var ConfigureComponent = /** @class */ (function () {
    function ConfigureComponent() {
    }
    ConfigureComponent.prototype.ngOnInit = function () {
    };
    ConfigureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-configure',
            template: __webpack_require__("./src/app/theme/auth/configure/configure.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/configure/configure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigureComponent);
    return ConfigureComponent;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map