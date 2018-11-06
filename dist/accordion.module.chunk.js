webpackJsonp(["accordion.module"],{

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/accordion/accordion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */],
        data: {
            title: 'Accordion',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - accordion',
            status: true
        }
    }
];
var AccordionRoutingModule = /** @class */ (function () {
    function AccordionRoutingModule() {
    }
    AccordionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AccordionRoutingModule);
    return AccordionRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n\r\n  <!-- Row start -->\r\n  <div class=\"row\">\r\n    <!-- Multiple Open Accordion start -->\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'MULTIPLE OPEN ACCORDION'\" [blockClass]=\"'accordion-block scale-accordion'\">\r\n        <squeezebox [multiple]=\"true\">\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'Single Open Accordion'\" [blockClass]=\"'accordion-block'\">\r\n        <squeezebox [multiple]=\"false\">\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <!-- row end -->\r\n  <!-- row start -->\r\n  <div class=\"row\">\r\n    <!-- Multiple Open Accordion start -->\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'SCALE ACCORDION'\" [blockClass]=\"'accordion-block scale-accordion'\">\r\n        <squeezebox [multiple]=\"false\">\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'COLOR ACCORDION'\" [blockClass]=\"'accordion-block'\">\r\n        <squeezebox [multiple]=\"false\">\r\n          <sb-item [collapsed]=\"false\" class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading bg-primary accordion-msg\">Lorem Message 1</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading bg-danger accordion-msg\">Lorem Message 2</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n          <sb-item class=\"accordion-panel\">\r\n            <sb-item-head class=\"accordion-heading bg-success accordion-msg\">Lorem Message 3</sb-item-head>\r\n            <sb-item-body class=\"accordion-content\">\r\n              <div class=\"accordion-desc\">\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more .</p>\r\n              </div>\r\n            </sb-item-body>\r\n          </sb-item>\r\n        </squeezebox>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <!-- row end -->\r\n\r\n  <!-- Row start -->\r\n  <div class=\"row\">\r\n    <!-- Multiple Open Accordion start -->\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'Bootstrap - All Close Accordion'\" [blockClass]=\"'accordion-block'\" [cardOptionBlock]=\"true\">\r\n        <ngb-accordion [closeOthers]=\"true\" #acc=\"ngbAccordion\" class=\"ngb-accordion\">\r\n          <ngb-panel id=\"ngb-close-p1\" title=\"Lorem Message 1\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-close-p2\" title=\"Lorem Message 2\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-close-p3\" title=\"Lorem Message 3\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n        </ngb-accordion>\r\n      </app-card>\r\n    </div>\r\n    <!-- Multiple Open Accordion ends -->\r\n    <!-- Single Open Accordion start -->\r\n    <div class=\"col-xl-6\">\r\n      <app-card [title]=\"'Bootstrap - All Open Accordion'\" [blockClass]=\"'accordion-block'\" [cardOptionBlock]=\"true\">\r\n        <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-open-p1\" class=\"ngb-accordion\">\r\n          <ngb-panel id=\"ngb-open-p1\" title=\"Lorem Message 1\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-open-p2\" title=\"Lorem Message 2\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-open-p3\" title=\"Lorem Message 3\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n        </ngb-accordion>\r\n      </app-card>\r\n    </div>\r\n    <!-- Single Open Accordion ends -->\r\n  </div>\r\n  <!-- Row end -->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Bootstrap - Color Accordion'\" [blockClass]=\"'accordion-block'\" [cardOptionBlock]=\"true\">\r\n        <ngb-accordion [closeOthers]=\"true\" #acc=\"ngbAccordion\" activeIds=\"ngb-color-p1\" class=\"ngb-accordion color-accordion\">\r\n          <ngb-panel id=\"ngb-color-p1\" title=\"Lorem Message 1\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-color-p2\" title=\"Lorem Message 2\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n          <ngb-panel id=\"ngb-color-p3\" title=\"Lorem Message 3\">\r\n            <ng-template ngbPanelContent>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </ng-template>\r\n          </ngb-panel>\r\n        </ngb-accordion>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
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

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/accordion/accordion.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/accordion/accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/accordion/accordion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/accordion/accordion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_squeezebox__ = __webpack_require__("./node_modules/squeezebox/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__accordion_routing_module__["a" /* AccordionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_squeezebox__["a" /* SqueezeBoxModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */]]
        })
    ], AccordionModule);
    return AccordionModule;
}());



/***/ })

});
//# sourceMappingURL=accordion.module.chunk.js.map