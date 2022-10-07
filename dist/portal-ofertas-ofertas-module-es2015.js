(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-ofertas-ofertas-module"],{

/***/ "1zy2":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-image-zoom/__ivy_ngcc__/fesm2015/ngx-image-zoom.js ***!
  \*****************************************************************************/
/*! exports provided: NgxImageZoomComponent, NgxImageZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxImageZoomComponent", function() { return NgxImageZoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxImageZoomModule", function() { return NgxImageZoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["zoomContainer"];
const _c1 = ["imageThumbnail"];
const _c2 = ["fullSizeImage"];
const _c3 = function (a1) { return { "ngxImageZoomFullContainer": true, "ngxImageZoomLensEnabled": a1 }; };
var NgxImageZoomComponent_1;
let NgxImageZoomComponent = NgxImageZoomComponent_1 = class NgxImageZoomComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.zoomScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enableLens = false;
        this.lensBorderRadius = 0;
        this.lensWidth = 100;
        this.lensHeight = 100;
        this.zoomMode = 'hover';
        this.magnification = 1;
        this.enableScrollZoom = false;
        this.scrollStepSize = 0.1;
        this.circularLens = false;
        this.maxZoomRatio = 2;
        this.zoomingEnabled = false;
        this.zoomFrozen = false;
        this.isReady = false;
        this.thumbImageLoaded = false;
        this.fullImageLoaded = false;
        this.eventListeners = [];
    }
    set setThumbImage(thumbImage) {
        this.thumbImageLoaded = false;
        this.isReady = false;
        this.thumbImage = thumbImage;
    }
    set setFullImage(fullImage) {
        this.fullImageLoaded = false;
        this.isReady = false;
        this.fullImage = fullImage;
    }
    set setZoomMode(zoomMode) {
        if (NgxImageZoomComponent_1.validZoomModes.some(m => m === zoomMode)) {
            this.zoomMode = zoomMode;
        }
    }
    set setMagnification(magnification) {
        this.magnification = Number(magnification) || this.magnification;
        this.zoomScroll.emit(this.magnification);
    }
    set setMinZoomRatio(minZoomRatio) {
        const ratio = Number(minZoomRatio) || this.minZoomRatio || this.baseRatio || 0;
        this.minZoomRatio = Math.max(ratio, this.baseRatio || 0);
    }
    set setMaxZoomRatio(maxZoomRatio) {
        this.maxZoomRatio = Number(maxZoomRatio) || this.maxZoomRatio;
    }
    set setScrollStepSize(stepSize) {
        this.scrollStepSize = Number(stepSize) || this.scrollStepSize;
    }
    set setEnableLens(enable) {
        this.enableLens = Boolean(enable);
    }
    set setLensWidth(width) {
        this.lensWidth = Number(width) || this.lensWidth;
    }
    set setLensHeight(height) {
        this.lensHeight = Number(height) || this.lensHeight;
    }
    set setCircularLens(enable) {
        this.circularLens = Boolean(enable);
    }
    set setEnableScrollZoom(enable) {
        this.enableScrollZoom = Boolean(enable);
    }
    ngOnInit() {
        this.setUpEventListeners();
    }
    ngOnChanges() {
        if (this.enableLens) {
            if (this.circularLens) {
                this.lensBorderRadius = this.lensWidth / 2;
            }
            else {
                this.lensBorderRadius = 0;
            }
        }
        this.calculateRatioAndOffset();
        this.calculateImageAndLensPosition();
    }
    ngOnDestroy() {
        this.eventListeners.forEach((destroyFn) => destroyFn());
    }
    /**
     * Template helper methods
     */
    onThumbImageLoaded() {
        this.thumbImageLoaded = true;
        this.checkImagesLoaded();
    }
    onFullImageLoaded() {
        this.fullImageLoaded = true;
        this.checkImagesLoaded();
    }
    setUpEventListeners() {
        if (this.zoomMode === 'hover') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseenter', (event) => this.hoverMouseEnter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.hoverMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.hoverMouseMove(event)));
        }
        else if (this.zoomMode === 'toggle') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.toggleClick(event)));
        }
        else if (this.zoomMode === 'click') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.clickStarter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.clickMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.clickMouseMove(event)));
        }
        else if (this.zoomMode === 'hover-freeze') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseenter', (event) => this.hoverFreezeMouseEnter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.hoverFreezeMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.hoverFreezeMouseMove(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.hoverFreezeClick(event)));
        }
        if (this.enableScrollZoom) {
            // Chrome: 'mousewheel', Firefox: 'DOMMouseScroll', IE: 'onmousewheel'
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousewheel', (event) => this.onMouseWheel(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'DOMMouseScroll', (event) => this.onMouseWheel(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'onmousewheel', (event) => this.onMouseWheel(event)));
        }
        if (this.enableLens && this.circularLens) {
            this.lensBorderRadius = this.lensWidth / 2;
        }
    }
    checkImagesLoaded() {
        this.calculateRatioAndOffset();
        if (this.thumbImageLoaded && this.fullImageLoaded) {
            this.calculateImageAndLensPosition();
            this.isReady = true;
        }
    }
    /**
     * Zoom position setters
     */
    setZoomPosition(left, top) {
        this.latestMouseLeft = Number(left) || this.latestMouseLeft;
        this.latestMouseTop = Number(top) || this.latestMouseTop;
        const c = {
            x: this.latestMouseLeft,
            y: this.latestMouseTop
        };
        this.zoomPosition.emit(c);
    }
    /**
     * Mouse wheel event
     */
    onMouseWheel(event) {
        // Don't eat events if zooming isn't active
        if (!this.zoomingEnabled || this.zoomFrozen) {
            return;
        }
        event = window.event || event; // old IE
        const direction = Math.max(Math.min((event.wheelDelta || -event.detail), 1), -1);
        if (direction > 0) {
            // up
            this.setMagnification = Math.min(this.magnification + this.scrollStepSize, this.maxZoomRatio);
        }
        else {
            // down
            this.setMagnification = Math.max(this.magnification - this.scrollStepSize, this.minZoomRatio);
        }
        this.calculateRatio();
        this.calculateZoomPosition(event);
        // Prevent scrolling on page.
        event.returnValue = false; // IE
        if (event.preventDefault) {
            event.preventDefault(); // Chrome & FF
        }
    }
    /**
     * Hover mode
     */
    hoverMouseEnter(event) {
        this.zoomOn(event);
    }
    hoverMouseLeave() {
        this.zoomOff();
    }
    hoverMouseMove(event) {
        this.calculateZoomPosition(event);
    }
    /**
     * Toggle mode
     */
    toggleClick(event) {
        if (this.zoomingEnabled) {
            this.zoomOff();
        }
        else {
            this.zoomOn(event);
        }
    }
    /**
     * Click mode
     */
    clickStarter(event) {
        if (this.zoomingEnabled === false) {
            this.zoomOn(event);
        }
    }
    clickMouseLeave() {
        this.zoomOff();
    }
    clickMouseMove(event) {
        if (this.zoomingEnabled) {
            this.calculateZoomPosition(event);
        }
    }
    /**
     * Hover freeze mode
     */
    hoverFreezeMouseEnter(event) {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.zoomOn(event);
        }
    }
    hoverFreezeMouseLeave() {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.zoomOff();
        }
    }
    hoverFreezeMouseMove(event) {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.calculateZoomPosition(event);
        }
    }
    hoverFreezeClick(event) {
        if (this.zoomingEnabled && this.zoomFrozen) {
            this.zoomFrozen = false;
            this.zoomOff();
        }
        else if (this.zoomingEnabled) {
            this.zoomFrozen = true;
        }
        else {
            this.zoomOn(event);
        }
    }
    /**
     * Private helper methods
     */
    zoomOn(event) {
        if (this.isReady) {
            this.zoomingEnabled = true;
            this.calculateRatioAndOffset();
            this.display = 'block';
            this.calculateZoomPosition(event);
        }
    }
    zoomOff() {
        this.zoomingEnabled = false;
        this.display = 'none';
    }
    calculateZoomPosition(event) {
        const newLeft = Math.max(Math.min(event.offsetX, this.thumbWidth), 0);
        const newTop = Math.max(Math.min(event.offsetY, this.thumbHeight), 0);
        this.setZoomPosition(newLeft, newTop);
        this.calculateImageAndLensPosition();
    }
    calculateImageAndLensPosition() {
        let lensLeftMod = 0;
        let lensTopMod = 0;
        if (this.enableLens) {
            lensLeftMod = this.lensLeft = this.latestMouseLeft - this.lensWidth / 2;
            lensTopMod = this.lensTop = this.latestMouseTop - this.lensHeight / 2;
        }
        this.fullImageLeft = (this.latestMouseLeft * -this.xRatio) - lensLeftMod;
        this.fullImageTop = (this.latestMouseTop * -this.yRatio) - lensTopMod;
    }
    calculateRatioAndOffset() {
        this.thumbWidth = this.imageThumbnail.nativeElement.width;
        this.thumbHeight = this.imageThumbnail.nativeElement.height;
        // If lens is disabled, set lens size to equal thumb size and position it on top of the thumb
        if (!this.enableLens) {
            this.lensWidth = this.thumbWidth;
            this.lensHeight = this.thumbHeight;
            this.lensLeft = 0;
            this.lensTop = 0;
        }
        // getBoundingClientRect() ? https://stackoverflow.com/a/44008873
        this.offsetTop = this.imageThumbnail.nativeElement.getBoundingClientRect().top;
        this.offsetLeft = this.imageThumbnail.nativeElement.getBoundingClientRect().left;
        if (this.fullImage === undefined) {
            this.fullImage = this.thumbImage;
        }
        if (this.fullImageLoaded) {
            this.fullWidth = this.fullSizeImage.nativeElement.naturalWidth;
            this.fullHeight = this.fullSizeImage.nativeElement.naturalHeight;
            this.baseRatio = Math.max((this.thumbWidth / this.fullWidth), (this.thumbHeight / this.fullHeight));
            // Don't allow zooming to smaller than thumbnail size
            this.minZoomRatio = Math.max(this.minZoomRatio || 0, this.baseRatio || 0);
            this.calculateRatio();
        }
    }
    calculateRatio() {
        this.magnifiedWidth = (this.fullWidth * this.magnification);
        this.magnifiedHeight = (this.fullHeight * this.magnification);
        this.xRatio = (this.magnifiedWidth - this.thumbWidth) / this.thumbWidth;
        this.yRatio = (this.magnifiedHeight - this.thumbHeight) / this.thumbHeight;
    }
};
NgxImageZoomComponent.ɵfac = function NgxImageZoomComponent_Factory(t) { return new (t || NgxImageZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
NgxImageZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxImageZoomComponent, selectors: [["lib-ngx-image-zoom"]], viewQuery: function NgxImageZoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.zoomContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageThumbnail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullSizeImage = _t.first);
    } }, inputs: { setThumbImage: ["thumbImage", "setThumbImage"], setFullImage: ["fullImage", "setFullImage"], setZoomMode: ["zoomMode", "setZoomMode"], setMagnification: ["magnification", "setMagnification"], setMinZoomRatio: ["minZoomRatio", "setMinZoomRatio"], setMaxZoomRatio: ["maxZoomRatio", "setMaxZoomRatio"], setScrollStepSize: ["scrollStepSize", "setScrollStepSize"], setEnableLens: ["enableLens", "setEnableLens"], setLensWidth: ["lensWidth", "setLensWidth"], setLensHeight: ["lensHeight", "setLensHeight"], setCircularLens: ["circularLens", "setCircularLens"], setEnableScrollZoom: ["enableScrollZoom", "setEnableScrollZoom"] }, outputs: { zoomScroll: "zoomScroll", zoomPosition: "zoomPosition" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 31, consts: [[1, "ngxImageZoomContainer"], ["zoomContainer", ""], [1, "ngxImageZoomThumbnail", 3, "src", "load"], ["imageThumbnail", ""], [3, "ngClass"], [1, "ngxImageZoomFull", 3, "src", "load"], ["fullSizeImage", ""]], template: function NgxImageZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function NgxImageZoomComponent_Template_img_load_2_listener() { return ctx.onThumbImageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function NgxImageZoomComponent_Template_img_load_5_listener() { return ctx.onFullImageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.thumbWidth, "px")("height", ctx.thumbHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.thumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.display)("top", ctx.lensTop, "px")("left", ctx.lensLeft, "px")("width", ctx.lensWidth, "px")("height", ctx.lensHeight, "px")("border-radius", ctx.lensBorderRadius, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c3, ctx.enableLens));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.display)("top", ctx.fullImageTop, "px")("left", ctx.fullImageLeft, "px")("width", ctx.magnifiedWidth, "px")("height", ctx.magnifiedHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.fullImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".ngxImageZoomContainer[_ngcontent-%COMP%]{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail[_ngcontent-%COMP%]{pointer-events:all}.ngxImageZoomFull[_ngcontent-%COMP%]{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer[_ngcontent-%COMP%]{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled[_ngcontent-%COMP%]{border:2px solid red;cursor:crosshair;pointer-events:none}"] });
NgxImageZoomComponent.validZoomModes = ['hover', 'toggle', 'click', 'hover-freeze'];
NgxImageZoomComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('zoomContainer', { static: true })
], NgxImageZoomComponent.prototype, "zoomContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageThumbnail', { static: true })
], NgxImageZoomComponent.prototype, "imageThumbnail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fullSizeImage', { static: true })
], NgxImageZoomComponent.prototype, "fullSizeImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxImageZoomComponent.prototype, "zoomScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxImageZoomComponent.prototype, "zoomPosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('thumbImage')
], NgxImageZoomComponent.prototype, "setThumbImage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fullImage')
], NgxImageZoomComponent.prototype, "setFullImage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('zoomMode')
], NgxImageZoomComponent.prototype, "setZoomMode", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('magnification')
], NgxImageZoomComponent.prototype, "setMagnification", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('minZoomRatio')
], NgxImageZoomComponent.prototype, "setMinZoomRatio", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('maxZoomRatio')
], NgxImageZoomComponent.prototype, "setMaxZoomRatio", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scrollStepSize')
], NgxImageZoomComponent.prototype, "setScrollStepSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('enableLens')
], NgxImageZoomComponent.prototype, "setEnableLens", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lensWidth')
], NgxImageZoomComponent.prototype, "setLensWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lensHeight')
], NgxImageZoomComponent.prototype, "setLensHeight", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circularLens')
], NgxImageZoomComponent.prototype, "setCircularLens", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('enableScrollZoom')
], NgxImageZoomComponent.prototype, "setEnableScrollZoom", null);

let NgxImageZoomModule = class NgxImageZoomModule {
};
NgxImageZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxImageZoomModule });
NgxImageZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxImageZoomModule_Factory(t) { return new (t || NgxImageZoomModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxImageZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'lib-ngx-image-zoom',
                template: "<div #zoomContainer class=\"ngxImageZoomContainer\"\n     [style.width.px]=\"this.thumbWidth\" [style.height.px]=\"this.thumbHeight\">\n\n  <img #imageThumbnail class=\"ngxImageZoomThumbnail\" [src]=\"thumbImage\" (load)=\"onThumbImageLoaded()\"/>\n\n  <div [ngClass]=\"{'ngxImageZoomFullContainer': true, 'ngxImageZoomLensEnabled': this.enableLens}\"\n       [style.display]=\"this.display\"\n       [style.top.px]=\"this.lensTop\"\n       [style.left.px]=\"this.lensLeft\"\n       [style.width.px]=\"this.lensWidth\"\n       [style.height.px]=\"this.lensHeight\"\n       [style.border-radius.px]=\"this.lensBorderRadius\"\n  >\n    <img #fullSizeImage class=\"ngxImageZoomFull\" [src]=\"fullImage\"\n         (load)=\"onFullImageLoaded()\"\n         [style.display]=\"this.display\"\n         [style.top.px]=\"this.fullImageTop\"\n         [style.left.px]=\"this.fullImageLeft\"\n         [style.width.px]=\"this.magnifiedWidth\"\n         [style.height.px]=\"this.magnifiedHeight\"\n    />\n  </div>\n</div>\n",
                styles: [".ngxImageZoomContainer{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail{pointer-events:all}.ngxImageZoomFull{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled{border:2px solid red;cursor:crosshair;pointer-events:none}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { zoomScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], zoomPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], setThumbImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['thumbImage']
        }], setFullImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['fullImage']
        }], setZoomMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['zoomMode']
        }], setMagnification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['magnification']
        }], setMinZoomRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['minZoomRatio']
        }], setMaxZoomRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['maxZoomRatio']
        }], setScrollStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['scrollStepSize']
        }], setEnableLens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['enableLens']
        }], setLensWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['lensWidth']
        }], setLensHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['lensHeight']
        }], setCircularLens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['circularLens']
        }], setEnableScrollZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['enableScrollZoom']
        }], zoomContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['zoomContainer', { static: true }]
        }], imageThumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['imageThumbnail', { static: true }]
        }], fullSizeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fullSizeImage', { static: true }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxImageZoomModule, { declarations: function () { return [NgxImageZoomComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [NgxImageZoomComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxImageZoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    NgxImageZoomComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ],
                exports: [
                    NgxImageZoomComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-image-zoom
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-image-zoom.js.map

/***/ }),

/***/ "7gsD":
/*!*****************************************************!*\
  !*** ./src/app/portal/ofertas/ofertas.component.ts ***!
  \*****************************************************/
/*! exports provided: OfertasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasComponent", function() { return OfertasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OfertasComponent {
    constructor() { }
    ngOnInit() {
    }
    openModal() {
        console.log("open");
        document.getElementById('imgModal').style.display = "block";
    }
    closeModal() {
        document.getElementById('imgModal').style.display = "none";
    }
}
OfertasComponent.ɵfac = function OfertasComponent_Factory(t) { return new (t || OfertasComponent)(); };
OfertasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfertasComponent, selectors: [["app-ofertas"]], decls: 11, vars: 0, consts: [[1, "row", "justify-content-lg-center", "pb-4"], [1, "col-lg-4", "mb-4", "mb-lg-0", "mt-4"], ["href", "#", 1, "card", "card-sm", "card-transition-zoom"], [1, "card-transition-zoom-item"], ["src", "/assets/media/barataria/img3.jpg", "alt", "Image Description", 1, "card-img", "opacity"], [1, "card-img-overlay", "top-auto"], [1, "d-flex", "justify-content-end", "flex-column", "bg-white", "rounded-xl", "p-4", 2, "border", "3px solid #027762"], [1, "card-title", "text-dark", "mb-1"], [1, "text-dark", "mb-1"]], template: function OfertasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oferta Viajes Samaranch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "31 de Enero de 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".top-auto[_ngcontent-%COMP%] {\n  top: auto !important;\n}\n\n.opacity[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.zoom[_ngcontent-%COMP%] {\n  padding: 50px;\n  transition: transform 0.2s;\n  \n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n}\n\n.zoom[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvZmVydGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUEyQixjQUFBO0VBQzNCLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0UscUJBQUE7RUFBdUIscUZBQUE7QUFHM0IiLCJmaWxlIjoib2ZlcnRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYXV0b3tcclxuICAgIHRvcDogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcGFjaXR5IHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnpvb20ge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuem9vbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXHJcbiAgfVxyXG5cclxuICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfertasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ofertas',
                templateUrl: './ofertas.component.html',
                styleUrls: ['./ofertas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HeLd":
/*!**************************************************!*\
  !*** ./src/app/portal/ofertas/ofertas.module.ts ***!
  \**************************************************/
/*! exports provided: OfertasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasModule", function() { return OfertasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var src_app_metronic_portal_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_metronic_portal/partials/content/dropdown-menus/dropdown-menus.module */ "JT8C");
/* harmony import */ var _ofertas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ofertas.component */ "7gsD");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-zoom */ "1zy2");











class OfertasModule {
}
OfertasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OfertasModule });
OfertasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OfertasModule_Factory(t) { return new (t || OfertasModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _ofertas_component__WEBPACK_IMPORTED_MODULE_7__["OfertasComponent"],
                }
            ]),
            src_app_metronic_portal_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_6__["DropdownMenusModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_8__["NgxImageZoomModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OfertasModule, { declarations: [_ofertas_component__WEBPACK_IMPORTED_MODULE_7__["OfertasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_metronic_portal_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_6__["DropdownMenusModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        ngx_image_zoom__WEBPACK_IMPORTED_MODULE_8__["NgxImageZoomModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfertasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_ofertas_component__WEBPACK_IMPORTED_MODULE_7__["OfertasComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _ofertas_component__WEBPACK_IMPORTED_MODULE_7__["OfertasComponent"],
                        }
                    ]),
                    src_app_metronic_portal_partials_content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_6__["DropdownMenusModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    ngx_image_zoom__WEBPACK_IMPORTED_MODULE_8__["NgxImageZoomModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=portal-ofertas-ofertas-module-es2015.js.map