webpackJsonp(["form-wizards.module"],{

/***/ "./src/app/theme/forms/form-wizards/form-wizards-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormWizardsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_wizards_component__ = __webpack_require__("./src/app/theme/forms/form-wizards/form-wizards.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__form_wizards_component__["a" /* FormWizardsComponent */],
        data: {
            title: 'Forms Wizard',
            icon: 'icon-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form wizard',
            status: true
        }
    }
];
var FormWizardsRoutingModule = /** @class */ (function () {
    function FormWizardsRoutingModule() {
    }
    FormWizardsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], FormWizardsRoutingModule);
    return FormWizardsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-wizards/form-wizards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <app-wizard-basic></app-wizard-basic>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <app-wizard-navbar-lg></app-wizard-navbar-lg>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <app-wizard-navbar-lg-icon></app-wizard-navbar-lg-icon>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-6\">\r\n      <app-wizard-custom></app-wizard-custom>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <app-wizard-navbar-left></app-wizard-navbar-left>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <app-wizard-navbar-right></app-wizard-navbar-right>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/form-wizards.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/form-wizards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormWizardsComponent; });
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

var FormWizardsComponent = /** @class */ (function () {
    function FormWizardsComponent() {
    }
    FormWizardsComponent.prototype.ngOnInit = function () {
    };
    FormWizardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-wizards',
            template: __webpack_require__("./src/app/theme/forms/form-wizards/form-wizards.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/form-wizards/form-wizards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormWizardsComponent);
    return FormWizardsComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-wizards/form-wizards.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardsModule", function() { return FormWizardsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_wizards_component__ = __webpack_require__("./src/app/theme/forms/form-wizards/form-wizards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_wizards_routing_module__ = __webpack_require__("./src/app/theme/forms/form-wizards/form-wizards-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_archwizard_dist__ = __webpack_require__("./node_modules/ng2-archwizard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wizard_navbar_lg_wizard_navbar_lg_component__ = __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-lg/wizard-navbar-lg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wizard_navbar_lg_icon_wizard_navbar_lg_icon_component__ = __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-lg-icon/wizard-navbar-lg-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wizard_custom_wizard_custom_component__ = __webpack_require__("./src/app/theme/forms/form-wizards/wizard-custom/wizard-custom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wizard_navbar_left_wizard_navbar_left_component__ = __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-left/wizard-navbar-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wizard_navbar_right_wizard_navbar_right_component__ = __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-right/wizard-navbar-right.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { WizardBasicComponent } from './wizard-basic/wizard-basic.component';





var FormWizardsModule = /** @class */ (function () {
    function FormWizardsModule() {
    }
    FormWizardsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__form_wizards_routing_module__["a" /* FormWizardsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_archwizard_dist__["a" /* ArchwizardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form_wizards_component__["a" /* FormWizardsComponent */],
                // WizardBasicComponent,
                __WEBPACK_IMPORTED_MODULE_6__wizard_navbar_lg_wizard_navbar_lg_component__["a" /* WizardNavbarLgComponent */],
                __WEBPACK_IMPORTED_MODULE_7__wizard_navbar_lg_icon_wizard_navbar_lg_icon_component__["a" /* WizardNavbarLgIconComponent */],
                __WEBPACK_IMPORTED_MODULE_8__wizard_custom_wizard_custom_component__["a" /* WizardCustomComponent */],
                __WEBPACK_IMPORTED_MODULE_9__wizard_navbar_left_wizard_navbar_left_component__["a" /* WizardNavbarLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_10__wizard_navbar_right_wizard_navbar_right_component__["a" /* WizardNavbarRightComponent */]
            ]
        })
    ], FormWizardsModule);
    return FormWizardsModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-custom/wizard-custom.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Custom Wizard'\">\r\n  <wizard #wizard class=\"arc-wizard arc-custom\" navBarLayout=\"large-filled-symbols\">\r\n    <wizard-step stepTitle=\"Profile\" navigationSymbol=\"&#xf0b1;\" navigationSymbolFontFamily=\"FontAwesome\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Profile</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Address\" navigationSymbol=\"&#xf085;\" navigationSymbolFontFamily=\"FontAwesome\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Address</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Completed\" navigationSymbol=\"&#xf00c;\" navigationSymbolFontFamily=\"FontAwesome\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Thank's</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" resetWizard>Reset</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n  </wizard>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-custom/wizard-custom.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-custom/wizard-custom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardCustomComponent; });
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

var WizardCustomComponent = /** @class */ (function () {
    function WizardCustomComponent() {
    }
    WizardCustomComponent.prototype.ngOnInit = function () {
    };
    WizardCustomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard-custom',
            template: __webpack_require__("./src/app/theme/forms/form-wizards/wizard-custom/wizard-custom.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/form-wizards/wizard-custom/wizard-custom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardCustomComponent);
    return WizardCustomComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-left/wizard-navbar-left.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Left Nav Wizard'\">\r\n  <wizard #wizard class=\"arc-wizard\" navBarLocation=\"left\">\r\n    <wizard-step stepTitle=\"Profile\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Profile</h3>\r\n          <p>small nav left</p>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Work\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Work</h3>\r\n          <p>small nav left </p>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Address\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Address</h3>\r\n          <p>small nav left </p>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Finished\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Thank's</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" resetWizard>Reset</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n  </wizard>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-left/wizard-navbar-left.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-left/wizard-navbar-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardNavbarLeftComponent; });
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

var WizardNavbarLeftComponent = /** @class */ (function () {
    function WizardNavbarLeftComponent() {
    }
    WizardNavbarLeftComponent.prototype.ngOnInit = function () {
    };
    WizardNavbarLeftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard-navbar-left',
            template: __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-left/wizard-navbar-left.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-left/wizard-navbar-left.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardNavbarLeftComponent);
    return WizardNavbarLeftComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-lg-icon/wizard-navbar-lg-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Large Nav Filled With Symbol Icon'\">\r\n  <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-filled-symbols\">\r\n    <wizard-step stepTitle=\"Profile\" navigationSymbol=\"&#xf0b1;\" navigationSymbolFontFamily=\"FontAwesome\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Profile</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Address\" navigationSymbol=\"&#xf085;\" navigationSymbolFontFamily=\"FontAwesome\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Address</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Completed\" navigationSymbol=\"&#xf00c;\" navigationSymbolFontFamily=\"FontAwesome\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Thank's</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" resetWizard>Reset</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n  </wizard>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-lg-icon/wizard-navbar-lg-icon.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-lg-icon/wizard-navbar-lg-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardNavbarLgIconComponent; });
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

var WizardNavbarLgIconComponent = /** @class */ (function () {
    function WizardNavbarLgIconComponent() {
    }
    WizardNavbarLgIconComponent.prototype.ngOnInit = function () {
    };
    WizardNavbarLgIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard-navbar-lg-icon',
            template: __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-lg-icon/wizard-navbar-lg-icon.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-lg-icon/wizard-navbar-lg-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardNavbarLgIconComponent);
    return WizardNavbarLgIconComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-lg/wizard-navbar-lg.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Large Nav Empty With Symbol'\">\r\n  <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-empty-symbols\">\r\n    <wizard-step stepTitle=\"Profile\" navigationSymbol=\"1\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Profile</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Address\" navigationSymbol=\"2\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Address</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Finished\" navigationSymbol=\"3\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Thank's</h3>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" resetWizard>Reset</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n  </wizard>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-lg/wizard-navbar-lg.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-lg/wizard-navbar-lg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardNavbarLgComponent; });
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

var WizardNavbarLgComponent = /** @class */ (function () {
    function WizardNavbarLgComponent() {
    }
    WizardNavbarLgComponent.prototype.ngOnInit = function () {
    };
    WizardNavbarLgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard-navbar-lg',
            template: __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-lg/wizard-navbar-lg.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-lg/wizard-navbar-lg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardNavbarLgComponent);
    return WizardNavbarLgComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-right/wizard-navbar-right.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Right Nav Wizard'\">\r\n  <wizard #wizard class=\"arc-wizard\" navBarLayout=\"large-empty-symbols\" navBarLocation=\"left\">\r\n    <wizard-step stepTitle=\"Profile\" navigationSymbol=\"1\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Profile</h3>\r\n          <p>right nav</p>\r\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Address\" navigationSymbol=\"2\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Address</h3>\r\n          <p>right nav</p>\r\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" nextStep>Continue</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n    <wizard-step stepTitle=\"Finished\" navigationSymbol=\"3\">\r\n      <div class=\"centered-content\">\r\n        <div>\r\n          <h3>Content: Thank's</h3>\r\n          <p>right nav</p>\r\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n        </div>\r\n\r\n        <div class=\"btn-group mt-10\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" previousStep>Back</button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" resetWizard>Reset</button>\r\n        </div>\r\n      </div>\r\n    </wizard-step>\r\n  </wizard>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-right/wizard-navbar-right.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-wizards/wizard-navbar-right/wizard-navbar-right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardNavbarRightComponent; });
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

var WizardNavbarRightComponent = /** @class */ (function () {
    function WizardNavbarRightComponent() {
    }
    WizardNavbarRightComponent.prototype.ngOnInit = function () {
    };
    WizardNavbarRightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard-navbar-right',
            template: __webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-right/wizard-navbar-right.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/form-wizards/wizard-navbar-right/wizard-navbar-right.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardNavbarRightComponent);
    return WizardNavbarRightComponent;
}());



/***/ })

});
//# sourceMappingURL=form-wizards.module.chunk.js.map