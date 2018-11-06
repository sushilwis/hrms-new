webpackJsonp(["email-welcome.module"],{

/***/ "./src/app/theme/email/email-template/email-welcome/email-welcome-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailWelcomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_welcome_component__ = __webpack_require__("./src/app/theme/email/email-template/email-welcome/email-welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__email_welcome_component__["a" /* EmailWelcomeComponent */],
        data: {
            title: 'Welcome Mail',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - welcome mail',
            status: true
        }
    }
];
var EmailWelcomeRoutingModule = /** @class */ (function () {
    function EmailWelcomeRoutingModule() {
    }
    EmailWelcomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EmailWelcomeRoutingModule);
    return EmailWelcomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-welcome/email-welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<!--[if (gte mso 9)|(IE)]>\r\n<table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n  <tr>\r\n    <td>\r\n<![endif]-->\r\n<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: collapse; width: 100%; max-width: 600px;\" class=\"content\">\r\n  <tr>\r\n    <td style=\"padding: 15px 10px 15px 10px;\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n        <tr>\r\n          <td align=\"center\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 12px;\">\r\n            Email not displaying correctly?  <a href=\"javascript:\" style=\"color: #4680ff;\">View it in your browser</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#4680ff\" style=\"padding: 20px 20px 20px 20px; color: #ffffff; font-family: Arial, sans-serif; font-size: 36px; font-weight: bold;\">\r\n      <img src=\"assets/images/email/proui_logo.png\" alt=\"ProUI Logo\" width=\"152\" height=\"152\" style=\"display:block;\" />\r\n      Welcome\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#ffffff\" style=\"padding: 40px 20px 40px 20px; color: #555555; font-family: Arial, sans-serif; font-size: 20px; line-height: 30px; border-bottom: 1px solid #f6f6f6;\">\r\n      <b>Thank you very much for choosing ProUI!</b><br/>\r\n      Let us show you some cool features before we get started.\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 20px 20px 0 20px; border-bottom: 1px solid #f6f6f6;\">\r\n      <table width=\"128\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tr>\r\n          <td height=\"128\" style=\"padding: 0 20px 20px 0;\">\r\n            <img src=\"assets/images/email/icon1.png\" alt=\"Icon #1\" width=\"128\" height=\"128\" style=\"display: block;\" />\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <!--[if (gte mso 9)|(IE)]>\r\n      <table width=\"387\" align=\"left\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n        <tr>\r\n          <td>\r\n      <![endif]-->\r\n      <table class=\"col387\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; max-width: 387px;\">\r\n        <tr>\r\n          <td>\r\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n              <tr>\r\n                <td style=\"padding: 0 0 20px 0; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px;\">\r\n                  Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <!--[if (gte mso 9)|(IE)]>\r\n      </td>\r\n      </tr>\r\n      </table>\r\n      <![endif]-->\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 20px 20px 0 20px; border-bottom: 1px solid #f6f6f6;\">\r\n      <table width=\"128\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tr>\r\n          <td height=\"128\" style=\"padding: 0 20px 20px 0;\">\r\n            <img src=\"assets/images/email/icon2.png\" alt=\"Icon #2\" width=\"128\" height=\"128\" style=\"display: block;\" />\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <!--[if (gte mso 9)|(IE)]>\r\n      <table width=\"387\" align=\"left\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n        <tr>\r\n          <td>\r\n      <![endif]-->\r\n      <table class=\"col387\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; max-width: 387px;\">\r\n        <tr>\r\n          <td>\r\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n              <tr>\r\n                <td style=\"padding: 0 0 20px 0; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px;\">\r\n                  Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <!--[if (gte mso 9)|(IE)]>\r\n      </td>\r\n      </tr>\r\n      </table>\r\n      <![endif]-->\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td bgcolor=\"#ffffff\" style=\"padding: 20px 20px 0 20px; border-bottom: 1px solid #f6f6f6;\">\r\n      <table width=\"128\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n        <tr>\r\n          <td height=\"128\" style=\"padding: 0 20px 20px 0;\">\r\n            <img src=\"assets/images/email/icon3.png\" alt=\"Icon #3\" width=\"128\" height=\"128\" style=\"display: block;\" />\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <!--[if (gte mso 9)|(IE)]>\r\n      <table width=\"387\" align=\"left\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n        <tr>\r\n          <td>\r\n      <![endif]-->\r\n      <table class=\"col387\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; max-width: 387px;\">\r\n        <tr>\r\n          <td>\r\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n              <tr>\r\n                <td style=\"padding: 0 0 20px 0; color: #555555; font-family: Arial, sans-serif; font-size: 15px; line-height: 24px;\">\r\n                  Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <!--[if (gte mso 9)|(IE)]>\r\n      </td>\r\n      </tr>\r\n      </table>\r\n      <![endif]-->\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#f9f9f9\" style=\"padding: 30px 20px 30px 20px; font-family: Arial, sans-serif;\">\r\n      <table bgcolor=\"#4680ff\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"buttonwrapper\">\r\n        <tr>\r\n          <td align=\"center\" height=\"50\" style=\" padding: 0 25px 0 25px; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold;\" class=\"button\">\r\n            <a href=\"javascript:\" style=\"color: #ffffff; text-align: center; text-decoration: none;\">Get Started</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td align=\"center\" bgcolor=\"#dddddd\" style=\"padding: 15px 10px 15px 10px; color: #555555; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px;\">\r\n      <b>Company Inc.</b><br/>985 Example St. &bull; Suite A1S2 &bull; San Francisco, CA 12458 USA\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td style=\"padding: 15px 10px 15px 10px;\">\r\n      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n        <tr>\r\n          <td align=\"center\" width=\"100%\" style=\"color: #fff; font-family: Arial, sans-serif; font-size: 12px;\">\r\n            2017-18 &copy; <a href=\"javascript:\" style=\"color: #4680ff;\">Able 7.0</a>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<!--[if (gte mso 9)|(IE)]>\r\n</td>\r\n</tr>\r\n</table>\r\n<![endif]-->\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-template/email-welcome/email-welcome.component.scss":
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {\n  body[yahoo] .buttonwrapper {\n    background-color: transparent !important; }\n  body[yahoo] .button {\n    padding: 0 !important; }\n  body[yahoo] .button a {\n    background-color: #9b59b6;\n    padding: 15px 25px !important; } }\n\n@media only screen and (min-device-width: 601px) {\n  .content {\n    width: 600px !important; }\n  .col387 {\n    width: 387px !important; } }\n\ntd, th {\n  white-space: normal; }\n"

/***/ }),

/***/ "./src/app/theme/email/email-template/email-welcome/email-welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailWelcomeComponent; });
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

var EmailWelcomeComponent = /** @class */ (function () {
    function EmailWelcomeComponent() {
        document.querySelector('body').setAttribute('yahoo', 'fix');
        document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #444; background-image: none;');
    }
    EmailWelcomeComponent.prototype.ngOnInit = function () {
    };
    EmailWelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-welcome',
            template: __webpack_require__("./src/app/theme/email/email-template/email-welcome/email-welcome.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-template/email-welcome/email-welcome.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], EmailWelcomeComponent);
    return EmailWelcomeComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-welcome/email-welcome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailWelcomeModule", function() { return EmailWelcomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_welcome_component__ = __webpack_require__("./src/app/theme/email/email-template/email-welcome/email-welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_welcome_routing_module__ = __webpack_require__("./src/app/theme/email/email-template/email-welcome/email-welcome-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmailWelcomeModule = /** @class */ (function () {
    function EmailWelcomeModule() {
    }
    EmailWelcomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__email_welcome_routing_module__["a" /* EmailWelcomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__email_welcome_component__["a" /* EmailWelcomeComponent */]]
        })
    ], EmailWelcomeModule);
    return EmailWelcomeModule;
}());



/***/ })

});
//# sourceMappingURL=email-welcome.module.chunk.js.map