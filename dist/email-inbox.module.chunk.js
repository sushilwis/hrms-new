webpackJsonp(["email-inbox.module"],{

/***/ "./src/app/theme/email/email-inbox/e-drafts/e-drafts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade show active\" id=\"e-drafts\" role=\"tabpanel\">\r\n  <div class=\"mail-body\">\r\n    <div class=\"mail-body-header\">\r\n      <button type=\"button\" class=\"btn btn-success btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-inbox\"></i>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-ui-delete\"></i>\r\n      </button>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"icofont icofont-ui-folder\"></i>\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          More\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mail-body-content\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-warning\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Google Inc</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">08:01 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">John Doe</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Coming Up Next Week</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">13:02 PM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-info\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Sara Soudein</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SVG new updates comes for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">00:05 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Rinky Behl</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Photoshop updates are available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">10:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Harry John</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">New upcoming data available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">11:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-drafts/e-drafts.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-drafts/e-drafts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EDraftsComponent; });
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

var EDraftsComponent = /** @class */ (function () {
    function EDraftsComponent() {
    }
    EDraftsComponent.prototype.ngOnInit = function () {
    };
    EDraftsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-e-drafts',
            template: __webpack_require__("./src/app/theme/email/email-inbox/e-drafts/e-drafts.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-inbox/e-drafts/e-drafts.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EDraftsComponent);
    return EDraftsComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-main/e-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade show active\" id=\"e-inbox\" role=\"tabpanel\">\r\n\r\n  <div class=\"mail-body\">\r\n    <div class=\"mail-body-header\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-exclamation-circle\"></i>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-success btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-inbox\"></i>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-ui-delete\"></i>\r\n      </button>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"icofont icofont-ui-folder\"></i>\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          More\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mail-body-content\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-warning\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Google Inc</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">08:01 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">John Doe</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Coming Up Next Week</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">13:02 PM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-info\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Sara Soudein</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SVG new updates comes for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">00:05 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Rinky Behl</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Photoshop updates are available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">10:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Harry John</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">New upcoming data available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">11:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-warning\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Google Inc</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">08:01 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">John Doe</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Coming Up Next Week</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">13:02 PM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-info\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Sara Soudein</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SVG new updates comes for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">00:05 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Rinky Behl</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Photoshop updates are available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">10:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Harry John</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">New upcoming data available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">11:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-main/e-main.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-main/e-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMainComponent; });
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

var EMainComponent = /** @class */ (function () {
    function EMainComponent() {
    }
    EMainComponent.prototype.ngOnInit = function () {
    };
    EMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-e-main',
            template: __webpack_require__("./src/app/theme/email/email-inbox/e-main/e-main.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-inbox/e-main/e-main.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EMainComponent);
    return EMainComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-sent/e-sent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade show active\" id=\"e-sent\" role=\"tabpanel\">\r\n  <div class=\"mail-body\">\r\n    <div class=\"mail-body-header\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-exclamation-circle\"></i>\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-danger btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-ui-delete\"></i>\r\n      </button>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"icofont icofont-ui-folder\"></i>\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          More\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mail-body-content\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-warning\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Google Inc</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">08:01 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">John Doe</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Coming Up Next Week</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">13:02 PM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-info\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Sara Soudein</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SVG new updates comes for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">00:05 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Rinky Behl</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Photoshop updates are available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">10:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Harry John</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">New upcoming data available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">11:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-sent/e-sent.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-sent/e-sent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ESentComponent; });
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

var ESentComponent = /** @class */ (function () {
    function ESentComponent() {
    }
    ESentComponent.prototype.ngOnInit = function () {
    };
    ESentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-e-sent',
            template: __webpack_require__("./src/app/theme/email/email-inbox/e-sent/e-sent.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-inbox/e-sent/e-sent.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ESentComponent);
    return ESentComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-starred/e-starred.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade show active\" id=\"e-starred\" role=\"tabpanel\">\r\n  <div class=\"mail-body\">\r\n    <div class=\"mail-body-header\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-star\"></i>\r\n      </button>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"icofont icofont-ui-folder\"></i>\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          More\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mail-body-content\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Harry John</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">New upcoming data available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">11:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-warning\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Google Inc</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">08:01 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">John Doe</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Coming Up Next Week</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">13:02 PM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-info\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Sara Soudein</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SVG new updates comes for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">00:05 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Rinky Behl</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Photoshop updates are available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">10:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Harry John</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">New upcoming data available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">11:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-starred/e-starred.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-starred/e-starred.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EStarredComponent; });
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

var EStarredComponent = /** @class */ (function () {
    function EStarredComponent() {
    }
    EStarredComponent.prototype.ngOnInit = function () {
    };
    EStarredComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-e-starred',
            template: __webpack_require__("./src/app/theme/email/email-inbox/e-starred/e-starred.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-inbox/e-starred/e-starred.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EStarredComponent);
    return EStarredComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-trash/e-trash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade show active\" id=\"e-trash\" role=\"tabpanel\">\r\n  <div class=\"mail-body\">\r\n    <div class=\"mail-body-header\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-xs waves-effect waves-light\">\r\n        <i class=\"icofont icofont-exclamation-circle\"></i>\r\n      </button>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"icofont icofont-ui-folder\"></i>\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n      <div ngbDropdown class=\"btn-group dropdown-split-primary\">\r\n        <button ngbDropdownToggle type=\"button\" class=\"btn btn-warning dropdown-toggle dropdown-toggle-split waves-effect waves-light\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          More\r\n        </button>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Another action</a>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Something else</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item waves-effect waves-light\" href=\"javascript:\">Separated link</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mail-body-content\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Rinky Behl</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Photoshop updates are available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">10:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Harry John</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">New upcoming data available</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">11:01 AM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-danger\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Hanry Joseph</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">SCSS current working for new updates</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">12:01 PM</td>\r\n          </tr>\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-warning\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Google Inc</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">08:01 AM</td>\r\n          </tr>\r\n          <tr class=\"unread\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">John Doe</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Coming Up Next Week</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">13:02 PM</td>\r\n          </tr>\r\n\r\n          <tr class=\"read\">\r\n            <td>\r\n              <div class=\"check-star\">\r\n                <div class=\"checkbox-fade fade-in-primary checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" value=\"\">\r\n                    <span class=\"cr\"><i class=\"cr-icon icofont icofont-verification-check txt-primary\"></i></span>\r\n                  </label>\r\n                </div>\r\n                <i class=\"icofont icofont-star text-primary\"></i>\r\n              </div>\r\n            </td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Liu Koi Yan</a></td>\r\n            <td><a [routerLink]=\"['/email/email-read/']\" class=\"email-name waves-effect\">Charts waiting for you</a></td>\r\n            <td class=\"email-attch\"><a href=\"javascript:\"><i class=\"icofont icofont-clip\"></i></a></td>\r\n            <td class=\"email-time\">07:15 AM</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-trash/e-trash.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-inbox/e-trash/e-trash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ETrashComponent; });
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

var ETrashComponent = /** @class */ (function () {
    function ETrashComponent() {
    }
    ETrashComponent.prototype.ngOnInit = function () {
    };
    ETrashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-e-trash',
            template: __webpack_require__("./src/app/theme/email/email-inbox/e-trash/e-trash.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-inbox/e-trash/e-trash.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ETrashComponent);
    return ETrashComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-inbox/email-inbox-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailInboxRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_inbox_component__ = __webpack_require__("./src/app/theme/email/email-inbox/email-inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__e_main_e_main_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-main/e-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__e_starred_e_starred_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-starred/e-starred.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__e_drafts_e_drafts_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-drafts/e-drafts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__e_sent_e_sent_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-sent/e-sent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__e_trash_e_trash_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-trash/e-trash.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__email_inbox_component__["a" /* EmailInboxComponent */],
        data: {
            title: 'Inbox',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - inbox',
            status: true
        },
        children: [
            {
                path: 'e-main',
                component: __WEBPACK_IMPORTED_MODULE_3__e_main_e_main_component__["a" /* EMainComponent */],
                data: {
                    title: 'Inbox'
                }
            },
            {
                path: 'e-starred',
                component: __WEBPACK_IMPORTED_MODULE_4__e_starred_e_starred_component__["a" /* EStarredComponent */],
                data: {
                    title: 'Starred'
                }
            },
            {
                path: 'e-drafts',
                component: __WEBPACK_IMPORTED_MODULE_5__e_drafts_e_drafts_component__["a" /* EDraftsComponent */],
                data: {
                    title: 'Drafts'
                }
            },
            {
                path: 'e-sent',
                component: __WEBPACK_IMPORTED_MODULE_6__e_sent_e_sent_component__["a" /* ESentComponent */],
                data: {
                    title: 'Sent'
                }
            },
            {
                path: 'e-trash',
                component: __WEBPACK_IMPORTED_MODULE_7__e_trash_e_trash_component__["a" /* ETrashComponent */],
                data: {
                    title: 'Trash'
                }
            }
        ]
    }
];
var EmailInboxRoutingModule = /** @class */ (function () {
    function EmailInboxRoutingModule() {
    }
    EmailInboxRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], EmailInboxRoutingModule);
    return EmailInboxRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/email/email-inbox/email-inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"card\">\r\n    <!-- Email-card start -->\r\n    <div class=\"card-block email-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-head row\">\r\n            <div class=\"user-face\">\r\n              <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"mail-box-head row justify-content-end\">\r\n            <div class=\"col-auto\">\r\n              <form class=\"form-material\" action=\"javascript:\">\r\n                <div class=\"material-group\">\r\n                  <div class=\"form-group form-default\">\r\n                    <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\">Search</label>\r\n                  </div>\r\n                  <div class=\"material-addone\">\r\n                    <i class=\"icofont icofont-search\"></i>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- Left-side section start -->\r\n        <div class=\"col-lg-12 col-xl-3\">\r\n          <div class=\"user-body\">\r\n            <div class=\"p-20 text-center\">\r\n              <a [routerLink]=\"['/email/email-compose/']\" class=\"btn btn-danger waves-effect\">Compose</a>\r\n            </div>\r\n            <ul class=\"page-list nav nav-tabs flex-column\" id=\"pills-tab\" role=\"tablist\">\r\n              <li class=\"nav-item mail-section\">\r\n                <a [routerLinkActive]=\"['active']\" class=\"nav-link waves-effect d-block active\" [routerLink]=\"['/email/email-inbox/e-main/']\" data-toggle=\"pill\" role=\"tab\">\r\n                  <i class=\"icofont icofont-inbox\"></i> Inbox\r\n                  <span class=\"label label-primary float-right\">6</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a [routerLinkActive]=\"['active']\" class=\"nav-link waves-effect d-block\" data-toggle=\"pill\" [routerLink]=\"['/email/email-inbox/e-starred/']\" role=\"tab\">\r\n                  <i class=\"icofont icofont-star\"></i> Starred\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a [routerLinkActive]=\"['active']\" class=\"nav-link waves-effect d-block\" data-toggle=\"pill\" [routerLink]=\"['/email/email-inbox/e-drafts/']\" role=\"tab\">\r\n                  <i class=\"icofont icofont-file-text\"></i> Drafts\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a [routerLinkActive]=\"['active']\" class=\"nav-link waves-effect d-block\" data-toggle=\"pill\" [routerLink]=\"['/email/email-inbox/e-sent/']\" role=\"tab\">\r\n                  <i class=\"icofont icofont-paper-plane\"></i> Sent Mail\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item mail-section\">\r\n                <a [routerLinkActive]=\"['active']\" class=\"nav-link waves-effect d-block\" data-toggle=\"pill\" [routerLink]=\"['/email/email-inbox/e-trash/']\" role=\"tab\">\r\n                  <i class=\"icofont icofont-ui-delete\"></i> Trash\r\n                  <span class=\"label label-info float-right\">30</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"p-20 label-list\">\r\n              <li>\r\n                <h5>Labels</h5>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-work\" href=\"javascript:\">Work</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-design\" href=\"javascript:\">Design</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-family\" href=\"javascript:\">Family</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-friends\" href=\"javascript:\">Friends</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"mail-office\" href=\"javascript:\">Office</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- Left-side section end -->\r\n        <!-- Right-side section start -->\r\n        <div class=\"col-lg-12 col-xl-9\">\r\n          <div class=\"tab-content\" id=\"pills-tabContent\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n        <!-- Right-side section end -->\r\n      </div>\r\n    </div>\r\n    <!-- Email-card end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/email/email-inbox/email-inbox.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/email/email-inbox/email-inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailInboxComponent; });
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


var EmailInboxComponent = /** @class */ (function () {
    function EmailInboxComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    EmailInboxComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/email/email-inbox/e-main'], { skipLocationChange: true });
    };
    EmailInboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-inbox',
            template: __webpack_require__("./src/app/theme/email/email-inbox/email-inbox.component.html"),
            styles: [__webpack_require__("./src/app/theme/email/email-inbox/email-inbox.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EmailInboxComponent);
    return EmailInboxComponent;
}());



/***/ }),

/***/ "./src/app/theme/email/email-inbox/email-inbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInboxModule", function() { return EmailInboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_inbox_component__ = __webpack_require__("./src/app/theme/email/email-inbox/email-inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_inbox_routing_module__ = __webpack_require__("./src/app/theme/email/email-inbox/email-inbox-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__e_main_e_main_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-main/e-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__e_starred_e_starred_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-starred/e-starred.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__e_drafts_e_drafts_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-drafts/e-drafts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__e_sent_e_sent_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-sent/e-sent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__e_trash_e_trash_component__ = __webpack_require__("./src/app/theme/email/email-inbox/e-trash/e-trash.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EmailInboxModule = /** @class */ (function () {
    function EmailInboxModule() {
    }
    EmailInboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__email_inbox_routing_module__["a" /* EmailInboxRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__email_inbox_component__["a" /* EmailInboxComponent */], __WEBPACK_IMPORTED_MODULE_5__e_main_e_main_component__["a" /* EMainComponent */], __WEBPACK_IMPORTED_MODULE_6__e_starred_e_starred_component__["a" /* EStarredComponent */], __WEBPACK_IMPORTED_MODULE_7__e_drafts_e_drafts_component__["a" /* EDraftsComponent */], __WEBPACK_IMPORTED_MODULE_8__e_sent_e_sent_component__["a" /* ESentComponent */], __WEBPACK_IMPORTED_MODULE_9__e_trash_e_trash_component__["a" /* ETrashComponent */]]
        })
    ], EmailInboxModule);
    return EmailInboxModule;
}());



/***/ })

});
//# sourceMappingURL=email-inbox.module.chunk.js.map