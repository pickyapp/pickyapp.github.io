(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-landing-page-landing-page-module"],{

/***/ "./src/app/directives/click.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/click.directive.ts ***!
  \***********************************************/
/*! exports provided: ClickListenerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickListenerDirective", function() { return ClickListenerDirective; });
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

var ClickListenerDirective = /** @class */ (function () {
    function ClickListenerDirective() {
        this.atclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickListenerDirective.prototype.onClick = function () {
        this.atclick.emit("clicked");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClickListenerDirective.prototype, "atclick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ClickListenerDirective.prototype, "onClick", null);
    ClickListenerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: "[clickListener]" }),
        __metadata("design:paramtypes", [])
    ], ClickListenerDirective);
    return ClickListenerDirective;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click.directive */ "./src/app/directives/click.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_click_directive__WEBPACK_IMPORTED_MODULE_0__["ClickListenerDirective"]],
            exports: [_click_directive__WEBPACK_IMPORTED_MODULE_0__["ClickListenerDirective"]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/modules/landing-page/components/education-step/education-step.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/education-step/education-step.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"education-step-container pa3 flex flex-column mw6\">\n  <span class=\"ph3-ns pb3-ns pt2-ns pa2 w1 h1 mw1 mh1 education-step-number tc f3-ns f5\">{{ stepNumber }}</span>\n  <div class=\"f2-ns f3 pa5-ns pa4\">{{ text }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/landing-page/components/education-step/education-step.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/education-step/education-step.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Roboto', sans-serif; }\n:host {\n  color: #fff;\n  margin: 1rem; }\n:host .education-step-container {\n    background-color: rgba(216, 216, 216, 0.2); }\n:host .education-step-number {\n    background-color: #00675b;\n    border-radius: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL2VkdWNhdGlvbi1zdGVwL2VkdWNhdGlvbi1zdGVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQVMvRTtFQUNFLGtDQUFpQyxFQUNsQztBQ1JEO0VBQ0UsWUREZTtFQ0VmLGFBQVksRUFTYjtBQVhEO0lBSUksMkNBQXNDLEVBQ3ZDO0FBTEg7SUFRSSwwQkRMc0I7SUNNdEIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9lZHVjYXRpb24tc3RlcC9lZHVjYXRpb24tc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuXG4kY29sb3JXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5Q29sb3I6ICMwMDk2ODg7XG4kcHJpbWFyeUxpZ2h0Q29sb3I6ICM1MmM3Yjg7XG4kcHJpbWFyeURhcmtDb2xvcjogIzAwNjc1YjtcblxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cblxuOmhvc3Qge1xuICBjb2xvcjogJGNvbG9yV2hpdGU7XG4gIG1hcmdpbjogMXJlbTtcbiAgLmVkdWNhdGlvbi1zdGVwLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNEOEQ4RDgsICRhbHBoYTogMC4yKTtcbiAgfVxuXG4gIC5lZHVjYXRpb24tc3RlcC1udW1iZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5RGFya0NvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/landing-page/components/education-step/education-step.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/education-step/education-step.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EducationStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationStepComponent", function() { return EducationStepComponent; });
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

var EducationStepComponent = /** @class */ (function () {
    function EducationStepComponent() {
    }
    EducationStepComponent.prototype.ngOnChanges = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("stepNumber"),
        __metadata("design:type", Number)
    ], EducationStepComponent.prototype, "stepNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("text"),
        __metadata("design:type", String)
    ], EducationStepComponent.prototype, "text", void 0);
    EducationStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "education-step",
            template: __webpack_require__(/*! ./education-step.component.html */ "./src/app/modules/landing-page/components/education-step/education-step.component.html"),
            styles: [__webpack_require__(/*! ./education-step.component.scss */ "./src/app/modules/landing-page/components/education-step/education-step.component.scss")]
        })
    ], EducationStepComponent);
    return EducationStepComponent;
}());



/***/ }),

/***/ "./src/app/modules/landing-page/components/footer/footer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/footer/footer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"flex flex-column flex-row-ns justify-between pt4 ph4\">\n  <anchor [text]=\"'About Us'\"></anchor>\n  <div class=\"flex flex-column tr-ns\">\n    <p class=\"mv0-ns\"><b>Disclaimer: </b>All content and interactions are for light fun and entertainment. </p>\n    <p>© 2018 Picky</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/landing-page/components/footer/footer.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/footer/footer.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Roboto', sans-serif; }\n:host {\n  background-color: #52c7b8;\n  color: #fff;\n  height: 20rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBUy9FO0VBQ0Usa0NBQWlDLEVBQ2xDO0FDVEQ7RUFDRSwwQkRFeUI7RUNEekIsWUREZTtFQ0VmLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuXG4kY29sb3JXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5Q29sb3I6ICMwMDk2ODg7XG4kcHJpbWFyeUxpZ2h0Q29sb3I6ICM1MmM3Yjg7XG4kcHJpbWFyeURhcmtDb2xvcjogIzAwNjc1YjtcblxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlMaWdodENvbG9yO1xuICBjb2xvcjogJGNvbG9yV2hpdGU7XG4gIGhlaWdodDogMjByZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/landing-page/components/footer/footer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/footer/footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/landing-page/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/landing-page/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/landing-page/components/landing-page/landing-page.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/landing-page/landing-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-column\">\n  <div class=\"flex flex-row mv4 mt5-ns justify-center\">\n      <header1 class=\"b\" [headerText]=\"'Picky'\" ></header1>\n      <header1 [headerText]=\"'&nbsp;— Get to know your friends'\" ></header1>\n  </div>\n\n  <div class=\"mv5\">\n    <div class=\"w-100 flex flex-row justify-center mv3\">\n      <header2 [headerText]=\"'picky.me/g/'\"></header2>\n      <textfield class=\"w5-ns w-50 f3-ns f5\" [textValue]=\"sessionName\" (textValueChange)=\"onSessionNameUpdate($event)\" [placeholderText]=\"'the-cool-fham'\"></textfield>\n    </div>\n    <div class=\"flex flex-row justify-center mv3-ns mv2\">\n      <click-button class=\"w-80 mh3\" clickListener (atclick)=\"setGameSessionAndUpdateRoute()\" [text]=\"'start'\"></click-button>\n    </div>\n  </div>\n\n  <div class=\"flex flex-row-l flex-column mh4-ns mh3 mt5 mb4 justify-between-ns items-center\">\n    <education-step [stepNumber]=\"1\" [text]=\"'Set your unique session name & click start'\"></education-step>\n    <education-step [stepNumber]=\"2\" [text]=\"step2Text\"></education-step>\n    <education-step [stepNumber]=\"3\" [text]=\"'Enter your names into the session and start playing!'\"></education-step>\n  </div>\n  <footer></footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/landing-page/components/landing-page/landing-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/landing-page/landing-page.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Roboto', sans-serif; }\n:host {\n  background-color: #009688;\n  display: inline-block;\n  width: 100%;\n  height: 72rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Zpbml0L3NpZGUvcGlja3ktbXZwMS9zcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS92aW5pdC9zaWRlL3BpY2t5LW12cDEvc3JjL2FwcC9tb2R1bGVzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBUy9FO0VBQ0Usa0NBQWlDLEVBQ2xDO0FDVEQ7RUFDRSwwQkRDb0I7RUNBcEIsc0JBQXFCO0VBQ3JCLFlBQVc7RUFDWCxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cblxuJGNvbG9yV2hpdGU6ICNmZmY7XG4kcHJpbWFyeUNvbG9yOiAjMDA5Njg4O1xuJHByaW1hcnlMaWdodENvbG9yOiAjNTJjN2I4O1xuJHByaW1hcnlEYXJrQ29sb3I6ICMwMDY3NWI7XG5cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcycmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/landing-page/components/landing-page/landing-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/landing-page/components/landing-page/landing-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router) {
        this.router = router;
        this.sessionPath = "/";
        this.sessionName = "";
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.step2Text = "Share picky.me/g/" + (this.sessionName && this.sessionName !== "" ? this.sessionName : '<session>') + " with your game buddy";
    };
    LandingPageComponent.prototype.onSessionNameUpdate = function (updatedValue) {
        this.sessionName = updatedValue;
        this.sessionPath = "/g/" + updatedValue;
        this.step2Text = "Share picky.me/g/" + (this.sessionName && this.sessionName !== "" ? this.sessionName : '<session>') + " with your game buddy";
    };
    LandingPageComponent.prototype.setGameSessionAndUpdateRoute = function () {
        this.router.navigate([this.sessionPath]);
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "landing-page",
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/modules/landing-page/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/modules/landing-page/components/landing-page/landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/landing-page/landing-page-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: landingPageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingPageRouting", function() { return landingPageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/modules/landing-page/components/landing-page/landing-page.component.ts");


var routes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] },
];
var landingPageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/landing-page/landing-page.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/landing-page/landing-page.module.ts ***!
  \*************************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/modules/landing-page/components/footer/footer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/modules/landing-page/components/landing-page/landing-page.component.ts");
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page-routing.module */ "./src/app/modules/landing-page/landing-page-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _components_education_step_education_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/education-step/education-step.component */ "./src/app/modules/landing-page/components/education-step/education-step.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_education_step_education_step_component__WEBPACK_IMPORTED_MODULE_7__["EducationStepComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"],
            ],
            imports: [
                _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__["DirectivesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["landingPageRouting"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UiModule"]
            ]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-landing-page-landing-page-module.js.map