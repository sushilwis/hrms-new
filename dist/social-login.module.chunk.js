webpackJsonp(["social-login.module"],{

/***/ "./src/app/theme/auth/login/social-login/social-login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_login_component__ = __webpack_require__("./src/app/theme/auth/login/social-login/social-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__social_login_component__["a" /* SocialLoginComponent */],
        data: {
            title: 'Social Login'
        }
    }
];
var SocialLoginRoutingModule = /** @class */ (function () {
    function SocialLoginRoutingModule() {
    }
    SocialLoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SocialLoginRoutingModule);
    return SocialLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <form class=\"md-float-material form-material\" action=\"javascript:\">\r\n          <div class=\"text-center\">\r\n            <img src=\"assets/images/logo.png\" alt=\"logo.png\">\r\n          </div>\r\n          <div class=\"auth-box card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign In</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-facebook m-b-20 btn-block ripple light\"><i class=\"fa fa-facebook\"></i>facebook</button>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <button type=\"button\" class=\"btn btn-twitter m-b-20 btn-block ripple light\"><i class=\"fa fa-twitter\"></i>twitter</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-muted text-center p-b-5\">Sign in with your regular account</p>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"text\" name=\"user-name\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Username</label>\r\n              </div>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"password\" name=\"password\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Password</label>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"forgot-phone text-right float-right\">\r\n                    <a [routerLink]=\"['/auth/forgot']\" class=\"text-right f-w-600\"> Forgot Password?</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block text-center m-b-20 ripple light\">LOGIN</button>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-inverse text-left\">Don't have an account?<a [routerLink]=\"['/auth/registration/simple']\"> <b>Register here </b></a>for free!</p>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- end of form -->\r\n      </div>\r\n      <!-- Authentication card end -->\r\n    </div>\r\n    <!-- end of col-sm-12 -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLoginComponent; });
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

var SocialLoginComponent = /** @class */ (function () {
    function SocialLoginComponent() {
    }
    SocialLoginComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    };
    SocialLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-login',
            template: __webpack_require__("./src/app/theme/auth/login/social-login/social-login.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/login/social-login/social-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialLoginComponent);
    return SocialLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/social-login/social-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function() { return SocialLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_login_component__ = __webpack_require__("./src/app/theme/auth/login/social-login/social-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_login_routing_module__ = __webpack_require__("./src/app/theme/auth/login/social-login/social-login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialLoginModule = /** @class */ (function () {
    function SocialLoginModule() {
    }
    SocialLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__social_login_routing_module__["a" /* SocialLoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_login_component__["a" /* SocialLoginComponent */]]
        })
    ], SocialLoginModule);
    return SocialLoginModule;
}());



/***/ })

});
//# sourceMappingURL=social-login.module.chunk.js.map