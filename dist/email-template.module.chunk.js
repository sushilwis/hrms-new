webpackJsonp(["email-template.module"],{

/***/ "./src/app/theme/email/email-template/email-template-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailTemplateRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
            title: 'Email Template',
            status: false
        },
        children: [
            {
                path: 'email-welcome',
                loadChildren: './email-welcome/email-welcome.module#EmailWelcomeModule'
            },
            {
                path: 'email-reset-password',
                loadChildren: './email-reset-password/email-reset-password.module#EmailResetPasswordModule'
            },
            {
                path: 'email-newsletter',
                loadChildren: './email-newsletter/email-newsletter.module#EmailNewsletterModule'
            },
            {
                path: 'app-launch',
                loadChildren: './email-app-launch/email-app-launch.module#EmailAppLaunchModule'
            },
            {
                path: 'activation-code',
                loadChildren: './email-active-code/email-active-code.module#EmailActiveCodeModule'
            }
        ]
    }
];
var EmailTemplateRoutingModule = /** @class */ (function () {
    function EmailTemplateRoutingModule() {
    }
    EmailTemplateRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EmailTemplateRoutingModule);
    return EmailTemplateRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-template/email-template.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_template_routing_module__ = __webpack_require__("./src/app/theme/email/email-template/email-template-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmailTemplateModule = /** @class */ (function () {
    function EmailTemplateModule() {
    }
    EmailTemplateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__email_template_routing_module__["a" /* EmailTemplateRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: []
        })
    ], EmailTemplateModule);
    return EmailTemplateModule;
}());



/***/ })

});
//# sourceMappingURL=email-template.module.chunk.js.map