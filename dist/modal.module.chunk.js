webpackJsonp(["modal.module"],{

/***/ "./src/app/theme/ui-elements/advance/modal/modal-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */],
        data: {
            title: 'Modal',
            icon: 'icon-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - modal',
            status: true
        }
    }
];
var ModalRoutingModule = /** @class */ (function () {
    function ModalRoutingModule() {
    }
    ModalRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ModalRoutingModule);
    return ModalRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-page\">\r\n  <!-- Static Example modal start-->\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Static Example'\" [cardOptionBlock]=\"true\">\r\n      <!-- popup example start -->\r\n      <div class=\"bd-example bd-example-modal\">\r\n        <div class=\"modal\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Modal title</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <p>Modal body text goes here.</p>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary mobtn ripple light\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary mobtn ripple light\">Save changes</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- popup example end -->\r\n    </app-card>\r\n  </div>\r\n  <!-- Static Example modal start-->\r\n  <!-- bootstrap modal start -->\r\n  <div class=\"col-lg-12 col-xl-6\">\r\n    <app-card [title]=\"'Bootstrap modals'\" [blockClass]=\"'model-btn-card'\" [cardOptionBlock]=\"true\">\r\n      <p>use code<code> modal-lg, modal-sm</code> to use large and small popup modal.</p>\r\n      <ul class=\"model-btn\">\r\n        <li>\r\n          <!-- modal static-->\r\n          \r\n\r\n\r\n          <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDefault.show()\">Static</button>\r\n          <app-modal-basic #modalDefault>\r\n            <div class=\"app-modal-header\">\r\n              <h4 class=\"modal-title\">Modal title</h4>\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"app-modal-body\">\r\n              <h5>Default Modal</h5>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\r\n            </div>\r\n            <div class=\"app-modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalDefault.hide()\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary ripple light\">Save changes</button>\r\n            </div>\r\n          </app-modal-basic>\r\n\r\n\r\n\r\n        </li>\r\n        <li>\r\n          <!-- modal large-->\r\n          <button type=\"button\" class=\"btn btn-primary ripple light\" (click)=\"modalLarge.show()\">Large</button>\r\n          <app-modal-basic #modalLarge [dialogClass]=\"'modal-lg'\">\r\n            <div class=\"app-modal-header\">\r\n              <h4 class=\"modal-title\">Modal title</h4>\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalLarge.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"app-modal-body\">\r\n              <h5>Large Modal</h5>\r\n              <p>This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>\r\n            </div>\r\n            <div class=\"app-modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalLarge.hide()\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary ripple light\">Save changes</button>\r\n            </div>\r\n          </app-modal-basic>\r\n        </li>\r\n        <li>\r\n          <!-- modal small-->\r\n          <button type=\"button\" class=\"btn btn-success ripple light\" (click)=\"modalSmall.show()\">Small</button>\r\n          <app-modal-basic #modalSmall [dialogClass]=\"'modal-sm'\">\r\n            <div class=\"app-modal-header\">\r\n              <h4 class=\"modal-title\">Modal title</h4>\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"app-modal-body\">\r\n              <h5>Small Modal</h5>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing .</p>\r\n            </div>\r\n            <div class=\"app-modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalSmall.hide()\">Close</button>\r\n            </div>\r\n          </app-modal-basic>\r\n        </li>\r\n      </ul>\r\n    </app-card>\r\n  </div>\r\n  <!-- Bootstrap modal end -->\r\n  <!-- Custom modal start -->\r\n  <div class=\"col-lg-12 col-xl-6\">\r\n    <app-card [title]=\"'Custom modals'\" [blockClass]=\"'model-btn-card'\" [cardOptionBlock]=\"true\">\r\n      <p>use custom modals tabs, overflow, lightbox, Multi modal.</p>\r\n      <ul>\r\n        <li>\r\n          <!-- modal tabs -->\r\n          <button type=\"button\" class=\"btn btn-warning ripple\" (click)=\"modalTabs.show()\">Tabs</button>\r\n          <app-modal-basic #modalTabs [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n            <div class=\"app-modal-body\">\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalTabs.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <ngb-tabset>\r\n                <ngb-tab title=\"Home\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                      <div class=\"m-4\">\r\n                        <h6>Home</h6>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Profile\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                      <div class=\"m-4\">\r\n                        <h6>Profile</h6>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Messages\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                      <div class=\"m-4\">\r\n                        <h6>Messages</h6>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Settings\">\r\n                  <ng-template ngbTabContent>\r\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                      <div class=\"m-4\">\r\n                        <h6>Settings</h6>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n              </ngb-tabset>\r\n            </div>\r\n          </app-modal-basic>\r\n        </li>\r\n        <li>\r\n          <!-- modal overflow start-->\r\n          <button type=\"button\" class=\"btn btn-danger ripple light\" (click)=\"modalOverflow.show()\">Overflow</button>\r\n          <app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n            <div class=\"app-modal-body\">\r\n              <button type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <h5 class=\"font-header\">Some text above the scrollable box</h5>\r\n              <p>This is Photoshop's version of Lorem IpThis is Photoshop's version Similique velit aut et cumque illum consequatur of Lorem Ipsum.</p>\r\n              <h5>Overflow container</h5>\r\n              <perfect-scrollbar class=\"overflow-container\" [style.width]=\"'100%'\" [style.height]=\"'300px'\" [config]=\"config\">\r\n                <p>This is Photoshop's Similique velit aut et cumque illum consequatur version of Lorem IpThis is Photoshop's version of Lorem Ipsum.</p>\r\n                <img src=\"assets/images/modal/overflow.jpg\" alt=\"\" class=\"img img-fluid\" />\r\n                <p class=\"p-t-15\">Similique velit aut et cumque illum consequatur doloribus quis ipsam sunt sint qui impedit nihil voluptate animi nesciunt corporis aspernatur quaerat sed rem voluptas commodi magnam porro eum sunt quis ullam aut odit laudantium quia soluta corrupti aut qui officiis hic voluptatibus aut itaque voluptates qui expedita minus autem aliquid et debitis omnis provident quia voluptate illo tempora illum maiores perferendis dolorem recusandae ut reprehenderit ad est eum occaecati quam non et quod amet illo id doloremque vitae porro porro sit amet voluptatem quia laboriosam aliquam quia quis facilis eveniet dolorum sunt neque rerum earum ut eaque ab tenetur quia nam quis rerum cumque eos excepturi nostrum qui distinctio porro enim vitae eligendi accusantium quia possimus et autem error repellendus vitae ad quia laborum minima autem nulla optio ad ea nobis animi illo voluptates cum recusandae temporibus voluptate amet quam excepturi odio quia suscipit inventore et rerum quos rerum aut doloribus aut consequatur earum impedit reiciendis saepe voluptates exercitationem maxime culpa saepe ducimus culpa ut aliquam magnam aut veniam sit totam architecto vel distinctio aspernatur aut qui labore quaerat rerum voluptatem sapiente sint sed explicabo et hic laboriosam sit nesciunt et minus et aut dignissimos ut porro incidunt sint et nihil id tempora aut et illum molestiae aperiam minus earum repellendus tempora illo itaque amet facilis quia rem iure quod corrupti dolores et sequi sunt ipsa labore quia unde qui blanditiis ut eos at quia beatae sit repellat quibusdam neque natus expedita sed perspiciatis atque quas voluptatem autem velit enim qui omnis molestiae et repellat sapiente corporis ipsam sed veritatis in quo quod et occaecati quia rerum iusto cumque accusamus numquam sunt quo sequi id molestiae consequatur doloribus molestiae autem nisi nostrum blanditiis et nihil sed nobis incidunt omnis quos minima eius quo accusamus qui ea minus aut est tempora quia inventore ad delectus vel et accusamus fuga eius ipsa aliquam alias sint maxime quae enim atque corrupti libero eos nesciunt et voluptas velit numquam illo non qui quaerat enim omnis et ex asperiores inventore quisquam est enim labore ut nobis consequatur fuga ut quo vel molestiae alias eius quod aspernatur laudantium pariatur eius fuga inventore esse at alias repudiandae perspiciatis id qui fuga consequatur recusandae atque iste commodi sapiente eaque labore ipsa aut sint quo vel recusandae ab iusto ducimus minus voluptas ex et illo commodi ipsa pariatur qui quae adipisci saepe dicta delectus nostrum illum incidunt laboriosam est maxime eum debitis et explicabo quia doloribus quod occaecati tempore tempora labore nihil enim recusandae et dolorum temporibus molestiae sint non porro neque minus provident reprehenderit similique illum voluptate qui dicta dolorum totam quia ut nihil dolore fugiat laboriosam molestiae eveniet omnis consequatur non magni nemo consequatur laboriosam non facilis harum eaque illo pariatur rerum dolores quis autem nemo aut enim tenetur pariatur et non quam repudiandae quia aliquam sunt corporis aperiam natus aut reprehenderit non non illum cum laboriosam nulla quaerat eligendi laudantium perspiciatis.</p>\r\n              </perfect-scrollbar>\r\n              <h5 class=\"font-header p-t-15\">Some text below the scrollable box</h5>\r\n              <p>This is Photoshop's version of Lorem IpThis is Similique velit aut et cumque illum consequatur Photoshop's version of Lorem Ipsum.</p>\r\n            </div>\r\n          </app-modal-basic>\r\n        </li>\r\n        <li>\r\n\r\n          \r\n          <!-- modal light box-->\r\n\r\n          <button type=\"button\" class=\"btn btn-info ripple light\" (click)=\"modalLightBox.show()\">Light Box</button>\r\n          <app-modal-basic #modalLightBox [hideHeader]=\"true\" [hideFooter]=\"true\">\r\n            <div class=\"app-modal-body\">\r\n              <button type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalLightBox.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <img src=\"assets/images/modal/overflow.jpg\" alt=\"\" class=\"img img-fluid\" />\r\n            </div>\r\n          </app-modal-basic>\r\n        </li>\r\n        <li>\r\n          <!-- multi modal -->\r\n          <button type=\"button\" class=\"btn btn-success ripple light m-b-10\" (click)=\"modalMulti1.show()\">Multi Model</button>\r\n          <!-- modal 1 -->\r\n          <app-modal-basic #modalMulti1>\r\n            <div class=\"app-modal-header\">\r\n              <h4 class=\"modal-title\">Modal 1</h4>\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti1.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"app-modal-body\">\r\n              Content for the dialog / modal goes here.\r\n              <p class=\"p-t-50 p-b-50\">more content</p>\r\n              <button data-toggle=\"modal\" (click)=\"modalMulti2.show()\" class=\"btn btn-primary ripple light\">Launch modal</button>\r\n            </div>\r\n            <div class=\"app-modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalMulti1.hide()\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary ripple light\">Save changes</button>\r\n            </div>\r\n          </app-modal-basic>\r\n          <!-- modal 2 -->\r\n          <app-modal-basic #modalMulti2>\r\n            <div class=\"app-modal-header\">\r\n              <h4 class=\"modal-title\">Modal 2</h4>\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti2.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"app-modal-body\">\r\n              Content for the dialog / modal goes here.\r\n              <p class=\"p-t-40 p-b-40\">more content</p>\r\n              <button data-toggle=\"modal\" (click)=\"modalMulti3.show()\" class=\"btn btn-primary ripple light\">Launch modal</button>\r\n            </div>\r\n            <div class=\"app-modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalMulti2.hide()\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary ripple light\">Save changes</button>\r\n            </div>\r\n          </app-modal-basic>\r\n          <!-- modal 3 -->\r\n          <app-modal-basic #modalMulti3>\r\n            <div class=\"app-modal-header\">\r\n              <h4 class=\"modal-title\">Modal 3</h4>\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti3.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"app-modal-body\">\r\n              Content for the dialog / modal goes here.\r\n              <p class=\"p-t-30 p-b-30\">more content</p>\r\n              <button data-toggle=\"modal\" (click)=\"modalMulti4.show()\" class=\"btn btn-primary ripple light\">Launch modal</button>\r\n            </div>\r\n            <div class=\"app-modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalMulti3.hide()\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary ripple light\">Save changes</button>\r\n            </div>\r\n          </app-modal-basic>\r\n          <!-- modal 4 -->\r\n          <app-modal-basic #modalMulti4>\r\n            <div class=\"app-modal-header\">\r\n              <h4 class=\"modal-title\">Modal 4</h4>\r\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti4.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"app-modal-body\">\r\n              Content for the dialog / modal goes here.\r\n              <p class=\"p-t-20 p-b-20\">more content</p>\r\n            </div>\r\n            <div class=\"app-modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default ripple\" (click)=\"modalMulti4.hide()\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary ripple light\">Save changes</button>\r\n            </div>\r\n          </app-modal-basic>\r\n        </li>\r\n      </ul>\r\n    </app-card>\r\n  </div>\r\n  <!-- Custom modal end -->\r\n  <!-- Sweet alert start -->\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Sweet Alert/Message Box'\" [blockClass]=\"'model-btn-card'\" [cardOptionBlock]=\"true\">\r\n      <p>use button<code> (click) </code> set for <code>swal</code> function to use effect.</p>\r\n      <ul>\r\n        <li>\r\n          <button type=\"button\" class=\"btn btn-primary sweet-1 m-b-10 ripple light\" (click)=\"openBasicSwal()\">Basic</button>\r\n        </li>\r\n        <li>\r\n          <button type=\"button\" class=\"btn btn-success alert-success-msg m-b-10 ripple light\" (click)=\"openSuccessSwal()\">Success</button>\r\n        </li>\r\n        <li>\r\n          <button type=\"button\" class=\"btn btn-warning alert-confirm m-b-10 ripple\" (click)=\"openConfirmsSwal()\">Confirm</button>\r\n        </li>\r\n        <li>\r\n          <button type=\"button\" class=\"btn btn-danger alert-success-cancel m-b-10 ripple light\" (click)=\"openSuccessCancelSwal()\">Success or Cancel</button>\r\n        </li>\r\n        <li>\r\n          <button type=\"button\" class=\"btn btn-primary alert-prompt m-b-10 ripple light\" (click)=\"openPromptSwal()\">Prompt</button>\r\n        </li>\r\n        <li>\r\n          <button type=\"button\" class=\"btn btn-success alert-ajax m-b-10 ripple light\" (click)=\"openAjaxSwal()\">Ajax</button>\r\n        </li>\r\n      </ul>\r\n    </app-card>\r\n  </div>\r\n  <!-- Sweet alert end -->\r\n  <!-- Animation modal start / Nifty Modal Window Effects start-->\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Animation Modals'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <p>use button with class<code> md-effect-1 to 18</code> to use effect.</p>\r\n      <div class=\"animation-model\">\r\n        <button type=\"button\" class=\"btn btn-default btn-outline-default md-trigger ripple light\" (click)=\"openMyModal('effect-1')\">Fade in &amp; Scale</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary md-trigger ripple light\" (click)=\"openMyModal('effect-2')\">Slide in (right)</button>\r\n        <button type=\"button\" class=\"btn btn-success btn-outline-success md-trigger ripple light\" (click)=\"openMyModal('effect-3')\">Slide in (bottom)</button>\r\n        <button type=\"button\" class=\"btn btn-warning btn-outline-warning md-trigger ripple\" (click)=\"openMyModal('effect-4')\">Newspaper</button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-outline-danger md-trigger ripple light\" (click)=\"openMyModal('effect-5')\">Fall</button>\r\n        <button type=\"button\" class=\"btn btn-info btn-outline-info md-trigger ripple light\" (click)=\"openMyModal('effect-6')\">Side Fall</button>\r\n        <button type=\"button\" class=\"btn btn-default btn-outline-default md-trigger ripple light\" (click)=\"openMyModal('effect-7')\">Sticky Up</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary md-trigger ripple light\" (click)=\"openMyModal('effect-8')\">3D Flip (horizontal)</button>\r\n        <button type=\"button\" class=\"btn btn-success btn-outline-success md-trigger ripple light\" (click)=\"openMyModal('effect-9')\">3D Flip (vertical)</button>\r\n        <button type=\"button\" class=\"btn btn-warning btn-outline-warning md-trigger ripple\" (click)=\"openMyModal('effect-10')\">3D Sign</button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-outline-danger md-trigger ripple light\" (click)=\"openMyModal('effect-11')\">Super Scaled</button>\r\n        <button type=\"button\" class=\"btn btn-info btn-outline-info md-trigger ripple light\" (click)=\"openMyModal('effect-12')\">Just Me</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary md-trigger ripple light\" (click)=\"openMyModal('effect-13')\">3D Slit</button>\r\n        <button type=\"button\" class=\"btn btn-success btn-outline-success md-trigger ripple light\" (click)=\"openMyModal('effect-14')\">3D Rotate Bottom</button>\r\n        <button type=\"button\" class=\"btn btn-warning btn-outline-warning md-trigger ripple\" (click)=\"openMyModal('effect-15')\">3D Rotate In Left</button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-outline-danger md-trigger md-setperspective ripple light\" (click)=\"openMyModal('effect-17')\">Let me in</button>\r\n        <button type=\"button\" class=\"btn btn-default btn-outline-default md-trigger md-setperspective ripple light\" (click)=\"openMyModal('effect-18')\">Make way!</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary md-trigger md-setperspective ripple light\" (click)=\"openMyModal('effect-19')\">Slip from top</button>\r\n        <!-- animation modal Dialogs start -->\r\n        <app-modal-animation [modalID]=\"'effect-1'\" [modalClass]=\"'md-effect-1'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-2'\" [modalClass]=\"'md-effect-2'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-3'\" [modalClass]=\"'md-effect-3'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-4'\" [modalClass]=\"'md-effect-4'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-5'\" [modalClass]=\"'md-effect-5'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-6'\" [modalClass]=\"'md-effect-6'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-7'\" [modalClass]=\"'md-effect-7'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-8'\" [modalClass]=\"'md-effect-8'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-9'\" [modalClass]=\"'md-effect-9'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-10'\" [modalClass]=\"'md-effect-10'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-11'\" [modalClass]=\"'md-effect-11'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-12'\" [modalClass]=\"'md-effect-12'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-danger md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-13'\" [modalClass]=\"'md-effect-13'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-14'\" [modalClass]=\"'md-effect-14'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-15'\" [modalClass]=\"'md-effect-15'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-17'\" [modalClass]=\"'md-effect-17'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-18'\" [modalClass]=\"'md-effect-18'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n\r\n        <app-modal-animation [modalID]=\"'effect-19'\" [modalClass]=\"'md-effect-19'\">\r\n          <h3>Modal Dialog</h3>\r\n          <div>\r\n            <p>This is a modal window. You can do the following things with it:</p>\r\n            <ul>\r\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\r\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\r\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\r\n            </ul>\r\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\r\n          </div>\r\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\r\n        </app-modal-animation>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n  <!-- Animation modal end / Nifty Modal Window Effects end-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/modal/modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.showDialog = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.openMyModal = function (event) {
        document.querySelector('#' + event).classList.add('md-show');
    };
    ModalComponent.prototype.closeMyModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    ModalComponent.prototype.openBasicModal = function (event) {
        this.showDialog = !this.showDialog;
        setTimeout(function () {
            document.querySelector('#' + event).classList.add('md-show');
        }, 25);
    };
    ModalComponent.prototype.closeBasicModal = function (event) {
        var _this = this;
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
        setTimeout(function () {
            _this.visible = false;
            _this.showDialog = !_this.showDialog;
        }, 300);
    };
    ModalComponent.prototype.openSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Error!',
            text: 'Do you want to continue',
            type: 'error',
            confirmButtonText: 'Cool',
            allowOutsideClick: true
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openBasicSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Heres a message!',
            text: 'Its pretty, isnt it?'
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openSuccessSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Good job!',
            text: 'You clicked the button!',
            type: 'success'
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openConfirmsSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    ModalComponent.prototype.openSuccessCancelSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You not be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger mr-sm'
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (result.dismiss === 'cancel') {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    ModalComponent.prototype.openPromptSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        });
        var steps = [
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ];
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.queue(steps).then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    title: 'All done!',
                    html: 'Your answers: <pre>' +
                        JSON.stringify(result.value) +
                        '</pre>',
                    confirmButtonText: 'Lovely!'
                });
            }
        });
    };
    ModalComponent.prototype.openAjaxSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        if (email === 'taken@example.com') {
                            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.showValidationError('This email is already taken.');
                        }
                        resolve();
                    }, 2000);
                });
            },
            allowOutsideClick: function () { return !__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    type: 'success',
                    title: 'Ajax request finished!',
                    html: 'Submitted email: ' + result.value
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "visible", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/theme/ui-elements/advance/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/advance/modal/modal.component.scss"), __webpack_require__("./node_modules/sweetalert2/src/sweetalert2.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/advance/modal/modal-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__modal_routing_module__["a" /* ModalRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ })

});
//# sourceMappingURL=modal.module.chunk.js.map