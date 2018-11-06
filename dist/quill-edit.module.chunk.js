webpackJsonp(["quill-edit.module"],{

/***/ "./src/app/theme/extension/editor/quill-edit/quill-edit-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuillEditRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quill_edit_component__ = __webpack_require__("./src/app/theme/extension/editor/quill-edit/quill-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__quill_edit_component__["a" /* QuillEditComponent */],
        data: {
            title: 'Quill Editor',
            icon: 'icon-edit',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - quill editor',
            status: true
        }
    }
];
var QuillEditRoutingModule = /** @class */ (function () {
    function QuillEditRoutingModule() {
    }
    QuillEditRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], QuillEditRoutingModule);
    return QuillEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/extension/editor/quill-edit/quill-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Quill Basic Editor'\" [classHeader]=\"true\">\r\n      <span class=\"code-header\">use options with <code>quill-editor</code> elements</span>\r\n      <quill-editor\r\n        [(ngModel)]=\"editorContent\"\r\n        [options]=\"editorConfig\"\r\n        (blur)=\"onEditorBlured($event)\"\r\n        (focus)=\"onEditorFocused($event)\"\r\n        (ready)=\"onEditorCreated($event)\"\r\n        (change)=\"onContentChanged($event)\">\r\n      </quill-editor>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/extension/editor/quill-edit/quill-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/extension/editor/quill-edit/quill-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuillEditComponent; });
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

var QuillEditComponent = /** @class */ (function () {
    function QuillEditComponent() {
        this.editorConfig = {
            placeholder: 'About Your Self'
        };
    }
    QuillEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editorContent = _this.editorContent;
            console.log('you can use the quill instance object to do something', _this.editor);
            // this.editor.disable();
        }, 2800);
    };
    QuillEditComponent.prototype.onEditorBlured = function (quill) {
        console.log('editor blur!', quill);
    };
    QuillEditComponent.prototype.onEditorFocused = function (quill) {
        console.log('editor focus!', quill);
    };
    QuillEditComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        console.log('quill is ready! this is current quill instance object', quill);
    };
    QuillEditComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        console.log('quill content is changed!', quill, html, text);
    };
    QuillEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quill-edit',
            template: __webpack_require__("./src/app/theme/extension/editor/quill-edit/quill-edit.component.html"),
            styles: [__webpack_require__("./src/app/theme/extension/editor/quill-edit/quill-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuillEditComponent);
    return QuillEditComponent;
}());



/***/ }),

/***/ "./src/app/theme/extension/editor/quill-edit/quill-edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditModule", function() { return QuillEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quill_edit_routing_module__ = __webpack_require__("./src/app/theme/extension/editor/quill-edit/quill-edit-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quill_edit_component__ = __webpack_require__("./src/app/theme/extension/editor/quill-edit/quill-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__ = __webpack_require__("./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var QuillEditModule = /** @class */ (function () {
    function QuillEditModule() {
    }
    QuillEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__quill_edit_routing_module__["a" /* QuillEditRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__["a" /* QuillEditorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__quill_edit_component__["a" /* QuillEditComponent */]]
        })
    ], QuillEditModule);
    return QuillEditModule;
}());



/***/ })

});
//# sourceMappingURL=quill-edit.module.chunk.js.map