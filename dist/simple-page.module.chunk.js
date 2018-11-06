webpackJsonp(["simple-page.module"],{

/***/ "./src/app/theme/simple-page/simple-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_page_component__ = __webpack_require__("./src/app/theme/simple-page/simple-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__simple_page_component__["a" /* SimplePageComponent */],
        data: {
            title: 'Sample Page',
            icon: 'icon-layout-sidebar-left',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
            status: true
        }
    }
];
var SimplePageRoutingModule = /** @class */ (function () {
    function SimplePageRoutingModule() {
    }
    SimplePageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SimplePageRoutingModule);
    return SimplePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"page-header\" style=\"background-color: #ccc;\">\r\n    <div class=\"page-block\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-md-9\">\r\n          <div class=\"page-header-title\">\r\n            <!-- <span class=\"float-left\"> -->\r\n            <!-- <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> -->\r\n            <!-- </span> -->\r\n            <span>\r\n              <h4 class=\"m-b-10\">\r\n                <!-- [routerLink]=\"[breadcrumb.backBtnLink]\" -->\r\n                <a class=\"h4\" [routerLink]=\"['/config/home']\">\r\n                  <i class=\"m-b-10\" class=\"fa fa-chevron-left mr-3\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                Heading\r\n              </h4>\r\n            </span>\r\n            <!--<p class=\"m-b-0\" *ngIf=\"breadcrumb.caption\">{{ breadcrumb.caption }}</p>-->\r\n          </div>\r\n          <!-- <ul class=\"breadcrumb\">\r\n                  <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/dashboard/default/']\">\r\n                      <i class=\"feather icon-home\"></i>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs;\">\r\n                    <a [ngClass]=\"breadcrumb.status === false ? 'not-active': ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\r\n                  </li>\r\n                </ul> -->\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <a class=\"btn btn-info float-right btn-sm ml-1\">\r\n            <i></i>\r\n            + Add\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <app-card>\r\n    <p>welcome</p>\r\n  </app-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".pcoded[theme-layout=\"vertical\"] .pcoded-main-container {\n  margin-top: 0px !important; }\n\n.pcoded-main-container {\n  min-height: calc(110vh - 50px) !important; }\n\nperfect-scrollbar {\n  max-height: calc(120vh - 190px) !important; }\n\n.pcoded[theme-layout=\"vertical\"] .pcoded-navbar {\n  height: calc(120% - 50px) !important; }\n\n.page-header {\n  padding-bottom: 0px !important; }\n\n.pcoded[fream-type=\"theme6\"][theme-layout=\"vertical\"] .page-header {\n  padding-bottom: 0px !important; }\n\n.pcoded[theme-layout=\"vertical\"][vertical-placement=\"left\"][vertical-nav-type=\"expanded\"][vertical-effect=\"shrink\"] .pcoded-content {\n  margin-left: 87px !important; }\n\n.pcoded[theme-layout=\"vertical\"][vertical-nav-type=\"expanded\"] .pcoded-header .pcoded-left-header, .pcoded[theme-layout=\"vertical\"][vertical-nav-type=\"expanded\"] .pcoded-navbar {\n  width: 86px; }\n\n.pcoded li.pcoded-hasmenu > a:after {\n  display: none !important; }\n\n.pcoded[theme-layout=\"vertical\"] .pcoded-navbar .pcoded-item > li > a {\n  margin: 0px;\n  font-size: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.pcoded[theme-layout=\"vertical\"] .pcoded-navbar .pcoded-item > li > a .pcoded-mtext {\n  font-size: 11px;\n  position: relative !important;\n  text-align: center !important;\n  top: 0;\n  width: 100%;\n  display: block; }\n\n.pcoded .pcoded-navbar .pcoded-item > li > a > .pcoded-micon {\n  width: 100%;\n  display: inline-block;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 30px;\n  text-align: center; }\n\n.normal-icon {\n  margin-top: 40px; }\n\n.normal-icon ul li {\n  margin: 0px auto;\n  text-align: center;\n  font-size: 15px; }\n\n.normal-icon ul li i {\n  color: #ffffff;\n  font-size: 18px;\n  margin-bottom: 15px; }\n\n.shot-p {\n  font-size: 10px;\n  margin: 0px;\n  color: #fff;\n  text-align: center; }\n\n.shot-p-green {\n  font-size: 10px;\n  margin: 0px;\n  color: #10964c;\n  text-align: center; }\n\n.shot-p-2 {\n  font-size: 10px;\n  margin: 0px;\n  color: #fff;\n  text-align: center; }\n\n.shot-p-vailot {\n  font-size: 10px;\n  margin: 0px;\n  color: #3366eb;\n  text-align: center; }\n\n/**/\n\n.squeezebox .sb-item, .sb-item .is-collapsed, .accordion-msg {\n  background: #ffffff !important; }\n\n.accordion-desc {\n  background: #f2f2f2 !important; }\n\nngx-datatable.data-table {\n  background: #fff !important; }\n\n.checkbox-fade .cr, .checkbox-zoom .cr {\n  width: 16px;\n  height: 16px;\n  border: 1px solid #d6d6d6;\n  border-radius: 2px; }\n\n.has-search .form-control-feedback {\n  right: initial;\n  left: 12%;\n  color: #ccc;\n  position: absolute;\n  top: 9px; }\n\n.has-search .form-control {\n  padding-right: 12px;\n  padding-left: 34px; }\n\n.checkbox-fade.fade-in-default .cr .cr-icon, .checkbox-fade.zoom-default .cr .cr-icon, .checkbox-zoom.fade-in-default .cr .cr-icon, .checkbox-zoom.zoom-default .cr .cr-icon {\n  color: #666666 !important; }\n\n/**/\n"

/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePageComponent; });
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

var SimplePageComponent = /** @class */ (function () {
    function SimplePageComponent() {
    }
    SimplePageComponent.prototype.ngOnInit = function () {
    };
    SimplePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simple-page',
            template: __webpack_require__("./src/app/theme/simple-page/simple-page.component.html"),
            styles: [__webpack_require__("./src/app/theme/simple-page/simple-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimplePageComponent);
    return SimplePageComponent;
}());



/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_page_component__ = __webpack_require__("./src/app/theme/simple-page/simple-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simple_page_routing_module__ = __webpack_require__("./src/app/theme/simple-page/simple-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SimplePageModule = /** @class */ (function () {
    function SimplePageModule() {
    }
    SimplePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__simple_page_routing_module__["a" /* SimplePageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__simple_page_component__["a" /* SimplePageComponent */]]
        })
    ], SimplePageModule);
    return SimplePageModule;
}());



/***/ })

});
//# sourceMappingURL=simple-page.module.chunk.js.map