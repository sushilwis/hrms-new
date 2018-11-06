webpackJsonp(["email-compose.module"],{

/***/ "./src/app/theme/email/email-compose/email-compose-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComposeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_compose_component__ = __webpack_require__("./src/app/theme/email/email-compose/email-compose.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__email_compose_component__["a" /* EmailComposeComponent */],
        data: {
            title: 'Compose Email',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - compose email',
            status: true
        }
    }
];
var EmailComposeRoutingModule = /** @class */ (function () {
    function EmailComposeRoutingModule() {
    }
    EmailComposeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EmailComposeRoutingModule);
    return EmailComposeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"card\">\r\n    <!-- Email-card start -->\r\n    <div class=\"card-block email-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-head row\">\r\n            <div class=\"user-face\">\r\n              <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"mail-box-head row justify-content-end\">\r\n            <div class=\"col-auto\">\r\n              <form class=\"form-material\" action=\"javascript:\">\r\n                <div class=\"material-group\">\r\n                  <div class=\"form-group form-default\">\r\n                    <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Search</label>\r\n                  </div>\r\n                  <div class=\"material-addone\">\r\n                    <i class=\"icofont icofont-search\"></i>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- Left-side section start -->\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-body\">\r\n            <div class=\"p-20 text-center\">\r\n            </div>\r\n            <ul class=\"page-list nav nav-tabs flex-column\">\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-inbox\"></i> Inbox\r\n                  <span class=\"label label-primary float-right\">6</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-star\"></i> Starred\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-file-text\"></i> Drafts\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-paper-plane\"></i> Sent Mail\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a class=\"nav-link waves-effect  d-block\" [routerLink]=\"['/email/email-inbox/']\">\r\n                  <i class=\"icofont icofont-ui-delete\"></i> Trash\r\n                  <span class=\"label label-info float-right\">30</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"p-20 label-list\">\r\n              <li>\r\n                <h5>Labels</h5>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-work\" href=\"javascript:\">Work</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-design\" href=\"javascript:\">Design</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-family\" href=\"javascript:\">Family</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-friends\" href=\"javascript:\">Friends</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-office\" href=\"javascript:\">Office</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- Left-side section end -->\r\n        <!-- Right-side section start -->\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"mail-body\">\r\n            <div class=\"mail-body\">\r\n\r\n              <div class=\"mail-body-content\">\r\n                <form class=\"form-material\" action=\"javascript:\">\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"email\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">To</label>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group form-primary\">\r\n                          <input type=\"email\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n                          <span class=\"form-bar\"></span>\r\n                          <label class=\"float-label\">Cc</label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group form-primary\">\r\n                          <input type=\"email\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n                          <span class=\"form-bar\"></span>\r\n                          <label class=\"float-label\">Bcc</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Subject</label>\r\n                  </div>\r\n                  <quill-editor\r\n                    [(ngModel)]=\"editorContent\"\r\n                    [options]=\"editorConfig\"\r\n                    (blur)=\"onEditorBlured($event)\"\r\n                    (focus)=\"onEditorFocused($event)\"\r\n                    (ready)=\"onEditorCreated($event)\"\r\n                    (change)=\"onContentChanged($event)\">\r\n                  </quill-editor>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Right-side section end -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComposeComponent; });
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

var EmailComposeComponent = /** @class */ (function () {
    function EmailComposeComponent() {
        this.editorConfig = {
            placeholder: 'Put your things hear'
        };
    }
    EmailComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editorContent = _this.editorContent;
            console.log('you can use the quill instance object to do something', _this.editor);
            // this.editor.disable();
        }, 2800);
    };
    EmailComposeComponent.prototype.onEditorBlured = function (quill) {
        console.log('editor blur!', quill);
    };
    EmailComposeComponent.prototype.onEditorFocused = function (quill) {
        console.log('editor focus!', quill);
    };
    EmailComposeComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        console.log('quill is ready! this is current quill instance object', quill);
    };
    EmailComposeComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        console.log('quill content is changed!', quill, html, text);
    };
    EmailComposeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-compose',
            template: __webpack_require__("./src/app/theme/email/email-compose/email-compose.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-compose/email-compose.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComposeComponent);
    return EmailComposeComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-compose/email-compose.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposeModule", function() { return EmailComposeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_compose_component__ = __webpack_require__("./src/app/theme/email/email-compose/email-compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_compose_routing_module__ = __webpack_require__("./src/app/theme/email/email-compose/email-compose-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_quill_editor__ = __webpack_require__("./node_modules/ngx-quill-editor/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EmailComposeModule = /** @class */ (function () {
    function EmailComposeModule() {
    }
    EmailComposeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__email_compose_routing_module__["a" /* EmailComposeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_quill_editor__["a" /* QuillEditorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__email_compose_component__["a" /* EmailComposeComponent */]]
        })
    ], EmailComposeModule);
    return EmailComposeModule;
}());



/***/ })

});
//# sourceMappingURL=email-compose.module.chunk.js.map