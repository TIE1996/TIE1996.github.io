(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["questions-questions-module"], {

        /***/
        "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/questions.page.html":
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions/questions.page.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"goBack()\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            {{thema.titel}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- Overlay for timeout purpose-->\n<div visible=\"true\" style=\"position:fixed; visibility:hidden; height: 100vh; width: 100vw; background-color: grey; z-index: 1000; opacity: 0.9;\" id=\"overlay\">\n    <div style=\"height: 100%; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;\">\n        <ion-spinner name=\"lines\" style=\"height: 100%;\n        max-width: 150px;\n        max-height: 150px;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\"></ion-spinner>\n        <p stlye=\"font-size:30px\">\n            Timeout!\n        </p>\n    </div>\n</div>\n\n<ion-content [fullscreen]=\"true\">\n    <div id=\"container\" style=\"transform: unset; top: unset; height: 100%\">\n        <ion-slides (ionSlideDidChange)=\"checkLock()\" pager=\"true\" [options]=\"slideOpts\" style=\"height: 100%;\">\n            <ng-container *ngFor=\"let question of thema.questions, let i = index\">\n                <ion-slide style=\"display: block;height: 100%;\">\n                    <ng-container *ngIf=\"question.img != undefined\">\n                        <img [src]=\"question.img\" />\n                    </ng-container>\n                    <p>\n                        {{question.question}}\n                    </p>\n                    <ng-container *ngIf=\"question.type === 'normal'\">\n                        <ion-input [(ngModel)]=\"solutions.solutions.get(topic).solution[i]\" placeholder=\"Enter answer\"></ion-input>\n                        <ion-button expand=\"block\" [disabled]=\"solutions.solutions.get(topic).correct[i]\" (click)=\"checkAnswer(i)\">Submit</ion-button>\n\n                    </ng-container>\n                    <ng-container *ngIf=\"question.type === 'multiple_choice'\">\n                        <ng-container *ngFor=\"let possibility of question.possibilities, let k = index\">\n                            <ion-button expand=\"full\" shape=\"round\" [color]=\"(solutions.solutions.get(topic).answerStatus[i][k] === 0) ? 'primary' : ((solutions.solutions.get(topic).answerStatus[i][k] === 1) ? 'danger' : 'success')\" (click)=\"checkMultAnswer(possibility, i, k)\" [disabled]=\"solutions.solutions.get(topic).answerStatus[i][k] !== 0\">{{possibility}}</ion-button>\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"question.type === 'number'\">\n                        <ion-input [(ngModel)]=\"solutions.solutions.get(topic).solution[i]\" type=\"number\" placeholder=\"Enter answer\"></ion-input>\n                        <ion-button expand=\"block\" [disabled]=\"solutions.solutions.get(topic).correct[i]\" (click)=\"checkNumberAnswer(i)\">Submit</ion-button>\n                    </ng-container>\n                    <ng-container *ngIf=\"solutions.solutions.get(topic).correct[i]\">\n                        <ion-icon name=\"checkmark-circle-outline\" style=\"color: limegreen; max-width: 100px; max-height: 100px; height: 50vw; width: 50vw;\"></ion-icon>\n                    </ng-container>\n                </ion-slide>\n            </ng-container>\n        </ion-slides>\n    </div>\n</ion-content>");

            /***/
        }),

        /***/
        "./src/app/questions/questions-routing.module.ts":
        /*!*******************************************************!*\
          !*** ./src/app/questions/questions-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: QuestionsPageRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "QuestionsPageRoutingModule", function() { return QuestionsPageRoutingModule; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
            /* harmony import */
            var _questions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./questions.page */ "./src/app/questions/questions.page.ts");




            const routes = [{
                path: '',
                component: _questions_page__WEBPACK_IMPORTED_MODULE_3__["QuestionsPage"]
            }];
            let QuestionsPageRoutingModule = class QuestionsPageRoutingModule {};
            QuestionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], QuestionsPageRoutingModule);



            /***/
        }),

        /***/
        "./src/app/questions/questions.module.ts":
        /*!***********************************************!*\
          !*** ./src/app/questions/questions.module.ts ***!
          \***********************************************/
        /*! exports provided: QuestionsPageModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
            /* harmony import */
            var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
            /* harmony import */
            var _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./questions-routing.module */ "./src/app/questions/questions-routing.module.ts");
            /* harmony import */
            var _questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./questions.page */ "./src/app/questions/questions.page.ts");







            let QuestionsPageModule = class QuestionsPageModule {};
            QuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _questions_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionsPageRoutingModule"]
                    ],
                    declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_6__["QuestionsPage"]]
                })
            ], QuestionsPageModule);



            /***/
        }),

        /***/
        "./src/app/questions/questions.page.scss":
        /*!***********************************************!*\
          !*** ./src/app/questions/questions.page.scss ***!
          \***********************************************/
        /*! exports provided: default */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */
            __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMucGFnZS5zY3NzIn0= */");

            /***/
        }),

        /***/
        "./src/app/questions/questions.page.ts":
        /*!*********************************************!*\
          !*** ./src/app/questions/questions.page.ts ***!
          \*********************************************/
        /*! exports provided: QuestionsPage */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "QuestionsPage", function() { return QuestionsPage; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
            /* harmony import */
            var _themen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../themen */ "./src/app/themen.ts");
            /* harmony import */
            var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../data.service */ "./src/app/data.service.ts");
            /* harmony import */
            var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







            let QuestionsPage = class QuestionsPage {
                constructor(route, dataservice, toastController, router) {
                    this.route = route;
                    this.dataservice = dataservice;
                    this.toastController = toastController;
                    this.router = router;
                    //Nachrichten wenn die Aufgabe korrekt ist
                    this.positiveMessages = [
                        "Super",
                        "Klasse",
                        "Wow!"
                    ];
                    //Nachrichten bei falscher Eingabe
                    this.negativeMessages = [
                        "Mensche Kerle",
                        "Das geht doch besser",
                        "Streng dich mal an!"
                    ];
                    //Nachrichten falls noch nicht alle korrekten Antworten bei Multiple Choice gewählt wurden
                    this.continueMessage = [
                        "Das war es noch nicht ganz",
                        "Fast alles",
                        "Weitermachen!",
                        "Noch nicht ganz"
                    ];
                    this.slideOpts = {
                        initialSlide: 0,
                        speed: 400,
                        allowSlideNext: false
                    };
                    this.numberOfConsecutiveErrors = 0;
                    //timeout nach 2 fehlern am Stück
                    this.numberOfMaximumErrors = 3;
                    //timeout 5 sekunden
                    this.timeoutDuration = 5000;
                }
                getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }
                ngOnInit() {
                    this.solutions = this.dataservice.getSubmissions();
                    this.route.queryParams.subscribe(params => {
                        this.topic = params['topic'];
                        console.log(this.topic);
                        _themen__WEBPACK_IMPORTED_MODULE_3__["Themen"].themen.forEach(element => {
                            if (element.titel === this.topic) {
                                this.thema = element;
                                this.slideOpts.initialSlide = this.solutions.solutions.get(this.topic).totalCorrect;
                            }
                        });
                    });
                }
                checkLock() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function*() {
                        console.log("swipe changed");
                        let currentIndex = yield this.slider.getActiveIndex();
                        if (currentIndex === this.solutions.solutions.get(this.topic).totalCorrect) {
                            this.slider.lockSwipeToNext(true);
                        } else {
                            this.slider.lockSwipeToNext(false);
                        }
                    });
                }
                checkAnswer(index) {
                    if (this.thema.questions[index].answer.indexOf(this.solutions.solutions.get(this.topic).solution[index].toLowerCase().trim()) > -1) {
                        this.rightAnswer(index);
                    } else {
                        this.wrongAnswer();
                    }
                }
                checkNumberAnswer(index) {
                    let userSolution = Number(this.solutions.solutions.get(this.topic).solution[index].trim());
                    let correctSolution = this.thema.questions[index].answer;
                    let tolerance = this.thema.questions[index].tolerance;
                    if (userSolution >= correctSolution - correctSolution * tolerance && userSolution <= correctSolution + correctSolution * tolerance) {
                        this.rightAnswer(index);
                    } else {
                        this.wrongAnswer();
                    }
                }
                checkMultAnswer(possibility, index, answerIndex) {
                    let i = this.thema.questions[index].answer.indexOf(possibility);
                    let element;
                    if (i > -1) {
                        this.solutions.solutions.get(this.topic).answerStatus[index][answerIndex] = 2;
                        this.thema.questions[index].answer.splice(i, 1);
                        if (this.thema.questions[index].answer.length === 0) {
                            this.rightAnswer(index);
                        } else {
                            this.presentToast("continue");
                        }
                    } else {
                        this.solutions.solutions.get(this.topic).answerStatus[index][answerIndex] = 1;
                        this.wrongAnswer();
                    }
                }
                rightAnswer(index) {
                    this.presentToast("positive");
                    this.slider.lockSwipeToNext(false);
                    this.solutions.solutions.get(this.topic).correct[index] = true;
                    this.solutions.solutions.get(this.topic).totalCorrect++;
                    this.numberOfConsecutiveErrors = 0;
                }
                wrongAnswer() {
                    this.presentToast("negative");
                    this.numberOfConsecutiveErrors++;
                    if (this.numberOfConsecutiveErrors >= this.numberOfMaximumErrors) {
                        this.showOverlay();
                    }
                }
                showOverlay() {
                    document.getElementById("overlay").style.visibility = "visible";
                    setTimeout(() => {
                        document.getElementById("overlay").style.visibility = "hidden";
                    }, this.timeoutDuration);
                }
                goBack() {
                    this.router.navigateByUrl("/home");
                }
                presentToast(type) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function*() {
                        let message = "";
                        if (type === "positive") {
                            let index = this.getRandomInt(this.positiveMessages.length);
                            message = this.positiveMessages[index];
                        } else if (type == "negative") {
                            let index = this.getRandomInt(this.negativeMessages.length);
                            message = this.negativeMessages[index];
                        } else {
                            let index = this.getRandomInt(this.continueMessage.length);
                            message = this.continueMessage[index];
                        }
                        const toast = yield this.toastController.create({
                            message: message,
                            duration: 2000
                        });
                        toast.present();
                    });
                }
            };
            QuestionsPage.ctorParameters = () => [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ];
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
            ], QuestionsPage.prototype, "slider", void 0);
            QuestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-questions',
                    template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__( /*! raw-loader!./questions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/questions.page.html")).default,
                    styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__( /*! ./questions.page.scss */ "./src/app/questions/questions.page.scss")).default]
                })
            ], QuestionsPage);



            /***/
        })

    }
]);
//# sourceMappingURL=questions-questions-module-es2015.js.map