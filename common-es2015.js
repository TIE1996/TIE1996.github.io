(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["common"], {

        /***/
        "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
        /*!**************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
          \**************************************************************************/
        /*! exports provided: a, d */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
            const attachComponent = async(delegate, container, component, cssClasses, componentProps) => {
                if (delegate) {
                    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
                }
                if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                    throw new Error('framework delegate is missing');
                }
                const el = (typeof component === 'string') ?
                    container.ownerDocument && container.ownerDocument.createElement(component) :
                    component;
                if (cssClasses) {
                    cssClasses.forEach(c => el.classList.add(c));
                }
                if (componentProps) {
                    Object.assign(el, componentProps);
                }
                container.appendChild(el);
                if (el.componentOnReady) {
                    await el.componentOnReady();
                }
                return el;
            };
            const detachComponent = (delegate, element) => {
                if (element) {
                    if (delegate) {
                        const container = element.parentElement;
                        return delegate.removeViewFromDom(container, element);
                    }
                    element.remove();
                }
                return Promise.resolve();
            };




            /***/
        }),

        /***/
        "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
        /*!**************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
          \**************************************************************/
        /*! exports provided: a, b, c, d, h */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function() { return hapticImpact; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
            const HapticEngine = {
                getEngine() {
                    const win = window;
                    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
                },
                available() {
                    return !!this.getEngine();
                },
                isCordova() {
                    return !!window.TapticEngine;
                },
                isCapacitor() {
                    const win = window;
                    return !!win.Capacitor;
                },
                impact(options) {
                    const engine = this.getEngine();
                    if (!engine) {
                        return;
                    }
                    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
                    engine.impact({ style });
                },
                notification(options) {
                    const engine = this.getEngine();
                    if (!engine) {
                        return;
                    }
                    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
                    engine.notification({ style });
                },
                selection() {
                    this.impact({ style: 'light' });
                },
                selectionStart() {
                    const engine = this.getEngine();
                    if (!engine) {
                        return;
                    }
                    if (this.isCapacitor()) {
                        engine.selectionStart();
                    } else {
                        engine.gestureSelectionStart();
                    }
                },
                selectionChanged() {
                    const engine = this.getEngine();
                    if (!engine) {
                        return;
                    }
                    if (this.isCapacitor()) {
                        engine.selectionChanged();
                    } else {
                        engine.gestureSelectionChanged();
                    }
                },
                selectionEnd() {
                    const engine = this.getEngine();
                    if (!engine) {
                        return;
                    }
                    if (this.isCapacitor()) {
                        engine.selectionChanged();
                    } else {
                        engine.gestureSelectionChanged();
                    }
                }
            };
            /**
             * Trigger a selection changed haptic event. Good for one-time events
             * (not for gestures)
             */
            const hapticSelection = () => {
                HapticEngine.selection();
            };
            /**
             * Tell the haptic engine that a gesture for a selection change is starting.
             */
            const hapticSelectionStart = () => {
                HapticEngine.selectionStart();
            };
            /**
             * Tell the haptic engine that a selection changed during a gesture.
             */
            const hapticSelectionChanged = () => {
                HapticEngine.selectionChanged();
            };
            /**
             * Tell the haptic engine we are done with a gesture. This needs to be
             * called lest resources are not properly recycled.
             */
            const hapticSelectionEnd = () => {
                HapticEngine.selectionEnd();
            };
            /**
             * Use this to indicate success/failure/warning to the user.
             * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
             */
            const hapticImpact = (options) => {
                HapticEngine.impact(options);
            };




            /***/
        }),

        /***/
        "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
        /*!***********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
          \***********************************************************************/
        /*! exports provided: S */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
            const spinners = {
                'bubbles': {
                    dur: 1000,
                    circles: 9,
                    fn: (dur, index, total) => {
                        const animationDelay = `${(dur * index / total) - dur}ms`;
                        const angle = 2 * Math.PI * index / total;
                        return {
                            r: 5,
                            style: {
                                'top': `${9 * Math.sin(angle)}px`,
                                'left': `${9 * Math.cos(angle)}px`,
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'circles': {
                    dur: 1000,
                    circles: 8,
                    fn: (dur, index, total) => {
                        const step = index / total;
                        const animationDelay = `${(dur * step) - dur}ms`;
                        const angle = 2 * Math.PI * step;
                        return {
                            r: 5,
                            style: {
                                'top': `${9 * Math.sin(angle)}px`,
                                'left': `${9 * Math.cos(angle)}px`,
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'circular': {
                    dur: 1400,
                    elmDuration: true,
                    circles: 1,
                    fn: () => {
                        return {
                            r: 20,
                            cx: 48,
                            cy: 48,
                            fill: 'none',
                            viewBox: '24 24 48 48',
                            transform: 'translate(0,0)',
                            style: {}
                        };
                    }
                },
                'crescent': {
                    dur: 750,
                    circles: 1,
                    fn: () => {
                        return {
                            r: 26,
                            style: {}
                        };
                    }
                },
                'dots': {
                    dur: 750,
                    circles: 3,
                    fn: (_, index) => {
                        const animationDelay = -(110 * index) + 'ms';
                        return {
                            r: 6,
                            style: {
                                'left': `${9 - (9 * index)}px`,
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'lines': {
                    dur: 1000,
                    lines: 12,
                    fn: (dur, index, total) => {
                        const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
                        const animationDelay = `${(dur * index / total) - dur}ms`;
                        return {
                            y1: 17,
                            y2: 29,
                            style: {
                                'transform': transform,
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                },
                'lines-small': {
                    dur: 1000,
                    lines: 12,
                    fn: (dur, index, total) => {
                        const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
                        const animationDelay = `${(dur * index / total) - dur}ms`;
                        return {
                            y1: 12,
                            y2: 20,
                            style: {
                                'transform': transform,
                                'animation-delay': animationDelay,
                            }
                        };
                    }
                }
            };
            const SPINNERS = spinners;




            /***/
        }),

        /***/
        "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
        /*!*************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
          \*************************************************************/
        /*! exports provided: c, g, h, o */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
            const hostContext = (selector, el) => {
                return el.closest(selector) !== null;
            };
            /**
             * Create the mode and color classes for the component based on the classes passed in
             */
            const createColorClasses = (color) => {
                return (typeof color === 'string' && color.length > 0) ? {
                    'ion-color': true,
                    [`ion-color-${color}`]: true
                } : undefined;
            };
            const getClassList = (classes) => {
                if (classes !== undefined) {
                    const array = Array.isArray(classes) ? classes : classes.split(' ');
                    return array
                        .filter(c => c != null)
                        .map(c => c.trim())
                        .filter(c => c !== '');
                }
                return [];
            };
            const getClassMap = (classes) => {
                const map = {};
                getClassList(classes).forEach(c => map[c] = true);
                return map;
            };
            const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
            const openURL = async(url, ev, direction) => {
                if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
                    const router = document.querySelector('ion-router');
                    if (router) {
                        if (ev != null) {
                            ev.preventDefault();
                        }
                        return router.push(url, direction);
                    }
                }
                return false;
            };




            /***/
        }),

        /***/
        "./src/app/data.service.ts":
        /*!*********************************!*\
          !*** ./src/app/data.service.ts ***!
          \*********************************/
        /*! exports provided: DataService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
            /* harmony import */
            var _themen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./themen */ "./src/app/themen.ts");
            /* harmony import */
            var _topic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./topic */ "./src/app/topic.ts");




            let DataService = class DataService {
                constructor() {
                    this.solutions = new _topic__WEBPACK_IMPORTED_MODULE_3__["Solutions"]();
                    _themen__WEBPACK_IMPORTED_MODULE_2__["Themen"].themen.forEach((element) => {
                        // initialize Array for each topic
                        let solution = {
                            solution: new Array(element.questions.length),
                            correct: new Array(element.questions.length),
                            answerStatus: new Array(element.questions.length),
                            totalCorrect: 0
                        };
                        for (let i = 0; i < solution.answerStatus.length; i++) {
                            solution.answerStatus[i] = new Array(6).fill(0);
                        }
                        this.solutions.solutions.set(element.titel, solution);
                    });
                }
                markAsCorrect(topic, index, solution) {
                    this.solutions.solutions.get(topic).correct[index] = true;
                    this.solutions.solutions.get(topic).solution[index] = solution;
                }
                getSubmissions() {
                    return this.solutions;
                }
            };
            DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);



            /***/
        }),

        /***/
        "./src/app/themen.ts":
        /*!***************************!*\
          !*** ./src/app/themen.ts ***!
          \***************************/
        /*! exports provided: Themen */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "Themen", function() { return Themen; });
            const Themen = {
                "themen": [{
                        "titel": "Reihenschaltung Grundlagen",
                        "questions": [{
                                "img": "../assets/reihenschaltung.jpg",
                                "type": "normal",
                                "question": "In einer Reihenschaltung sind die Ströme in allen Widerständen ...",
                                "answer": [
                                    "gleich",
                                    "derselbe"
                                ]
                            },
                            {
                                "type": "normal",
                                "question": "Der Gesamtwiderstand ist die ... aller Widerstände",
                                "answer": [
                                    "summe"
                                ]
                            },
                            {
                                "type": "normal",
                                "question": "Bei einer Reihenschaltung sind die Teilspannung proportional zum ...?",
                                "answer": [
                                    "widerstand"
                                ]
                            },
                            {
                                "type": "multiple_choice",
                                "question": "Die Summe der Teilspannungen an den Widerständen entspricht der Gesamtspannung?",
                                "possibilities": [
                                    "Ja",
                                    "Nein"
                                ],
                                "answer": [
                                    "Ja"
                                ]
                            },
                            {
                                "type": "multiple_choice",
                                "question": "Welche der folgenden Formeln treffen bei einer Reihenschaltung zu?",
                                "possibilities": [
                                    "U_ges = U_1 = U_2",
                                    "R_ges = R_1 = R_2",
                                    "I_ges = I_1 = I_2",
                                    "U_ges = U_1 + U_2",
                                    "I_ges = U_ges / R_ges",
                                    "I_1 = U_ges / R_ges"
                                ],
                                "answer": [
                                    "I_1 = U_ges / R_ges",
                                    "I_ges = U_ges / R_ges",
                                    "I_ges = I_1 = I_2",
                                    "U_ges = U_1 + U_2"
                                ]
                            },
                        ]
                    },
                    {
                        "titel": "Einfache Rechnungen",
                        "questions": [{
                                "type": "multiple_choice",
                                "question": "Zwei in Reihe geschaltene Widerstände mit 10 Ohm entsprechen demnach einem Widerstand von ... Ohm?",
                                "possibilities": [
                                    "10 Ohm",
                                    "20 Ohm",
                                    "30 Ohm",
                                    "40 Ohm"
                                ],
                                "answer": [
                                    "20 Ohm"
                                ]
                            },
                            {
                                "type": "number",
                                "question": "Der Gesamtstrom beträgt 5 A wie groß ist dann die Spannung (in Volt) an einem Widerstand mit 5 Ohm?",
                                "answer": 25,
                                "tolerance": 0.05
                            },
                        ]
                    }
                ],
            };


            /***/
        }),

        /***/
        "./src/app/topic.ts":
        /*!**************************!*\
          !*** ./src/app/topic.ts ***!
          \**************************/
        /*! exports provided: Solutions */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "Solutions", function() { return Solutions; });
            class Solutions {
                constructor() {
                    this.solutions = new Map();
                }
            }


            /***/
        })

    }
]);
//# sourceMappingURL=common-es2015.js.map