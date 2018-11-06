webpackJsonp(["basic-other.module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicOtherRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_other_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_other_component__["a" /* BasicOtherComponent */],
        data: {
            title: 'Other',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - other',
            status: true
        }
    }
];
var BasicOtherRoutingModule = /** @class */ (function () {
    function BasicOtherRoutingModule() {
    }
    BasicOtherRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicOtherRoutingModule);
    return BasicOtherRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Bootstrap card</h5>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <!-- basic card start -->\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-block\">\r\n                <h5>Basic card</h5>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- basic card end -->\r\n\r\n          <!-- card with header start -->\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h5>This is header</h5>\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <h5>Card with header</h5>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- card with header end -->\r\n\r\n          <!-- card with header, footer start -->\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h5>This is header</h5>\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <h5>Card with header</h5>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <p class=\"m-b-0\"> my footer</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- card with header, footer end -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Color card</h5>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-primary\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Primary card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-secondary\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Secondary card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-success\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Success card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-danger\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Danger card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-warning\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Warning card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-info\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Info card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card bg-light\">\r\n              <div class=\"card-header text-primary\">Header</div>\r\n              <div class=\"card-body text-primary\">\r\n                <h5 class=\"card-title\">Light card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white card-inverse\" style=\"border: 1px solid #fff\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Dark card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Default'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <ngb-pagination [collectionSize]=\"totalItems\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Disabled'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [disabled]=\"true\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Pagination Size'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"sub-title m-t-15\">Large</div>\r\n      <div class=\"scrollmenu\">\r\n        <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" size=\"lg\"></ngb-pagination>\r\n      </div>\r\n      <div class=\"sub-title m-t-15\">Medium</div>\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">Small</div>\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" size=\"sm\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Pagination Advance'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true, ellipses = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss":
/***/ (function(module, exports) {

module.exports = "div.scrollmenu {\n  overflow: auto;\n  white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicOtherComponent; });
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

var BasicOtherComponent = /** @class */ (function () {
    function BasicOtherComponent() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.totalItems = 64;
        this.pageAdvance = 1;
    }
    BasicOtherComponent.prototype.ngOnInit = function () {
    };
    BasicOtherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-other',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BasicOtherComponent);
    return BasicOtherComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherModule", function() { return BasicOtherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_other_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_other_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicOtherModule = /** @class */ (function () {
    function BasicOtherModule() {
    }
    BasicOtherModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_other_routing_module__["a" /* BasicOtherRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_other_component__["a" /* BasicOtherComponent */]]
        })
    ], BasicOtherModule);
    return BasicOtherModule;
}());



/***/ })

});
//# sourceMappingURL=basic-other.module.chunk.js.map