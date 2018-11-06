webpackJsonp(["adv-tour.module"],{

/***/ "./node_modules/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbTourService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourNgBootstrapModule; });
/* unused harmony export TourAnchorNgBootstrapDirective */
/* unused harmony export TourStepTemplateComponent */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_withinviewport__ = __webpack_require__("./node_modules/withinviewport/withinviewport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_withinviewport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_withinviewport__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var TourState = {};
TourState.OFF = 0;
TourState.ON = 1;
TourState.PAUSED = 2;
TourState[TourState.OFF] = "OFF";
TourState[TourState.ON] = "ON";
TourState[TourState.PAUSED] = "PAUSED";
var TourService = (function () {
    /**
     * @param {?} router
     */
    function TourService(router$$1) {
        this.router = router$$1;
        this.stepShow$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.stepHide$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.initialize$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.start$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.end$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.pause$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.resume$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.anchorRegister$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.anchorUnregister$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.events$ = Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_merge__["b" /* mergeStatic */])(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.stepShow$)(function (value) { return ({ name: 'stepShow', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.stepHide$)(function (value) { return ({ name: 'stepHide', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.initialize$)(function (value) { return ({ name: 'initialize', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.start$)(function (value) { return ({ name: 'start', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.end$)(function (value) { return ({ name: 'end', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.pause$)(function (value) { return ({ name: 'pause', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.resume$)(function (value) { return ({ name: 'resume', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.anchorRegister$)(function (value) { return ({ name: 'anchorRegister', value: value }); }), __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["a" /* map */].bind(this.anchorUnregister$)(function (value) { return ({ name: 'anchorUnregister', value: value }); }));
        this.steps = [];
        this.anchors = {};
        this.status = TourState.OFF;
        this.isHotKeysEnabled = true;
    }
    /**
     * @param {?} steps
     * @param {?=} stepDefaults
     * @return {?}
     */
    TourService.prototype.initialize = function (steps, stepDefaults) {
        if (steps && steps.length > 0) {
            this.status = TourState.OFF;
            this.steps = steps.map(function (step) { return Object.assign({}, stepDefaults, step); });
            this.initialize$.next(this.steps);
        }
    };
    /**
     * @return {?}
     */
    TourService.prototype.disableHotkeys = function () {
        this.isHotKeysEnabled = false;
    };
    /**
     * @return {?}
     */
    TourService.prototype.enableHotkeys = function () {
        this.isHotKeysEnabled = true;
    };
    /**
     * @return {?}
     */
    TourService.prototype.start = function () {
        this.startAt(0);
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.startAt = function (stepId) {
        var _this = this;
        this.status = TourState.ON;
        this.goToStep(this.loadStep(stepId));
        this.start$.next();
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]; }).first().subscribe(function () {
            if (_this.currentStep) {
                _this.hideStep(_this.currentStep);
            }
        });
    };
    /**
     * @return {?}
     */
    TourService.prototype.end = function () {
        this.status = TourState.OFF;
        this.hideStep(this.currentStep);
        this.currentStep = undefined;
        this.end$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.pause = function () {
        this.status = TourState.PAUSED;
        this.hideStep(this.currentStep);
        this.pause$.next();
    };
    /**
     * @return {?}
     */
    TourService.prototype.resume = function () {
        this.status = TourState.ON;
        this.showStep(this.currentStep);
        this.resume$.next();
    };
    /**
     * @param {?=} pause
     * @return {?}
     */
    TourService.prototype.toggle = function (pause) {
        if (pause) {
            if (this.currentStep) {
                this.pause();
            }
            else {
                this.resume();
            }
        }
        else {
            if (this.currentStep) {
                this.end();
            }
            else {
                this.start();
            }
        }
    };
    /**
     * @return {?}
     */
    TourService.prototype.next = function () {
        if (this.hasNext(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasNext = function (step) {
        if (!step) {
            console.warn('Can\'t get next step. No currentStep.');
            return false;
        }
        return step.nextStep !== undefined || this.steps.indexOf(step) < this.steps.length - 1;
    };
    /**
     * @return {?}
     */
    TourService.prototype.prev = function () {
        if (this.hasPrev(this.currentStep)) {
            this.goToStep(this.loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1));
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hasPrev = function (step) {
        if (!step) {
            console.warn('Can\'t get previous step. No currentStep.');
            return false;
        }
        return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.goto = function (stepId) {
        this.goToStep(this.loadStep(stepId));
    };
    /**
     * @param {?} anchorId
     * @param {?} anchor
     * @return {?}
     */
    TourService.prototype.register = function (anchorId, anchor) {
        if (this.anchors[anchorId]) {
            throw new Error('anchorId ' + anchorId + ' already registered!');
        }
        this.anchors[anchorId] = anchor;
        this.anchorRegister$.next(anchorId);
    };
    /**
     * @param {?} anchorId
     * @return {?}
     */
    TourService.prototype.unregister = function (anchorId) {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    };
    /**
     * @return {?}
     */
    TourService.prototype.getStatus = function () {
        return this.status;
    };
    /**
     * @return {?}
     */
    TourService.prototype.isHotkeysEnabled = function () {
        return this.isHotKeysEnabled;
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.goToStep = function (step) {
        var _this = this;
        if (!step) {
            console.warn('Can\'t go to non-existent step');
            this.end();
            return;
        }
        var /** @type {?} */ navigatePromise = new Promise(function (resolve) { return resolve(true); });
        if (step.route !== undefined && typeof (step.route) === 'string') {
            navigatePromise = this.router.navigateByUrl(step.route);
        }
        else if (step.route && Array.isArray(step.route)) {
            navigatePromise = this.router.navigate(step.route);
        }
        navigatePromise.then(function (navigated) {
            if (navigated !== false) {
                setTimeout(function () { return _this.setCurrentStep(step); });
            }
        });
    };
    /**
     * @param {?} stepId
     * @return {?}
     */
    TourService.prototype.loadStep = function (stepId) {
        if (typeof (stepId) === 'number') {
            return this.steps[stepId];
        }
        else {
            return this.steps.find(function (step) { return step.stepId === stepId; });
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.setCurrentStep = function (step) {
        var _this = this;
        if (this.currentStep) {
            this.hideStep(this.currentStep);
        }
        this.currentStep = step;
        this.showStep(this.currentStep);
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]; }).first().subscribe(function () {
            if (_this.currentStep) {
                _this.hideStep(_this.currentStep);
            }
        });
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.showStep = function (step) {
        var /** @type {?} */ anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            console.warn('Can\'t attach to unregistered anchor with id ' + step.anchorId);
            this.end();
            return;
        }
        anchor.showTourStep(step);
        this.stepShow$.next(step);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourService.prototype.hideStep = function (step) {
        var /** @type {?} */ anchor = this.anchors[step && step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    };
    return TourService;
}());
TourService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
TourService.ctorParameters = function () {
    return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], },
    ];
};
var TourHotkeyListenerComponent = (function () {
    /**
     * @param {?} tourService
     */
    function TourHotkeyListenerComponent(tourService) {
        this.tourService = tourService;
    }
    /**
     * Configures hot keys for controlling the tour with the keyboard
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onEscapeKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON
            && this.tourService.isHotkeysEnabled()) {
            this.tourService.end();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowRightKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON
            && this.tourService.hasNext(this.tourService.currentStep)
            && this.tourService.isHotkeysEnabled()) {
            this.tourService.next();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TourHotkeyListenerComponent.prototype.onArrowLeftKey = function (event) {
        if (this.tourService.getStatus() === TourState.ON
            && this.tourService.hasPrev(this.tourService.currentStep)
            && this.tourService.isHotkeysEnabled()) {
            this.tourService.prev();
        }
    };
    return TourHotkeyListenerComponent;
}());
TourHotkeyListenerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'tour-hotkey-listener',
                template: " ",
            },] },
];
/**
 * @nocollapse
 */
TourHotkeyListenerComponent.ctorParameters = function () {
    return [
        { type: TourService, },
    ];
};
TourHotkeyListenerComponent.propDecorators = {
    'onEscapeKey': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:keydown.Escape',] },],
    'onArrowRightKey': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:keydown.ArrowRight',] },],
    'onArrowLeftKey': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:keydown.ArrowLeft',] },],
};
var TourModule = (function () {
    function TourModule() {
    }
    /**
     * @return {?}
     */
    TourModule.forRoot = function () {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
            ],
        };
    };
    return TourModule;
}());
TourModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [TourHotkeyListenerComponent],
                exports: [TourHotkeyListenerComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]],
            },] },
];
/**
 * @nocollapse
 */
TourModule.ctorParameters = function () { return []; };
var NgbTourService = /** @class */ (function (_super) {
    __extends(NgbTourService, _super);
    function NgbTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NgbTourService;
}(TourService));
NgbTourService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
NgbTourService.ctorParameters = function () { return []; };
var TourStepTemplateService = /** @class */ (function () {
    function TourStepTemplateService() {
    }
    return TourStepTemplateService;
}());
TourStepTemplateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
TourStepTemplateService.ctorParameters = function () { return []; };
var TourAnchorNgBootstrapPopoverDirective = /** @class */ (function (_super) {
    __extends(TourAnchorNgBootstrapPopoverDirective, _super);
    function TourAnchorNgBootstrapPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TourAnchorNgBootstrapPopoverDirective;
}(__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["d" /* NgbPopover */]));
TourAnchorNgBootstrapPopoverDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[tourAnchor]' },] },
];
/**
 * @nocollapse
 */
TourAnchorNgBootstrapPopoverDirective.ctorParameters = function () { return []; };
var TourAnchorNgBootstrapDirective = /** @class */ (function () {
    /**
     * @param {?} tourService
     * @param {?} tourStepTemplate
     * @param {?} element
     * @param {?} popoverDirective
     */
    function TourAnchorNgBootstrapDirective(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
    }
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnInit = function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnDestroy = function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.showTourStep = function (step) {
        this.isActive = true;
        this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        this.popoverDirective.placement = /** @type {?} */ ((step.placement || 'top')
            .replace('before', 'left').replace('after', 'right')
            .replace('below', 'bottom').replace('above', 'top'));
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        this.popoverDirective.open({ step: step });
        if (!step.preventScrolling) {
            if (!__WEBPACK_IMPORTED_MODULE_9_withinviewport___default()(this.element.nativeElement, { sides: 'bottom' })) {
                ((this.element.nativeElement)).scrollIntoView(false);
            }
            else if (!__WEBPACK_IMPORTED_MODULE_9_withinviewport___default()(this.element.nativeElement, { sides: 'left top right' })) {
                ((this.element.nativeElement)).scrollIntoView(true);
            }
        }
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.hideTourStep = function () {
        this.isActive = false;
        this.popoverDirective.close();
    };
    return TourAnchorNgBootstrapDirective;
}());
TourAnchorNgBootstrapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[tourAnchor]',
            },] },
];
/**
 * @nocollapse
 */
TourAnchorNgBootstrapDirective.ctorParameters = function () { return [
    { type: NgbTourService, },
    { type: TourStepTemplateService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: TourAnchorNgBootstrapPopoverDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
TourAnchorNgBootstrapDirective.propDecorators = {
    'tourAnchor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'isActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.touranchor--is-active',] },],
};
var TourStepTemplateComponent = /** @class */ (function (_super) {
    __extends(TourStepTemplateComponent, _super);
    /**
     * @param {?} tourStepTemplateService
     * @param {?} tourService
     */
    function TourStepTemplateComponent(tourStepTemplateService, tourService) {
        var _this = _super.call(this, tourService) || this;
        _this.tourStepTemplateService = tourStepTemplateService;
        _this.tourService = tourService;
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterContentInit = function () {
        this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
    };
    return TourStepTemplateComponent;
}(TourHotkeyListenerComponent));
TourStepTemplateComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                selector: 'tour-step-template',
                template: "\n    <ng-template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\u00AB {{step?.prevBtnTitle}}</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">{{step?.nextBtnTitle}} \u00BB</button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n      </div>\n    </ng-template>\n  ",
            },] },
];
/**
 * @nocollapse
 */
TourStepTemplateComponent.ctorParameters = function () { return [
    { type: TourStepTemplateService, },
    { type: NgbTourService, },
]; };
TourStepTemplateComponent.propDecorators = {
    'defaultTourStepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['tourStep', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] },] },],
    'stepTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
};
var TourNgBootstrapModule = /** @class */ (function () {
    function TourNgBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgBootstrapModule.forRoot = function () {
        return {
            ngModule: TourNgBootstrapModule,
            providers: [
                TourStepTemplateService
            ].concat(TourModule.forRoot().providers, [
                NgbTourService
            ]),
        };
    };
    return TourNgBootstrapModule;
}());
TourNgBootstrapModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbPopoverModule */].forRoot()],
            },] },
];
/**
 * @nocollapse
 */
TourNgBootstrapModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-tour-ng-bootstrap.es5.js.map


/***/ }),

/***/ "./node_modules/withinviewport/withinviewport.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Within Viewport
 *
 * @description Determines whether an element is completely within the browser viewport
 * @author      Craig Patik, http://patik.com/
 * @version     2.0.0
 * @date        2016-12-19
 */
(function (root, name, factory) {
    // AMD
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // Node and CommonJS-like environments
    else if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = factory();
    }
    // Browser global
    else {
        root[name] = factory();
    }
}(this, 'withinviewport', function () {
    var canUseWindowDimensions = window.innerHeight !== undefined; // IE 8 and lower fail this

    /**
     * Determines whether an element is within the viewport
     * @param  {Object}  elem       DOM Element (required)
     * @param  {Object}  options    Optional settings
     * @return {Boolean}            Whether the element was completely within the viewport
    */
    var withinviewport = function withinviewport (elem, options) {
        var result = false;
        var metadata = {};
        var config = {};
        var settings;
        var isWithin;
        var isContainerTheWindow;
        var elemBoundingRect;
        var containerBoundingRect;
        var scrollBarWidths = [0, 0];
        var sideNamesPattern;
        var sides;
        var side;
        var i;

        // If invoked by the jQuery plugin, get the actual DOM element
        if (typeof jQuery !== 'undefined' && elem instanceof jQuery) {
            elem = elem.get(0);
        }

        if (typeof elem !== 'object' || elem.nodeType !== 1) {
            throw new Error('First argument must be an element');
        }

        // Look for inline settings on the element
        if (elem.getAttribute('data-withinviewport-settings') && window.JSON) {
            metadata = JSON.parse(elem.getAttribute('data-withinviewport-settings'));
        }

        // Settings argument may be a simple string (`top`, `right`, etc)
        if (typeof options === 'string') {
            settings = {sides: options};
        }
        else {
            settings = options || {};
        }

        // Build configuration from defaults and user-provided settings and metadata
        config.container = settings.container || metadata.container || withinviewport.defaults.container || window;
        config.sides  = settings.sides  || metadata.sides  || withinviewport.defaults.sides  || 'all';
        config.top    = settings.top    || metadata.top    || withinviewport.defaults.top    || 0;
        config.right  = settings.right  || metadata.right  || withinviewport.defaults.right  || 0;
        config.bottom = settings.bottom || metadata.bottom || withinviewport.defaults.bottom || 0;
        config.left   = settings.left   || metadata.left   || withinviewport.defaults.left   || 0;

        // Extract the DOM node from a jQuery collection
        if (typeof jQuery !== 'undefined' && config.container instanceof jQuery) {
            config.container = config.container.get(0);
        }

        // Use the window as the container if the user specified the body or a non-element
        if (config.container === document.body || !config.container.nodeType === 1) {
            config.container = window;
        }

        isContainerTheWindow = (config.container === window);

        // Element testing methods
        isWithin = {
            // Element is below the top edge of the viewport
            top: function _isWithin_top () {
                if (isContainerTheWindow) {
                    return (elemBoundingRect.top >= config.top);
                }
                else {
                    return (elemBoundingRect.top >= containerScrollTop - (containerScrollTop - containerBoundingRect.top) + config.top);
                }
            },

            // Element is to the left of the right edge of the viewport
            right: function _isWithin_right () {
                // Note that `elemBoundingRect.right` is the distance from the *left* of the viewport to the element's far right edge

                if (isContainerTheWindow) {
                    return (elemBoundingRect.right <= (containerBoundingRect.right + containerScrollLeft) - config.right);
                }
                else {
                    return (elemBoundingRect.right <= containerBoundingRect.right - scrollBarWidths[0] - config.right);
                }
            },

            // Element is above the bottom edge of the viewport
            bottom: function _isWithin_bottom () {
                var containerHeight;

                if (isContainerTheWindow) {
                    if (canUseWindowDimensions) {
                        containerHeight = config.container.innerHeight;
                    }
                    else {
                        containerHeight = document.documentElement.clientHeight;
                    }
                }
                else {
                    containerHeight = containerBoundingRect.bottom;
                }

                // Note that `elemBoundingRect.bottom` is the distance from the *top* of the viewport to the element's bottom edge
                return (elemBoundingRect.bottom <= containerHeight - scrollBarWidths[1] - config.bottom);
            },

            // Element is to the right of the left edge of the viewport
            left: function _isWithin_left () {
                if (isContainerTheWindow) {
                    return (elemBoundingRect.left >= config.left);
                }
                else {
                    return (elemBoundingRect.left >= containerScrollLeft - (containerScrollLeft - containerBoundingRect.left) + config.left);
                }
            },

            // Element is within all four boundaries
            all: function _isWithin_all () {
                // Test each boundary in order of efficiency and likeliness to be false. This way we can avoid running all four functions on most elements.
                //     1. Top: Quickest to calculate + most likely to be false
                //     2. Bottom: Note quite as quick to calculate, but also very likely to be false
                //     3-4. Left and right are both equally unlikely to be false since most sites only scroll vertically, but left is faster
                return (isWithin.top() && isWithin.bottom() && isWithin.left() && isWithin.right());
            }
        };

        // Get the element's bounding rectangle with respect to the viewport
        elemBoundingRect = elem.getBoundingClientRect();

        // Get viewport dimensions and offsets
        if (isContainerTheWindow) {
            containerBoundingRect = document.documentElement.getBoundingClientRect();
            containerScrollTop = document.body.scrollTop;
            containerScrollLeft = document.body.scrollLeft;
        }
        else {
            containerBoundingRect = config.container.getBoundingClientRect();
            containerScrollTop = config.container.scrollTop;
            containerScrollLeft = config.container.scrollLeft;
        }

        // Don't count the space consumed by scrollbars
        if (containerScrollLeft) {
            scrollBarWidths[0] = 18;
        }

        if (containerScrollTop) {
            scrollBarWidths[1] = 16;
        }

        // Test the element against each side of the viewport that was requested
        sideNamesPattern = /^top$|^right$|^bottom$|^left$|^all$/;
        // Loop through all of the sides
        sides = config.sides.split(' ');
        i = sides.length;
        while (i--) {
            side = sides[i].toLowerCase();

            if (sideNamesPattern.test(side)) {
                if (isWithin[side]()) {
                    result = true;
                }
                else {
                    result = false;

                    // Quit as soon as the first failure is found
                    break;
                }
            }
        }

        return result;
    };

    // Default settings
    withinviewport.prototype.defaults = {
        container: document.body,
        sides: 'all',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    withinviewport.defaults = withinviewport.prototype.defaults;

    /**
     * Optional enhancements and shortcuts
     *
     * @description Uncomment or comment these pieces as they apply to your project and coding preferences
     */

    // Shortcut methods for each side of the viewport
    // Example: `withinviewport.top(elem)` is the same as `withinviewport(elem, 'top')`
    withinviewport.prototype.top = function _withinviewport_top (element) {
        return withinviewport(element, 'top');
    };

    withinviewport.prototype.right = function _withinviewport_right (element) {
        return withinviewport(element, 'right');
    };

    withinviewport.prototype.bottom = function _withinviewport_bottom (element) {
        return withinviewport(element, 'bottom');
    };

    withinviewport.prototype.left = function _withinviewport_left (element) {
        return withinviewport(element, 'left');
    };

    return withinviewport;
}));


/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tour/adv-tour-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvTourRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adv_tour_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/adv-tour/adv-tour.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__adv_tour_component__["a" /* AdvTourComponent */],
        data: {
            title: 'Tour',
            icon: 'icon-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tour',
            status: true
        }
    }
];
var AdvTourRoutingModule = /** @class */ (function () {
    function AdvTourRoutingModule() {
    }
    AdvTourRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AdvTourRoutingModule);
    return AdvTourRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tour/adv-tour.component.html":
/***/ (function(module, exports) {

module.exports = "<tour-step-template></tour-step-template>\r\n<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Section 1</h5>\r\n        </div>\r\n        <div class=\"card-block\" tourAnchor=\"tour2\">\r\n          <p>Use code inside div element <code tourAnchor=\"start.tour\">tourAnchor=\"start.tour\"</code> to create tour.</p>\r\n          <p>\r\n            \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\"\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Section 1 start -->\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <!-- Section 2 start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Section 2</h5>\r\n        </div>\r\n        <div class=\"card-block\" tourAnchor=\"tour3\">\r\n          <p>\r\n            \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\"\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Section 2 end -->\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <!-- Section 3 start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Section 3</h5>\r\n        </div>\r\n        <div class=\"card-block\" tourAnchor=\"tour4\">\r\n          <p>\r\n            \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\r\n            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\"\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Section 3 end -->\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <!-- Button card start -->\r\n      <div class=\"card button-page\">\r\n        <div class=\"card-header\">\r\n          <h5>Button</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <ul>\r\n            <li tourAnchor=\"tour5\">\r\n              <button class=\"btn btn-primary\">Primary Button</button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-success\">Success Button</button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-info\">Info Button</button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-warning\">Warning Button</button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- Button card end -->\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <!-- Button card start -->\r\n      <div class=\"card button-page\">\r\n        <div class=\"card-header\" tourAnchor=\"tour6\">\r\n          <h5>Rounded Button</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <ul>\r\n            <li>\r\n              <button class=\"btn btn-primary btn-round\">Primary Button\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-success btn-round\">Success Button\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-info btn-round\">Info Button</button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-warning btn-round\">Warning Button\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- Button card end -->\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <!-- Button card start -->\r\n      <div class=\"card button-page\">\r\n        <div class=\"card-header\">\r\n          <h5>Square Button</h5>\r\n        </div>\r\n        <div class=\"card-block\" tourAnchor=\"tour7\">\r\n          <ul>\r\n            <li>\r\n              <button class=\"btn btn-primary btn-square\">Primary Button\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-success btn-square\">Success Button\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-info btn-square\">Info Button</button>\r\n            </li>\r\n            <li>\r\n              <button class=\"btn btn-warning btn-square\">Warning Button\r\n              </button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- Button card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tour/adv-tour.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tour/adv-tour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvTourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_tour_ng_bootstrap__ = __webpack_require__("./node_modules/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvTourComponent = /** @class */ (function () {
    function AdvTourComponent(tourService) {
        this.tourService = tourService;
        this.tourService.events$.subscribe(console.log);
        this.tourService.initialize([{
                anchorId: 'start.tour',
                content: 'This is Card Header',
                placement: 'bottom',
                title: 'Step - 1',
            }, {
                anchorId: 'tour2',
                content: 'This is Card body',
                title: 'Step-2',
            }, {
                anchorId: 'tour3',
                content: 'This is Card body',
                title: 'Step-3',
            }, {
                anchorId: 'tour4',
                content: 'This is Card body',
                title: 'Step-4',
            }, {
                anchorId: 'tour5',
                content: 'This is Button with Primary Color',
                title: 'Step-5',
            }, {
                anchorId: 'tour6',
                content: 'This is Card Header.',
                title: 'Step-6',
            }, {
                anchorId: 'tour7',
                content: 'This is Card body',
                title: 'Step-7',
            }]);
        this.tourService.start();
    }
    AdvTourComponent.prototype.ngOnInit = function () {
    };
    AdvTourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adv-tour',
            template: __webpack_require__("./src/app/theme/ui-elements/advance/adv-tour/adv-tour.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/advance/adv-tour/adv-tour.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_tour_ng_bootstrap__["b" /* TourService */]])
    ], AdvTourComponent);
    return AdvTourComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/adv-tour/adv-tour.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvTourModule", function() { return AdvTourModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adv_tour_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/adv-tour/adv-tour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ng_bootstrap__ = __webpack_require__("./node_modules/ngx-tour-ng-bootstrap/ngx-tour-ng-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adv_tour_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/advance/adv-tour/adv-tour-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdvTourModule = /** @class */ (function () {
    function AdvTourModule() {
    }
    AdvTourModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__adv_tour_routing_module__["a" /* AdvTourRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_tour_ng_bootstrap__["a" /* TourNgBootstrapModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__adv_tour_component__["a" /* AdvTourComponent */]]
        })
    ], AdvTourModule);
    return AdvTourModule;
}());



/***/ })

});
//# sourceMappingURL=adv-tour.module.chunk.js.map