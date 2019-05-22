(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-game-session-game-session-module~modules-landing-page-landing-page-module"],{

/***/ "./src/app/modules/ui/anchor/anchor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/ui/anchor/anchor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{ text }}</span>\n"

/***/ }),

/***/ "./src/app/modules/ui/anchor/anchor.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/ui/anchor/anchor.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Nunito', sans-serif; }\n:host {\n  padding-bottom: 3px;\n  color: #fff;\n  font-weight: bold;\n  height: 1rem; }\n:host span:hover {\n    cursor: pointer;\n    border-bottom: 1px solid currentColor; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL3VpL2FuY2hvci9hbmNob3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBUy9FO0VBQ0Usa0NBQWlDLEVBQ2xDO0FDVEQ7RUFFRSxvQkFBbUI7RUFDbkIsWURGZTtFQ0dmLGtCQUFpQjtFQUNqQixhQUFZLEVBTWI7QUFYRDtJQVFJLGdCQUFlO0lBQ2Ysc0NBQXFDLEVBQ3RDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91aS9hbmNob3IvYW5jaG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRjb2xvcldoaXRlOiAjZmZmO1xuJHByaW1hcnlDb2xvcjogIzAwOTY4ODtcbiRwcmltYXJ5TGlnaHRDb2xvcjogIzUyYzdiODtcbiRwcmltYXJ5RGFya0NvbG9yOiAjMDA2NzViO1xuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMXJlbTtcblxuICBzcGFuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/anchor/anchor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/ui/anchor/anchor.component.ts ***!
  \*******************************************************/
/*! exports provided: AnchorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorComponent", function() { return AnchorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnchorComponent = /** @class */ (function () {
    function AnchorComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("text"),
        __metadata("design:type", String)
    ], AnchorComponent.prototype, "text", void 0);
    AnchorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "anchor",
            template: __webpack_require__(/*! ./anchor.component.html */ "./src/app/modules/ui/anchor/anchor.component.html"),
            styles: [__webpack_require__(/*! ./anchor.component.scss */ "./src/app/modules/ui/anchor/anchor.component.scss")]
        })
    ], AnchorComponent);
    return AnchorComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/click-button/click-button.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/ui/click-button/click-button.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  (click)=\"didClickButton()\"\n  [ngStyle]=\"{\n    'background-color': isDisabled ? '#a4a4a4' : bgColour,\n    'box-shadow': boxShadow\n  }\"\n  [disabled]=\"isDisabled\">{{ buttonText }}</button>\n"

/***/ }),

/***/ "./src/app/modules/ui/click-button/click-button.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/ui/click-button/click-button.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Nunito', sans-serif; }\n:host button {\n  width: 100%;\n  border: none;\n  font-size: 2.0rem;\n  color: #fff;\n  border-radius: 2rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n:host button:hover {\n  cursor: pointer; }\n:host button:active {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL3VpL2NsaWNrLWJ1dHRvbi9jbGljay1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBUy9FO0VBQ0Usa0NBQWlDLEVBQ2xDO0FDVEQ7RUFFSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixZREphO0VDS2Isb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjtBQVhIO0VBYUksZ0JBQWUsRUFDaEI7QUFkSDtFQWdCSSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VpL2NsaWNrLWJ1dHRvbi9jbGljay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cblxuJGNvbG9yV2hpdGU6ICNmZmY7XG4kcHJpbWFyeUNvbG9yOiAjMDA5Njg4O1xuJHByaW1hcnlMaWdodENvbG9yOiAjNTJjN2I4O1xuJHByaW1hcnlEYXJrQ29sb3I6ICMwMDY3NWI7XG5cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xuICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBidXR0b246YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/ui/click-button/click-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ui/click-button/click-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClickButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickButtonComponent", function() { return ClickButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClickButtonComponent = /** @class */ (function () {
    function ClickButtonComponent() {
        this.buttonText = "click-button";
        this.didClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabled = this.isDisabled ? this.isDisabled : false;
        this.boxShadow = "0.03rem 0.03rem 1px black";
        this.bgColour = "#00675b";
    }
    ClickButtonComponent.prototype.didClickButton = function () {
        var _this = this;
        if (this.isDisabled)
            return;
        this.boxShadow = "0.00rem 0.0rem 0px black";
        this.bgColour = "#004c40";
        var s = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200).subscribe(function (e) {
            _this.bgColour = "#00675b";
            _this.boxShadow = "0.03rem 0.03rem 1px black";
            s.unsubscribe();
        });
        this.didClick.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], ClickButtonComponent.prototype, "buttonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isDisabled'),
        __metadata("design:type", Boolean)
    ], ClickButtonComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('didClick'),
        __metadata("design:type", Object)
    ], ClickButtonComponent.prototype, "didClick", void 0);
    ClickButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "click-button",
            template: __webpack_require__(/*! ./click-button.component.html */ "./src/app/modules/ui/click-button/click-button.component.html"),
            styles: [__webpack_require__(/*! ./click-button.component.scss */ "./src/app/modules/ui/click-button/click-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClickButtonComponent);
    return ClickButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/header1/header1.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/ui/header1/header1.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"f1-ns f1 lh-solid\" >{{ headerText }}</div>\n"

/***/ }),

/***/ "./src/app/modules/ui/header1/header1.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/ui/header1/header1.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Nunito', sans-serif; }\n:host div {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL3VpL2hlYWRlcjEvaGVhZGVyMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFTL0U7RUFDRSxrQ0FBaUMsRUFDbEM7QUNURDtFQUVJLFlERGEsRUNFZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvaGVhZGVyMS9oZWFkZXIxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRjb2xvcldoaXRlOiAjZmZmO1xuJHByaW1hcnlDb2xvcjogIzAwOTY4ODtcbiRwcmltYXJ5TGlnaHRDb2xvcjogIzUyYzdiODtcbiRwcmltYXJ5RGFya0NvbG9yOiAjMDA2NzViO1xuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBkaXYge1xuICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/header1/header1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ui/header1/header1.component.ts ***!
  \*********************************************************/
/*! exports provided: Header1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header1Component", function() { return Header1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header1Component = /** @class */ (function () {
    function Header1Component() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("headerText"),
        __metadata("design:type", String)
    ], Header1Component.prototype, "headerText", void 0);
    Header1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "header1",
            template: __webpack_require__(/*! ./header1.component.html */ "./src/app/modules/ui/header1/header1.component.html"),
            styles: [__webpack_require__(/*! ./header1.component.scss */ "./src/app/modules/ui/header1/header1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Header1Component);
    return Header1Component;
}());



/***/ }),

/***/ "./src/app/modules/ui/header2/header2.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/ui/header2/header2.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"f2-ns f2 lh-solid\" >{{ headerText }}</div>\n"

/***/ }),

/***/ "./src/app/modules/ui/header2/header2.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/ui/header2/header2.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Nunito', sans-serif; }\n:host div {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL3VpL2hlYWRlcjIvaGVhZGVyMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFTL0U7RUFDRSxrQ0FBaUMsRUFDbEM7QUNURDtFQUVJLFlERGEsRUNFZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvaGVhZGVyMi9oZWFkZXIyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRjb2xvcldoaXRlOiAjZmZmO1xuJHByaW1hcnlDb2xvcjogIzAwOTY4ODtcbiRwcmltYXJ5TGlnaHRDb2xvcjogIzUyYzdiODtcbiRwcmltYXJ5RGFya0NvbG9yOiAjMDA2NzViO1xuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBkaXYge1xuICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/header2/header2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ui/header2/header2.component.ts ***!
  \*********************************************************/
/*! exports provided: Header2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header2Component", function() { return Header2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header2Component = /** @class */ (function () {
    function Header2Component() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("headerText"),
        __metadata("design:type", String)
    ], Header2Component.prototype, "headerText", void 0);
    Header2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "header2",
            template: __webpack_require__(/*! ./header2.component.html */ "./src/app/modules/ui/header2/header2.component.html"),
            styles: [__webpack_require__(/*! ./header2.component.scss */ "./src/app/modules/ui/header2/header2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Header2Component);
    return Header2Component;
}());



/***/ }),

/***/ "./src/app/modules/ui/header3/header3.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/ui/header3/header3.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"f3-ns f3 mv1 lh-solid\" >{{ headerText }}</div>\n"

/***/ }),

/***/ "./src/app/modules/ui/header3/header3.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/ui/header3/header3.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Nunito', sans-serif; }\n:host div {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL3VpL2hlYWRlcjMvaGVhZGVyMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFTL0U7RUFDRSxrQ0FBaUMsRUFDbEM7QUNURDtFQUVJLFlERGEsRUNFZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvaGVhZGVyMy9oZWFkZXIzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRjb2xvcldoaXRlOiAjZmZmO1xuJHByaW1hcnlDb2xvcjogIzAwOTY4ODtcbiRwcmltYXJ5TGlnaHRDb2xvcjogIzUyYzdiODtcbiRwcmltYXJ5RGFya0NvbG9yOiAjMDA2NzViO1xuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBkaXYge1xuICAgIGNvbG9yOiAkY29sb3JXaGl0ZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/header3/header3.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ui/header3/header3.component.ts ***!
  \*********************************************************/
/*! exports provided: Header3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header3Component", function() { return Header3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header3Component = /** @class */ (function () {
    function Header3Component() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("headerText"),
        __metadata("design:type", String)
    ], Header3Component.prototype, "headerText", void 0);
    Header3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "header3",
            template: __webpack_require__(/*! ./header3.component.html */ "./src/app/modules/ui/header3/header3.component.html"),
            styles: [__webpack_require__(/*! ./header3.component.scss */ "./src/app/modules/ui/header3/header3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Header3Component);
    return Header3Component;
}());



/***/ }),

/***/ "./src/app/modules/ui/option-button/option-button.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ui/option-button/option-button.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  (click)=\"didClickButton()\"\n  [ngStyle]=\"{\n    'background-color': isDisabled ? '#a4a4a4' : bgColour,\n    'box-shadow': boxShadow\n  }\"\n  (disabled)=\"isDisabled\">{{ buttonText }}</button>\n"

/***/ }),

/***/ "./src/app/modules/ui/option-button/option-button.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/ui/option-button/option-button.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Nunito', sans-serif; }\n:host button {\n  width: 100%;\n  border: none;\n  font-size: 2.0rem;\n  color: black;\n  border-radius: 2rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n:host button:hover {\n  cursor: pointer; }\n:host button:active {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL3VpL29wdGlvbi1idXR0b24vb3B0aW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFTL0U7RUFDRSxrQ0FBaUMsRUFDbEM7QUNURDtFQUVJLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCO0FBWEg7RUFhSSxnQkFBZSxFQUNoQjtBQWRIO0VBZ0JJLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvb3B0aW9uLWJ1dHRvbi9vcHRpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRjb2xvcldoaXRlOiAjZmZmO1xuJHByaW1hcnlDb2xvcjogIzAwOTY4ODtcbiRwcmltYXJ5TGlnaHRDb2xvcjogIzUyYzdiODtcbiRwcmltYXJ5RGFya0NvbG9yOiAjMDA2NzViO1xuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuOmhvc3Qge1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDIuMHJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ui/option-button/option-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/ui/option-button/option-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: OptionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionButtonComponent", function() { return OptionButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionButtonComponent = /** @class */ (function () {
    function OptionButtonComponent() {
        this.buttonText = "option-button";
        this.didClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabled = this.isDisabled ? this.isDisabled : false;
        this.bgColour = "#4db6ac";
        this.boxShadow = "0.03rem 0.03rem 1px black";
    }
    OptionButtonComponent.prototype.didClickButton = function () {
        var _this = this;
        if (this.isDisabled)
            return;
        this.boxShadow = "0.00rem 0.0rem 0px black";
        this.bgColour = "#00867d";
        var s = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(300).subscribe(function (e) {
            _this.bgColour = "#4db6ac";
            _this.boxShadow = "0.03rem 0.03rem 1px black";
            s.unsubscribe();
        });
        this.didClick.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], OptionButtonComponent.prototype, "buttonText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isDisabled'),
        __metadata("design:type", Boolean)
    ], OptionButtonComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('didClick'),
        __metadata("design:type", Object)
    ], OptionButtonComponent.prototype, "didClick", void 0);
    OptionButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "option-button",
            template: __webpack_require__(/*! ./option-button.component.html */ "./src/app/modules/ui/option-button/option-button.component.html"),
            styles: [__webpack_require__(/*! ./option-button.component.scss */ "./src/app/modules/ui/option-button/option-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OptionButtonComponent);
    return OptionButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/textfield/textfield.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/ui/textfield/textfield.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<input \n  [class]=\"isDisabled ? 'tc bg-moon-gray' : 'tc'\"\n  [ngClass]=\"fontSize\"\n  [disabled]=\"isDisabled\"\n  [placeholder]=\"placeholderText\"\n  (ngModelChange)=\"this.emit($event)\"\n  [ngModel]=\"this.textValue\"/>\n\n"

/***/ }),

/***/ "./src/app/modules/ui/textfield/textfield.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/ui/textfield/textfield.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host input {\n  width: 100%;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-radius: 25px;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvYXBwL21vZHVsZXMvdWkvdGV4dGZpZWxkL3RleHRmaWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VpL3RleHRmaWVsZC90ZXh0ZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuOmhvc3Qge1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/ui/textfield/textfield.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/ui/textfield/textfield.component.ts ***!
  \*************************************************************/
/*! exports provided: TextfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextfieldComponent", function() { return TextfieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextfieldComponent = /** @class */ (function () {
    function TextfieldComponent() {
        this.fontSize = "f6;";
        this.textValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextfieldComponent.prototype.emit = function (val) {
        this.textValue = val;
        this.textValueChange.emit(this.textValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("placeholderText"),
        __metadata("design:type", String)
    ], TextfieldComponent.prototype, "placeholderText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("textValue"),
        __metadata("design:type", String)
    ], TextfieldComponent.prototype, "textValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("isDisabled"),
        __metadata("design:type", Boolean)
    ], TextfieldComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("textSize"),
        __metadata("design:type", Object)
    ], TextfieldComponent.prototype, "fontSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextfieldComponent.prototype, "textValueChange", void 0);
    TextfieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "textfield",
            template: __webpack_require__(/*! ./textfield.component.html */ "./src/app/modules/ui/textfield/textfield.component.html"),
            styles: [__webpack_require__(/*! ./textfield.component.scss */ "./src/app/modules/ui/textfield/textfield.component.scss")]
        })
    ], TextfieldComponent);
    return TextfieldComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/timer/timer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/ui/timer/timer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 h1 bg-white br-pill\">\n  <div [class]=\"(' w-56 h1 bg-black br-pill')\" id=\"timerProgress\"></div>\n</div>"

/***/ }),

/***/ "./src/app/modules/ui/timer/timer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/ui/timer/timer.component.ts ***!
  \*****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.onTimerFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TimerComponent.prototype.setTime = function (time) {
        this.totalWaitTime = time;
        this.timeOnScreen = (this.totalWaitTime / 1000).toFixed(1);
    };
    TimerComponent.prototype.setTimerType = function (type) {
        this.timerType = type;
    };
    TimerComponent.prototype.stopTimer = function () {
        this.isTimerStopped = true;
        this.updateProgress(0);
        this.iSub.unsubscribe();
        this.tSub.unsubscribe();
    };
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        this.isTimerStopped = false;
        var timer = this.getTimer(this.totalWaitTime);
        this.iSub = timer.myInterval.subscribe(function (currTimeLeft) {
            _this.updateProgress(currTimeLeft);
        });
        this.tSub = timer.myTimer.subscribe(function (e) {
            _this.timeOnScreen = "0.0";
            _this.iSub.unsubscribe();
            _this.tSub.unsubscribe();
            if (!_this.isTimerStopped) {
                _this.onTimerFinished.emit(_this.timerType); // Timer done!
            }
        });
    };
    TimerComponent.prototype.updateProgress = function (currTimeLeft) {
        var progBar = document.getElementById("timerProgress");
        progBar.style.width = ((100 * currTimeLeft) / (this.totalWaitTime / 1000)) + '%';
        this.timeOnScreen = currTimeLeft.toFixed(1);
    };
    TimerComponent.prototype.getTimer = function (waitTime) {
        this.totalWaitTime = waitTime;
        return { myInterval: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(100).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) { return (waitTime / 1000) - (e / 10); }) // Changes value to tenth's of a second (i.e. 3.2, 2.1, 0.1 etc)
            ),
            myTimer: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(waitTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)) };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("time"),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timeLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TimerComponent.prototype, "onTimerFinished", void 0);
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "timer",
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/modules/ui/timer/timer.component.html")
            // TODO: add styles
        })
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/modules/ui/ui.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/ui/ui.module.ts ***!
  \*****************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _anchor_anchor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchor/anchor.component */ "./src/app/modules/ui/anchor/anchor.component.ts");
/* harmony import */ var _click_button_click_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click-button/click-button.component */ "./src/app/modules/ui/click-button/click-button.component.ts");
/* harmony import */ var _header3_header3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header3/header3.component */ "./src/app/modules/ui/header3/header3.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _textfield_textfield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textfield/textfield.component */ "./src/app/modules/ui/textfield/textfield.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header1_header1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header1/header1.component */ "./src/app/modules/ui/header1/header1.component.ts");
/* harmony import */ var _header2_header2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header2/header2.component */ "./src/app/modules/ui/header2/header2.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/modules/ui/timer/timer.component.ts");
/* harmony import */ var _option_button_option_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./option-button/option-button.component */ "./src/app/modules/ui/option-button/option-button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var uiComponents = [
    _anchor_anchor_component__WEBPACK_IMPORTED_MODULE_0__["AnchorComponent"],
    _click_button_click_button_component__WEBPACK_IMPORTED_MODULE_1__["ClickButtonComponent"],
    _header1_header1_component__WEBPACK_IMPORTED_MODULE_7__["Header1Component"],
    _header2_header2_component__WEBPACK_IMPORTED_MODULE_8__["Header2Component"],
    _header3_header3_component__WEBPACK_IMPORTED_MODULE_2__["Header3Component"],
    _option_button_option_button_component__WEBPACK_IMPORTED_MODULE_10__["OptionButtonComponent"],
    _textfield_textfield_component__WEBPACK_IMPORTED_MODULE_4__["TextfieldComponent"],
    _timer_timer_component__WEBPACK_IMPORTED_MODULE_9__["TimerComponent"]
];
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: uiComponents,
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            exports: uiComponents
        })
    ], UiModule);
    return UiModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-game-session-game-session-module~modules-landing-page-landing-page-module.js.map