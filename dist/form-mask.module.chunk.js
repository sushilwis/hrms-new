webpackJsonp(["form-mask.module"],{

/***/ "./node_modules/angular2-text-mask/dist/angular2TextMask.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var textMaskCore_1 = __webpack_require__("./node_modules/text-mask-core/dist/textMaskCore.js");
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
var MaskedInputDirective = (function () {
    function MaskedInputDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this.setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this.setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this.renderer.setElementProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setElementProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype.onInput = function (value) {
        this.setupMask();
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
            // get the updated value
            value = this.inputElement.value;
            // check against the last value to prevent firing ngModelChange despite no changes
            if (this.lastValue !== value) {
                this.lastValue = value;
                this._onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype.setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this.element.nativeElement.tagName === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this.element.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    return MaskedInputDirective;
}());
__decorate([
    core_1.Input('textMask'),
    __metadata("design:type", Object)
], MaskedInputDirective.prototype, "textMaskConfig", void 0);
MaskedInputDirective = __decorate([
    core_1.Directive({
        host: {
            '(input)': 'onInput($event.target.value)',
            '(blur)': '_onTouched()'
        },
        selector: '[textMask]',
        exportAs: 'textMask',
        providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
    }),
    __param(0, core_1.Inject(core_1.Renderer)), __param(1, core_1.Inject(core_1.ElementRef)),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MaskedInputDirective);
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = (function () {
    function TextMaskModule() {
    }
    return TextMaskModule;
}());
TextMaskModule = __decorate([
    core_1.NgModule({
        declarations: [MaskedInputDirective],
        exports: [MaskedInputDirective]
    })
], TextMaskModule);
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__("./node_modules/text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.directive.js"));
__export(__webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var currency_mask_config_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.config.js");
var input_handler_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/input.handler.js");
exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CurrencyMaskDirective; }),
    multi: true
};
var CurrencyMaskDirective = (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ","
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create();
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new input_handler_1.InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleClick = function (event) {
        this.inputHandler.handleClick(event, this.isChromeAndroid());
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            this.inputHandler.handleInput(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeyup = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeyup(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.validate = function (abstractControl) {
        var result = {};
        if (abstractControl.value > this.max) {
            result.max = true;
        }
        if (abstractControl.value < this.min) {
            result.min = true;
        }
        return result != {} ? result : null;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    return CurrencyMaskDirective;
}());
CurrencyMaskDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[currencyMask]",
                providers: [
                    exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR,
                    { provide: forms_1.NG_VALIDATORS, useExisting: CurrencyMaskDirective, multi: true }
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [currency_mask_config_1.CURRENCY_MASK_CONFIG,] },] },
    { type: core_1.ElementRef, },
    { type: core_1.KeyValueDiffers, },
]; };
CurrencyMaskDirective.propDecorators = {
    'max': [{ type: core_1.Input },],
    'min': [{ type: core_1.Input },],
    'options': [{ type: core_1.Input },],
    'handleBlur': [{ type: core_1.HostListener, args: ["blur", ["$event"],] },],
    'handleClick': [{ type: core_1.HostListener, args: ["click", ["$event"],] },],
    'handleCut': [{ type: core_1.HostListener, args: ["cut", ["$event"],] },],
    'handleInput': [{ type: core_1.HostListener, args: ["input", ["$event"],] },],
    'handleKeydown': [{ type: core_1.HostListener, args: ["keydown", ["$event"],] },],
    'handleKeypress': [{ type: core_1.HostListener, args: ["keypress", ["$event"],] },],
    'handleKeyup': [{ type: core_1.HostListener, args: ["keyup", ["$event"],] },],
    'handlePaste': [{ type: core_1.HostListener, args: ["paste", ["$event"],] },],
};
exports.CurrencyMaskDirective = CurrencyMaskDirective;
//# sourceMappingURL=currency-mask.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/currency-mask.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var currency_mask_directive_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/currency-mask.directive.js");
var CurrencyMaskModule = (function () {
    function CurrencyMaskModule() {
    }
    return CurrencyMaskModule;
}());
CurrencyMaskModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ],
                exports: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskModule.ctorParameters = function () { return []; };
exports.CurrencyMaskModule = CurrencyMaskModule;
//# sourceMappingURL=currency-mask.module.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.handler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_service_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/input.service.js");
var InputHandler = (function () {
    function InputHandler(htmlInputElement, options) {
        this.inputService = new input_service_1.InputService(htmlInputElement, options);
        this.htmlInputElement = htmlInputElement;
    }
    InputHandler.prototype.handleClick = function (event, chromeAndroid) {
        var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
        //if there is no selection and the value is not null, the cursor position will be fixed. if the browser is chrome on android, the cursor will go to the end of the number.
        if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
            this.inputService.fixCursorPosition(chromeAndroid);
        }
    };
    InputHandler.prototype.handleCut = function (event) {
        var _this = this;
        if (this.isReadOnly()) {
            return;
        }
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 0);
    };
    InputHandler.prototype.handleInput = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = this.getNewKeyCode(this.inputService.storedRawValue, this.inputService.rawValue);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;
        if ((rawValueSelectionEnd != rawValueWithoutSuffixEndPosition || Math.abs(rawValueLength - storedRawValueLength) != 1) && storedRawValueLength != 0) {
            this.setCursorPosition(event);
            return;
        }
        if (rawValueLength < storedRawValueLength) {
            if (this.inputService.value != 0) {
                this.inputService.removeNumber(8);
            }
            else {
                this.setValue(null);
            }
        }
        if (rawValueLength > storedRawValueLength) {
            switch (keyCode) {
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (!this.inputService.canInputMoreNumbers || (isNaN(this.inputService.value) && String.fromCharCode(keyCode).match(/\d/) == null)) {
                        return;
                    }
                    this.inputService.addNumber(keyCode);
            }
        }
        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeydown = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
            if (selectionRangeLength == this.inputService.rawValue.length || this.inputService.value == 0) {
                this.setValue(null);
                this.onModelChange(this.inputService.value);
            }
            if (selectionRangeLength == 0 && !isNaN(this.inputService.value)) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
            if ((keyCode === 8 || keyCode === 46) && selectionRangeLength != 0 && !isNaN(this.inputService.value)) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
        }
    };
    InputHandler.prototype.handleKeypress = function (event) {
        if (this.isReadOnly()) {
            return;
        }
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == undefined || [9, 13].indexOf(keyCode) != -1 || this.isArrowEndHomeKeyInFirefox(event)) {
            return;
        }
        switch (keyCode) {
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers && (!isNaN(this.inputService.value) || String.fromCharCode(keyCode).match(/\d/) != null)) {
                    this.inputService.addNumber(keyCode);
                }
        }
        event.preventDefault();
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeyup = function (event) {
        this.inputService.fixCursorPosition();
    };
    InputHandler.prototype.handlePaste = function (event) {
        var _this = this;
        if (this.isReadOnly()) {
            return;
        }
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 1);
    };
    InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
    };
    InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
    };
    InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
    };
    InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
    };
    InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
    };
    InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    InputHandler.prototype.getNewKeyCode = function (oldString, newString) {
        if (oldString.length > newString.length) {
            return null;
        }
        for (var x = 0; x < newString.length; x++) {
            if (oldString.length == x || oldString[x] != newString[x]) {
                return newString.charCodeAt(x);
            }
        }
    };
    InputHandler.prototype.isArrowEndHomeKeyInFirefox = function (event) {
        if ([35, 36, 37, 38, 39, 40].indexOf(event.keyCode) != -1 && (event.charCode == undefined || event.charCode == 0)) {
            return true;
        }
        return false;
    };
    InputHandler.prototype.isReadOnly = function () {
        return this.htmlInputElement && this.htmlInputElement.readOnly;
    };
    InputHandler.prototype.setCursorPosition = function (event) {
        var rawValueWithoutSuffixEndPosition = this.inputService.getRawValueWithoutSuffixEndPosition();
        setTimeout(function () {
            event.target.setSelectionRange(rawValueWithoutSuffixEndPosition, rawValueWithoutSuffixEndPosition);
        }, 0);
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;
//# sourceMappingURL=input.handler.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.manager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            var textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    };
    InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    };
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
            var selectionStart = this.inputSelection.selectionStart;
            var selectionEnd = this.inputSelection.selectionEnd;
            var haveNumberSelected = (selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/)) ? true : false;
            var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var selectionStart = 0;
            var selectionEnd = 0;
            if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                selectionStart = this.htmlInputElement.selectionStart;
                selectionEnd = this.htmlInputElement.selectionEnd;
            }
            else {
                var range = document.getSelection().baseNode;
                if (range && range.firstChild == this.htmlInputElement) {
                    var lenght = this.htmlInputElement.value.length;
                    var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                    var startRange = this.htmlInputElement.createTextRange();
                    var endRange = this.htmlInputElement.createTextRange();
                    endRange.collapse(false);
                    if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                        selectionStart = selectionEnd = lenght;
                    }
                    else {
                        selectionStart = -startRange.moveStart("character", -lenght);
                        selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                        if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                            selectionEnd = lenght;
                        }
                        else {
                            selectionEnd = -startRange.moveEnd("character", -lenght);
                            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                        }
                    }
                }
            }
            return {
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function (value) {
            this._storedRawValue = value;
            if (this.htmlInputElement) {
                this.htmlInputElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function () {
            return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=input.manager.js.map

/***/ }),

/***/ "./node_modules/ng2-currency-mask/src/input.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_manager_1 = __webpack_require__("./node_modules/ng2-currency-mask/src/input.manager.js");
var InputService = (function () {
    function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new input_manager_1.InputManager(htmlInputElement);
    }
    InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, "0");
        }
        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
    };
    InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");
        if (!onlyNumbers) {
            return "";
        }
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart == "") {
            integerPart = "0";
        }
        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        if (precision > 0) {
            decimalPart = "0".repeat(precision - decimalPart.length) + decimalPart;
            newRawValue += decimal + decimalPart;
        }
        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = (rawValue.indexOf("-") > -1 && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    };
    InputService.prototype.clearMask = function (rawValue) {
        if (rawValue == null || rawValue == "") {
            return null;
        }
        var value = rawValue.replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        return parseFloat(value);
    };
    InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            var selectionStart = this.inputSelection.selectionStart;
            this.rawValue = "-" + this.rawValue;
            this.updateFieldValue(selectionStart + 1);
        }
    };
    InputService.prototype.changeToPositive = function () {
        var selectionStart = this.inputSelection.selectionStart;
        this.rawValue = this.rawValue.replace("-", "");
        this.updateFieldValue(selectionStart - 1);
    };
    InputService.prototype.fixCursorPosition = function (forceToEndPosition) {
        var currentCursorPosition = this.inputSelection.selectionStart;
        //if the current cursor position is after the number end position, it is moved to the end of the number, ignoring the prefix or suffix. this behavior can be forced with forceToEndPosition flag
        if (currentCursorPosition > this.getRawValueWithoutSuffixEndPosition() || forceToEndPosition) {
            this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition());
            //if the current cursor position is before the number start position, it is moved to the start of the number, ignoring the prefix or suffix
        }
        else if (currentCursorPosition < this.getRawValueWithoutPrefixStartPosition()) {
            this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition());
        }
    };
    InputService.prototype.getRawValueWithoutSuffixEndPosition = function () {
        return this.rawValue.length - this.options.suffix.length;
    };
    InputService.prototype.getRawValueWithoutPrefixStartPosition = function () {
        return this.value != null && this.value < 0 ? this.options.prefix.length + 1 : this.options.prefix.length;
    };
    InputService.prototype.removeNumber = function (keyCode) {
        var _a = this.options, decimal = _a.decimal, thousands = _a.thousands;
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;
        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
            selectionEnd = this.rawValue.length - this.options.suffix.length;
            selectionStart = this.rawValue.length - this.options.suffix.length;
        }
        //there is no selection
        if (selectionEnd == selectionStart) {
            //delete key and the target digit is a number
            if ((keyCode == 46 || keyCode == 63272) && /^\d+$/.test(this.rawValue.substring(selectionStart, selectionEnd + 1))) {
                selectionEnd = selectionEnd + 1;
            }
            //delete key and the target digit is the decimal or thousands divider
            if ((keyCode == 46 || keyCode == 63272) && (this.rawValue.substring(selectionStart, selectionEnd + 1) == decimal || this.rawValue.substring(selectionStart, selectionEnd + 1) == thousands)) {
                selectionEnd = selectionEnd + 2;
                selectionStart = selectionStart + 1;
            }
            //backspace key and the target digit is a number
            if (keyCode == 8 && /^\d+$/.test(this.rawValue.substring(selectionStart - 1, selectionEnd))) {
                selectionStart = selectionStart - 1;
            }
            //backspace key and the target digit is the decimal or thousands divider
            if (keyCode == 8 && (this.rawValue.substring(selectionStart - 1, selectionEnd) == decimal || this.rawValue.substring(selectionStart - 1, selectionEnd) == thousands)) {
                selectionStart = selectionStart - 2;
                selectionEnd = selectionEnd - 1;
            }
        }
        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
    };
    InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    };
    InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
    };
    Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "rawValue", {
        get: function () {
            return this.inputManager.rawValue;
        },
        set: function (value) {
            this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function () {
            return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "value", {
        get: function () {
            return this.clearMask(this.rawValue);
        },
        set: function (value) {
            this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
    });
    return InputService;
}());
exports.InputService = InputService;
//# sourceMappingURL=input.service.js.map

/***/ }),

/***/ "./node_modules/ng2-inputmask/src/input-mask.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMaskDirective; });
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

var placeholders = {
    'A': '^[a-zA-ZA-zА-яЁё]',
    '0': '\\d'
};
var keys = {
    'BACKSPACE': 8,
    'LEFT': 37,
    'RIGHT': 39,
    'DEL': 46,
};
var InputMaskDirective = /** @class */ (function () {
    /**
     *
     * @param element
     * @param model
     */
    function InputMaskDirective(element) {
        this.element = element;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.state = {
            value: this.getValue()
        };
    }
    /**
     *
     */
    InputMaskDirective.prototype.onChange = function () {
        this.applyMask(this.getClearValue(this.getValue()));
    };
    /**
     *
     * @param event
     */
    InputMaskDirective.prototype.onKeyPress = function (event) {
        var key = this.getKey(event);
        if (key === keys.BACKSPACE || key === keys.LEFT || key === keys.RIGHT)
            return;
        var cursorPosition = this.getCursorPosition();
        var regexp = this.createRegExp(cursorPosition);
        if (regexp != null && !regexp.test(event.key) || this.getValue().length >= this.mask.length) {
            event.preventDefault();
        }
    };
    /**
     *
     * @param event
     */
    InputMaskDirective.prototype.onKeyDown = function (event) {
        var key = this.getKey(event);
        if ((key === keys.BACKSPACE || key === keys.DEL) && this.getClearValue(this.getValue()).length === 1) {
            this.setValue('');
            this.state.value = '';
            this.ngModelChange.emit('');
        }
    };
    /**
     *
     */
    InputMaskDirective.prototype.ngOnInit = function () {
        this.applyMask(this.getClearValue(this.getValue()));
    };
    /**
     *
     * @param event
     * @returns {number}
     */
    InputMaskDirective.prototype.getKey = function (event) {
        return event.keyCode || event.charCode;
    };
    /**
     *
     * @param value
     */
    InputMaskDirective.prototype.applyMask = function (value) {
        var newValue = '';
        var maskPosition = 0;
        if (this.getClearValue(value).length > this.getClearValue(this.mask).length) {
            this.setValue(this.state.value);
            return;
        }
        for (var i = 0; i < value.length; i++) {
            var current = value[i];
            var regexp = this.createRegExp(maskPosition);
            if (regexp != null) {
                if (!regexp.test(current)) {
                    this.setValue(this.state.value);
                    break;
                }
                newValue += current;
            }
            else if (this.mask[maskPosition] === current) {
                newValue += current;
            }
            else {
                newValue += this.mask[maskPosition];
                i--;
            }
            maskPosition++;
        }
        var nextMaskElement = this.mask[maskPosition];
        if (value.length && nextMaskElement != null && /^[-\/\\^$#&@№:<>_\^!*+?.()|\[\]{}]/.test(nextMaskElement)) {
            newValue += nextMaskElement;
        }
        var oldValue = this.state.value;
        var cursorPosition = this.getCursorPosition();
        this.setValue(newValue);
        this.state.value = newValue;
        if (oldValue.length >= cursorPosition) {
            this.setCursorPosition(cursorPosition);
        }
    };
    /**
     *
     * @param position
     * @returns {any}
     */
    InputMaskDirective.prototype.createRegExp = function (position) {
        if (this.mask[position] == null) {
            return null;
        }
        var currentSymbol = this.mask[position].toUpperCase();
        var keys = Object.keys(placeholders);
        var searchPosition = keys.indexOf(currentSymbol);
        if (searchPosition >= 0) {
            return new RegExp(placeholders[keys[searchPosition]], 'gi');
        }
        return null;
    };
    /**
     *
     * @returns {any}
     */
    InputMaskDirective.prototype.getValue = function () {
        return this.element.nativeElement.value;
    };
    /**
     *
     * @param value
     * @returns {string}
     */
    InputMaskDirective.prototype.getClearValue = function (value) {
        return value.trim().replace(/[-\/\\^$#&@№:<>_\^!*+?.()|\[\]{}]/gi, '');
    };
    /**
     *
     * @param value
     */
    InputMaskDirective.prototype.setValue = function (value) {
        this.element.nativeElement.value = value;
    };
    /**
     *
     * @returns {number}
     */
    InputMaskDirective.prototype.getCursorPosition = function () {
        return this.element.nativeElement.selectionStart;
    };
    /**
     *
     * @param start
     * @param end
     */
    InputMaskDirective.prototype.setCursorPosition = function (start, end) {
        if (end === void 0) { end = start; }
        this.element.nativeElement.setSelectionRange(start, end);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InputMaskDirective.prototype, "mask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InputMaskDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputMaskDirective.prototype, "onChange", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputMaskDirective.prototype, "onKeyPress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputMaskDirective.prototype, "onKeyDown", null);
    InputMaskDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[mask]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], InputMaskDirective);
    return InputMaskDirective;
}());



/***/ }),

/***/ "./node_modules/ng2-inputmask/src/input-mask.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_mask_directive__ = __webpack_require__("./node_modules/ng2-inputmask/src/input-mask.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputMaskModule = /** @class */ (function () {
    function InputMaskModule() {
    }
    InputMaskModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__input_mask_directive__["a" /* InputMaskDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__input_mask_directive__["a" /* InputMaskDirective */]
            ]
        })
    ], InputMaskModule);
    return InputMaskModule;
}());



/***/ }),

/***/ "./node_modules/text-mask-addons/dist/textMaskAddons.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.textMaskAddons=t():e.textMaskAddons=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);Object.defineProperty(t,"createAutoCorrectedDatePipe",{enumerable:!0,get:function(){return r(o).default}});var i=n(2);Object.defineProperty(t,"createNumberMask",{enumerable:!0,get:function(){return r(i).default}});var u=n(3);Object.defineProperty(t,"emailMask",{enumerable:!0,get:function(){return r(u).default}})},function(e,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm dd yyyy";return function(t){var n=[],r=e.split(/[^dmyHMS]+/),o={dd:31,mm:12,yy:99,yyyy:9999,HH:23,MM:59,SS:59},i={dd:1,mm:1,yy:0,yyyy:1,HH:0,MM:0,SS:0},u=t.split("");r.forEach(function(t){var r=e.indexOf(t),i=parseInt(o[t].toString().substr(0,1),10);parseInt(u[r],10)>i&&(u[r+1]=u[r],u[r]=0,n.push(r))});var c=r.some(function(n){var r=e.indexOf(n),u=n.length,c=t.substr(r,u).replace(/\D/g,""),l=parseInt(c,10);return l>o[n]||c.length===u&&l<i[n]});return!c&&{value:u.join(""),indexesOfPipedChars:n}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){"use strict";function n(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=e.length;if(e===c||e[0]===g[0]&&1===t)return g.split(c).concat([v]).concat(m.split(c));if(e===P&&_)return g.split(c).concat(["0",P,v]).concat(m.split(c));var n=e[0]===s&&H;n&&(e=e.toString().substr(1));var u=e.lastIndexOf(P),l=u!==-1,a=void 0,h=void 0,b=void 0;if(e.slice($*-1)===m&&(e=e.slice(0,$*-1)),l&&(_||D)?(a=e.slice(e.slice(0,N)===g?N:0,u),h=e.slice(u+1,t),h=r(h.replace(f,c))):a=e.slice(0,N)===g?e.slice(N):e,L&&("undefined"==typeof L?"undefined":i(L))===p){var O="."===M?"[.]":""+M,S=(a.match(new RegExp(O,"g"))||[]).length;a=a.slice(0,L+S*V)}return a=a.replace(f,c),R||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?o(a,M):a,b=r(a),(l&&_||D===!0)&&(e[u-1]!==P&&b.push(y),b.push(P,y),h&&(("undefined"==typeof C?"undefined":i(C))===p&&(h=h.slice(0,C)),b=b.concat(h)),D===!0&&e[u-1]===P&&b.push(v)),N>0&&(b=g.split(c).concat(b)),n&&(b.length===N&&b.push(v),b=[d].concat(b)),m.length>0&&(b=b.concat(m.split(c))),b}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.prefix,g=void 0===n?u:n,h=t.suffix,m=void 0===h?c:h,b=t.includeThousandsSeparator,x=void 0===b||b,O=t.thousandsSeparatorSymbol,M=void 0===O?l:O,S=t.allowDecimal,_=void 0!==S&&S,j=t.decimalSymbol,P=void 0===j?a:j,w=t.decimalLimit,C=void 0===w?2:w,k=t.requireDecimal,D=void 0!==k&&k,E=t.allowNegative,H=void 0!==E&&E,I=t.allowLeadingZeroes,R=void 0!==I&&I,A=t.integerLimit,L=void 0===A?null:A,N=g&&g.length||0,$=m&&m.length||0,V=M&&M.length||0;return e.instanceOf="createNumberMask",e}function r(e){return e.split(c).map(function(e){return v.test(e)?v:e})}function o(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var u="$",c="",l=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,y="[]"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){e=e.replace(O,v);var n=t.placeholderChar,r=t.currentCaretPosition,o=e.indexOf(y),s=e.lastIndexOf(p),d=s<o?-1:s,f=i(e,o+1,y),g=i(e,d-1,p),h=u(e,o,n),m=c(e,o,d,n),b=l(e,d,n,r);h=a(h),m=a(m),b=a(b,!0);var x=h.concat(f).concat(m).concat(g).concat(b);return x}function i(e,t,n){var r=[];return e[t]===n?r.push(n):r.push(g,n),r.push(g),r}function u(e,t){return t===-1?e:e.slice(0,t)}function c(e,t,n,r){var o=v;return t!==-1&&(o=n===-1?e.slice(t+1,e.length):e.slice(t+1,n)),o=o.replace(new RegExp("[\\s"+r+"]",m),v),o===y?f:o.length<1?h:o[o.length-1]===p?o.slice(0,o.length-1):o}function l(e,t,n,r){var o=v;return t!==-1&&(o=e.slice(t+1,e.length)),o=o.replace(new RegExp("[\\s"+n+".]",m),v),0===o.length?e[t-1]===p&&r!==e.length?f:v:o}function a(e,t){return e.split(v).map(function(e){return e===h?e:t?x:b})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),d=r(s),f="*",p=".",v="",y="@",g="[]",h=" ",m="g",b=/[^\s]/,x=/[^.\s]/,O=/\s/g;t.default={mask:o,pipe:d.default}},function(e,t){"use strict";function n(e,t){var n=t.currentCaretPosition,i=t.rawValue,f=t.previousConformedValue,p=t.placeholderChar,v=e;v=r(v);var y=v.indexOf(c),g=null===i.match(new RegExp("[^@\\s."+p+"]"));if(g)return u;if(v.indexOf(a)!==-1||y!==-1&&n!==y+1||i.indexOf(o)===-1&&f!==u&&i.indexOf(l)!==-1)return!1;var h=v.indexOf(o),m=v.slice(h+1,v.length);return(m.match(d)||s).length>1&&v.substr(-1)===l&&n!==i.length&&(v=v.slice(0,v.length-1)),v}function r(e){var t=0;return e.replace(i,function(){return t++,1===t?o:u})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o="@",i=/@/g,u="",c="@.",l=".",a="..",s=[],d=/\./g}])});

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,v=e.indexesOfPipedChars,p=void 0===v?n:v,h=e.caretTrapIndexes,g=void 0===h?n:h;if(0===l)return 0;var m=f.length,y=t.length,b=c.length,C=s.length,P=m-y,x=P>0,O=0===y,k=P>1&&!x&&!O;if(k)return l;var j=x&&(t===s||s===c),M=0,T=void 0,w=void 0;if(j)M=l-P;else{var _=s.toLowerCase(),V=f.toLowerCase(),S=V.substr(0,l).split(o),N=S.filter(function(e){return _.indexOf(e)!==-1});w=N[N.length-1];var E=a.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,A=c.substr(0,N.length).split(o).filter(function(e){return e!==d}).length,R=A!==E,I=void 0!==a[N.length-1]&&void 0!==c[N.length-2]&&a[N.length-1]!==d&&a[N.length-1]!==c[N.length-1]&&a[N.length-1]===c[N.length-2];!x&&(R||I)&&E>0&&c.indexOf(w)>-1&&void 0!==f[l]&&(T=!0,w=f[l]);for(var J=p.map(function(e){return _[e]}),q=J.filter(function(e){return e===w}).length,F=N.filter(function(e){return e===w}).length,L=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===w&&f[r]!==e}).length,W=L+F+q+(T?1:0),z=0,B=0;B<C;B++){var D=_[B];if(M=B+1,D===w&&z++,z>=W)break}}if(x){for(var G=M,H=M;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||g.indexOf(H)!==-1||H===b)return G}else if(T){for(var K=M-1;K>=0;K--)if(s[K]===w||g.indexOf(K)!==-1||0===K)return K}else for(var Q=M;Q>=0;Q--)if(c[Q-1]===d||g.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?a:l,f=t.placeholderChar,d=void 0===f?i.placeholderChar:f,c=t.placeholder,v=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,p=t.currentCaretPosition,h=t.keepCharPositions,g=u===!1&&void 0!==s,m=e.length,y=s.length,b=v.length,C=r.length,P=m-y,x=P>0,O=p+(x?-P:0),k=O+Math.abs(P);if(h===!0&&!x){for(var j=a,M=O;M<k;M++)v[M]===d&&(j+=d);e=e.slice(0,O)+j+e.slice(O,m)}for(var T=e.split(a).map(function(e,r){return{char:e,isNew:r>=O&&r<k}}),w=m-1;w>=0;w--){var _=T[w].char;if(_!==d){var V=w>=O&&y===C;_===v[V?w-P:w]&&T.splice(w,1)}}var S=a,N=!1;e:for(var E=0;E<b;E++){var A=v[E];if(A===d){if(T.length>0)for(;T.length>0;){var R=T.shift(),I=R.char,J=R.isNew;if(I===d&&g!==!0){S+=d;continue e}if(r[E].test(I)){if(h===!0&&J!==!1&&s!==a&&u!==!1&&x){for(var q=T.length,F=null,L=0;L<q;L++){var W=T[L];if(W.char!==d&&W.isNew===!1)break;if(W.char===d){F=L;break}}null!==F?(S+=I,T.splice(F,1)):E--}else S+=I;continue e}N=!0}g===!1&&(S+=v.substr(E,b));break}S+=A}if(g&&x===!1){for(var z=null,B=0;B<S.length;B++)v[B]===d&&(z=B);S=null!==z?S.substr(0,z+1):a}return{conformedValue:S,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],s="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?p.placeholderChar:b,P=n.keepCharPositions,x=void 0!==P&&P,O=n.showMask,k=void 0!==O&&O;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var j=void 0,M=void 0;if(s instanceof Array&&(j=(0,v.convertMaskToPlaceholder)(s,C)),s!==!1){var T=a(t),w=o.selectionEnd,_=r.previousConformedValue,V=r.previousPlaceholder,S=void 0;if(("undefined"==typeof s?"undefined":l(s))===h){if(M=s(T,{currentCaretPosition:w,previousConformedValue:_,placeholderChar:C}),M===!1)return;var N=(0,v.processCaretTraps)(M),E=N.maskWithoutCaretTraps,A=N.indexes;M=E,S=A,j=(0,v.convertMaskToPlaceholder)(M,C)}else M=s;var R={previousConformedValue:_,guide:d,placeholderChar:C,pipe:m,placeholder:j,currentCaretPosition:w,keepCharPositions:x},I=(0,c.default)(T,M,R),J=I.conformedValue,q=("undefined"==typeof m?"undefined":l(m))===h,F={};q&&(F=m(J,u({rawValue:T},R)),F===!1?F={value:_,rejected:!0}:(0,v.isString)(F)&&(F={value:F}));var L=q?F.value:J,W=(0,f.default)({previousConformedValue:_,previousPlaceholder:V,conformedValue:L,placeholder:j,rawValue:T,currentCaretPosition:w,placeholderChar:C,indexesOfPipedChars:F.indexesOfPipedChars,caretTrapIndexes:S}),z=L===j&&0===W,B=k?j:g,D=z?B:L;r.previousConformedValue=D,r.previousPlaceholder=j,o.value!==D&&(o.value=D,i(o,W))}}}}}function i(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,v.isString)(e))return e;if((0,v.isNumber)(e))return String(e);if(void 0===e||null===e)return g;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),v=t(4),p=t(1),h="function",g="",m="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/app/theme/forms/form-mask/form-mask-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormMaskRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_mask_component__ = __webpack_require__("./src/app/theme/forms/form-mask/form-mask.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__form_mask_component__["a" /* FormMaskComponent */],
        data: {
            title: 'Form Mask',
            icon: 'icon-pencil-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form mask',
            status: true
        }
    }
];
var FormMaskRoutingModule = /** @class */ (function () {
    function FormMaskRoutingModule() {
    }
    FormMaskRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], FormMaskRoutingModule);
    return FormMaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-mask/form-mask.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Input Mask'\">\r\n        <form class=\"form-material\" action=\"javascript:\">\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"mobile-no\" class=\"form-control\" required=\"\" placeholder=\"(000) 000-0000\" mask=\"(000) 000-0000\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">Mobile Number</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"date\" class=\"form-control\" required=\"\" placeholder=\"dd-mm-yyyy\" mask=\"00-00-0000\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">Date</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"time\" class=\"form-control\" required=\"\" placeholder=\"hh:ii:ss\" mask=\"00:00:00\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">Time</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"ip-address\" class=\"form-control\" required=\"\" placeholder=\"dd-mm-yyyy hh:ii:ss\" mask=\"00-00-0000 00:00:00\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">IP Address</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"landline\" class=\"form-control\" required=\"\" placeholder=\"000-00-00\" mask=\"000-00-00\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">landline</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"phone\" class=\"form-control\" required=\"\" placeholder=\"+91 000 000 0000\" mask=\"+91 000 000 0000\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">Mobile with Country Code</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"product-key\" class=\"form-control\" required=\"\" placeholder=\"A00-000-AAA-0AA\" mask=\"A00-000-AAA-0AA\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">Product Key</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"credit-card\" class=\"form-control\" required=\"\" placeholder=\"0000-0000-0000-0000\" mask=\"0000-0000-0000-0000\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">Credit Card</label>\r\n          </div>\r\n          <div class=\"form-group form-default form-static-label\">\r\n            <input type=\"text\" name=\"default-val\" class=\"form-control\" required=\"\" placeholder=\"dd-mm-yyyy\" mask=\"00-00-0000\" value=\"10-03-1993\">\r\n            <span class=\"form-bar\"></span>\r\n            <label class=\"float-label\">Default Value</label>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Text Mask'\">\r\n        <form action=\"javascript:\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">US Mobile No.</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskUsMobile}\" type=\"text\" class=\"form-control\" placeholder=\"(000) 000-0000\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">US Mobile No With Country Code</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskUsMobileCountryCode}\" type=\"text\" class=\"form-control\" placeholder=\"+1 (000) 000-0000\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Date</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskDate}\" type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Date Auto Correct</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskDateAuto, pipe:maskDatePipe}\" type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">US Amount</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskUsAmount}\" type=\"text\" class=\"form-control\" placeholder=\"Enter US Amount\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">US Amount (Decimal Allow)</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskUsAmountDecimal}\" type=\"text\" class=\"form-control\" placeholder=\"US Amount with decimal allowed\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Percentage</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskPercentage}\" type=\"text\" class=\"form-control\" placeholder=\"Percentage\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Email</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: emailMask}\" type=\"text\" class=\"form-control\" placeholder=\"jhon@denik.com\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Zipcode</label>\r\n            <div class=\"col-sm-9\">\r\n              <input [textMask]=\"{mask: maskZipCode}\" type=\"text\" class=\"form-control\" placeholder=\"Area Code\"/>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <app-card [title]=\"'Numbers'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <form>\r\n          <div class=\"row form-group\">\r\n            <div class=\"col-sm-3\">\r\n              <label class=\"col-form-label\">Default</label>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control autonumber\" >\r\n            </div>\r\n          </div>\r\n          <div class=\"row form-group\">\r\n            <div class=\"col-sm-3\">\r\n              <label class=\"col-form-label\">Auto Numeric (%)</label>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control autonumber\" name=\"autonumeric\" currencyMask [options]=\"{ prefix: '% ', align: 'right', allowZero: false }\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Amount Alignment</label>\r\n            <div class=\"col-sm-9\">\r\n              <input currencyMask type=\"text\" class=\"form-control\" placeholder=\"Enter Amount Left\" [options]=\"{ align: 'left' }\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Positive Amount Only</label>\r\n            <div class=\"col-sm-9\">\r\n              <input currencyMask type=\"text\" class=\"form-control\" placeholder=\"Enter Positive Amount\" [options]=\"{ allowNegative: false }\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\">Decimal Separator</label>\r\n            <div class=\"col-sm-9\">\r\n              <input currencyMask type=\"text\" class=\"form-control\" placeholder=\"Enter Amount\" [options]=\"{ decimal: '.' }\"/>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <app-card [title]=\"'Currancy Mask'\">\r\n          <form action=\"javascript:\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Default</label>\r\n              <div class=\"col-sm-9\">\r\n                <input currencyMask type=\"text\" class=\"form-control\" placeholder=\"Enter Amount\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n              <div class=\"col-sm-3\">\r\n                <label class=\"col-form-label\">Dollar ($)</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control autonumber\" name=\"dollar\" placeholder=\"Enter Dollar\" currencyMask [options]=\"{ prefix: '$ ', allowZero: false }\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n              <div class=\"col-sm-3\">\r\n                <label class=\"col-form-label\">Euro (€)</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control autonumber\" name=\"Euro\" placeholder=\"Enter Euro\" currencyMask [options]=\"{ prefix: '€ ', allowZero: false }\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n              <div class=\"col-sm-3\">\r\n                <label class=\"col-form-label\">Rupee (Rs.)</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" name=\"Rupee\" class=\"form-control autonumber\" placeholder=\"Enter Amount\"  currencyMask [options]=\"{ prefix: 'Rs. ', allowZero: false }\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n              <div class=\"col-sm-3\">\r\n                <label class=\"col-form-label\">Renminbi (¥)</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control autonumber\" name=\"renminbi\" placeholder=\"Enter Renminbi\"  currencyMask [options]=\"{ prefix: '¥ ', allowZero: false }\" >\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3\">\r\n                <label class=\"col-form-label\">Pound (£)</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control autonumber\" placeholder=\"Enter Pound\" name=\"pound\" currencyMask [options]=\"{ prefix: '£ ', allowZero: false }\" >\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/forms/form-mask/form-mask.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/form-mask/form-mask.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormMaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons__ = __webpack_require__("./node_modules/text-mask-addons/dist/textMaskAddons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormMaskComponent = /** @class */ (function () {
    function FormMaskComponent() {
        this.maskUsMobile = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskUsMobileCountryCode = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.maskDateAuto = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.maskZipCode = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.maskDatePipe = Object(__WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons__["createAutoCorrectedDatePipe"])('dd/mm/yyyy');
        this.maskUsAmount = Object(__WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons__["createNumberMask"])({
            prefix: '$'
        });
        this.maskUsAmountDecimal = Object(__WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons__["createNumberMask"])({
            prefix: '',
            suffix: ' $',
            allowDecimal: true
        });
        this.maskPercentage = Object(__WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons__["createNumberMask"])({
            prefix: '',
            suffix: ' %',
            integerLimit: 2
        });
        this.emailMask = __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_textMaskAddons__["emailMask"];
    }
    FormMaskComponent.prototype.ngOnInit = function () {
    };
    FormMaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-mask',
            template: __webpack_require__("./src/app/theme/forms/form-mask/form-mask.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/form-mask/form-mask.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormMaskComponent);
    return FormMaskComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/form-mask/form-mask.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMaskModule", function() { return FormMaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_mask_routing_module__ = __webpack_require__("./src/app/theme/forms/form-mask/form-mask-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_mask_component__ = __webpack_require__("./src/app/theme/forms/form-mask/form-mask.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_inputmask__ = __webpack_require__("./node_modules/ng2-inputmask/src/input-mask.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask__ = __webpack_require__("./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FormMaskModule = /** @class */ (function () {
    function FormMaskModule() {
    }
    FormMaskModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__form_mask_routing_module__["a" /* FormMaskRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_inputmask__["a" /* InputMaskModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_currency_mask__["CurrencyMaskModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__form_mask_component__["a" /* FormMaskComponent */]]
        })
    ], FormMaskModule);
    return FormMaskModule;
}());



/***/ })

});
//# sourceMappingURL=form-mask.module.chunk.js.map