webpackJsonp(["email-read.module"],{

/***/ "./src/app/theme/email/email-read/email-read-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailReadRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_read_component__ = __webpack_require__("./src/app/theme/email/email-read/email-read.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__email_read_component__["a" /* EmailReadComponent */],
        data: {
            title: 'View Mail',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - view mail',
            status: true
        }
    }
];
var EmailReadRoutingModule = /** @class */ (function () {
    function EmailReadRoutingModule() {
    }
    EmailReadRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EmailReadRoutingModule);
    return EmailReadRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-read/email-read.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"card\">\r\n    <!-- Email-card start -->\r\n    <div class=\"card-block email-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-head row\">\r\n            <div class=\"user-face\">\r\n              <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"mail-box-head row justify-content-end\">\r\n            <div class=\"col-auto\">\r\n              <form class=\"form-material\" action=\"javascript:\">\r\n                <div class=\"material-group\">\r\n                  <div class=\"form-group form-default\">\r\n                    <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Search</label>\r\n                  </div>\r\n                  <div class=\"material-addone\">\r\n                    <i class=\"icofont icofont-search\"></i>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- Left-side section start -->\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-body\">\r\n            <div class=\"p-20 text-center\">\r\n              <a [routerLink]=\"['/email/email-compose/']\" class=\"btn btn-danger waves-effect\">Compose</a>\r\n            </div>\r\n            <ul class=\"page-list nav nav-tabs flex-column\">\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-inbox\"></i> Inbox\r\n                  <span class=\"label label-primary float-right\">6</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-star\"></i> Starred\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-file-text\"></i> Drafts\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-paper-plane\"></i> Sent Mail\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-ui-delete\"></i> Trash\r\n                  <span class=\"label label-info float-right\">30</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"p-20 label-list\">\r\n              <li>\r\n                <h5>Labels</h5>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-work\" href=\"javascript:\">Work</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-design\" href=\"javascript:\">Design</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-family\" href=\"javascript:\">Family</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-friends\" href=\"javascript:\">Friends</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-office\" href=\"javascript:\">Office</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- Left-side section end -->\r\n        <!-- Right-side section start -->\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"mail-body\">\r\n            <div class=\"mail-body-content email-read\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <h5>Here You Have New Opportunity...</h5>\r\n                  <h6 class=\"float-right\">08:23 AM</h6>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                  <div class=\"media m-b-20\">\r\n                    <div class=\"media-left photo-table\">\r\n                      <a href=\"javascript:\">\r\n                        <img class=\"media-object img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"E-mail User\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"media-body photo-contant\">\r\n                      <a href=\"javascript:\">\r\n                        <h6 class=\"user-name txt-primary\">John Doe</h6>\r\n                      </a>\r\n                      <a class=\"user-mail txt-muted\" href=\"javascript:\">\r\n                        <h6>From:johndoe1543@gmail.com</h6>\r\n                      </a>\r\n                      <div>\r\n                        <h6 class=\"email-welcome-txt\">Hello Dear...</h6>\r\n                        <p class=\"email-content\">\r\n                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\r\n                        </p>\r\n                      </div>\r\n                      <div class=\"m-t-15\">\r\n                        <i class=\"icofont icofont-clip f-20 m-r-10\"></i>Attachments <b>(3)</b>\r\n                        <div class=\"row mail-img m-b-20\">\r\n                          <div class=\"col-sm-4 col-md-2 col-xs-12\">\r\n                            <a href=\"javascript:\"><img class=\"card-img-top img-fluid img-thumbnail\" src=\"assets/images/card-block/card1.jpg\" alt=\"Card image cap\"></a>\r\n                          </div>\r\n                          <div class=\"col-sm-4 col-md-2 col-xs-12\">\r\n                            <a href=\"javascript:\"><img class=\"card-img-top img-fluid img-thumbnail\" src=\"assets/images/card-block/card2.jpg\" alt=\"Card image cap\"></a>\r\n                          </div>\r\n                          <div class=\"col-sm-4 col-md-2 col-xs-12\">\r\n                            <a href=\"javascript:\"><img class=\"card-img-top img-fluid img-thumbnail\" src=\"assets/images/card-block/card13.jpg\" alt=\"Card image cap\"></a>\r\n                          </div>\r\n                        </div>\r\n                        <form class=\"form-material\" action=\"javascript:\">\r\n                          <div class=\"form-group form-primary\">\r\n                            <textarea class=\"form-control\" id=\"exampleTextarea-1\" required=\"\"></textarea>\r\n                            <span class=\"form-bar\"></span>\r\n                            <label class=\"float-label\">Reply Your Thoughts</label>\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Right-side section end -->\r\n      </div>\r\n    </div>\r\n    <!-- Email-card end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-read/email-read.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-read/email-read.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailReadComponent; });
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

var EmailReadComponent = /** @class */ (function () {
    function EmailReadComponent() {
    }
    EmailReadComponent.prototype.ngOnInit = function () {
    };
    EmailReadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-read',
            template: __webpack_require__("./src/app/theme/email/email-read/email-read.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-read/email-read.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailReadComponent);
    return EmailReadComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-read/email-read.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailReadModule", function() { return EmailReadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_read_component__ = __webpack_require__("./src/app/theme/email/email-read/email-read.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_read_routing_module__ = __webpack_require__("./src/app/theme/email/email-read/email-read-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmailReadModule = /** @class */ (function () {
    function EmailReadModule() {
    }
    EmailReadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__email_read_routing_module__["a" /* EmailReadRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__email_read_component__["a" /* EmailReadComponent */]]
        })
    ], EmailReadModule);
    return EmailReadModule;
}());



/***/ })

});
//# sourceMappingURL=email-read.module.chunk.js.map