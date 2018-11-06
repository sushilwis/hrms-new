webpackJsonp(["social-reg.module"],{

/***/ "./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRegRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_reg_component__ = __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__social_reg_component__["a" /* SocialRegComponent */],
        data: {
            title: 'Social Registration'
        }
    }
];
var SocialRegRoutingModule = /** @class */ (function () {
    function SocialRegRoutingModule() {
    }
    SocialRegRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SocialRegRoutingModule);
    return SocialRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <form class=\"md-float-material form-material\">\r\n          <div class=\"text-center\">\r\n            <img src=\"assets/images/logo.png\" alt=\"logo.png\">\r\n          </div>\r\n          <div class=\"auth-box card\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-center txt-primary\">Sign up</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-6\">\r\n                  <a href=\"javascript:\" class=\"btn btn-facebook m-b-20 btn-block ripple light\"><i class=\"fa fa-facebook\"></i>facebook</a>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <a href=\"javascript:\" class=\"btn btn-twitter m-b-0 btn-block ripple light\"><i class=\"fa fa-twitter\"></i>twitter</a>\r\n                </div>\r\n              </div>\r\n              <p class=\"text-muted text-center p-b-5\">Sign up with your regular account</p>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"text\" name=\"user-name\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Choose Username</label>\r\n              </div>\r\n              <div class=\"form-group form-primary\">\r\n                <input type=\"text\" name=\"email\" class=\"form-control\" required=\"\">\r\n                <span class=\"form-bar\"></span>\r\n                <label class=\"float-label\">Your Email Address</label>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"password\" name=\"password\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Password</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"password\" name=\"confirm-password\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Confirm Password</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:\">Terms &amp; Conditions.</a></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block text-center m-b-20 ripple light\">Sign up now</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you.</p>\r\n                  <p class=\"text-inverse text-left\"><a [routerLink]=\"['/dashboard/default']\"><b>Back to website</b></a></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRegComponent; });
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

var SocialRegComponent = /** @class */ (function () {
    function SocialRegComponent() {
    }
    SocialRegComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    };
    SocialRegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-reg',
            template: __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialRegComponent);
    return SocialRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegModule", function() { return SocialRegModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_reg_component__ = __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_reg_routing_module__ = __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialRegModule = /** @class */ (function () {
    function SocialRegModule() {
    }
    SocialRegModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__social_reg_routing_module__["a" /* SocialRegRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_reg_component__["a" /* SocialRegComponent */]]
        })
    ], SocialRegModule);
    return SocialRegModule;
}());



/***/ })

});
//# sourceMappingURL=social-reg.module.chunk.js.map