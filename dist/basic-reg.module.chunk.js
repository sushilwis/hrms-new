webpackJsonp(["basic-reg.module"],{

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicRegRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_reg_component__ = __webpack_require__("./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_reg_component__["a" /* BasicRegComponent */],
        data: {
            title: 'Simple Registration'
        }
    }
];
var BasicRegRoutingModule = /** @class */ (function () {
    function BasicRegRoutingModule() {
    }
    BasicRegRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicRegRoutingModule);
    return BasicRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body bg-primary\" style=\"height: 100vh;\">\r\n    <div class=\"body-pad\" style=\"display: flex; align-items: center; justify-content: center; height: 100%; background: url(assets/images/signup-back-image.png) no-repeat; background-position: center; background-size: cover;\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n\r\n            <div class=\"content-center\">\r\n              <div class=\"bg-white p-4 text-dark rounded\" style=\"width: 400px\">\r\n                <div class=\"row m-2\">\r\n\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <img src=\"assets/images/logo-cf.png\" alt=\"logo\">\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <h4 class=\"text-right\">Sign Up</h4>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n                  </div>\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                  </div>\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n                  </div>\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-12 mt-2\">\r\n                    <div class=\"form-group row\">\r\n\r\n                      <div class=\"col-sm-3\">\r\n                          <label class=\"col-form-label\">Sign as</label>\r\n                      </div>                      \r\n\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"mt-2\" style=\"display: flex;\">\r\n                            <label class=\"container-radio\">Client\r\n                                <input type=\"radio\" checked=\"checked\" name=\"radio\">\r\n                                <span class=\"checkmark-radio\"></span>\r\n                            </label>\r\n                            <label class=\"container-radio\">CFHR Team\r\n                              <input type=\"radio\" checked=\"checked\" name=\"radio\">\r\n                              <span class=\"checkmark-radio\"></span>\r\n                            </label>\r\n                        </div>\r\n                      </div>\r\n                    </div>  \r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"g-recaptcha\" data-sitekey=\"6LcGyXEUAAAAAOITAuszXm1qJS-Vy6yOBlIL17Av\"></div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-sm-12\">\r\n                      <div class=\"row\">\r\n\r\n                        <div class=\"col-sm-6 mt-2\">\r\n                          <p class=\"f-12\">Already a member? <a [routerLink]=\"['/profile/login']\">Login</a></p>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6 mt-2\">\r\n                          <button class=\"btn btn-primary rounded pull-right\">Signup</button>\r\n                        </div>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>            \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicRegComponent; });
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

var BasicRegComponent = /** @class */ (function () {
    function BasicRegComponent() {
    }
    BasicRegComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
        this.loadScript();
    };
    BasicRegComponent.prototype.loadScript = function () {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    };
    BasicRegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-reg',
            template: __webpack_require__("./src/app/theme/auth/registration/basic-reg/basic-reg.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/registration/basic-reg/basic-reg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicRegComponent);
    return BasicRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/basic-reg/basic-reg.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRegModule", function() { return BasicRegModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_reg_component__ = __webpack_require__("./src/app/theme/auth/registration/basic-reg/basic-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_reg_routing_module__ = __webpack_require__("./src/app/theme/auth/registration/basic-reg/basic-reg-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicRegModule = /** @class */ (function () {
    function BasicRegModule() {
    }
    BasicRegModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_reg_routing_module__["a" /* BasicRegRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_reg_component__["a" /* BasicRegComponent */]]
        })
    ], BasicRegModule);
    return BasicRegModule;
}());



/***/ })

});
//# sourceMappingURL=basic-reg.module.chunk.js.map