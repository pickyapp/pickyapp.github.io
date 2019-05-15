(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-game-session-game-session-module"],{

/***/ "./src/app/modules/game-session/components/game-session/game-session.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/game-session/components/game-session/game-session.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isGameView\">\n  <section class=\"w-70 center pt6 pb2\">\n    <textfield class=\"w-100\"\n      [(textValue)]=\"usernameStr\"\n      [textSize]=\"'f3'\"\n      [isDisabled]=\"isAddUserDisabled\"\n      [placeholderText]=\"'your name'\"></textfield>\n  \n  <div class=\"mv4\">\n    <click-button\n    [text]=\"addButtonText\"\n    (click)=\"setUsername(usernameStr)\"\n    [isDisabled]=\"isAddUserDisabled\"></click-button>\n  </div>\n  </section>\n  <section class=\"mv4\">\n    <div class=\"mb3 white f2 tc\" *ngFor=\"let user of (this.sCurrGameSession$ | async)?.users\">\n      {{ user }}\n    </div>\n  </section>\n  <h5>{{ this.countdownTimerTimeLeft <= 0.5 ? \"GO!\" : this.countdownTimerTimeLeft.toFixed(1) }}</h5>\n</div>\n<div  *ngIf=\"isGameView\">\n  <in-game></in-game>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/game-session/components/game-session/game-session.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/game-session/components/game-session/game-session.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: 'Roboto', sans-serif; }\n:host {\n  background-color: #009688;\n  display: inline-block;\n  width: 100%;\n  height: 72rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW5pdHNvbmkvbWFpbi9waWNreS1tdnAxL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy92aW5pdHNvbmkvbWFpbi9waWNreS1tdnAxL3NyYy9hcHAvbW9kdWxlcy9nYW1lLXNlc3Npb24vY29tcG9uZW50cy9nYW1lLXNlc3Npb24vZ2FtZS1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQVMvRTtFQUNFLGtDQUFpQyxFQUNsQztBQ1REO0VBQ0UsMEJEQ29CO0VDQXBCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nYW1lLXNlc3Npb24vY29tcG9uZW50cy9nYW1lLXNlc3Npb24vZ2FtZS1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRjb2xvcldoaXRlOiAjZmZmO1xuJHByaW1hcnlDb2xvcjogIzAwOTY4ODtcbiRwcmltYXJ5TGlnaHRDb2xvcjogIzUyYzdiODtcbiRwcmltYXJ5RGFya0NvbG9yOiAjMDA2NzViO1xuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/game-session/components/game-session/game-session.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/game-session/components/game-session/game-session.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GameSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSessionComponent", function() { return GameSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/modules/game-session/services/user.service.ts");
/* harmony import */ var src_app_services_game_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/game-session.service */ "./src/app/services/game-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameSessionComponent = /** @class */ (function () {
    function GameSessionComponent(route, router, cookieService, userService, gsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.cookieService = cookieService;
        this.userService = userService;
        this.gsService = gsService;
        this.addButtonText = "JOIN";
        this.sCurrUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sCurrGameSession$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.countdownStarted = false;
        this.isAddUserDisabled = false;
        this.routeSubscription = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), // need to run only once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.gsService.makeSession(params["gameSessionName"]); })).subscribe(function (resp) {
            _this.updateFromCookieSession();
            if (!_this.sCurrGameSession.isGameSessionFree) {
                _this.router.navigate(['in-progress'], { relativeTo: _this.route }); // temporary
            }
        });
        this.pollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(// Polling for updates
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.gsService.getSessionAt(_this.sCurrGameSession.name); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resp) { return _this.updateFromCookieSession(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (resp) { return _this.sCurrGameSession.users.length === 2; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (resp) {
            _this.updateFromCookieSession();
            _this.checkStartCountdown();
            return resp;
        });
    }
    GameSessionComponent.prototype.ngOnInit = function () {
        this.isGameView = false;
        this.countdownTimerTimeLeft = 0.0;
    };
    GameSessionComponent.prototype.checkStartCountdown = function () {
        var _this = this;
        if (!this.sCurrGameSession.isGameSessionFree && !this.countdownStarted) { // i.e. game session just locked
            // TODO: maybe here we can stop the gs update polling?
            console.log("COUNTDOWN STARTED!");
            var waitTime_1 = (this.sCurrGameSession.startCountdownTime + 3000) - (new Date()).getTime();
            console.log("Time to wait", waitTime_1 + "ms");
            this.countdownStarted = true;
            var s = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(100).subscribe(function (e) {
                _this.countdownTimerTimeLeft = (waitTime_1 / 1000) - (e / 10); // UI
            });
            var timerSubs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(waitTime_1).subscribe(function (e) {
                s.unsubscribe();
                timerSubs.unsubscribe();
                _this.isGameView = true; // Starts the game
            });
        }
    };
    GameSessionComponent.prototype.updateFromCookieSession = function () {
        var this_user = JSON.parse(atob(this.cookieService.get("user")));
        this.sCurrUser = this_user["user"];
        this.sCurrGameSession = this_user["game_session"];
        this.sCurrUser$.next(this.sCurrUser);
        this.sCurrGameSession$.next(this.sCurrGameSession);
    };
    GameSessionComponent.prototype.setUsername = function (val) {
        var _this = this;
        this.isAddUserDisabled = true;
        this.addButtonText = "Added!";
        this.userService.setUsername(val, this.sCurrGameSession.name).subscribe(function (resp) {
            _this.updateFromCookieSession();
        });
    };
    /**
     * @TEMPORARY
     */
    GameSessionComponent.prototype.showCookieValue = function (cookieName) {
        var this_user = JSON.parse(atob(this.cookieService.get(cookieName)));
        console.log(this_user);
    };
    GameSessionComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
        this.pollSubscription.unsubscribe();
    };
    GameSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "game-session",
            template: __webpack_require__(/*! ./game-session.component.html */ "./src/app/modules/game-session/components/game-session/game-session.component.html"),
            styles: [__webpack_require__(/*! ./game-session.component.scss */ "./src/app/modules/game-session/components/game-session/game-session.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_services_game_session_service__WEBPACK_IMPORTED_MODULE_6__["GameSessionService"]])
    ], GameSessionComponent);
    return GameSessionComponent;
}());



/***/ }),

/***/ "./src/app/modules/game-session/components/in-game/in-game.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/game-session/components/in-game/in-game.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mh3\">\n  <h1 class=\"white\">Round: {{ round }} of 5</h1>\n  <h1>{{ typeString === \"QUESTION\" ? typeString : \"\" }}</h1>\n  <div class=\"mb4\">\n    <h3 class=\"f3 white\">{{ currQuestion ? currQuestion.question.questionText : \"\" }}</h3>\n  </div>\n  <div *ngIf=\"currQuestion\">\n    <div *ngIf=\"!isShowingAnswers\">\n      <div class=\"mv4\" *ngFor=\"let option of currQuestion.question.options; index as i\">\n          <option-button\n                [text]=\"option.optionText\"\n                (click)=\"setAnswerAs(i)\"\n                [isDisabled]=\"isShowingAnswers\"></option-button>\n      </div>\n    </div>\n    <div *ngIf=\"isShowingAnswers\">\n        <h1>{{ typeString }}</h1>\n        <div class=\"mv5\">\n            <option-button\n                  [text]=\"currQuestion.question.options[currOptionSelected].optionText\"\n                  (click)=\"setAnswerAs(i)\"\n                  [isDisabled]=\"true\"></option-button>\n        </div>\n    </div>\n  </div>\n  <div class=\"mt4\" >\n      <timer #gameTimer [time]=\"5000\" (onTimerFinished)=\"onTimerFinished($event)\" ></timer>\n  </div>\n  <div class=\"mt4\">\n    <click-button *ngIf=\"isShowingAnswers\" [text]=\"'Next'\" (click)=\"onNext()\"></click-button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/game-session/components/in-game/in-game.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/game-session/components/in-game/in-game.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2FtZS1zZXNzaW9uL2NvbXBvbmVudHMvaW4tZ2FtZS9pbi1nYW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/game-session/components/in-game/in-game.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/game-session/components/in-game/in-game.component.ts ***!
  \******************************************************************************/
/*! exports provided: InGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InGameComponent", function() { return InGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/game-session.service */ "./src/app/services/game-session.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_modules_ui_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/ui/timer/timer.component */ "./src/app/modules/ui/timer/timer.component.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utility.service */ "./src/app/modules/game-session/services/utility.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InGameComponent = /** @class */ (function () {
    function InGameComponent(cookieService, gsService, utilityService) {
        this.cookieService = cookieService;
        this.gsService = gsService;
        this.utilityService = utilityService;
        this.QUESTION_VIEW_TIME = 450000;
        this.QUESTION_TIMER_TYPE = "question_timer";
        this.ANSWER_VIEW_TIME = 450000;
        this.ANSWER_TIMER_TYPE = "answer_timer";
        this.TOTAL_ROUNDS = 5;
        this.buddyName = "Himani";
        this.isShowingAnswers = false;
        this.setBuddyNameFromCookie();
        this.round = 0;
        this.currOptionSelected = 1;
    }
    InGameComponent.prototype.ngOnInit = function () {
        this.typeString = "QUESTION";
        this.isShowingAnswers = false;
    };
    InGameComponent.prototype.ngAfterViewInit = function () {
        this.startRound();
    };
    InGameComponent.prototype.setAnswerAs = function (i) {
        this.currOptionSelected = i;
        if (!this.isShowingAnswers)
            this.onNext();
    };
    InGameComponent.prototype.startRound = function () {
        var _this = this;
        var s = this.gsService.getQuestion()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (resp) { return resp.body.message === "success"; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (resp) {
            s.unsubscribe();
            _this.isShowingAnswers = false;
            _this.round++;
            _this.currQuestion = _this.getQuestionFromCookie(true);
            _this.typeString = "QUESTION";
            _this.currTimerType = _this.QUESTION_TIMER_TYPE;
            _this.startTimer(_this.QUESTION_VIEW_TIME, _this.currTimerType);
        });
    };
    InGameComponent.prototype.getQuestionFromCookie = function (amIAnswerer) {
        var c = JSON.parse(atob(this.cookieService.get("user")));
        console.log(this.round);
        console.log(c);
        var currUser = c.user;
        var question = c.game_session.questions.filter(function (el) { return (amIAnswerer && !el.isAnswered) ? (el.answerer === c.user.username) :
            el.answerer !== c.user.username; })[0];
        console.log(question);
        try {
            question.question.questionText = question.question.questionText.replace('{USER}', amIAnswerer ? this.buddyName : currUser.username);
        }
        catch (e) {
            console.log({
                round: this.round,
                qORa: amIAnswerer ? "question" : "answer",
                question: question
            });
            console.log(e);
        }
        return question;
    };
    InGameComponent.prototype.onTimerFinished = function (timerType) {
        if (timerType === this.QUESTION_TIMER_TYPE) {
            this.onQuestionTimerFinished();
            return;
        }
        this.onAnswerTimerFinished();
    };
    InGameComponent.prototype.onNext = function () {
        this.gameTimerComponent.stopTimer();
        this.onTimerFinished(this.currTimerType);
    };
    InGameComponent.prototype.onQuestionTimerFinished = function () {
        var _this = this;
        var s = this.gsService.postMyAnswer(this.currOptionSelected)
            .subscribe(function (resp) {
            s.unsubscribe();
            _this.pollForBuddyAnswer();
        });
    };
    InGameComponent.prototype.onAnswerReceived = function (resp) {
        this.isShowingAnswers = true;
        var ques = this.getQuestionFromCookie(false);
        this.typeString = this.buddyName + " says:";
        this.setAnswerAs(ques.answer);
        this.currQuestion = ques;
        this.currTimerType = this.ANSWER_TIMER_TYPE;
        this.startTimer(this.ANSWER_VIEW_TIME, this.ANSWER_TIMER_TYPE);
    };
    InGameComponent.prototype.onAnswerTimerFinished = function () {
        if (this.round === this.TOTAL_ROUNDS) { // TODO: change to 10 rounds
            alert("Game over!");
            return;
        }
        this.startRound();
    };
    InGameComponent.prototype.pollForBuddyAnswer = function () {
        var _this = this;
        // TODO: maybe we can start a UI loading circle here or something?
        var my_s = this.utilityService.getPoller(2000, function (e) { return _this.gsService.getBuddyAnswer(); }, function (resp) {
            var question = _this.getQuestionFromCookie(false);
            return question && question.isAnswered;
        }).subscribe(function (resp) {
            my_s.unsubscribe();
            _this.onAnswerReceived(resp);
        });
    };
    InGameComponent.prototype.startTimer = function (time, timerType) {
        this.gameTimerComponent.setTime(time);
        this.gameTimerComponent.setTimerType(timerType);
        this.gameTimerComponent.startTimer();
    };
    InGameComponent.prototype.setBuddyNameFromCookie = function () {
        var c = JSON.parse(atob(this.cookieService.get("user")));
        this.buddyName = c.game_session.users.filter(function (el) { return el !== c.user.username; })[0];
    };
    /**
     * @TEMPORARY
     */
    InGameComponent.prototype.showCookieValue = function (cookieName) {
        var this_user = JSON.parse(atob(this.cookieService.get(cookieName)));
        console.log(this_user);
    };
    InGameComponent.prototype.ngOnDestroy = function () {
        // TODO: destroy all subscribers
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gameTimer"),
        __metadata("design:type", src_app_modules_ui_timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"])
    ], InGameComponent.prototype, "gameTimerComponent", void 0);
    InGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "in-game",
            template: __webpack_require__(/*! ./in-game.component.html */ "./src/app/modules/game-session/components/in-game/in-game.component.html"),
            styles: [__webpack_require__(/*! ./in-game.component.scss */ "./src/app/modules/game-session/components/in-game/in-game.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            src_app_services_game_session_service__WEBPACK_IMPORTED_MODULE_1__["GameSessionService"],
            _services_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
    ], InGameComponent);
    return InGameComponent;
}());



/***/ }),

/***/ "./src/app/modules/game-session/components/in-progress/in-progress.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/game-session/components/in-progress/in-progress.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Game is currently in progress. :)\n"

/***/ }),

/***/ "./src/app/modules/game-session/components/in-progress/in-progress.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/game-session/components/in-progress/in-progress.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2FtZS1zZXNzaW9uL2NvbXBvbmVudHMvaW4tcHJvZ3Jlc3MvaW4tcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/game-session/components/in-progress/in-progress.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/game-session/components/in-progress/in-progress.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressComponent", function() { return InProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InProgressComponent = /** @class */ (function () {
    function InProgressComponent() {
    }
    InProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "in-progress",
            template: __webpack_require__(/*! ./in-progress.component.html */ "./src/app/modules/game-session/components/in-progress/in-progress.component.html"),
            styles: [__webpack_require__(/*! ./in-progress.component.scss */ "./src/app/modules/game-session/components/in-progress/in-progress.component.scss")]
        })
    ], InProgressComponent);
    return InProgressComponent;
}());



/***/ }),

/***/ "./src/app/modules/game-session/game-session-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/game-session/game-session-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: gameSessionRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameSessionRouting", function() { return gameSessionRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_game_session_game_session_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game-session/game-session.component */ "./src/app/modules/game-session/components/game-session/game-session.component.ts");
/* harmony import */ var _components_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/in-progress/in-progress.component */ "./src/app/modules/game-session/components/in-progress/in-progress.component.ts");



var routes = [
    { path: ':gameSessionName', component: _components_game_session_game_session_component__WEBPACK_IMPORTED_MODULE_1__["GameSessionComponent"] },
    { path: ':gameSessionName/in-progress', component: _components_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_2__["InProgressComponent"] }
];
var gameSessionRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/game-session/game-session.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/game-session/game-session.module.ts ***!
  \*************************************************************/
/*! exports provided: GameSessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSessionModule", function() { return GameSessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_game_session_game_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-session/game-session.component */ "./src/app/modules/game-session/components/game-session/game-session.component.ts");
/* harmony import */ var _components_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/in-progress/in-progress.component */ "./src/app/modules/game-session/components/in-progress/in-progress.component.ts");
/* harmony import */ var _game_session_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-session-routing.module */ "./src/app/modules/game-session/game-session-routing.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/modules/game-session/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_in_game_in_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/in-game/in-game.component */ "./src/app/modules/game-session/components/in-game/in-game.component.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/utility.service */ "./src/app/modules/game-session/services/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GameSessionModule = /** @class */ (function () {
    function GameSessionModule() {
    }
    GameSessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_game_session_game_session_component__WEBPACK_IMPORTED_MODULE_2__["GameSessionComponent"],
                _components_in_game_in_game_component__WEBPACK_IMPORTED_MODULE_9__["InGameComponent"],
                _components_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_3__["InProgressComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _game_session_routing_module__WEBPACK_IMPORTED_MODULE_4__["gameSessionRouting"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]]
        })
    ], GameSessionModule);
    return GameSessionModule;
}());



/***/ }),

/***/ "./src/app/modules/game-session/services/user.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/game-session/services/user.service.ts ***!
  \***************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.setUsername = function (username, gameSession) {
        // FIXME: fix getting empty gameSession string
        var mkUserObs = this.httpClient.post("https://api.piky.me/game-sessions/" + gameSession + "/add-user", {
            username: username
        }, {
            observe: 'response',
            withCredentials: true // Required for CORS
        });
        return mkUserObs;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/modules/game-session/services/utility.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/game-session/services/utility.service.ts ***!
  \******************************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.getPoller = function (intervalTime, pollFct, pollUntil) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, intervalTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(pollFct), // TODO switchMap might cancel requests look at others
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(pollUntil), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UtilityService);
    return UtilityService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-game-session-game-session-module.js.map