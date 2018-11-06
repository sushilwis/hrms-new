webpackJsonp(["ngx-wizard.module"],{

/***/ "./src/app/theme/forms/ngx-wizard/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Address Tab form Starts -->\r\n<form #addressForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div class=\"tab-pane active\">\r\n        <h4 class=\"head text-center\">{{title}}</h4>\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-sm-12'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"street\">Street Address</label>\r\n                    <input class=\"form-control input-md\" #street=\"ngModel\" required id=\"street\" name=\"street\" type=\"text\"  [(ngModel)]=\"address.street\">\r\n                    <small class=\"form-text text-danger\" *ngIf=\"!street.valid && (street.dirty || street.touched)\">This field is required!</small>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class='col-12 col-sm-4'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"city\">City</label>\r\n                            <input class=\"form-control input-md\" #city=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\"  [(ngModel)]=\"address.city\">\r\n                            <small class=\"form-text text-danger\" *ngIf=\"!city.valid && (city.dirty || city.touched)\">This field is required!</small>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-4 col-sm-offset-1 col-sm-3'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"state\">State</label>\r\n                            <input class=\"form-control input-md\" #state=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\"  [(ngModel)]=\"address.state\">\r\n                            <small class=\"form-text text-danger\" *ngIf=\"!state.valid && (state.dirty || state.touched)\">This field is required!</small>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-offset-1 col-7 col-sm-offset-1 col-sm-3'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"zip\">Zip</label>\r\n                            <input class=\"form-control input-md\" #zip=\"ngModel\" required id=\"zip\" name=\"zip\" type=\"text\"  [(ngModel)]=\"address.zip\">\r\n                            <small class=\"form-text text-danger\" *ngIf=\"!zip.valid && (zip.dirty || zip.touched)\">This field is required!</small>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group text-center\">\r\n                    <button uiSref=\"work\" type=\"button\" class=\"btn btn-raised btn-secondary\" (click)=\"cancel()\"> <span style=\"margin-right:10px;\"><i class=\"feather icon-chevron-left\"></i></span> Previous</button>\r\n                    <button uiSref=\"result\" type=\"button\" class=\"btn btn-raised btn-info\" [disabled]=\"!addressForm.valid\" (click)=\"save(addressForm)\"> Next <span style=\"margin-left:10px;\"><i class=\"feather icon-chevron-right\"></i></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n<!-- Address Tab form Ends -->\r\n"

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/address/address.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressComponent = /** @class */ (function () {
    function AddressComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Where do you live?';
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.address = this.formDataService.getAddress();
    };
    AddressComponent.prototype.save = function (form) {
        if (!form.valid) {
            return;
        }
        this.formDataService.setAddress(this.address);
        var firstState = this.workflowService.getFirstInvalidStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].work);
        this.router.navigate(['result'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    AddressComponent.prototype.cancel = function () {
        this.router.navigate(['work'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mt-wizard-address',
            template: __webpack_require__("./src/app/theme/forms/ngx-wizard/address/address.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/ngx-wizard/address/address.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */],
            __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/data/formData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
/* unused harmony export Personal */
/* unused harmony export Address */
var FormData = /** @class */ (function () {
    function FormData() {
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    return FormData;
}());

var Personal = /** @class */ (function () {
    function Personal() {
    }
    return Personal;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/data/formData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].personal);
    };
    FormDataService.prototype.getWork = function () {
        return this.formData.work;
    };
    FormDataService.prototype.setWork = function (data) {
        this.isWorkFormValid = true;
        this.formData.work = data;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].work);
    };
    FormDataService.prototype.getAddress = function () {
        var address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    };
    FormDataService.prototype.setAddress = function (data) {
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].address);
    };
    FormDataService.prototype.getFormData = function () {
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        return this.isPersonalFormValid && this.isWorkFormValid && this.isAddressFormValid;
    };
    FormDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]])
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board-inner\" id=\"status-buttons\">\r\n    <ul class=\"nav nav-tabs nav-fill\" id=\"myTab\">\r\n        <div class=\"liner\"></div>\r\n\r\n        <li class=\"active nav-item\">\r\n            <a [ngClass]=\"(page==='Personal')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"personal\" data-toggle=\"tab\"\r\n                title=\"personal\">\r\n                <span class=\"round-tabs one\">\r\n                  <h5><i class=\"feather icon-user-check\"></i> Personal</h5>\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a [ngClass]=\"(page==='Work')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"work\" data-toggle=\"tab\" title=\"work\">\r\n                <span class=\"round-tabs two\">\r\n                  <h5><i class=\"feather icon-message-circle\"></i> Work</h5>\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a [ngClass]=\"(page==='Address')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"address\" data-toggle=\"tab\" title=\"address\">\r\n                <span class=\"round-tabs three\">\r\n                  <h5><i class=\"feather icon-map\"></i> Address</h5>\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a [ngClass]=\"(page==='Result')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"result\" data-toggle=\"tab\" title=\"completed\">\r\n                <span class=\"round-tabs four\">\r\n                  <h5><i class=\"feather icon-airplay\"></i> Finished</h5>\r\n                </span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, route) {
        this.router = router;
        this.route = route;
        this.page = 'Personal';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            _this.page = currentRoute.snapshot.data['title'];
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-msw-navbar',
            template: __webpack_require__("./src/app/theme/forms/ngx-wizard/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/ngx-wizard/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGXWizardRoutingModule; });
/* unused harmony export routedComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_work_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_address_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_result_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_wizard_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/ngx-wizard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__ngx_wizard_component__["a" /* NGXFormWizardComponent */],
        data: {
            title: 'ngx-wizard'
        },
        children: [
            {
                path: 'wizard',
                component: __WEBPACK_IMPORTED_MODULE_2__personal_personal_component__["a" /* PersonalComponent */],
                data: {
                    title: 'Personal'
                }
            },
            {
                path: 'work',
                component: __WEBPACK_IMPORTED_MODULE_3__work_work_component__["a" /* WorkComponent */],
                data: {
                    title: 'Work'
                }
            },
            {
                path: 'address',
                component: __WEBPACK_IMPORTED_MODULE_4__address_address_component__["a" /* AddressComponent */],
                data: {
                    title: 'Address'
                }
            },
            {
                path: 'result',
                component: __WEBPACK_IMPORTED_MODULE_5__result_result_component__["a" /* ResultComponent */],
                data: {
                    title: 'Result'
                }
            }
        ]
    }
];
var NGXWizardRoutingModule = /** @class */ (function () {
    function NGXWizardRoutingModule() {
    }
    NGXWizardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]],
        })
    ], NGXWizardRoutingModule);
    return NGXWizardRoutingModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_6__ngx_wizard_component__["a" /* NGXFormWizardComponent */]];


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <section id=\"ngx\" class=\"ngx-form-wizard\">\r\n        <app-card [title]=\"'NGX Wizard'\">\r\n            <div class=\"board\">\r\n              <app-msw-navbar></app-msw-navbar>\r\n              <div class=\"tab-content\">\r\n                <router-outlet> </router-outlet>\r\n              </div>\r\n            </div>\r\n        </app-card>\r\n        </section>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard.component.scss":
/***/ (function(module, exports) {

module.exports = ".tab-content .tab-pane {\n  padding-top: 20px; }\n\n.alert {\n  padding: 8px;\n  margin-bottom: 8px; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n"

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGXFormWizardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NGXFormWizardComponent = /** @class */ (function () {
    function NGXFormWizardComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    NGXFormWizardComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
    };
    NGXFormWizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multi-step-wizard',
            template: __webpack_require__("./src/app/theme/forms/ngx-wizard/ngx-wizard.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/ngx-wizard/ngx-wizard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NGXFormWizardComponent);
    return NGXFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXFormWizardModule", function() { return NGXFormWizardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_wizard_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/ngx-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_personal_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_work_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_address_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__result_result_component__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_formData_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workflow_workflow_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_wizard_routing_module__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/ngx-wizard-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var NGXFormWizardModule = /** @class */ (function () {
    function NGXFormWizardModule() {
    }
    NGXFormWizardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__ngx_wizard_routing_module__["a" /* NGXWizardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_8__data_formData_service__["a" /* FormDataService */], useClass: __WEBPACK_IMPORTED_MODULE_8__data_formData_service__["a" /* FormDataService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_9__workflow_workflow_service__["a" /* WorkflowService */], useClass: __WEBPACK_IMPORTED_MODULE_9__workflow_workflow_service__["a" /* WorkflowService */] }],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ngx_wizard_component__["a" /* NGXFormWizardComponent */], __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_4__personal_personal_component__["a" /* PersonalComponent */], __WEBPACK_IMPORTED_MODULE_5__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_6__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_7__result_result_component__["a" /* ResultComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__ngx_wizard_component__["a" /* NGXFormWizardComponent */]]
        })
    ], NGXFormWizardModule);
    return NGXFormWizardModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Personal Tab Form Starts -->\r\n<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div class=\"tab-pane active\">\r\n        <h4 class=\"head text-center\">{{title}}</h4>\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-12'>\r\n                <div class=\"row\">\r\n                    <div class='col-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"firstname\">First Name</label>\r\n                            <input class=\"form-control input-md\" #firstname=\"ngModel\" required id=\"firstname\" name=\"firstname\" type=\"text\"  [(ngModel)]=\"personal.firstName\">\r\n                            <small class=\"form-text text-danger\" *ngIf=\"!firstname.valid && (firstname.dirty || firstname.touched)\">This field is required!</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"lastname\">Last Name</label>\r\n                            <input class=\"form-control input-md\" #lastname=\"ngModel\" required id=\"lastname\" name=\"lastname\" type=\"text\"  [(ngModel)]=\"personal.lastName\">\r\n                            <small class=\"form-text text-danger\" *ngIf=\"!lastname.valid && (lastname.dirty || lastname.touched)\">This field is required!</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"email\">Email</label>\r\n                    <input class=\"form-control input-md\" #email=\"ngModel\" required email id=\"email\" name=\"email\" type=\"text\"  [(ngModel)]=\"personal.email\">\r\n                    <small class=\"form-text text-danger\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">Please enter a valid email!</small>\r\n                </div>\r\n\r\n                <div class=\"form-group text-center\">\r\n                    <button type=\"button\" uiSref=\"work\" class=\"btn btn-success btn-raised\" [disabled]=\"!personalForm.valid\" (click)=\"save(personalForm)\"> Next <span style=\"margin-left:10px;\"><i class=\"feather icon-chevron-right\"></i></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!-- Personal Tab Form Ends -->\r\n"

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/personal/personal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Please tell us about yourself.';
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid) {
            return;
        }
        this.formDataService.setPersonal(this.personal);
        var firstState = this.workflowService.getFirstInvalidStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].work);
        if (firstState.length > 0) { }
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    };
    PersonalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mt-wizard-personal',
            template: __webpack_require__("./src/app/theme/forms/ngx-wizard/personal/personal.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/ngx-wizard/personal/personal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */],
            __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Result tab Form starts -->\r\n<div class=\"tab-pane active\">\r\n    <h3 class=\"head text-center\">{{title}}</h3>\r\n\r\n    <p class=\"narrow text-center\">\r\n        Here is a copy of the information you have entered:\r\n    </p>\r\n    <div class='row'>\r\n        <div class='col-offset-1 col-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\r\n            <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\">Name: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.firstName + ' ' + formData.lastName}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\">Email: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.email}}\r\n                </div>\r\n           </div>\r\n            <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\">Work: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.work}}\r\n                </div>\r\n           </div>\r\n           <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\">Address: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.street}}\r\n                    <br/>\r\n                    {{formData.city + ' ' + formData.state + ' ' + formData.zip}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <button uiSref=\"personal\" class=\"btn btn-success btn-raised\" [disabled]=\"!isFormValid\" (click)=\"submit()\"> Submit <span style=\"margin-left:10px;\"><i class=\"feather icon-arrow-right\"></i></span></button>\r\n    </div>\r\n</div>\r\n<!-- Result tab Form ends -->\r\n"

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/result/result.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_model__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = /** @class */ (function () {
    function ResultComponent(router, route, formDataService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.title = 'Thank You!';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    };
    ResultComponent.prototype.submit = function () {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */])
    ], ResultComponent.prototype, "formData", void 0);
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mt-wizard-result',
            template: __webpack_require__("./src/app/theme/forms/ngx-wizard/result/result.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/ngx-wizard/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Work Tab Form Starts -->\r\n<form #workForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div >\r\n        <div class=\"tab-pane active\">\r\n            <h4 class=\"head text-center\">{{title}}</h4>\r\n            <br/>\r\n            <div class='row'>\r\n                <div class='col-offset-4 col-10 col-sm-offset-5 col-sm-4'>\r\n                  <div class=\"form-group form-radio\">\r\n                    <div class=\"radio radiofill radio-success radio-inline\">\r\n                      <label>\r\n                        <input type=\"radio\" #work=\"ngModel\" required name=\"work\" checked=\"checked\" [(ngModel)]=\"workType\" value=\"Design\">\r\n                        <i class=\"helper\"></i>Design\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"radio radiofill radio-info radio-inline\">\r\n                      <label>\r\n                        <input type=\"radio\" #work=\"ngModel\" required name=\"work\" checked=\"checked\" [(ngModel)]=\"workType\" value=\"Code\">\r\n                        <i class=\"helper\"></i>Code\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"radio radiofill radio-warning radio-inline\">\r\n                      <label>\r\n                        <input type=\"radio\" #work=\"ngModel\" required name=\"work\" checked=\"checked\" [(ngModel)]=\"workType\" value=\"Deploy\">\r\n                        <i class=\"helper\"></i>Deploy\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group text-center space-20\">\r\n                <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary\" (click)=\"cancel()\"> <span style=\"margin-right:10px;\"><i class=\"feather icon-chevron-left\"></i></span> Previous</button>\r\n                <button uiSref=\"address\" type=\"button\" class=\"btn btn-raised btn-info\" [disabled]=\"!workForm.valid\" (click)=\"save(workForm)\"> Next <span style=\"margin-left:10px;\"><i class=\"feather icon-chevron-right\"></i></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!-- Work Tab Form Ends -->\r\n"

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/work/work.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkComponent = /** @class */ (function () {
    function WorkComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'What do you do?';
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
    };
    WorkComponent.prototype.save = function (form) {
        if (!form.valid) {
            return;
        }
        this.formDataService.setWork(this.workType);
        var firstState = this.workflowService.getFirstInvalidStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].work);
        this.router.navigate(['address'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    WorkComponent.prototype.cancel = function () {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mt-wizard-work',
            template: __webpack_require__("./src/app/theme/forms/ngx-wizard/work/work.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/ngx-wizard/work/work.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */],
            __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STEPS; });
var STEPS = {
    personal: 'personal',
    work: 'work',
    address: 'address',
    result: 'result'
};


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_model__ = __webpack_require__("./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = /** @class */ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].personal, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].work, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].address, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].result, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WorkflowService);
    return WorkflowService;
}());



/***/ })

});
//# sourceMappingURL=ngx-wizard.module.chunk.js.map