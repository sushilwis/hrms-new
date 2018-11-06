webpackJsonp(["notify.module"],{

/***/ "./node_modules/angular2-notifications/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_push_notifications_module__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/push-notifications.module.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__["b"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/push-notifications.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PushNotificationsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__push_notifications_services_push_notifications_service__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/push-notifications/services/push-notifications.service.js");
/* unused harmony namespace reexport */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PushNotificationsModule = (function () {
    function PushNotificationsModule() {
    }
    return PushNotificationsModule;
}());
PushNotificationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__push_notifications_services_push_notifications_service__["a" /* PushNotificationsService */]]
    })
], PushNotificationsModule);

//# sourceMappingURL=push-notifications.module.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/push-notifications/services/push-notifications.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PushNotificationsService = (function () {
    function PushNotificationsService() {
        this.permission = this.isSupported() ? Notification.permission : 'denied';
    }
    PushNotificationsService.prototype.requestPermission = function () {
        var _this = this;
        if ('Notification' in window)
            Notification.requestPermission(function (status) { return _this.permission = status; });
    };
    PushNotificationsService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    PushNotificationsService.prototype.create = function (title, options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (obs) {
            if (!('Notification' in window)) {
                obs.error('Notifications are not available in this environment');
                obs.complete();
            }
            if (_this.permission !== 'granted') {
                obs.error("The user hasn't granted you permission to send push notifications");
                obs.complete();
            }
            var n = new Notification(title, options);
            n.onshow = function (e) { return obs.next({ notification: n, event: e }); };
            n.onclick = function (e) { return obs.next({ notification: n, event: e }); };
            n.onerror = function (e) { return obs.error({ notification: n, event: e }); };
            n.onclose = function () { return obs.complete(); };
        });
    };
    return PushNotificationsService;
}());
PushNotificationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PushNotificationsService);

//# sourceMappingURL=push-notifications.service.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SimpleNotificationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_notifications_components_simple_notifications_component__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/components/simple-notifications.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simple_notifications_components_notification_component__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/components/notification.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_notifications_pipes_max_pipe__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/pipes/max.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simple_notifications_services_notifications_service__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__simple_notifications_interfaces_icons__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/interfaces/icons.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__simple_notifications_services_notifications_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SimpleNotificationsModule = SimpleNotificationsModule_1 = (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule.forRoot = function () {
        return {
            ngModule: SimpleNotificationsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__simple_notifications_services_notifications_service__["a" /* NotificationsService */]]
        };
    };
    return SimpleNotificationsModule;
}());
SimpleNotificationsModule = SimpleNotificationsModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__simple_notifications_components_simple_notifications_component__["a" /* SimpleNotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__simple_notifications_components_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__simple_notifications_pipes_max_pipe__["a" /* MaxPipe */]
        ],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__simple_notifications_components_simple_notifications_component__["a" /* SimpleNotificationsComponent */]]
    })
], SimpleNotificationsModule);

var SimpleNotificationsModule_1;
//# sourceMappingURL=simple-notifications.module.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/simple-notifications/components/notification.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notifications_service__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationComponent = (function () {
    function NotificationComponent(notificationService, domSanitizer, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.zone = zone;
        // Progress bar variables
        this.progressWidth = 0;
        this.stopTime = false;
        this.count = 0;
        this.instance = function () {
            _this.zone.runOutsideAngular(function () {
                _this.zone.run(function () { return _this.diff = (new Date().getTime() - _this.start) - (_this.count * _this.speed); });
                if (_this.count++ === _this.steps)
                    _this.zone.run(function () { return _this.remove(); });
                else if (!_this.stopTime) {
                    if (_this.showProgressBar)
                        _this.zone.run(function () { return _this.progressWidth += 100 / _this.steps; });
                    _this.timer = setTimeout(_this.instance, (_this.speed - _this.diff));
                }
            });
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
    };
    NotificationComponent.prototype.startTimeOut = function () {
        var _this = this;
        this.steps = this.timeOut / 10;
        this.speed = this.timeOut / this.steps;
        this.start = new Date().getTime();
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.speed); });
    };
    NotificationComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    };
    NotificationComponent.prototype.onLeave = function () {
        if (this.pauseOnHover) {
            this.stopTime = false;
            setTimeout(this.instance, (this.speed - this.diff));
        }
    };
    NotificationComponent.prototype.setPosition = function () {
        return this.position !== 0 ? this.position * 90 : 0;
    };
    NotificationComponent.prototype.onClick = function ($e) {
        this.item.click.emit($e);
        if (this.clickToClose) {
            this.remove();
        }
    };
    // Attach all the overrides
    NotificationComponent.prototype.attachOverrides = function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = _this.item.override[a];
            }
        });
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
    NotificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.zone.run(function () { return _this.notificationService.set(_this.item, false); });
                }, 310);
            });
        }
        else {
            this.notificationService.set(this.item, false);
        }
    };
    return NotificationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "timeOut", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "showProgressBar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "pauseOnHover", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "clickToClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "maxLength", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NotificationComponent.prototype, "theClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "rtl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NotificationComponent.prototype, "animate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "position", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "item", void 0);
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-notification',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('enterLeave', [
                // Enter from right
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('fromRight', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => fromRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(5%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('fromRightOut', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-5%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('fromRight => fromRightOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out')
                ]),
                // Enter from left
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('fromLeft', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => fromLeft', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(-5%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('fromLeftOut', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(5%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('fromLeft => fromLeftOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in-out')
                ]),
                // Rotate
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('scale', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'scale(1)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => scale', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'scale(0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('scaleOut', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'scale(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('scale => scaleOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'scale(1)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                // Scale
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('rotate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(0deg)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => rotate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'rotate(5deg)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('rotateOut', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, transform: 'rotate(-5deg)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('rotate => rotateOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, transform: 'rotate(0deg)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ])
            ])
        ],
        template: "\n        <div class=\"simple-notification\"\n            [@enterLeave]=\"item.state\"\n            (click)=\"onClick($event)\"\n            [class]=\"theClass\"\n\n            [ngClass]=\"{\n                'alert': item.type === 'alert',\n                'error': item.type === 'error',\n                'warn': item.type === 'warn',\n                'success': item.type === 'success',\n                'info': item.type === 'info',\n                'bare': item.type === 'bare',\n                'rtl-mode': rtl\n            }\"\n\n            (mouseenter)=\"onEnter()\"\n            (mouseleave)=\"onLeave()\">\n\n            <div *ngIf=\"!item.html\">\n                <div class=\"sn-title\">{{item.title}}</div>\n                <div class=\"sn-content\">{{item.content | max:maxLength}}</div>\n\n                <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\n            </div>\n            <div *ngIf=\"item.html\" [innerHTML]=\"item.html\"></div>\n\n            <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n                <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n            </div>\n\n        </div>\n    ",
        styles: ["\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }\n\n        .simple-notification .sn-title {\n            margin: 0;\n            padding: 0 50px 0 0;\n            line-height: 30px;\n            font-size: 20px;\n        }\n\n        .simple-notification .sn-content {\n            margin: 0;\n            font-size: 16px;\n            padding: 0 50px 0 0;\n            line-height: 20px;\n        }\n\n        .simple-notification .icon {\n            position: absolute;\n            box-sizing: border-box;\n            top: 0;\n            right: 0;\n            width: 70px;\n            height: 70px;\n            padding: 10px;\n        }\n\n        .simple-notification .icon svg {\n            fill: #fff;\n            width: 100%;\n            height: 100%;\n        }\n\n        .simple-notification .icon svg g {\n            fill: #fff;\n        }\n\n        .simple-notification.rtl-mode {\n            direction: rtl;\n        }\n\n        .simple-notification.rtl-mode .sn-content {\n            padding: 0 0 0 50px;\n        }\n\n        .simple-notification.rtl-mode svg {\n            left: 0;\n            right: auto;\n        }\n\n        .simple-notification.error { background: #F44336; }\n        .simple-notification.success { background: #8BC34A; }\n        .simple-notification.alert { background: #ffdb5b; }\n        .simple-notification.info { background: #03A9F4; }\n        .simple-notification.warn { background: #ffdb5b; }\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n        }\n\n        .simple-notification.success .sn-progress-loader span { background: #689F38; }\n        .simple-notification.error .sn-progress-loader span { background: #D32F2F; }\n        .simple-notification.alert .sn-progress-loader span { background: #edc242; }\n        .simple-notification.info .sn-progress-loader span { background: #0288D1; }\n        .simple-notification.warn .sn-progress-loader span { background: #edc242; }\n        .simple-notification.bare .sn-progress-loader span { background: #ccc; }\n\n        .simple-notification.warn div .sn-title { color: #444; }\n        .simple-notification.warn div .sn-content { color: #444; }\n    "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_notifications_service__["a" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/simple-notifications/components/simple-notifications.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleNotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notifications_service__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleNotificationsComponent = (function () {
    function SimpleNotificationsComponent(_service) {
        this._service = _service;
        this.onCreate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDestroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        // Received values
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        // Sent values
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = 'fromRight';
    }
    Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
        set: function (opt) {
            this.attachChanges(opt);
        },
        enumerable: true,
        configurable: true
    });
    SimpleNotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for changes in the service
        this.listener = this._service.getChangeEmitter()
            .subscribe(function (item) {
            switch (item.command) {
                case 'cleanAll':
                    _this.notifications = [];
                    break;
                case 'clean':
                    _this.cleanSingle(item.id);
                    break;
                case 'set':
                    if (item.add)
                        _this.add(item.notification);
                    else
                        _this.defaultBehavior(item);
                    break;
                default:
                    _this.defaultBehavior(item);
                    break;
            }
        });
    };
    // Default behavior on event
    SimpleNotificationsComponent.prototype.defaultBehavior = function (value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.onDestroy.emit(this.buildEmit(value.notification, false));
    };
    // Add the new notification to the notification array
    SimpleNotificationsComponent.prototype.add = function (item) {
        item.createdOn = new Date();
        var toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        // Save this as the last created notification
        this.lastNotificationCreated = item;
        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(0, 1);
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(this.notifications.length - 1, 1);
                this.notifications.splice(0, 0, item);
            }
            this.onCreate.emit(this.buildEmit(item, true));
        }
    };
    // Check if notifications should be prevented
    SimpleNotificationsComponent.prototype.block = function (item) {
        var toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            for (var i = 0; i < this.notifications.length; i++) {
                if (toCheck(this.notifications[i], item)) {
                    return true;
                }
            }
        }
        if (this.preventLastDuplicates) {
            var comp = void 0;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    };
    SimpleNotificationsComponent.prototype.checkStandard = function (checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    };
    SimpleNotificationsComponent.prototype.checkHtml = function (checker, item) {
        return checker.html ? checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html : false;
    };
    // Attach all the changes received in the options object
    SimpleNotificationsComponent.prototype.attachChanges = function (options) {
        var _this = this;
        Object.keys(options).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = options[a];
            }
        });
    };
    SimpleNotificationsComponent.prototype.buildEmit = function (notification, to) {
        var toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    };
    SimpleNotificationsComponent.prototype.cleanSingle = function (id) {
        var indexOfDelete = 0;
        var doDelete = false;
        this.notifications.forEach(function (notification, idx) {
            if (notification.id === id) {
                indexOfDelete = idx;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
        }
    };
    SimpleNotificationsComponent.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    };
    return SimpleNotificationsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SimpleNotificationsComponent.prototype, "options", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SimpleNotificationsComponent.prototype, "onCreate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SimpleNotificationsComponent.prototype, "onDestroy", void 0);
SimpleNotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-notifications',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "\n        <div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\n            <simple-notification\n                *ngFor=\"let a of notifications; let i = index\"\n                [item]=\"a\"\n                [timeOut]=\"timeOut\"\n                [clickToClose]=\"clickToClose\"\n                [maxLength]=\"maxLength\"\n                [showProgressBar]=\"showProgressBar\"\n                [pauseOnHover]=\"pauseOnHover\"\n                [theClass]=\"theClass\"\n                [rtl]=\"rtl\"\n                [animate]=\"animate\"\n                [position]=\"i\"\n                >\n            </simple-notification>\n        </div>\n    ",
        styles: ["\n        .simple-notification-wrapper {\n            position: fixed;\n            width: 300px;\n            z-index: 1000;\n        }\n        \n        .simple-notification-wrapper.left { left: 20px; }\n        .simple-notification-wrapper.top { top: 20px; }\n        .simple-notification-wrapper.right { right: 20px; }\n        .simple-notification-wrapper.bottom { bottom: 20px; }\n        \n        @media (max-width: 340px) {\n            .simple-notification-wrapper {\n                width: auto;\n                left: 20px;\n                right: 20px;\n            }\n        }\n    "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notifications_service__["a" /* NotificationsService */]])
], SimpleNotificationsComponent);

//# sourceMappingURL=simple-notifications.component.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/simple-notifications/interfaces/icons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultIcons; });
var defaultIcons = {
    alert: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\n        </svg>\n    ",
    error: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n        </svg>\n    ",
    info: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/>\n        </svg>\n    ",
    success: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>\n        </svg>\n    ",
    warn: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" width=\"64\" viewBox=\"0 0 64 64\" height=\"64\">\n          <circle cx=\"32.086\" cy=\"50.142\" r=\"2.256\"/>\n          <path d=\"M30.08 25.012V42.32c0 1.107.897 2.005 2.006 2.005s2.006-.897 2.006-2.005V25.012c0-1.107-.897-2.006-2.006-2.006s-2.006.898-2.006 2.006z\"/>\n          <path d=\"M63.766 59.234L33.856 3.082c-.697-1.308-2.844-1.308-3.54 0L.407 59.234c-.331.622-.312 1.372.051 1.975.362.605 1.015.975 1.72.975h59.816c.705 0 1.357-.369 1.721-.975.361-.603.381-1.353.051-1.975zM5.519 58.172L32.086 8.291l26.568 49.881H5.519z\"/>\n        </svg>\n    "
};
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/simple-notifications/pipes/max.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaxPipe = (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return value;
        var allowed = args[0];
        var received = value.length;
        if (received > allowed && allowed !== 0) {
            var toCut = allowed - received;
            return value.slice(0, toCut);
        }
        return value;
    };
    return MaxPipe;
}());
MaxPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'max' })
], MaxPipe);

//# sourceMappingURL=max.pipe.js.map

/***/ }),

/***/ "./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_icons__ = __webpack_require__("./node_modules/angular2-notifications/dist/src/simple-notifications/interfaces/icons.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsService = (function () {
    function NotificationsService() {
        this.emitter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.icons = __WEBPACK_IMPORTED_MODULE_2__interfaces_icons__["a" /* defaultIcons */];
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        notification.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    ;
    NotificationsService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    //// Access methods
    NotificationsService.prototype.success = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'success', icon: this.icons.success, override: override }, true);
    };
    NotificationsService.prototype.error = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'error', icon: this.icons.error, override: override }, true);
    };
    NotificationsService.prototype.alert = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'alert', icon: this.icons.alert, override: override }, true);
    };
    NotificationsService.prototype.info = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'info', icon: this.icons.info, override: override }, true);
    };
    NotificationsService.prototype.warn = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'warn', icon: this.icons.warn, override: override }, true);
    };
    NotificationsService.prototype.bare = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'bare', icon: 'bare', override: override }, true);
    };
    // With type method
    NotificationsService.prototype.create = function (title, content, type, override) {
        if (content === void 0) { content = ''; }
        if (type === void 0) { type = 'success'; }
        return this.set({ title: title, content: content, type: type, icon: this.icons[type], override: override }, true);
    };
    // HTML Notification method
    NotificationsService.prototype.html = function (html, type, override) {
        if (type === void 0) { type = 'success'; }
        return this.set({ html: html, type: type, icon: 'bare', override: override }, true);
    };
    // Remove all notifications method
    NotificationsService.prototype.remove = function (id) {
        if (id)
            this.emitter.next({ command: 'clean', id: id });
        else
            this.emitter.next({ command: 'cleanAll' });
    };
    return NotificationsService;
}());
NotificationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NotificationsService);

//# sourceMappingURL=notifications.service.js.map

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */],
        data: {
            title: 'Notify',
            icon: 'icon-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - notify',
            status: true
        }
    }
];
var NotifyRoutingModule = /** @class */ (function () {
    function NotifyRoutingModule() {
    }
    NotifyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], NotifyRoutingModule);
    return NotifyRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Basic notifications card start -->\r\n    <app-card [title]=\"'Basic notifications'\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <tbody>\r\n          <tr>\r\n            <td>Primary Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-warning btn-sm ripple\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'crate', subType: 'warn'})\">Warning <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use type <code>warn</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Success Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-success btn-sm ripple light\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'success'})\">Success <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use type <code>success</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Info Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-info btn-sm ripple light\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info'})\">Info <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use type <code>info</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Danger Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-danger btn-sm ripple light\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'error'})\">Danger <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use type <code>danger</code> to use this style notification</td>\r\n          </tr>\r\n          <!-- basic notification end -->\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Basic notifications card end -->\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <!-- Basic notifications card start -->\r\n    <app-card [title]=\"'Animate notifications'\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <tbody>\r\n          <tr>\r\n            <td>fromRight Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight'})\">Default/fromRight <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use animate <code>fromRight</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>fromLeft Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromLeft'})\">fromLeft <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use animate <code>fromLeft</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Sacle Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'scale'})\">Scale <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use animate <code>scale</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Rotate Notice</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'rotate'})\">Rotate <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use animate <code>rotate</code> to use this style notification</td>\r\n          </tr>\r\n          <!-- basic notification end -->\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Basic notifications card end -->\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <!-- notifications option start -->\r\n    <app-card [title]=\"'Options notifications'\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <tbody>\r\n          <tr>\r\n            <td>No Title</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({msg: 'Check me out! - no title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Title <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use title <code>null or not use 'title' input</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>No Message</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Only Title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Message <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use msg <code>not use 'msg' input</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Small Icon</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Small Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'small-icon'})\">Small Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use theClass <code>small-icon</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>No Icon</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'No Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'no-icon'})\">No Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use theClass <code>no-icon</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Click To Close</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Click To Close', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', clickToClose: true})\"> Click to close <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use clickToClose <code>true/false</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Show Progress</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Show Progress', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:false, showProgressBar: true})\"> Show Progress <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use showProgressBar<code>true</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Pus On Hover</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Push On Hover', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:true, showProgressBar: true})\"> Push On Hover <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use pauseOnHover<code>true</code> to use this style notification</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- notifications option end -->\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <!-- notifications position start -->\r\n    <app-card [title]=\"'notifications position'\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <tbody>\r\n          <tr>\r\n            <td>Top Left</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Top Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'left', maxStack: 1})\">Top Left <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use position1 <code>top</code> position2 <code>left</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Top Right</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Top Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'right', maxStack: 1})\">Top Right <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use position1 <code>top</code> position2 <code>right</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Bottom Left</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Bottom Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'left', maxStack: 1})\">Bottom Left <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use position1 <code>bottom</code> position2 <code>left</code> to use this style notification</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Bottom Right</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm ripple light\" (click)=\"addNotify({title: 'Bottom Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'right', maxStack: 1})\">Bottom Right <i class=\"icofont icofont-play-alt-2\"></i></button>\r\n            </td>\r\n            <td>Use position1 <code>bottom</code> position2 <code>right</code> to use this style notification</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- notifications option end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifyComponent = /** @class */ (function () {
    function NotifyComponent(servicePNotify) {
        this.servicePNotify = servicePNotify;
        this.options = {
            position: ['bottom', 'right'],
        };
        this.position1 = 'bottom';
        this.position2 = 'right';
        this.timeOut = 1000;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.lastOnBottom = true;
        this.clickToClose = true;
        this.maxLength = 0;
        this.maxStack = 8;
        this.preventDuplicates = false;
        this.preventLastDuplicates = false;
        this.rtl = false;
        this.animate = 'fromRight';
        this.subType = 'success';
    }
    NotifyComponent.prototype.ngOnInit = function () {
    };
    NotifyComponent.prototype.addNotify = function (options) {
        // this.servicePNotify.remove();
        this.options = {
            position: [
                ('position1' in options) ? options.position1 : this.position1,
                ('position2' in options) ? options.position2 : this.position2
            ],
            maxStack: ('maxStack' in options) ? options.maxStack : this.maxStack,
            timeOut: options.timeOut ? options.timeOut : this.timeOut,
            showProgressBar: ('showProgressBar' in options) ? options.showProgressBar : this.showProgressBar,
            pauseOnHover: ('pauseOnHover' in options) ? options.pauseOnHover : this.pauseOnHover,
            lastOnBottom: ('lastOnBottom' in options) ? options.lastOnBottom : this.lastOnBottom,
            clickToClose: ('clickToClose' in options) ? options.clickToClose : this.clickToClose,
            maxLength: options.maxLength ? options.maxLength : this.maxLength,
            preventDuplicates: ('preventDuplicates' in options) ? options.preventDuplicates : this.preventDuplicates,
            preventLastDuplicates: ('preventLastDuplicates' in options) ? options.preventLastDuplicates : this.preventLastDuplicates,
            theClass: options.theClass ? options.theClass : this.theClass,
            rtl: ('rtl' in options) ? options.rtl : this.rtl,
            animate: options.animate ? options.animate : this.animate,
            icons: options.icons ? options.icons : this.icons
        };
        switch (options.type) {
            case 'success':
                this.servicePNotify.success(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'error':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'alert':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'warn':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'info':
                this.servicePNotify.info(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'create':
                this.servicePNotify.create(options.title ? options.title : this.title, options.msg ? options.msg : this.msg, options.type ? options.type : this.subType);
                break;
            case 'html':
                this.servicePNotify.html(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            default:
                this.servicePNotify.alert(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
        }
    };
    NotifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["a" /* NotificationsService */]])
    ], NotifyComponent);
    return NotifyComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyModule", function() { return NotifyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotifyModule = /** @class */ (function () {
    function NotifyModule() {
    }
    NotifyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__notify_routing_module__["a" /* NotifyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */]]
        })
    ], NotifyModule);
    return NotifyModule;
}());



/***/ })

});
//# sourceMappingURL=notify.module.chunk.js.map