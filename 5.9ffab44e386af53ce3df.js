(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9obh":function(n,e,t){"use strict";t.r(e);var i=t("CcnG"),l=function(){return function(){}}(),u=t("pMnS"),o=t("4W4v"),s=t("knzv"),r=t("OErW"),c=t("E4h0"),a=t("Ip0R"),b=t("6SUF"),h=i.nb({encapsulation:0,styles:[["body[_ngcontent-%COMP%]{font-family:Nunito,sans-serif}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{width:100%;border:none;font-size:1.4rem;color:#000;border-radius:2rem;padding:5px 1rem}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:active{box-shadow:none}"]],data:{}});function p(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,3,"button",[],null,[[null,"click"],[null,"disabled"]],function(n,e,t){var i=!0,l=n.component;return"click"===e&&(i=!1!==l.didClickButton()&&i),"disabled"===e&&(i=!1!==l.isDisabled&&i),i},null,null)),i.ob(1,278528,null,0,a.n,[i.t,i.k,i.D],{ngStyle:[0,"ngStyle"]},null),i.zb(2,{"background-color":0,"box-shadow":1}),(n()(),i.Db(3,null,["",""]))],function(n,e){var t=e.component,i=n(e,2,0,t.isDisabled?"#a4a4a4":t.bgColour,t.boxShadow);n(e,1,0,i)},function(n,e){n(e,3,0,e.component.buttonText)})}var d=t("Ka1B"),f=i.nb({encapsulation:2,styles:[],data:{}});function m(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,1,"div",[["class","w-100 h1 bg-white br-pill"]],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,0,"div",[["id","timerProgress"]],[[8,"className",0]],null,null,null,null))],null,function(n,e){n(e,1,0," w-56 h1 bg-black br-pill")})}var w=t("NIyR"),g=t("VnD/"),v=t("t9fZ"),T=t("gI3B"),y=t("15JJ"),S=function(){function n(){}return n.prototype.getPoller=function(n,e,t){return Object(T.a)(0,n).pipe(Object(y.a)(e),Object(g.a)(t),Object(v.a)(1))},n}(),C=t("jmvC"),O=function(){function n(n,e,t){this.cookieService=n,this.gsService=e,this.utilityService=t,this.QUESTION_VIEW_TIME=45e5,this.QUESTION_TIMER_TYPE="question_timer",this.ANSWER_VIEW_TIME=45e5,this.ANSWER_TIMER_TYPE="answer_timer",this.TOTAL_ROUNDS=5,this.buddyName="Himani",this.isShowingAnswers=!1,this.setBuddyNameFromCookie(),this.round=0,this.currOptionSelected=1}return n.prototype.ngOnInit=function(){this.typeString="QUESTION",this.isShowingAnswers=!1},n.prototype.ngAfterViewInit=function(){this.startRound()},n.prototype.setAnswerAs=function(n){this.currOptionSelected=n,this.isShowingAnswers||(this.canClickAnswers=!1,this.onNext())},n.prototype.startRound=function(){var n=this,e=this.gsService.getQuestion().pipe(Object(g.a)(function(n){return"success"===n.body.message}),Object(v.a)(1)).subscribe(function(t){e.unsubscribe(),n.isShowingAnswers=!1,n.canClickAnswers=!0,n.round++,n.currQuestion=n.getQuestionFromCookie(!0),n.typeString="QUESTION",n.currTimerType=n.QUESTION_TIMER_TYPE,n.startTimer(n.QUESTION_VIEW_TIME,n.currTimerType)})},n.prototype.getQuestionFromCookie=function(n){var e=JSON.parse(atob(this.cookieService.get("user"))),t=e.user,i=e.game_session.questions.filter(function(t){return n?t.answerer===e.user.username&&!t.isAnswered:t.answerer!==e.user.username&&t.isAnswered})[0];try{i.question.questionText=i.question.questionText.replace("{USER}",n?this.buddyName:t.username)}catch(l){console.log({round:this.round,qORa:n?"question":"answer",question:i}),console.log(l)}return i},n.prototype.onTimerFinished=function(n){n!==this.QUESTION_TIMER_TYPE?this.onAnswerTimerFinished():this.onQuestionTimerFinished()},n.prototype.onNext=function(){this.gameTimerComponent.stopTimer(),this.onTimerFinished(this.currTimerType)},n.prototype.onQuestionTimerFinished=function(){var n=this,e=this.gsService.postMyAnswer(this.currOptionSelected).subscribe(function(t){e.unsubscribe(),n.pollForBuddyAnswer()})},n.prototype.getGsIdFromCookie=function(){return JSON.parse(atob(this.cookieService.get("user"))).game_session._id},n.prototype.onAnswerReceived=function(n){var e=this;this.isShowingAnswers=!0;var t=this.getQuestionFromCookie(!1),i=this.getGsIdFromCookie(),l=this.gsService.setAnswerSeen(i,t._id).pipe(Object(v.a)(1)).subscribe(function(n){l.unsubscribe(),e.typeString=e.buddyName+" says:",e.setAnswerAs(t.answer),e.currQuestion=t,e.currTimerType=e.ANSWER_TIMER_TYPE,e.startTimer(e.ANSWER_VIEW_TIME,e.ANSWER_TIMER_TYPE)})},n.prototype.onAnswerTimerFinished=function(){this.round!==this.TOTAL_ROUNDS?this.startRound():alert("Game over!")},n.prototype.pollForBuddyAnswer=function(){var n=this,e=this.utilityService.getPoller(1e3,function(e){return n.gsService.getBuddyAnswer()},function(e){var t=n.getQuestionFromCookie(!1);return t&&t.isAnswered}).subscribe(function(t){e.unsubscribe(),n.onAnswerReceived(t)})},n.prototype.startTimer=function(n,e){this.gameTimerComponent.setTime(n),this.gameTimerComponent.setTimerType(e),this.gameTimerComponent.startTimer()},n.prototype.setBuddyNameFromCookie=function(){var n=JSON.parse(atob(this.cookieService.get("user")));this.buddyName=n.game_session.users.filter(function(e){return e!==n.user.username})[0]},n.prototype.showCookieValue=function(n){var e=JSON.parse(atob(this.cookieService.get(n)));console.log(e)},n.prototype.ngOnDestroy=function(){},n}(),x=i.nb({encapsulation:0,styles:[[""]],data:{}});function k(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,2,"div",[["class","mv4"]],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,1,"option-button",[],null,[[null,"didClick"]],function(n,e,t){var i=!0;return"didClick"===e&&(i=!1!==n.component.setAnswerAs(n.context.index)&&i),i},p,h)),i.ob(2,49152,null,0,b.a,[],{buttonText:[0,"buttonText"],isDisabled:[1,"isDisabled"]},{didClick:"didClick"})],function(n,e){n(e,2,0,e.context.$implicit.optionText,!e.component.canClickAnswers)},null)}function I(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),i.gb(16777216,null,null,1,null,k)),i.ob(2,278528,null,0,a.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,2,0,e.component.currQuestion.question.options)},null)}function N(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i.Db(2,null,["",""])),(n()(),i.pb(3,0,null,null,2,"div",[["class","mv5"]],null,null,null,null,null)),(n()(),i.pb(4,0,null,null,1,"option-button",[],null,null,null,p,h)),i.ob(5,49152,null,0,b.a,[],{buttonText:[0,"buttonText"],isDisabled:[1,"isDisabled"]},null)],function(n,e){var t=e.component;n(e,5,0,t.currQuestion.question.options[t.currOptionSelected].optionText,!0)},function(n,e){n(e,2,0,e.component.typeString)})}function _(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),i.gb(16777216,null,null,1,null,I)),i.ob(2,16384,null,0,a.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.gb(16777216,null,null,1,null,N)),i.ob(4,16384,null,0,a.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,2,0,!t.isShowingAnswers),n(e,4,0,t.isShowingAnswers)},null)}function F(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,1,"click-button",[],null,[[null,"click"]],function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.onNext()&&i),i},r.b,r.a)),i.ob(1,49152,null,0,c.a,[],{buttonText:[0,"buttonText"]},null)],function(n,e){n(e,1,0,"Next")},null)}function E(n){return i.Fb(0,[i.Bb(402653184,1,{gameTimerComponent:0}),(n()(),i.pb(1,0,null,null,15,"div",[["class","mh3"]],null,null,null,null,null)),(n()(),i.pb(2,0,null,null,1,"h1",[["class","white"]],null,null,null,null,null)),(n()(),i.Db(3,null,["Round: "," of 5"])),(n()(),i.pb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i.Db(5,null,["",""])),(n()(),i.pb(6,0,null,null,2,"div",[["class","mb4"]],null,null,null,null,null)),(n()(),i.pb(7,0,null,null,1,"h3",[["class","f3 white"]],null,null,null,null,null)),(n()(),i.Db(8,null,["",""])),(n()(),i.gb(16777216,null,null,1,null,_)),i.ob(10,16384,null,0,a.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.pb(11,0,null,null,2,"div",[["class","mt4"]],null,null,null,null,null)),(n()(),i.pb(12,0,null,null,1,"timer",[],null,[[null,"onTimerFinished"]],function(n,e,t){var i=!0;return"onTimerFinished"===e&&(i=!1!==n.component.onTimerFinished(t)&&i),i},m,f)),i.ob(13,49152,[[1,4],["gameTimer",4]],0,d.a,[],{timeLeft:[0,"timeLeft"]},{onTimerFinished:"onTimerFinished"}),(n()(),i.pb(14,0,null,null,2,"div",[["class","mt4"]],null,null,null,null,null)),(n()(),i.gb(16777216,null,null,1,null,F)),i.ob(16,16384,null,0,a.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,10,0,t.currQuestion),n(e,13,0,5e3),n(e,16,0,t.isShowingAnswers)},function(n,e){var t=e.component;n(e,3,0,t.round),n(e,5,0,"QUESTION"===t.typeString?t.typeString:""),n(e,8,0,t.currQuestion?t.currQuestion.question.questionText:"")})}var A=t("K9Ia"),D=t("xXU7"),U=t("mrSG"),M=function(n){function e(e,t){var i=n.call(this,e,t)||this;return i.scheduler=e,i.work=t,i}return U.c(e,n),e.prototype.schedule=function(e,t){return void 0===t&&(t=0),t>0?n.prototype.schedule.call(this,e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,t){return t>0||this.closed?n.prototype.execute.call(this,e,t):this._execute(e,t)},e.prototype.requestAsyncId=function(e,t,i){return void 0===i&&(i=0),null!==i&&i>0||null===i&&this.delay>0?n.prototype.requestAsyncId.call(this,e,t,i):e.flush(this)},e}(t("h9Dq").a),G=new(function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return U.c(e,n),e}(t("CS9Q").a))(M),R=t("pugT"),V=t("FFOo"),j=t("G5J1"),P=t("F/XL"),Q=t("6blF"),B=function(){function n(n,e,t){this.kind=n,this.value=e,this.error=t,this.hasValue="N"===n}return n.prototype.observe=function(n){switch(this.kind){case"N":return n.next&&n.next(this.value);case"E":return n.error&&n.error(this.error);case"C":return n.complete&&n.complete()}},n.prototype.do=function(n,e,t){switch(this.kind){case"N":return n&&n(this.value);case"E":return e&&e(this.error);case"C":return t&&t()}},n.prototype.accept=function(n,e,t){return n&&"function"==typeof n.next?this.observe(n):this.do(n,e,t)},n.prototype.toObservable=function(){var n;switch(this.kind){case"N":return Object(P.a)(this.value);case"E":return n=this.error,new Q.a(function(e){return e.error(n)});case"C":return Object(j.b)()}throw new Error("unexpected notification kind value")},n.createNext=function(e){return void 0!==e?new n("N",e):n.undefinedValueNotification},n.createError=function(e){return new n("E",void 0,e)},n.createComplete=function(){return n.completeNotification},n.completeNotification=new n("C"),n.undefinedValueNotification=new n("N",void 0),n}(),L=function(n){function e(e,t,i){void 0===i&&(i=0);var l=n.call(this,e)||this;return l.scheduler=t,l.delay=i,l}return U.c(e,n),e.dispatch=function(n){n.notification.observe(n.destination),this.unsubscribe()},e.prototype.scheduleMessage=function(n){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new W(n,this.destination)))},e.prototype._next=function(n){this.scheduleMessage(B.createNext(n))},e.prototype._error=function(n){this.scheduleMessage(B.createError(n)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(B.createComplete()),this.unsubscribe()},e}(V.a),W=function(){return function(n,e){this.notification=n,this.destination=e}}(),q=t("8g8A"),Y=t("uMaO"),J=function(n){function e(e,t,i){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===t&&(t=Number.POSITIVE_INFINITY);var l=n.call(this)||this;return l.scheduler=i,l._events=[],l._infiniteTimeWindow=!1,l._bufferSize=e<1?1:e,l._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(l._infiniteTimeWindow=!0,l.next=l.nextInfiniteTimeWindow):l.next=l.nextTimeWindow,l}return U.c(e,n),e.prototype.nextInfiniteTimeWindow=function(e){var t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),n.prototype.next.call(this,e)},e.prototype.nextTimeWindow=function(e){this._events.push(new z(this._getNow(),e)),this._trimBufferThenGetEvents(),n.prototype.next.call(this,e)},e.prototype._subscribe=function(n){var e,t=this._infiniteTimeWindow,i=t?this._events:this._trimBufferThenGetEvents(),l=this.scheduler,u=i.length;if(this.closed)throw new q.a;if(this.isStopped||this.hasError?e=R.a.EMPTY:(this.observers.push(n),e=new Y.a(this,n)),l&&n.add(n=new L(n,l)),t)for(var o=0;o<u&&!n.closed;o++)n.next(i[o]);else for(o=0;o<u&&!n.closed;o++)n.next(i[o].value);return this.hasError?n.error(this.thrownError):this.isStopped&&n.complete(),e},e.prototype._getNow=function(){return(this.scheduler||G).now()},e.prototype._trimBufferThenGetEvents=function(){for(var n=this._getNow(),e=this._bufferSize,t=this._windowTime,i=this._events,l=i.length,u=0;u<l&&!(n-i[u].time<t);)u++;return l>e&&(u=Math.max(u,l-e)),u>0&&i.splice(0,u),i},e}(A.a),z=function(){return function(n,e){this.time=n,this.value=e}}(),$=t("xMyE"),X=t("AytR"),K=function(){function n(n){this.httpClient=n,this.hostUrl=X.a.apiUrl}return n.prototype.setUsername=function(n,e){return this.httpClient.post(this.hostUrl+"/game-sessions/"+e+"/add-user",{username:n},{observe:"response",withCredentials:!0})},n}(),Z=function(){function n(n,e,t,i,l){var u,o,s=this;this.route=n,this.router=e,this.cookieService=t,this.userService=i,this.gsService=l,this.addButtonText="Join",this.copyButtonText="Copy URL",this.sCurrUser$=new A.a,this.sCurrGameSession$=new A.a,this.countdownStarted=!1,this.isAddUserDisabled=!1,this.isCopyButtonDisabled=!1,this.routeSubscription=this.route.params.pipe(Object(v.a)(1),Object(y.a)(function(n){return s.gsService.makeSession(n.gameSessionName)})).subscribe(function(n){s.updateFromCookieSession(),s.sCurrGameSession.isGameSessionFree||s.router.navigate(["in-progress"],{relativeTo:s.route})}),this.pollSubscription=Object(D.a)(1e3).pipe((void 0===u&&(u=Number.POSITIVE_INFINITY),void 0===o&&(o=Number.POSITIVE_INFINITY),function(n){return n.lift(function(n,e,t){var i,l,u=0,o=!1,s=!1;return function(t){u++,i&&!o||(o=!1,i=new J(n,e,void 0),l=t.subscribe({next:function(n){i.next(n)},error:function(n){o=!0,i.error(n)},complete:function(){s=!0,i.complete()}}));var r=i.subscribe(this);return function(){u--,r.unsubscribe(),l&&0===u&&s&&l.unsubscribe()}}}(u,o))}),Object(y.a)(function(){return s.gsService.getSessionAt(s.sCurrGameSession.name)}),Object($.a)(function(n){return s.updateFromCookieSession()}),Object(g.a)(function(n){return 2===s.sCurrGameSession.users.length}),Object(v.a)(1)).subscribe(function(n){return s.updateFromCookieSession(),s.checkStartCountdown(),n})}return n.prototype.ngOnInit=function(){this.isGameView=!1,this.countdownTimerTimeLeft=3,this.showCountdown=!0},n.prototype.checkStartCountdown=function(){var n=this;if(!this.sCurrGameSession.isGameSessionFree&&!this.countdownStarted){this.showCountdown=!0;var e=this.sCurrGameSession.startCountdownTime+3e3-(new Date).getTime();this.countdownStarted=!0;var t=Object(D.a)(100).subscribe(function(t){n.countdownTimerTimeLeft=e/1e3-t/10}),i=Object(T.a)(e).subscribe(function(e){t.unsubscribe(),i.unsubscribe(),n.isGameView=!0})}},n.prototype.updateFromCookieSession=function(){var n=JSON.parse(atob(this.cookieService.get("user")));this.sCurrUser=n.user,this.sCurrGameSession=n.game_session,this.sCurrUser$.next(this.sCurrUser),this.sCurrGameSession$.next(this.sCurrGameSession)},n.prototype.setUsername=function(n){var e=this;n&&""!==n&&"about"!==n&&(this.isAddUserDisabled=!0,this.addButtonText="Added!",this.userService.setUsername(n,this.sCurrGameSession.name).subscribe(function(n){e.updateFromCookieSession()}))},n.prototype.copyUrlToClipboard=function(){var n=document.createElement("textarea");n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0",n.value=X.a.domain+this.router.url,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.copyButtonText="Copied!",this.isCopyButtonDisabled=!0},n.prototype.showCookieValue=function(n){var e=JSON.parse(atob(this.cookieService.get(n)));console.log(e)},n.prototype.ngOnDestroy=function(){this.routeSubscription.unsubscribe(),this.pollSubscription.unsubscribe()},n}(),H=t("ZYCi"),nn=i.nb({encapsulation:0,styles:[["body[_ngcontent-%COMP%]{font-family:Nunito,sans-serif}[_nghost-%COMP%]{background-color:#009688;display:inline-block;width:100%;height:72rem}"]],data:{}});function en(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,1,"div",[["class","mb3 white f2 tc"]],null,null,null,null,null)),(n()(),i.Db(1,null,[" "," "]))],null,function(n,e){n(e,1,0,e.context.$implicit)})}function tn(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,1,"h1",[["class","tc f1 white"]],null,null,null,null,null)),(n()(),i.Db(1,null,["",""]))],null,function(n,e){var t=e.component;n(e,1,0,t.countdownTimerTimeLeft<=.5?"GO!":t.countdownTimerTimeLeft.toFixed(1))})}function ln(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,15,"div",[],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,8,"section",[["class","w-70 center pt6 pb2"]],null,null,null,null,null)),(n()(),i.pb(2,0,null,null,1,"textfield",[["class","w-100"]],null,[[null,"textValueChange"]],function(n,e,t){var i=!0;return"textValueChange"===e&&(i=!1!==(n.component.usernameStr=t)&&i),i},o.b,o.a)),i.ob(3,49152,null,0,s.a,[],{placeholderText:[0,"placeholderText"],textValue:[1,"textValue"],isDisabled:[2,"isDisabled"],fontSize:[3,"fontSize"]},{textValueChange:"textValueChange"}),(n()(),i.pb(4,0,null,null,2,"div",[["class","mv4"]],null,null,null,null,null)),(n()(),i.pb(5,0,null,null,1,"click-button",[],null,[[null,"didClick"]],function(n,e,t){var i=!0,l=n.component;return"didClick"===e&&(i=!1!==l.setUsername(l.usernameStr)&&i),i},r.b,r.a)),i.ob(6,49152,null,0,c.a,[],{buttonText:[0,"buttonText"],isDisabled:[1,"isDisabled"]},{didClick:"didClick"}),(n()(),i.pb(7,0,null,null,2,"div",[["class","mv3"]],null,null,null,null,null)),(n()(),i.pb(8,0,null,null,1,"click-button",[],null,[[null,"didClick"]],function(n,e,t){var i=!0;return"didClick"===e&&(i=!1!==n.component.copyUrlToClipboard()&&i),i},r.b,r.a)),i.ob(9,49152,null,0,c.a,[],{buttonText:[0,"buttonText"],isDisabled:[1,"isDisabled"]},{didClick:"didClick"}),(n()(),i.pb(10,0,null,null,3,"section",[["class","mv4"]],null,null,null,null,null)),(n()(),i.gb(16777216,null,null,2,null,en)),i.ob(12,278528,null,0,a.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),i.yb(131072,a.b,[i.h]),(n()(),i.gb(16777216,null,null,1,null,tn)),i.ob(15,16384,null,0,a.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(n,e){var t,l=e.component;n(e,3,0,"your name",l.usernameStr,l.isAddUserDisabled,"f3"),n(e,6,0,l.addButtonText,l.isAddUserDisabled),n(e,9,0,l.copyButtonText,l.isCopyButtonDisabled),n(e,12,0,null==(t=i.Eb(e,12,0,i.xb(e,13).transform(l.sCurrGameSession$)))?null:t.users),n(e,15,0,l.showCountdown)},null)}function un(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,1,"in-game",[],null,null,null,E,x)),i.ob(2,4440064,null,0,O,[C.a,w.a,S],null,null)],function(n,e){n(e,2,0)},null)}function on(n){return i.Fb(0,[(n()(),i.gb(16777216,null,null,1,null,ln)),i.ob(1,16384,null,0,a.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(n()(),i.gb(16777216,null,null,1,null,un)),i.ob(3,16384,null,0,a.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,1,0,!t.isGameView),n(e,3,0,t.isGameView)},null)}function sn(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,1,"game-session",[],null,null,null,on,nn)),i.ob(1,245760,null,0,Z,[H.a,H.k,C.a,K,w.a],null,null)],function(n,e){n(e,1,0)},null)}var rn=i.lb("game-session",Z,sn,{},{},[]),cn=function(){return function(){}}(),an=i.nb({encapsulation:0,styles:[[""]],data:{}});function bn(n){return i.Fb(0,[(n()(),i.Db(-1,null,["Game is currently in progress. :)\n"]))],null,null)}function hn(n){return i.Fb(0,[(n()(),i.pb(0,0,null,null,1,"in-progress",[],null,null,null,bn,an)),i.ob(1,49152,null,0,cn,[],null,null)],null,null)}var pn=i.lb("in-progress",cn,hn,{},{},[]),dn=t("gIcY"),fn=t("t/Na"),mn=t("0Faz");t.d(e,"GameSessionModuleNgFactory",function(){return wn});var wn=i.mb(l,[],function(n){return i.vb([i.wb(512,i.j,i.bb,[[8,[u.a,rn,pn]],[3,i.j],i.x]),i.wb(4608,a.m,a.l,[i.u,[2,a.u]]),i.wb(4608,dn.i,dn.i,[]),i.wb(4608,fn.h,fn.n,[a.d,i.B,fn.l]),i.wb(4608,fn.o,fn.o,[fn.h,fn.m]),i.wb(5120,fn.a,function(n){return[n]},[fn.o]),i.wb(4608,fn.k,fn.k,[]),i.wb(6144,fn.i,null,[fn.k]),i.wb(4608,fn.g,fn.g,[fn.i]),i.wb(6144,fn.b,null,[fn.g]),i.wb(4608,fn.f,fn.j,[fn.b,i.q]),i.wb(4608,fn.c,fn.c,[fn.f]),i.wb(4608,K,K,[fn.c]),i.wb(4608,S,S,[]),i.wb(1073742336,a.c,a.c,[]),i.wb(1073742336,dn.h,dn.h,[]),i.wb(1073742336,dn.c,dn.c,[]),i.wb(1073742336,H.l,H.l,[[2,H.r],[2,H.k]]),i.wb(1073742336,fn.e,fn.e,[]),i.wb(1073742336,fn.d,fn.d,[]),i.wb(1073742336,mn.a,mn.a,[]),i.wb(1073742336,l,l,[]),i.wb(256,fn.l,"XSRF-TOKEN",[]),i.wb(256,fn.m,"X-XSRF-TOKEN",[]),i.wb(1024,H.i,function(){return[[{path:"",component:Z},{path:"in-progress",component:cn}]]},[])])})}}]);