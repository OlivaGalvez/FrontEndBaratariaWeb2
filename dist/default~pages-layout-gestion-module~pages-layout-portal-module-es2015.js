(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-layout-gestion-module~pages-layout-portal-module"],{

/***/ "+BVi":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-http */ "NtJg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthService {
    constructor(authHttpService, router) {
        this.authHttpService = authHttpService;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.authLocalStorageToken = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion}-${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USERDATA_KEY}`;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        const subscr = this.getUserByToken().subscribe();
        this.unsubscribe.push(subscr);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    // public methods
    login(email, password) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((auth) => {
            const result = this.setAuthFromLocalStorage(auth);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.getUserByToken()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    logout() {
        localStorage.removeItem(this.authLocalStorageToken);
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    getUserByToken() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.authToken) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        this.isLoadingSubject.next(true);
        return this.authHttpService.getUserByToken(auth.authToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            if (user) {
                this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user);
            }
            else {
                this.logout();
            }
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    // need create new user then login
    registration(user) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.createUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.isLoadingSubject.next(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.login(user.email, user.password)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    forgotPassword(email) {
        this.isLoadingSubject.next(true);
        return this.authHttpService
            .forgotPassword(email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    // private methods
    setAuthFromLocalStorage(auth) {
        // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        if (auth && auth.authToken) {
            localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
            return true;
        }
        return false;
    }
    getAuthFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "+ukg":
/*!********************************************!*\
  !*** ./src/assets/js/layout/base/aside.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* eslint-disable */



var KTLayoutAside = function () {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;
    // Private functions
    // Initialize
    var _init = function () {
        var offcanvasClass = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_element, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside';
        // Initialize mobile aside offcanvas
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            baseClass: offcanvasClass,
            overlay: true,
            closeBy: 'kt_aside_close_btn',
            toggleBy: {
                target: 'kt_aside_mobile_toggle',
                state: 'mobile-toggle-active'
            }
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            _body = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody();
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        getElement: function () {
            return _element;
        },
        getOffcanvas: function () {
            return _offcanvasObject;
        },
        isFixed: function () {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-fixed');
        },
        isMinimized: function () {
            return (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-fixed') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-minimize'));
        },
        isHoverable: function () {
            return (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-fixed') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-minimize-hoverable'));
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutAside;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutAside);
//# sourceMappingURL=aside.js.map

/***/ }),

/***/ "0gEX":
/*!*************************************************!*\
  !*** ./src/assets/js/layout/base/aside-menu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _brand_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand.js */ "oViw");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/menu.js */ "bxSH");
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside.js */ "+ukg");
/* eslint-disable */





var KTLayoutAsideMenu = function () {
    // Private properties
    var _body;
    var _element;
    var _menuObject;
    // Initialize
    var _init = function () {
        var menuDesktopMode = (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(_element, 'data-menu-dropdown') === '1' ? 'dropdown' : 'accordion');
        var scroll;
        if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(_element, 'data-menu-scroll') === '1') {
            scroll = {
                rememberPosition: true,
                height: function () {
                    var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getViewPort().height);
                    if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg')) {
                        height = height - _brand_js__WEBPACK_IMPORTED_MODULE_1__["default"].getHeight();
                    }
                    height = height - (parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'marginBottom')) + parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'marginTop')));
                    return height;
                }
            };
        }
        _menuObject = new _components_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"](_element, {
            // Vertical scroll
            scroll: scroll,
            // Submenu setup
            submenu: {
                desktop: menuDesktopMode,
                tablet: 'accordion',
                mobile: 'accordion' // menu set to accordion in mobile mode
            },
            // Accordion setup
            accordion: {
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        });
    };
    var _initHover = function () {
        // Handle Minimized Aside Hover
        if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-fixed') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-minimize-hoverable')) {
            var insideTm;
            var outsideTm;
            // Handle Aside Hover Mode
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(_element, 'mouseenter', function (e) {
                e.preventDefault();
                if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg') === false) {
                    return;
                }
                if (outsideTm) {
                    clearTimeout(outsideTm);
                    outsideTm = null;
                }
                if (insideTm) {
                    clearTimeout(insideTm);
                    insideTm = null;
                }
                insideTm = setTimeout(function () {
                    if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-minimize') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg')) {
                        // Hover class
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(_body, 'aside-minimize-hover');
                        KTLayoutAsideMenu.getMenu().scrollUpdate();
                        KTLayoutAsideMenu.getMenu().scrollTop();
                    }
                }, 50);
            });
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(_aside_js__WEBPACK_IMPORTED_MODULE_3__["default"].getElement(), 'mouseleave', function (e) {
                e.preventDefault();
                if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg') === false) {
                    return;
                }
                if (insideTm) {
                    clearTimeout(insideTm);
                    insideTm = null;
                }
                if (outsideTm) {
                    clearTimeout(outsideTm);
                    outsideTm = null;
                }
                outsideTm = setTimeout(function () {
                    if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_body, 'aside-minimize-hover') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg')) {
                        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(_body, 'aside-minimize-hover');
                        // Hover class
                        KTLayoutAsideMenu.getMenu().scrollUpdate();
                        KTLayoutAsideMenu.getMenu().scrollTop();
                    }
                }, 100);
            });
        }
    };
    // Public methods
    return {
        init: function (id) {
            _body = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody();
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize menu
            _init();
            _initHover();
        },
        getElement: function () {
            return _element;
        },
        getMenu: function () {
            return _menuObject;
        },
        pauseDropdownHover: function (time) {
            if (_menuObject) {
                _menuObject.pauseDropdownHover(time);
            }
        },
        closeMobileOffcanvas: function () {
            if (_menuObject && _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isMobileDevice()) {
                _menuObject.hide();
            }
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutAsideMenu;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutAsideMenu);
//# sourceMappingURL=aside-menu.js.map

/***/ }),

/***/ "1jwE":
/*!******************************************!*\
  !*** ./src/assets/js/components/card.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "rh/z");
/* eslint-disable */


// Component Definition
var KTCard = function (elementId, options) {
    // Main object
    var the = this;
    var init = false;
    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody();
    if (!element) {
        return;
    }
    // Default options
    var defaultOptions = {
        toggleSpeed: 400,
        sticky: {
            releseOnReverse: false,
            offset: 300,
            zIndex: 101
        }
    };
    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////
    var Plugin = {
        /**
         * Construct
         */
        construct: function (options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).has('card')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).get('card');
            }
            else {
                // reset menu
                Plugin.init(options);
                // build menu
                Plugin.build();
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).set('card', the);
            }
            return the;
        },
        /**
         * Init card
         */
        init: function (options) {
            the.element = element;
            the.events = [];
            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].deepExtend({}, defaultOptions, options);
            the.header = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(element, '.card-header');
            the.footer = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(element, '.card-footer');
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(element, '.card-body')) {
                the.body = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(element, '.card-body');
            }
            else if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(element, '.form')) {
                the.body = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(element, '.form');
            }
        },
        /**
         * Build Form Wizard
         */
        build: function () {
            // Remove
            var remove = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(the.header, '[data-card-tool=remove]');
            if (remove) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(remove, 'click', function (e) {
                    e.preventDefault();
                    Plugin.remove();
                });
            }
            // Reload
            var reload = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(the.header, '[data-card-tool=reload]');
            if (reload) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(reload, 'click', function (e) {
                    e.preventDefault();
                    Plugin.reload();
                });
            }
            // Toggle
            var toggle = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(the.header, '[data-card-tool=toggle]');
            if (toggle) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(toggle, 'click', function (e) {
                    e.preventDefault();
                    Plugin.toggle();
                });
            }
        },
        /**
         * Enable stickt mode
         */
        initSticky: function () {
            var lastScrollTop = 0;
            var offset = the.options.sticky.offset;
            if (!the.header) {
                return;
            }
            window.addEventListener('scroll', Plugin.onScrollSticky);
        },
        /**
         * Window scroll handle event for sticky card
         */
        onScrollSticky: function (e) {
            var offset = the.options.sticky.offset;
            if (isNaN(offset))
                return;
            var st = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getScrollTop();
            if (st >= offset && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(body, 'card-sticky-on') === false) {
                Plugin.eventTrigger('stickyOn');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(body, 'card-sticky-on');
                Plugin.updateSticky();
            }
            else if ((st * 1.5) <= offset && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(body, 'card-sticky-on')) {
                // Back scroll mode
                Plugin.eventTrigger('stickyOff');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(body, 'card-sticky-on');
                Plugin.resetSticky();
            }
        },
        updateSticky: function () {
            if (!the.header) {
                return;
            }
            var top;
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(body, 'card-sticky-on')) {
                if (the.options.sticky.position.top instanceof Function) {
                    top = parseInt(the.options.sticky.position.top.call(this, the));
                }
                else {
                    top = parseInt(the.options.sticky.position.top);
                }
                var left;
                if (the.options.sticky.position.left instanceof Function) {
                    left = parseInt(the.options.sticky.position.left.call(this, the));
                }
                else {
                    left = parseInt(the.options.sticky.position.left);
                }
                var right;
                if (the.options.sticky.position.right instanceof Function) {
                    right = parseInt(the.options.sticky.position.right.call(this, the));
                }
                else {
                    right = parseInt(the.options.sticky.position.right);
                }
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'z-index', the.options.sticky.zIndex);
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'top', top + 'px');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'left', left + 'px');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'right', right + 'px');
            }
        },
        resetSticky: function () {
            if (!the.header) {
                return;
            }
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(body, 'card-sticky-on') === false) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'z-index', '');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'top', '');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'left', '');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(the.header, 'right', '');
            }
        },
        /**
         * Remove card
         */
        remove: function () {
            if (Plugin.eventTrigger('beforeRemove') === false) {
                return;
            }
            // Remove tooltips
            var tooltips;
            if (tooltips = document.querySelectorAll('.tooltip.show')) {
                $(tooltips).tooltip('dispose');
            }
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].remove(element);
            Plugin.eventTrigger('afterRemove');
        },
        /**
         * Set content
         */
        setContent: function (html) {
            if (html) {
                the.body.innerHTML = html;
            }
        },
        /**
         * Get body
         */
        getBody: function () {
            return the.body;
        },
        /**
         * Get self
         */
        getSelf: function () {
            return element;
        },
        /**
         * Reload
         */
        reload: function () {
            Plugin.eventTrigger('reload');
        },
        /**
         * Toggle
         */
        toggle: function () {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(element, 'card-collapse') || _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(element, 'card-collapsed')) {
                Plugin.expand();
            }
            else {
                Plugin.collapse();
            }
        },
        /**
         * Collapse
         */
        collapse: function () {
            if (Plugin.eventTrigger('beforeCollapse') === false) {
                return;
            }
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].slideUp(the.body, the.options.toggleSpeed, function () {
                Plugin.eventTrigger('afterCollapse');
            });
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(element, 'card-collapse');
        },
        /**
         * Expand
         */
        expand: function () {
            if (Plugin.eventTrigger('beforeExpand') === false) {
                return;
            }
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].slideDown(the.body, the.options.toggleSpeed, function () {
                Plugin.eventTrigger('afterExpand');
            });
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(element, 'card-collapse');
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(element, 'card-collapsed');
        },
        /**
         * Trigger events
         */
        eventTrigger: function (name) {
            //KTUtil.triggerCustomEvent(name);
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    }
                    else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },
        addEvent: function (name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
            return the;
        }
    };
    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////
    /**
     * Set default options
     */
    the.setDefaults = function (options) {
        defaultOptions = options;
    };
    /**
     * Remove card
     */
    the.remove = function () {
        return Plugin.remove(html);
    };
    /**
     * Init sticky card
     */
    the.initSticky = function () {
        return Plugin.initSticky();
    };
    /**
     * Rerender sticky layout
     */
    the.updateSticky = function () {
        return Plugin.updateSticky();
    };
    /**
     * Reset the sticky
     */
    the.resetSticky = function () {
        return Plugin.resetSticky();
    };
    /**
     * Destroy sticky card
     */
    the.destroySticky = function () {
        Plugin.resetSticky();
        window.removeEventListener('scroll', Plugin.onScrollSticky);
    };
    /**
     * Reload card
     */
    the.reload = function () {
        return Plugin.reload();
    };
    /**
     * Set card content
     */
    the.setContent = function (html) {
        return Plugin.setContent(html);
    };
    /**
     * Toggle card
     */
    the.toggle = function () {
        return Plugin.toggle();
    };
    /**
     * Collapse card
     */
    the.collapse = function () {
        return Plugin.collapse();
    };
    /**
     * Expand card
     */
    the.expand = function () {
        return Plugin.expand();
    };
    /**
     * Get cardbody
     * @returns {jQuery}
     */
    the.getBody = function () {
        return Plugin.getBody();
    };
    /**
     * Get cardbody
     * @returns {jQuery}
     */
    the.getSelf = function () {
        return Plugin.getSelf();
    };
    /**
     * Attach event
     */
    the.on = function (name, handler) {
        return Plugin.addEvent(name, handler);
    };
    /**
     * Attach event that will be fired once
     */
    the.one = function (name, handler) {
        return Plugin.addEvent(name, handler, true);
    };
    // Construct plugin
    Plugin.construct.apply(the, [options]);
    return the;
};
// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTCard;
}
/* harmony default export */ __webpack_exports__["default"] = (KTCard);
//# sourceMappingURL=card.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "27/Y":
/*!*****************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-cart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */



var KTLayoutQuickCartPanel = function () {
    // Private properties
    var _element;
    var _offcanvasObject;
    // Private functions
    var _init = function () {
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_cart_close',
            toggleBy: 'kt_quick_cart_toggle'
        });
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].find(_element, '.offcanvas-content');
        var wrapper = _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].find(_element, '.offcanvas-wrapper');
        var footer = _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].find(_element, '.offcanvas-footer');
        _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].scrollInit(wrapper, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].getViewPort().height);
                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(header, 'marginBottom'));
                }
                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(content, 'marginBottom'));
                }
                if (wrapper) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(wrapper, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(wrapper, 'marginBottom'));
                }
                if (footer) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].actualHeight(footer));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(footer, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(footer, 'marginBottom'));
                }
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].css(_element, 'paddingBottom'));
                height = height - 2;
                return height;
            }
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutQuickCartPanel;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutQuickCartPanel);
//# sourceMappingURL=quick-cart.js.map

/***/ }),

/***/ "2Xn1":
/*!**************************************************!*\
  !*** ./src/assets/js/layout/base/sticky-card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "2x+x");
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/card.js */ "1jwE");
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _subheader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subheader.js */ "Czx3");
/* eslint-disable */





var KTLayoutStickyCard = function () {
    // Private properties
    var _element;
    var _object;
    // Private functions
    var _init = function () {
        var offset = 300;
        if (typeof _header_js__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined') {
            offset = _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHeight();
        }
        _object = new _components_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            sticky: {
                offset: offset,
                zIndex: 90,
                position: {
                    top: function () {
                        var pos = 0;
                        var body = _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].getBody();
                        if (_components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].isBreakpointUp('lg')) {
                            if (typeof _header_js__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined' && _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFixed()) {
                                pos = pos + _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHeight();
                            }
                            if (typeof _subheader_js__WEBPACK_IMPORTED_MODULE_3__["default"] !== 'undefined' && _subheader_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFixed()) {
                                pos = pos + _subheader_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeight();
                            }
                        }
                        else {
                            if (typeof _header_js__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined' && _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFixedForMobile()) {
                                pos = pos + _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHeightForMobile();
                            }
                        }
                        pos = pos - 1; // remove header border width
                        return pos;
                    },
                    left: function (card) {
                        return _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].offset(_element).left;
                    },
                    right: function (card) {
                        var body = _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].getBody();
                        var cardWidth = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].css(_element, 'width'));
                        var bodyWidth = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].css(body, 'width'));
                        var cardOffsetLeft = _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].offset(_element).left;
                        return bodyWidth - cardWidth - cardOffsetLeft;
                    }
                }
            }
        });
        _object.initSticky();
        _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].addResizeHandler(function () {
            _object.updateSticky();
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        update: function () {
            if (_object) {
                _object.updateSticky();
            }
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutStickyCard;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutStickyCard);
//# sourceMappingURL=sticky-card.js.map

/***/ }),

/***/ "2x+x":
/*!*********************************************!*\
  !*** ./src/assets/js/layout/base/header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */


var KTLayoutHeader = function () {
    // Private properties
    var _element;
    var _elementForMobile;
    var _object;
    // Private functions
    // Get Height
    var _getHeight = function () {
        var height = 0;
        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(_element) + 1;
        }
        return height;
    };
    // Get Height
    var _getHeightForMobile = function () {
        var height;
        height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(_elementForMobile);
        return height;
    };
    // Public Methods
    return {
        init: function (id, idForMobile) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            _elementForMobile = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(idForMobile);
            if (!_element) {
                return;
            }
        },
        isFixed: function () {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody(), 'header-fixed');
        },
        isFixedForMobile: function () {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody(), 'header-mobile-fixed');
        },
        getElement: function () {
            return _element;
        },
        getElementForMobile: function () {
            return _elementForMobile;
        },
        getHeader: function () {
            return _object;
        },
        getHeight: function () {
            return _getHeight();
        },
        getHeightForMobile: function () {
            return _getHeightForMobile();
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutHeader;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutHeader);
//# sourceMappingURL=header.js.map

/***/ }),

/***/ "3UD+":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "68Zv":
/*!********************************************!*\
  !*** ./src/assets/js/components/cookie.js ***!
  \********************************************/
/*! exports provided: KTCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTCookie", function() { return KTCookie; });
/* eslint-disable */

// DOCS: https://javascript.info/cookie
// Component Definition
var KTCookie = function () {
    return {
        // returns the cookie with the given name,
        // or undefined if not found
        getCookie: function (name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
        // Please note that a cookie value is encoded,
        // so getCookie uses a built-in decodeURIComponent function to decode it.
        setCookie: function (name, value, options) {
            if (!options) {
                options = {};
            }
            options = Object.assign({}, { path: '/' }, options);
            if (options.expires instanceof Date) {
                options.expires = options.expires.toUTCString();
            }
            var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            for (var optionKey in options) {
                if (!options.hasOwnProperty(optionKey)) {
                    continue;
                }
                updatedCookie += "; " + optionKey;
                var optionValue = options[optionKey];
                if (optionValue !== true) {
                    updatedCookie += "=" + optionValue;
                }
            }
            document.cookie = updatedCookie;
        },
        // To delete a cookie, we can call it with a negative expiration date:
        deleteCookie: function (name) {
            setCookie(name, "", {
                'max-age': -1
            });
        }
    };
}();
// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTCookie;
}
//# sourceMappingURL=cookie.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "73Ks":
/*!**************************************************!*\
  !*** ./src/assets/js/layout/base/header-menu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/menu.js */ "bxSH");
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */




var KTLayoutHeaderMenu = function () {
    // Private properties
    var _menuElement;
    var _menuObject;
    var _offcanvasElement;
    var _offcanvasObject;
    // Private functions
    var _init = function () {
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__["default"](_offcanvasElement, {
            overlay: true,
            baseClass: 'header-menu-wrapper',
            closeBy: 'kt_header_menu_mobile_close_btn',
            toggleBy: {
                target: 'kt_header_mobile_toggle',
                state: 'mobile-toggle-active'
            }
        });
        _menuObject = new _components_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](_menuElement, {
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            accordion: {
                slideSpeed: 200,
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        });
        // Close aside offcanvas panel before page reload On tablet and mobile
        _menuObject.on('linkClick', function (menu) {
            if (_components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].isBreakpointDown('lg')) { // Tablet and mobile mode
                _offcanvasObject.hide(); // Hide offcanvas after general link click
            }
        });
    };
    // Public methods
    return {
        init: function (menuId, offcanvasId) {
            _menuElement = _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].getById(menuId);
            _offcanvasElement = _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].getById(offcanvasId);
            if (!_menuElement) {
                return;
            }
            // Initialize menu
            _init();
        },
        getMenuElement: function () {
            return _menuElement;
        },
        getOffcanvasElement: function () {
            return _offcanvasElement;
        },
        getMenu: function () {
            return _menuObject;
        },
        pauseDropdownHover: function (time) {
            if (_menuObject) {
                _menuObject.pauseDropdownHover(time);
            }
        },
        getOffcanvas: function () {
            return _offcanvasObject;
        },
        closeMobileOffcanvas: function () {
            if (_menuObject && _components_util_js__WEBPACK_IMPORTED_MODULE_2__["KTUtil"].isMobileDevice()) {
                _offcanvasObject.hide();
            }
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutHeaderMenu;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutHeaderMenu);
//# sourceMappingURL=header-menu.js.map

/***/ }),

/***/ "Czx3":
/*!************************************************!*\
  !*** ./src/assets/js/layout/base/subheader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */


var KTLayoutSubheader = function () {
    // Private properties
    var _element;
    // Private functions
    var _getHeight = function () {
        var height = 0;
        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(_element);
        }
        return height;
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
        },
        isFixed: function () {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody(), 'subheader-fixed');
        },
        getElement: function () {
            return _element;
        },
        getHeight: function () {
            return _getHeight();
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutSubheader;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutSubheader);
//# sourceMappingURL=subheader.js.map

/***/ }),

/***/ "IEHs":
/*!***************************************************!*\
  !*** ./src/assets/js/layout/base/aside-toggle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/toggle.js */ "zZCj");
/* harmony import */ var _sticky_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sticky-card.js */ "2Xn1");
/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-menu.js */ "73Ks");
/* harmony import */ var _aside_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside-menu.js */ "0gEX");
/* harmony import */ var _components_cookie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/cookie.js */ "68Zv");
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */







var KTLayoutAsideToggle = function () {
    // Private properties
    var _body;
    var _element;
    var _toggleObject;
    // Initialize
    var _init = function () {
        _toggleObject = new _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__["default"](_element, _body, {
            targetState: 'aside-minimize',
            toggleState: 'active'
        });
        _toggleObject.on('toggle', function (toggle) {
            // Update sticky card
            if (typeof _sticky_card_js__WEBPACK_IMPORTED_MODULE_1__["default"] !== 'undefined') {
                _sticky_card_js__WEBPACK_IMPORTED_MODULE_1__["default"].update();
            }
            // Pause header menu dropdowns
            if (typeof _header_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"] !== 'undefined') {
                _header_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].pauseDropdownHover(800);
            }
            // Pause aside menu dropdowns
            if (typeof _aside_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"] !== 'undefined') {
                _aside_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"].pauseDropdownHover(800);
            }
            // Remember state in cookie
            _components_cookie_js__WEBPACK_IMPORTED_MODULE_4__["KTCookie"].setCookie('kt_aside_toggle_state', toggle.getState());
            // to set default minimized left aside use this cookie value in your
            // server side code and add "kt-primary--minimize aside-minimize" classes to
            // the body tag in order to initialize the minimized left aside mode during page loading.
        });
        _toggleObject.on('beforeToggle', function (toggle) {
            if (_components_util_js__WEBPACK_IMPORTED_MODULE_5__["KTUtil"].hasClass(_body, 'aside-minimize') === false && _components_util_js__WEBPACK_IMPORTED_MODULE_5__["KTUtil"].hasClass(_body, 'aside-minimize-hover')) {
                _components_util_js__WEBPACK_IMPORTED_MODULE_5__["KTUtil"].removeClass(_body, 'aside-minimize-hover');
            }
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_5__["KTUtil"].getById(id);
            _body = _components_util_js__WEBPACK_IMPORTED_MODULE_5__["KTUtil"].getBody();
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        getElement: function () {
            return _element;
        },
        getToggle: function () {
            return _toggleObject;
        },
        onToggle: function (handler) {
            if (typeof _toggleObject.element !== 'undefined') {
                _toggleObject.on('toggle', handler);
            }
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutAsideToggle;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutAsideToggle);
//# sourceMappingURL=aside-toggle.js.map

/***/ }),

/***/ "Kdsb":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js ***!
  \*******************************************************************************************/
/*! exports provided: Geometry, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarComponent, PerfectScrollbarConfig, PerfectScrollbarDirective, PerfectScrollbarModule, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function() { return PERFECT_SCROLLBAR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function() { return PerfectScrollbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function() { return PerfectScrollbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function() { return PerfectScrollbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function() { return PerfectScrollbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! resize-observer-polyfill */ "bdgK");











function PerfectScrollbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
} }
const _c0 = ["*"];
const PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');
class Geometry {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
class PerfectScrollbarConfig {
    constructor(config = {}) {
        this.assign(config);
    }
    assign(config = {}) {
        for (const key in config) {
            this[key] = config[key];
        }
    }
}

let PerfectScrollbarDirective = class PerfectScrollbarDirective {
    constructor(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disabled = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            const config = new PerfectScrollbarConfig(this.defaults);
            config.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(() => {
                this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](this.elementRef.nativeElement, config);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(() => {
                this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_6__["default"](() => {
                    this.update();
                });
                if (this.elementRef.nativeElement.children[0]) {
                    this.ro.observe(this.elementRef.nativeElement.children[0]);
                }
                this.ro.observe(this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    const eventType = eventName.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elementRef.nativeElement, eventType)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy))
                        .subscribe((event) => {
                        this[eventName].emit(event);
                    });
                });
            });
        }
    }
    ngOnDestroy() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(() => {
                if (this.instance) {
                    this.instance.destroy();
                }
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    }
    ps() {
        return this.instance;
    }
    update() {
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(() => {
                if (!this.disabled && this.configDiff) {
                    try {
                        this.zone.runOutsideAngular(() => {
                            if (this.instance) {
                                this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    }
    geometry(prefix = 'scroll') {
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    }
    position(absolute = false) {
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    }
    scrollable(direction = 'any') {
        const element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    }
    scrollTo(x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    }
    scrollToX(x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    }
    scrollToY(y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    }
    scrollToTop(offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }
    scrollToLeft(offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    }
    scrollToRight(offset, speed) {
        const left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    }
    scrollToBottom(offset, speed) {
        const top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    }
    scrollToElement(qs, offset, speed) {
        const element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                const currentPos = this.elementRef.nativeElement['scrollLeft'];
                const position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                const currentPos = this.elementRef.nativeElement['scrollTop'];
                const position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    }
    animateScrolling(target, value, speed) {
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            let newValue = 0;
            let scrollCount = 0;
            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];
            const cosParameter = (oldValue - value) / 2;
            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));
                // Only continue animation if scroll position has not changed
                if (this.elementRef.nativeElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        this.animateScrolling(target, value, 0);
                    }
                    else {
                        this.elementRef.nativeElement[target] = newValue;
                        // On a zoomed out page the resulting offset may differ
                        oldValue = this.elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;
                        this.animation = window.requestAnimationFrame(step);
                    }
                }
            };
            window.requestAnimationFrame(step);
        }
    }
};
PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) { return new (t || PerfectScrollbarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](PERFECT_SCROLLBAR_CONFIG, 8)); };
PerfectScrollbarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: PerfectScrollbarDirective, selectors: [["", "perfectScrollbar", ""]], inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
PerfectScrollbarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [PERFECT_SCROLLBAR_CONFIG,] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], PerfectScrollbarDirective.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('perfectScrollbar')
], PerfectScrollbarDirective.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
PerfectScrollbarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(PERFECT_SCROLLBAR_CONFIG))
], PerfectScrollbarDirective);

let PerfectScrollbarComponent = class PerfectScrollbarComponent {
    constructor(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.stateUpdate
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])((a, b) => (a === b && !this.stateTimeout)))
                .subscribe((state) => {
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                    this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    this.interaction = false;
                    if (state === 'x') {
                        this.indicatorX = false;
                        this.states.left = false;
                        this.states.right = false;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        this.indicatorY = false;
                        this.states.top = false;
                        this.states.bottom = false;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        this.states.left = false;
                        this.states.right = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        this.states.top = false;
                        this.states.bottom = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.indicatorY = true;
                        }
                    }
                    if (this.autoPropagation && typeof window !== 'undefined') {
                        this.stateTimeout = window.setTimeout(() => {
                            this.indicatorX = false;
                            this.indicatorY = false;
                            this.stateTimeout = null;
                            if (this.interaction && (this.states.left || this.states.right)) {
                                this.allowPropagationX = true;
                            }
                            if (this.interaction && (this.states.top || this.states.bottom)) {
                                this.allowPropagationY = true;
                            }
                            this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                this.cdRef.markForCheck();
                this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(() => {
                if (this.directiveRef) {
                    const element = this.directiveRef.elementRef.nativeElement;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'wheel')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollDeltaX = event.deltaX;
                            const scrollDeltaY = event.deltaY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'touchmove')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollPositionX = event.touches[0].clientX;
                            const scrollPositionY = event.touches[0].clientY;
                            const scrollDeltaX = scrollPositionX - this.scrollPositionX;
                            const scrollDeltaY = scrollPositionY - this.scrollPositionY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            this.scrollPositionX = scrollPositionX;
                            this.scrollPositionY = scrollPositionY;
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-scroll-x')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('x')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-scroll-y')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('y')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-x-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('right')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-y-reach-end')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('bottom')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-x-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('left')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-y-reach-start')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('top')))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy))
                        .subscribe((state) => {
                        if (!this.disabled && (this.autoPropagation || this.scrollIndicators)) {
                            this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    if (this.directiveRef) {
                        this.directiveRef[eventName] = this[eventName];
                    }
                });
            }, 0);
        }
    }
    ngOnDestroy() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    }
    ngDoCheck() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                const element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    }
    checkPropagation(event, deltaX, deltaY) {
        this.interaction = true;
        const scrollDirectionX = (deltaX < 0) ? -1 : 1;
        const scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    }
};
PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) { return new (t || PerfectScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"])); };
PerfectScrollbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PerfectScrollbarComponent, selectors: [["perfect-scrollbar"]], viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](PerfectScrollbarDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 4, hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
    } }, inputs: { disabled: "disabled", usePSClass: "usePSClass", autoPropagation: "autoPropagation", scrollIndicators: "scrollIndicators", config: "config" }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]], template: function PerfectScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps", ctx.usePSClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", ctx.config)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrollIndicators);
    } }, directives: [PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"], encapsulation: 2 });
PerfectScrollbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], PerfectScrollbarComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.ps-show-limits'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.ps-show-active'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], PerfectScrollbarComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(PerfectScrollbarDirective, { static: true })
], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
PerfectScrollbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]))
], PerfectScrollbarComponent);

let PerfectScrollbarModule = class PerfectScrollbarModule {
};
PerfectScrollbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PerfectScrollbarModule });
PerfectScrollbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PerfectScrollbarModule_Factory(t) { return new (t || PerfectScrollbarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[perfectScrollbar]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['perfectScrollbar']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'perfect-scrollbar',
                exportAs: 'ngxPerfectScrollbar',
                template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], usePSClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], autoPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.ps-show-limits']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], scrollIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.ps-show-active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [PerfectScrollbarDirective, { static: true }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PerfectScrollbarModule, { declarations: function () { return [PerfectScrollbarComponent, PerfectScrollbarDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-perfect-scrollbar.js.map

/***/ }),

/***/ "LZ44":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/auth.model.ts ***!
  \****************************************************/
/*! exports provided: AuthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModel", function() { return AuthModel; });
class AuthModel {
    setAuth(auth) {
        this.authToken = auth.authToken;
        this.refreshToken = auth.refreshToken;
        this.expiresIn = auth.expiresIn;
    }
}


/***/ }),

/***/ "NtJg":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/index.ts ***!
  \***********************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_auth_fake_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake/auth-fake-http.service */ "OcTV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return _fake_auth_fake_http_service__WEBPACK_IMPORTED_MODULE_0__["AuthHTTPService"]; });

// #fake-start#
 // You have to comment this, when your real back-end is done
// #fake-end#
// #real-start#
// export { AuthHTTPService } from './auth-http.service'; // You have to uncomment this, when your real back-end is done
// #real-end#


/***/ }),

/***/ "OcTV":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/fake/auth-fake-http.service.ts ***!
  \*********************************************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return AuthHTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_models/auth.model */ "LZ44");
/* harmony import */ var _fake_fake_db_users_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_fake/fake-db/users.table */ "R3gj");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








const API_USERS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/users`;
class AuthHTTPService {
    constructor(http) {
        this.http = http;
    }
    // public methods
    login(email, password) {
        const notFoundError = new Error('Not Found');
        if (!email || !password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(notFoundError);
        }
        return this.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            if (result.length <= 0) {
                return notFoundError;
            }
            const user = result.find((u) => {
                return (u.email.toLowerCase() === email.toLowerCase() &&
                    u.password === password);
            });
            if (!user) {
                return notFoundError;
            }
            const auth = new _models_auth_model__WEBPACK_IMPORTED_MODULE_3__["AuthModel"]();
            auth.authToken = user.authToken;
            auth.refreshToken = user.refreshToken;
            auth.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
            return auth;
        }));
    }
    createUser(user) {
        user.roles = [2]; // Manager
        user.authToken = 'auth-token-' + Math.random();
        user.refreshToken = 'auth-token-' + Math.random();
        user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
        user.pic = './assets/media/users/default.jpg';
        return this.http.post(API_USERS_URL, user);
    }
    forgotPassword(email) {
        return this.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            const user = result.find((u) => u.email.toLowerCase() === email.toLowerCase());
            return user !== undefined;
        }));
    }
    getUserByToken(token) {
        const user = _fake_fake_db_users_table__WEBPACK_IMPORTED_MODULE_4__["UsersTable"].users.find((u) => {
            return u.authToken === token;
        });
        if (!user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
    }
    getAllUsers() {
        return this.http.get(API_USERS_URL);
    }
}
AuthHTTPService.ɵfac = function AuthHTTPService_Factory(t) { return new (t || AuthHTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
AuthHTTPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthHTTPService, factory: AuthHTTPService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHTTPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZyiO":
/*!*********************************************!*\
  !*** ./src/assets/js/layout/base/footer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */


var KTLayoutFooter = function () {
    // Private properties
    var _element;
    // Private functions
    var _getHeight = function () {
        var height = 0;
        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(_element);
        }
        return height;
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
        },
        getHeight: function () {
            return _getHeight();
        },
        getElement: function () {
            return _element;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutFooter;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutFooter);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ "bPXZ":
/*!****************************************************!*\
  !*** ./src/assets/js/layout/extended/scrolltop.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/scrolltop.js */ "vMR4");
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */



var KTLayoutScrolltop = function () {
    // Private properties
    var _element;
    var _object;
    // Private functions
    var _init = function () {
        _object = new _components_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__["default"](_element, {
            offset: 300,
            speed: 600,
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        getElement: function () {
            return _element;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutScrolltop;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutScrolltop);
//# sourceMappingURL=scrolltop.js.map

/***/ }),

/***/ "bdgK":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "boci":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (options.includeInheritedProps && (currentPath === '__proto__' ||
        (currentPath === 'constructor' && typeof currentValue === 'function'))) {
        throw new Error('For security reasons, object\'s magic properties cannot be set')
      }
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),

/***/ "bxSH":
/*!******************************************!*\
  !*** ./src/assets/js/components/menu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "rh/z");
/* eslint-disable */


// Component Definition
var KTMenu = function (elementId, options) {
    // Main object
    var the = this;
    var init = false;
    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody();
    if (!element) {
        return;
    }
    // Default options
    var defaultOptions = {
        // scrollable area with Perfect Scroll
        scroll: {
            rememberPosition: false
        },
        // accordion submenu mode
        accordion: {
            slideSpeed: 200,
            autoScroll: false,
            autoScrollSpeed: 1200,
            expandAll: true // allow having multiple expanded accordions in the menu
        },
        // dropdown submenu mode
        dropdown: {
            timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown
        }
    };
    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////
    var Plugin = {
        /**
         * Run plugin
         * @returns {KTMenu}
         */
        construct: function (options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).has('menu')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).get('menu');
            }
            else {
                // reset menu
                Plugin.init(options);
                // reset menu
                Plugin.reset();
                // build menu
                Plugin.build();
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).set('menu', the);
            }
            return the;
        },
        /**
         * Handles submenu click toggle
         * @returns {KTMenu}
         */
        init: function (options) {
            the.events = [];
            the.eventHandlers = {};
            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].deepExtend({}, defaultOptions, options);
            // pause menu
            the.pauseDropdownHoverTime = 0;
            the.uid = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getUniqueID();
        },
        update: function (options) {
            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].deepExtend({}, defaultOptions, options);
            // pause menu
            the.pauseDropdownHoverTime = 0;
            // reset menu
            Plugin.reset();
            the.eventHandlers = {};
            // build menu
            Plugin.build();
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).set('menu', the);
        },
        reload: function () {
            // reset menu
            Plugin.reset();
            // build menu
            Plugin.build();
            // reset submenu props
            Plugin.resetSubmenuProps();
        },
        /**
         * Reset menu
         * @returns {KTMenu}
         */
        build: function () {
            // General accordion submenu toggle
            the.eventHandlers['event_1'] = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].on(element, '.menu-toggle', 'click', Plugin.handleSubmenuAccordion);
            // Dropdown mode(hoverable)
            if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
                // dropdown submenu - hover toggle
                the.eventHandlers['event_2'] = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].on(element, '[data-menu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
                the.eventHandlers['event_3'] = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].on(element, '[data-menu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit);
                // dropdown submenu - click toggle
                the.eventHandlers['event_4'] = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].on(element, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownClick);
                the.eventHandlers['event_5'] = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].on(element, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
            }
            // Handle general link click
            the.eventHandlers['event_6'] = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].on(element, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', Plugin.handleLinkClick);
            // Init scrollable menu
            if (the.options.scroll && the.options.scroll.height) {
                Plugin.scrollInit();
            }
        },
        /**
         * Reset menu
         * @returns {KTMenu}
         */
        reset: function () {
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].off(element, 'click', the.eventHandlers['event_1']);
            // dropdown submenu - hover toggle
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].off(element, 'mouseover', the.eventHandlers['event_2']);
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].off(element, 'mouseout', the.eventHandlers['event_3']);
            // dropdown submenu - click toggle
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].off(element, 'click', the.eventHandlers['event_4']);
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].off(element, 'click', the.eventHandlers['event_5']);
            // handle link click
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].off(element, 'click', the.eventHandlers['event_6']);
        },
        /**
         * Init scroll menu
         *
        */
        scrollInit: function () {
            if (the.options.scroll && the.options.scroll.height) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollDestroy(element, true);
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(element, { mobileNativeScroll: true, windowScroll: false, resetHeightOnDestroy: true, handleWindowResize: true, height: the.options.scroll.height, rememberPosition: the.options.scroll.rememberPosition });
            }
            else {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollDestroy(element, true);
            }
        },
        /**
         * Update scroll menu
        */
        scrollUpdate: function () {
            if (the.options.scroll && the.options.scroll.height) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollUpdate(element);
            }
        },
        /**
         * Scroll top
        */
        scrollTop: function () {
            if (the.options.scroll && the.options.scroll.height) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollTop(element);
            }
        },
        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {KTMenu}
         */
        getSubmenuMode: function (el) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg')) {
                if (el && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasAttr(el, 'data-menu-toggle') && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(el, 'data-menu-toggle') == 'hover') {
                    return 'dropdown';
                }
                if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isset(the.options.submenu, 'desktop.state.body')) {
                    if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClasses(body, the.options.submenu.desktop.state.body)) {
                        return the.options.submenu.desktop.state.mode;
                    }
                    else {
                        return the.options.submenu.desktop.default;
                    }
                }
                else if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isset(the.options.submenu, 'desktop')) {
                    return the.options.submenu.desktop;
                }
            }
            else if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('md') && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointDown('lg') && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isset(the.options.submenu, 'tablet')) {
                return the.options.submenu.tablet;
            }
            else if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointDown('md') && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isset(the.options.submenu, 'mobile')) {
                return the.options.submenu.mobile;
            }
            else {
                return false;
            }
        },
        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {KTMenu}
         */
        isConditionalSubmenuDropdown: function () {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg') && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isset(the.options.submenu, 'desktop.state.body')) {
                return true;
            }
            else {
                return false;
            }
        },
        /**
         * Reset submenu attributes
         * @returns {KTMenu}
         */
        resetSubmenuProps: function (e) {
            var submenus = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].findAll(element, '.menu-submenu');
            if (submenus) {
                for (var i = 0, len = submenus.length; i < len; i++) {
                    var submenu = submenus[0];
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(submenu, 'display', '');
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(submenu, 'overflow', '');
                    if (submenu.hasAttribute('data-hor-direction')) {
                        _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(submenu, 'menu-submenu-left');
                        _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(submenu, 'menu-submenu-right');
                        _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(submenu, submenu.getAttribute('data-hor-direction'));
                    }
                }
            }
        },
        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        handleSubmenuDrodownHoverEnter: function (e) {
            if (Plugin.getSubmenuMode(this) === 'accordion') {
                return;
            }
            if (the.resumeDropdownHover() === false) {
                return;
            }
            var item = this;
            if (item.getAttribute('data-hover') == '1') {
                item.removeAttribute('data-hover');
                clearTimeout(item.getAttribute('data-timeout'));
                item.removeAttribute('data-timeout');
            }
            Plugin.showSubmenuDropdown(item);
        },
        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        handleSubmenuDrodownHoverExit: function (e) {
            if (the.resumeDropdownHover() === false) {
                return;
            }
            if (Plugin.getSubmenuMode(this) === 'accordion') {
                return;
            }
            var item = this;
            var time = the.options.dropdown.timeout;
            var timeout = setTimeout(function () {
                if (item.getAttribute('data-hover') == '1') {
                    Plugin.hideSubmenuDropdown(item, true);
                }
            }, time);
            item.setAttribute('data-hover', '1');
            item.setAttribute('data-timeout', timeout);
        },
        /**
         * Handles submenu click toggle
         * @returns {KTMenu}
         */
        handleSubmenuDropdownClick: function (e) {
            if (Plugin.getSubmenuMode(this) === 'accordion') {
                return;
            }
            var item = this.closest('.menu-item');
            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }
            if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
                return;
            }
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(item, 'menu-item-hover') === false) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            }
            else {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(item, 'menu-item-open-dropdown');
                Plugin.hideSubmenuDropdown(item, true);
            }
            e.preventDefault();
        },
        /**
         * Handles tab click toggle
         * @returns {KTMenu}
         */
        handleSubmenuDropdownTabClick: function (e) {
            if (Plugin.getSubmenuMode(this) === 'accordion') {
                return;
            }
            var item = this.closest('.menu-item');
            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }
            if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
                return;
            }
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(item, 'menu-item-hover') == false) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            }
            e.preventDefault();
        },
        /**
         * Handles link click
         * @returns {KTMenu}
         */
        handleLinkClick: function (e) {
            var submenu = this.closest('.menu-item.menu-item-submenu');
            // Trigger click event handlers
            var result = Plugin.eventTrigger('linkClick', this, e);
            if (result === false) {
                return;
            }
            if (submenu && Plugin.getSubmenuMode(submenu) === 'dropdown') {
                Plugin.hideSubmenuDropdowns();
            }
        },
        /**
         * Handles submenu dropdown close on link click
         * @returns {KTMenu}
         */
        handleSubmenuDropdownClose: function (e, el) {
            // exit if its not submenu dropdown mode
            if (Plugin.getSubmenuMode(el) === 'accordion') {
                return;
            }
            var shown = element.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)');
            // check if currently clicked link's parent item ha
            if (shown.length > 0 && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(el, 'menu-toggle') === false && el.querySelectorAll('.menu-toggle').length === 0) {
                // close opened dropdown menus
                for (var i = 0, len = shown.length; i < len; i++) {
                    Plugin.hideSubmenuDropdown(shown[0], true);
                }
            }
        },
        /**
         * helper functions
         * @returns {KTMenu}
         */
        handleSubmenuAccordion: function (e, el) {
            var query;
            var item = el ? el : this;
            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }
            if (Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.menu-item'))) {
                if (query.getAttribute('data-menu-submenu-mode') != 'accordion') {
                    e.preventDefault();
                    return;
                }
            }
            var li = item.closest('.menu-item');
            var submenu = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(li, '.menu-submenu, .menu-inner');
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(item.closest('.menu-item'), 'menu-item-open-always')) {
                return;
            }
            if (li && submenu) {
                e.preventDefault();
                var speed = the.options.accordion.slideSpeed;
                var hasClosables = false;
                if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(li, 'menu-item-open') === false) {
                    // hide other accordions
                    if (the.options.accordion.expandAll === false) {
                        var subnav = item.closest('.menu-nav, .menu-subnav');
                        var closables = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].children(subnav, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');
                        if (subnav && closables) {
                            for (var i = 0, len = closables.length; i < len; i++) {
                                var el_ = closables[0];
                                var submenu_ = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(el_, '.menu-submenu');
                                if (submenu_) {
                                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].slideUp(submenu_, speed, function () {
                                        Plugin.scrollUpdate();
                                        _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(el_, 'menu-item-open');
                                    });
                                }
                            }
                        }
                    }
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].slideDown(submenu, speed, function () {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();
                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(li, 'menu-item-open');
                }
                else {
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].slideUp(submenu, speed, function () {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();
                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(li, 'menu-item-open');
                }
            }
        },
        /**
         * scroll to item function
         * @returns {KTMenu}
         */
        scrollToItem: function (item) {
            // handle auto scroll for accordion submenus
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isBreakpointUp('lg') && the.options.accordion.autoScroll && element.getAttribute('data-menu-scroll') !== '1') {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollTo(item, the.options.accordion.autoScrollSpeed);
            }
        },
        /**
         * Hide submenu dropdown
         * @returns {KTMenu}
         */
        hideSubmenuDropdown: function (item, classAlso) {
            // remove submenu activation class
            if (classAlso) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(item, 'menu-item-hover');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(item, 'menu-item-active-tab');
            }
            // clear timeout
            item.removeAttribute('data-hover');
            if (item.getAttribute('data-menu-toggle-class')) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(body, item.getAttribute('data-menu-toggle-class'));
            }
            var timeout = item.getAttribute('data-timeout');
            item.removeAttribute('data-timeout');
            clearTimeout(timeout);
        },
        /**
         * Hide submenu dropdowns
         * @returns {KTMenu}
         */
        hideSubmenuDropdowns: function () {
            var items;
            if (items = element.querySelectorAll('.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])')) {
                for (var j = 0, cnt = items.length; j < cnt; j++) {
                    Plugin.hideSubmenuDropdown(items[j], true);
                }
            }
        },
        /**
         * helper functions
         * @returns {KTMenu}
         */
        showSubmenuDropdown: function (item) {
            // close active submenus
            var list = element.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');
            if (list) {
                for (var i = 0, len = list.length; i < len; i++) {
                    var el = list[i];
                    if (item !== el && el.contains(item) === false && item.contains(el) === false) {
                        Plugin.hideSubmenuDropdown(el, true);
                    }
                }
            }
            // add submenu activation class
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(item, 'menu-item-hover');
            // Change the alignment of submenu is offscreen.
            var submenu = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(item, '.menu-submenu');
            if (submenu && submenu.hasAttribute('data-hor-direction') === false) {
                if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(submenu, 'menu-submenu-left')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-left');
                }
                else if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(submenu, 'menu-submenu-right')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-right');
                }
            }
            if (submenu && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isOffscreen(submenu, 'left', 15) === true) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(submenu, 'menu-submenu-left');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(submenu, 'menu-submenu-right');
            }
            else if (submenu && _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].isOffscreen(submenu, 'right', 15) === true) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(submenu, 'menu-submenu-right');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(submenu, 'menu-submenu-left');
            }
            if (item.getAttribute('data-menu-toggle-class')) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(body, item.getAttribute('data-menu-toggle-class'));
            }
        },
        /**
         * Handles submenu slide toggle
         * @returns {KTMenu}
         */
        createSubmenuDropdownClickDropoff: function (el) {
            var query;
            var zIndex = (query = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(el, '.menu-submenu') ? _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(query, 'z-index') : 0) - 1;
            var dropoff = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');
            body.appendChild(dropoff);
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(dropoff, 'click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].remove(this);
                Plugin.hideSubmenuDropdown(el, true);
            });
        },
        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        pauseDropdownHover: function (time) {
            var date = new Date();
            the.pauseDropdownHoverTime = date.getTime() + time;
        },
        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        resumeDropdownHover: function () {
            var date = new Date();
            return (date.getTime() > the.pauseDropdownHoverTime ? true : false);
        },
        /**
         * Reset menu's current active item
         * @returns {KTMenu}
         */
        resetActiveItem: function (item) {
            var list;
            var parents;
            list = element.querySelectorAll('.menu-item-active');
            for (var i = 0, len = list.length; i < len; i++) {
                var el = list[0];
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(el, 'menu-item-active');
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hide(_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(el, '.menu-submenu'));
                parents = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].parents(el, '.menu-item-submenu') || [];
                for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
                    var el_ = parents[i];
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(el_, 'menu-item-open');
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hide(_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(el_, '.menu-submenu'));
                }
            }
            // close open submenus
            if (the.options.accordion.expandAll === false) {
                if (list = element.querySelectorAll('.menu-item-open')) {
                    for (var i = 0, len = list.length; i < len; i++) {
                        _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(parents[0], 'menu-item-open');
                    }
                }
            }
        },
        /**
         * Sets menu's active item
         * @returns {KTMenu}
         */
        setActiveItem: function (item) {
            // reset current active item
            Plugin.resetActiveItem();
            var parents = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].parents(item, '.menu-item-submenu') || [];
            for (var i = 0, len = parents.length; i < len; i++) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(parents[i], 'menu-item-open');
            }
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(item, 'menu-item-active');
        },
        /**
         * Returns page breadcrumbs for the menu's active item
         * @returns {KTMenu}
         */
        getBreadcrumbs: function (item) {
            var query;
            var breadcrumbs = [];
            var link = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(item, '.menu-link');
            breadcrumbs.push({
                text: (query = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(link, '.menu-text') ? query.innerHTML : ''),
                title: link.getAttribute('title'),
                href: link.getAttribute('href')
            });
            var parents = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].parents(item, '.menu-item-submenu');
            for (var i = 0, len = parents.length; i < len; i++) {
                var submenuLink = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(parents[i], '.menu-link');
                breadcrumbs.push({
                    text: (query = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(submenuLink, '.menu-text') ? query.innerHTML : ''),
                    title: submenuLink.getAttribute('title'),
                    href: submenuLink.getAttribute('href')
                });
            }
            return breadcrumbs.reverse();
        },
        /**
         * Returns page title for the menu's active item
         * @returns {KTMenu}
         */
        getPageTitle: function (item) {
            var query;
            return (query = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].child(item, '.menu-text') ? query.innerHTML : '');
        },
        /**
         * Trigger events
         */
        eventTrigger: function (name, target, e) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, target, e);
                        }
                    }
                    else {
                        return event.handler.call(this, target, e);
                    }
                }
            }
        },
        addEvent: function (name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        },
        removeEvent: function (name) {
            if (the.events[name]) {
                delete the.events[name];
            }
        }
    };
    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////
    /**
     * Set default options
     */
    the.setDefaults = function (options) {
        defaultOptions = options;
    };
    /**
     * Update scroll
     */
    the.scrollUpdate = function () {
        return Plugin.scrollUpdate();
    };
    /**
     * Re-init scroll
     */
    the.scrollReInit = function () {
        return Plugin.scrollInit();
    };
    /**
     * Scroll top
     */
    the.scrollTop = function () {
        return Plugin.scrollTop();
    };
    /**
     * Set active menu item
     */
    the.setActiveItem = function (item) {
        return Plugin.setActiveItem(item);
    };
    the.reload = function () {
        return Plugin.reload();
    };
    the.update = function (options) {
        return Plugin.update(options);
    };
    /**
     * Set breadcrumb for menu item
     */
    the.getBreadcrumbs = function (item) {
        return Plugin.getBreadcrumbs(item);
    };
    /**
     * Set page title for menu item
     */
    the.getPageTitle = function (item) {
        return Plugin.getPageTitle(item);
    };
    /**
     * Get submenu mode
     */
    the.getSubmenuMode = function (el) {
        return Plugin.getSubmenuMode(el);
    };
    /**
     * Hide dropdown
     * @returns {Object}
     */
    the.hideDropdown = function (item) {
        Plugin.hideSubmenuDropdown(item, true);
    };
    /**
     * Hide dropdowns
     * @returns {Object}
     */
    the.hideDropdowns = function () {
        Plugin.hideSubmenuDropdowns();
    };
    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.pauseDropdownHover = function (time) {
        Plugin.pauseDropdownHover(time);
    };
    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.resumeDropdownHover = function () {
        return Plugin.resumeDropdownHover();
    };
    /**
     * Register event
     */
    the.on = function (name, handler) {
        return Plugin.addEvent(name, handler);
    };
    the.off = function (name) {
        return Plugin.removeEvent(name);
    };
    the.one = function (name, handler) {
        return Plugin.addEvent(name, handler, true);
    };
    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////
    // Run plugin
    Plugin.construct.apply(the, [options]);
    // Handle plugin on window resize
    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addResizeHandler(function () {
        if (init) {
            the.reload();
        }
    });
    // Init done
    init = true;
    // Return plugin instance
    return the;
};
// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTMenu;
}
// Plugin global lazy initialization
document.addEventListener("click", function (e) {
    var body = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getByTagName('body')[0];
    var query;
    if (query = body.querySelectorAll('.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]')) {
        for (var i = 0, len = query.length; i < len; i++) {
            var element = query[i].closest('.menu-nav').parentNode;
            if (element) {
                var the = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).get('menu');
                if (!the) {
                    break;
                }
                if (!the || the.getSubmenuMode() !== 'dropdown') {
                    break;
                }
                if (e.target !== element && element.contains(e.target) === false) {
                    the.hideDropdowns();
                }
            }
        }
    }
});
/* harmony default export */ __webpack_exports__["default"] = (KTMenu);
//# sourceMappingURL=menu.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "j9Zj":
/*!*****************************************************!*\
  !*** ./src/assets/js/layout/base/stretched-card.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ "sH0w");
/* eslint-disable */



var KTLayoutStretchedCard = function () {
    // Private properties
    var _element;
    // Private functions
    var _init = function () {
        var scroll = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.card-scroll');
        var cardBody = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.card-body');
        var cardHeader = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.card-header');
        var height = _content_js__WEBPACK_IMPORTED_MODULE_1__["default"].getHeight();
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(cardHeader));
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'marginTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'marginBottom'));
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingBottom'));
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(cardBody, 'paddingTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(cardBody, 'paddingBottom'));
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(cardBody, 'marginTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(cardBody, 'marginBottom'));
        height = height - 3;
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(scroll, 'height', height + 'px');
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
            // Re-calculate on window resize
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addResizeHandler(function () {
                _init();
            });
        },
        update: function () {
            _init();
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutStretchedCard;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutStretchedCard);
//# sourceMappingURL=stretched-card.js.map

/***/ }),

/***/ "jvtF":
/*!********************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-actions.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* eslint-disable */



var KTLayoutQuickActions = function () {
    // Private properties
    var _element;
    var _offcanvasObject;
    // Private functions
    var _init = function () {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-content');
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_actions_close',
            toggleBy: 'kt_quick_actions_toggle'
        });
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getViewPort().height);
                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginBottom'));
                }
                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginBottom'));
                }
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingBottom'));
                height = height - 2;
                return height;
            }
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        getElement: function () {
            return _element;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutQuickActions;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutQuickActions);
//# sourceMappingURL=quick-actions.js.map

/***/ }),

/***/ "ktLr":
/*!*****************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-user.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* eslint-disable */



var KTLayoutQuickUser = function () {
    // Private properties
    var _element;
    var _offcanvasObject;
    // Private functions
    var _init = function () {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-content');
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_user_close',
            toggleBy: 'kt_quick_user_toggle'
        });
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getViewPort().height);
                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginBottom'));
                }
                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginBottom'));
                }
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingBottom'));
                height = height - 2;
                return height;
            }
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        getElement: function () {
            return _element;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutQuickUser;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutQuickUser);
//# sourceMappingURL=quick-user.js.map

/***/ }),

/***/ "oViw":
/*!********************************************!*\
  !*** ./src/assets/js/layout/base/brand.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */


var KTLayoutBrand = function () {
    // Private properties
    var _element;
    // Private functions
    var _getHeight = function () {
        var height = 0;
        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(_element);
        }
        return height;
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
        },
        getElement: function () {
            return _element;
        },
        getHeight: function () {
            return _getHeight();
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutBrand;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutBrand);
//# sourceMappingURL=brand.js.map

/***/ }),

/***/ "qlg9":
/*!*******************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-search.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* eslint-disable */



var KTLayoutQuickSearch = function () {
    // Private properties
    var _element;
    var _offcanvasObject;
    // Private functions
    var _init = function () {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-content');
        var form = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.quick-search-form');
        var results = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.quick-search-wrapper');
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_search_close',
            toggleBy: 'kt_quick_search_toggle'
        });
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(results, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getViewPort().height);
                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginBottom'));
                }
                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginBottom'));
                }
                if (results) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(form));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(form, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(form, 'marginBottom'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(results, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(results, 'marginBottom'));
                }
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingBottom'));
                height = height - 2;
                return height;
            }
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        getElement: function () {
            return _element;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutQuickSearch;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutQuickSearch);
//# sourceMappingURL=quick-search.js.map

/***/ }),

/***/ "rh/z":
/*!******************************************!*\
  !*** ./src/assets/js/components/util.js ***!
  \******************************************/
/*! exports provided: KTUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTUtil", function() { return KTUtil; });
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie.js */ "68Zv");
/* eslint-disable */



/**
 * @class KTUtil  base utilize class that privides helper functions
 */
// Polyfills
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el))
            return null;
        do {
            if (ancestor.matches(s))
                return ancestor;
            ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
    };
}
/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */
(function (elem) {
    for (var i = 0; i < elem.length; i++) {
        if (!window[elem[i]] || 'remove' in window[elem[i]].prototype)
            continue;
        window[elem[i]].prototype.remove = function () {
            this.parentNode.removeChild(this);
        };
    }
})(['Element', 'CharacterData', 'DocumentType']);
//
// requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//
(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments), docFrag = document.createDocumentFragment();
                argArr.forEach(function (argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });
                this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
// getAttributeNames
if (Element.prototype.getAttributeNames == undefined) {
    Element.prototype.getAttributeNames = function () {
        var attributes = this.attributes;
        var length = attributes.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = attributes[i].name;
        }
        return result;
    };
}
// Global variables
window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};
var KTUtil = function () {
    var resizeHandlers = [];
    /** @type {object} breakpoints The device width breakpoints **/
    var breakpoints = {
        sm: 544,
        md: 768,
        lg: 992,
        xl: 1200 // Extra large screen / wide desktop
    };
    /**
     * Handle window resize event with some
     * delay to attach event handlers upon resize complete
     */
    var _windowResizeHandler = function () {
        var _runResizeHandlers = function () {
            // reinitialize other subscribed elements
            for (var i = 0; i < resizeHandlers.length; i++) {
                var each = resizeHandlers[i];
                each.call();
            }
        };
        var timer;
        window.addEventListener('resize', function () {
            KTUtil.throttle(timer, function () {
                _runResizeHandlers();
            }, 200);
        });
    };
    return {
        /**
         * Class main initializer.
         * @param {object} settings.
         * @returns null
         */
        //main function to initiate the theme
        init: function (settings) {
            if (settings && settings.breakpoints) {
                breakpoints = settings.breakpoints;
            }
            _windowResizeHandler();
        },
        /**
         * Adds window resize event handler.
         * @param {function} callback function.
         */
        addResizeHandler: function (callback) {
            resizeHandlers.push(callback);
        },
        /**
         * Removes window resize event handler.
         * @param {function} callback function.
         */
        removeResizeHandler: function (callback) {
            for (var i = 0; i < resizeHandlers.length; i++) {
                if (callback === resizeHandlers[i]) {
                    delete resizeHandlers[i];
                }
            }
        },
        /**
         * Trigger window resize handlers.
         */
        runResizeHandlers: function () {
            _runResizeHandlers();
        },
        resize: function () {
            if (typeof (Event) === 'function') {
                // modern browsers
                window.dispatchEvent(new Event('resize'));
            }
            else {
                // for IE and other old browsers
                // causes deprecation warning on modern browsers
                var evt = window.document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);
            }
        },
        /**
         * Get GET parameter value from URL.
         * @param {string} paramName Parameter name.
         * @returns {string}
         */
        getURLParam: function (paramName) {
            var searchString = window.location.search.substring(1), i, val, params = searchString.split("&");
            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }
            return null;
        },
        /**
         * Checks whether current device is mobile touch.
         * @returns {boolean}
         */
        isMobileDevice: function () {
            var test = (this.getViewPort().width < this.getBreakpoint('lg') ? true : false);
            if (test === false) {
                // For use within normal web clients
                test = navigator.userAgent.match(/iPad/i) != null;
            }
            return test;
        },
        /**
         * Checks whether current device is desktop.
         * @returns {boolean}
         */
        isDesktopDevice: function () {
            return KTUtil.isMobileDevice() ? false : true;
        },
        /**
         * Gets browser window viewport size. Ref:
         * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
         * @returns {object}
         */
        getViewPort: function () {
            var e = window, a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },
        /**
         * Checks whether given device mode is currently activated.
         * @param {string} mode Responsive mode name(e.g: desktop,
         *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
         * @returns {boolean}
         */
        isInResponsiveRange: function (mode) {
            var breakpoint = this.getViewPort().width;
            if (mode == 'general') {
                return true;
            }
            else if (mode == 'desktop' && breakpoint >= (this.getBreakpoint('lg') + 1)) {
                return true;
            }
            else if (mode == 'tablet' && (breakpoint >= (this.getBreakpoint('md') + 1) && breakpoint < this.getBreakpoint('lg'))) {
                return true;
            }
            else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
                return true;
            }
            else if (mode == 'desktop-and-tablet' && breakpoint >= (this.getBreakpoint('md') + 1)) {
                return true;
            }
            else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
                return true;
            }
            else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
                return true;
            }
            return false;
        },
        /**
         * Checks whether given device mode is currently activated.
         * @param {string} mode Responsive mode name(e.g: desktop,
         *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
         * @returns {boolean}
         */
        isBreakpointUp: function (mode) {
            var width = this.getViewPort().width;
            var breakpoint = this.getBreakpoint(mode);
            return (width >= breakpoint);
        },
        isBreakpointDown: function (mode) {
            var width = this.getViewPort().width;
            var breakpoint = this.getBreakpoint(mode);
            return (width < breakpoint);
        },
        /**
         * Generates unique ID for give prefix.
         * @param {string} prefix Prefix for generated ID
         * @returns {boolean}
         */
        getUniqueID: function (prefix) {
            return prefix + Math.floor(Math.random() * (new Date()).getTime());
        },
        /**
         * Gets window width for give breakpoint mode.
         * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
         * @returns {number}
         */
        getBreakpoint: function (mode) {
            return breakpoints[mode];
        },
        /**
         * Checks whether object has property matchs given key path.
         * @param {object} obj Object contains values paired with given key path
         * @param {string} keys Keys path seperated with dots
         * @returns {object}
         */
        isset: function (obj, keys) {
            var stone;
            keys = keys || '';
            if (keys.indexOf('[') !== -1) {
                throw new Error('Unsupported object path notation.');
            }
            keys = keys.split('.');
            do {
                if (obj === undefined) {
                    return false;
                }
                stone = keys.shift();
                if (!obj.hasOwnProperty(stone)) {
                    return false;
                }
                obj = obj[stone];
            } while (keys.length);
            return true;
        },
        /**
         * Gets highest z-index of the given element parents
         * @param {object} el jQuery element object
         * @returns {number}
         */
        getHighestZindex: function (el) {
            var position, value;
            while (el && el !== document) {
                // Ignore z-index if position is set to a value where z-index is ignored by the browser
                // This makes behavior of this function consistent across browsers
                // WebKit always returns auto if the element is positioned
                position = KTUtil.css(el, 'position');
                if (position === "absolute" || position === "relative" || position === "fixed") {
                    // IE returns 0 when zIndex is not specified
                    // other browsers return a string
                    // we ignore the case of nested elements with an explicit value of 0
                    // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                    value = parseInt(KTUtil.css(el, 'z-index'));
                    if (!isNaN(value) && value !== 0) {
                        return value;
                    }
                }
                el = el.parentNode;
            }
            return null;
        },
        /**
         * Checks whether the element has any parent with fixed positionfreg
         * @param {object} el jQuery element object
         * @returns {boolean}
         */
        hasFixedPositionedParent: function (el) {
            var position;
            while (el && el !== document) {
                position = KTUtil.css(el, 'position');
                if (position === "fixed") {
                    return true;
                }
                el = el.parentNode;
            }
            return false;
        },
        /**
         * Simulates delay
         */
        sleep: function (milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        },
        /**
         * Gets randomly generated integer value within given min and max range
         * @param {number} min Range start value
         * @param {number} max Range end value
         * @returns {number}
         */
        getRandomInt: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        /**
         * Checks whether Angular library is included
         * @returns {boolean}
         */
        isAngularVersion: function () {
            return window.Zone !== undefined ? true : false;
        },
        // Deep extend:  $.extend(true, {}, objA, objB);
        deepExtend: function (out) {
            out = out || {};
            for (var i = 1; i < arguments.length; i++) {
                var obj = arguments[i];
                if (!obj)
                    continue;
                for (var key in obj) {
                    if (!obj.hasOwnProperty(key)) {
                        continue;
                    }
                    // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
                    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                        out[key] = KTUtil.deepExtend(out[key], obj[key]);
                        continue;
                    }
                    out[key] = obj[key];
                }
            }
            return out;
        },
        // extend:  $.extend({}, objA, objB);
        extend: function (out) {
            out = out || {};
            for (var i = 1; i < arguments.length; i++) {
                if (!arguments[i])
                    continue;
                for (var key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key))
                        out[key] = arguments[i][key];
                }
            }
            return out;
        },
        getById: function (el) {
            if (typeof el === 'string') {
                return document.getElementById(el);
            }
            else {
                return el;
            }
        },
        getByTag: function (query) {
            return document.getElementsByTagName(query);
        },
        getByTagName: function (query) {
            return document.getElementsByTagName(query);
        },
        getByClass: function (query) {
            return document.getElementsByClassName(query);
        },
        getBody: function () {
            return document.getElementsByTagName('body')[0];
        },
        /**
         * Checks whether the element has given classes
         * @param {object} el jQuery element object
         * @param {string} Classes string
         * @returns {boolean}
         */
        hasClasses: function (el, classes) {
            if (!el) {
                return;
            }
            var classesArr = classes.split(" ");
            for (var i = 0; i < classesArr.length; i++) {
                if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
                    return false;
                }
            }
            return true;
        },
        hasClass: function (el, className) {
            if (!el) {
                return;
            }
            return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
        },
        addClass: function (el, className) {
            if (!el || typeof className === 'undefined') {
                return;
            }
            var classNames = className.split(' ');
            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    if (classNames[i] && classNames[i].length > 0) {
                        el.classList.add(KTUtil.trim(classNames[i]));
                    }
                }
            }
            else if (!KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className += ' ' + KTUtil.trim(classNames[x]);
                }
            }
        },
        removeClass: function (el, className) {
            if (!el || typeof className === 'undefined') {
                return;
            }
            var classNames = className.split(' ');
            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    el.classList.remove(KTUtil.trim(classNames[i]));
                }
            }
            else if (KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
                }
            }
        },
        triggerCustomEvent: function (el, eventName, data) {
            var event;
            if (window.CustomEvent) {
                event = new CustomEvent(eventName, {
                    detail: data
                });
            }
            else {
                event = document.createEvent('CustomEvent');
                event.initCustomEvent(eventName, true, true, data);
            }
            el.dispatchEvent(event);
        },
        triggerEvent: function (node, eventName) {
            // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
            var doc;
            if (node.ownerDocument) {
                doc = node.ownerDocument;
            }
            else if (node.nodeType == 9) {
                // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
                doc = node;
            }
            else {
                throw new Error("Invalid node passed to fireEvent: " + node.id);
            }
            if (node.dispatchEvent) {
                // Gecko-style approach (now the standard) takes more work
                var eventClass = "";
                // Different events have different event classes.
                // If this switch statement can't map an eventName to an eventClass,
                // the event firing is going to fail.
                switch (eventName) {
                    case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
                    case "mouseenter":
                    case "mouseleave":
                    case "mousedown":
                    case "mouseup":
                        eventClass = "MouseEvents";
                        break;
                    case "focus":
                    case "change":
                    case "blur":
                    case "select":
                        eventClass = "HTMLEvents";
                        break;
                    default:
                        throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
                        break;
                }
                var event = doc.createEvent(eventClass);
                var bubbles = eventName == "change" ? false : true;
                event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.
                event.synthetic = true; // allow detection of synthetic events
                // The second parameter says go ahead with the default action
                node.dispatchEvent(event, true);
            }
            else if (node.fireEvent) {
                // IE-old school style
                var event = doc.createEventObject();
                event.synthetic = true; // allow detection of synthetic events
                node.fireEvent("on" + eventName, event);
            }
        },
        index: function (el) {
            var c = el.parentNode.children, i = 0;
            for (; i < c.length; i++)
                if (c[i] == el)
                    return i;
        },
        trim: function (string) {
            return string.trim();
        },
        eventTriggered: function (e) {
            if (e.currentTarget.dataset.triggered) {
                return true;
            }
            else {
                e.currentTarget.dataset.triggered = true;
                return false;
            }
        },
        remove: function (el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        },
        find: function (parent, query) {
            parent = KTUtil.getById(parent);
            if (parent) {
                return parent.querySelector(query);
            }
        },
        findAll: function (parent, query) {
            parent = KTUtil.getById(parent);
            if (parent) {
                return parent.querySelectorAll(query);
            }
        },
        insertAfter: function (el, referenceNode) {
            return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        },
        parents: function (elem, selector) {
            // Element.matches() polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.oMatchesSelector ||
                        Element.prototype.webkitMatchesSelector ||
                        function (s) {
                            var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                            while (--i >= 0 && matches.item(i) !== this) { }
                            return i > -1;
                        };
            }
            // Set up a parent array
            var parents = [];
            // Push each parent element to the array
            for (; elem && elem !== document; elem = elem.parentNode) {
                if (selector) {
                    if (elem.matches(selector)) {
                        parents.push(elem);
                    }
                    continue;
                }
                parents.push(elem);
            }
            // Return our parent array
            return parents;
        },
        children: function (el, selector, log) {
            if (!el || !el.childNodes) {
                return;
            }
            var result = [], i = 0, l = el.childNodes.length;
            for (var i; i < l; ++i) {
                if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
                    result.push(el.childNodes[i]);
                }
            }
            return result;
        },
        child: function (el, selector, log) {
            var children = KTUtil.children(el, selector, log);
            return children ? children[0] : null;
        },
        matches: function (el, selector, log) {
            var p = Element.prototype;
            var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };
            if (el && el.tagName) {
                return f.call(el, selector);
            }
            else {
                return false;
            }
        },
        data: function (el) {
            return {
                set: function (name, data) {
                    if (!el) {
                        return;
                    }
                    if (el.customDataTag === undefined) {
                        window.KTUtilElementDataStoreID++;
                        el.customDataTag = window.KTUtilElementDataStoreID;
                    }
                    if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {
                        window.KTUtilElementDataStore[el.customDataTag] = {};
                    }
                    window.KTUtilElementDataStore[el.customDataTag][name] = data;
                },
                get: function (name) {
                    if (!el) {
                        return;
                    }
                    if (el.customDataTag === undefined) {
                        return null;
                    }
                    return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;
                },
                has: function (name) {
                    if (!el) {
                        return false;
                    }
                    if (el.customDataTag === undefined) {
                        return false;
                    }
                    return (window.KTUtilElementDataStore[el.customDataTag] && window.KTUtilElementDataStore[el.customDataTag][name]) ? true : false;
                },
                remove: function (name) {
                    if (el && this.has(name)) {
                        delete window.KTUtilElementDataStore[el.customDataTag][name];
                    }
                }
            };
        },
        outerWidth: function (el, margin) {
            var width;
            if (margin === true) {
                width = parseFloat(el.offsetWidth);
                width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));
                return parseFloat(width);
            }
            else {
                width = parseFloat(el.offsetWidth);
                return width;
            }
        },
        offset: function (el) {
            var rect, win;
            if (!el) {
                return;
            }
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!el.getClientRects().length) {
                return { top: 0, left: 0 };
            }
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = el.getBoundingClientRect();
            win = el.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        height: function (el) {
            return KTUtil.css(el, 'height');
        },
        outerHeight: function (el, withMargin) {
            var height = el.offsetHeight;
            var style;
            if (typeof withMargin !== 'undefined' && withMargin === true) {
                style = getComputedStyle(el);
                height += parseInt(style.marginTop) + parseInt(style.marginBottom);
                return height;
            }
            else {
                return height;
            }
        },
        visible: function (el) {
            return !(el.offsetWidth === 0 && el.offsetHeight === 0);
        },
        attr: function (el, name, value) {
            if (el == undefined) {
                return;
            }
            if (value !== undefined) {
                el.setAttribute(name, value);
            }
            else {
                return el.getAttribute(name);
            }
        },
        hasAttr: function (el, name) {
            if (el == undefined) {
                return;
            }
            return el.getAttribute(name) ? true : false;
        },
        removeAttr: function (el, name) {
            if (el == undefined) {
                return;
            }
            el.removeAttribute(name);
        },
        animate: function (from, to, duration, update, easing, done) {
            /**
             * TinyAnimate.easings
             *  Adapted from jQuery Easing
             */
            var easings = {};
            var easing;
            easings.linear = function (t, b, c, d) {
                return c * t / d + b;
            };
            easing = easings.linear;
            // Early bail out if called incorrectly
            if (typeof from !== 'number' ||
                typeof to !== 'number' ||
                typeof duration !== 'number' ||
                typeof update !== 'function') {
                return;
            }
            // Create mock done() function if necessary
            if (typeof done !== 'function') {
                done = function () { };
            }
            // Pick implementation (requestAnimationFrame | setTimeout)
            var rAF = window.requestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 50);
            };
            // Animation loop
            var canceled = false;
            var change = to - from;
            function loop(timestamp) {
                var time = (timestamp || +new Date()) - start;
                if (time >= 0) {
                    update(easing(time, from, change, duration));
                }
                if (time >= 0 && time >= duration) {
                    update(to);
                    done();
                }
                else {
                    rAF(loop);
                }
            }
            update(from);
            // Start animation loop
            var start = window.performance && window.performance.now ? window.performance.now() : +new Date();
            rAF(loop);
        },
        actualCss: function (el, prop, cache) {
            var css = '';
            if (el instanceof HTMLElement === false) {
                return;
            }
            if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
                var value;
                // the element is hidden so:
                // making the el block so we can meassure its height but still be hidden
                css = el.style.cssText;
                el.style.cssText = 'position: absolute; visibility: hidden; display: block;';
                if (prop == 'width') {
                    value = el.offsetWidth;
                }
                else if (prop == 'height') {
                    value = el.offsetHeight;
                }
                el.style.cssText = css;
                // store it in cache
                el.setAttribute('kt-hidden-' + prop, value);
                return parseFloat(value);
            }
            else {
                // store it in cache
                return parseFloat(el.getAttribute('kt-hidden-' + prop));
            }
        },
        actualHeight: function (el, cache) {
            return KTUtil.actualCss(el, 'height', cache);
        },
        actualWidth: function (el, cache) {
            return KTUtil.actualCss(el, 'width', cache);
        },
        getScroll: function (element, method) {
            // The passed in `method` value should be 'Top' or 'Left'
            method = 'scroll' + method;
            return (element == window || element == document) ? (self[(method == 'scrollTop') ? 'pageYOffset' : 'pageXOffset'] ||
                (browserSupportsBoxModel && document.documentElement[method]) ||
                document.body[method]) : element[method];
        },
        css: function (el, styleProp, value) {
            if (!el) {
                return;
            }
            if (value !== undefined) {
                el.style[styleProp] = value;
            }
            else {
                var defaultView = (el.ownerDocument || document).defaultView;
                // W3C standard way:
                if (defaultView && defaultView.getComputedStyle) {
                    // sanitize property name to css notation
                    // (hyphen separated words eg. font-Size)
                    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
                    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
                }
                else if (el.currentStyle) { // IE
                    // sanitize property name to camelCase
                    styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
                        return letter.toUpperCase();
                    });
                    value = el.currentStyle[styleProp];
                    // convert other units to pixels on IE
                    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                        return (function (value) {
                            var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                            el.runtimeStyle.left = el.currentStyle.left;
                            el.style.left = value || 0;
                            value = el.style.pixelLeft + "px";
                            el.style.left = oldLeft;
                            el.runtimeStyle.left = oldRsLeft;
                            return value;
                        })(value);
                    }
                    return value;
                }
            }
        },
        slide: function (el, dir, speed, callback, recalcMaxHeight) {
            if (!el || (dir == 'up' && KTUtil.visible(el) === false) || (dir == 'down' && KTUtil.visible(el) === true)) {
                return;
            }
            speed = (speed ? speed : 600);
            var calcHeight = KTUtil.actualHeight(el);
            var calcPaddingTop = false;
            var calcPaddingBottom = false;
            if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
                KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
            }
            if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
                KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
            }
            if (KTUtil.data(el).has('slide-padding-top')) {
                calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
            }
            if (KTUtil.data(el).has('slide-padding-bottom')) {
                calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
            }
            if (dir == 'up') { // up
                el.style.cssText = 'display: block; overflow: hidden;';
                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function (value) {
                        el.style.paddingTop = (calcPaddingTop - value) + 'px';
                    }, 'linear');
                }
                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
                        el.style.paddingBottom = (calcPaddingBottom - value) + 'px';
                    }, 'linear');
                }
                KTUtil.animate(0, calcHeight, speed, function (value) {
                    el.style.height = (calcHeight - value) + 'px';
                }, 'linear', function () {
                    el.style.height = '';
                    el.style.display = 'none';
                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }
            else if (dir == 'down') { // down
                el.style.cssText = 'display: block; overflow: hidden;';
                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function (value) {
                        el.style.paddingTop = value + 'px';
                    }, 'linear', function () {
                        el.style.paddingTop = '';
                    });
                }
                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
                        el.style.paddingBottom = value + 'px';
                    }, 'linear', function () {
                        el.style.paddingBottom = '';
                    });
                }
                KTUtil.animate(0, calcHeight, speed, function (value) {
                    el.style.height = value + 'px';
                }, 'linear', function () {
                    el.style.height = '';
                    el.style.display = '';
                    el.style.overflow = '';
                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }
        },
        slideUp: function (el, speed, callback) {
            KTUtil.slide(el, 'up', speed, callback);
        },
        slideDown: function (el, speed, callback) {
            KTUtil.slide(el, 'down', speed, callback);
        },
        show: function (el, display) {
            if (typeof el !== 'undefined') {
                el.style.display = (display ? display : 'block');
            }
        },
        hide: function (el) {
            if (typeof el !== 'undefined') {
                el.style.display = 'none';
            }
        },
        addEvent: function (el, type, handler, one) {
            if (typeof el !== 'undefined' && el !== null) {
                el.addEventListener(type, handler);
            }
        },
        removeEvent: function (el, type, handler) {
            if (el !== null) {
                el.removeEventListener(type, handler);
            }
        },
        on: function (element, selector, event, handler) {
            if (!selector) {
                return;
            }
            var eventId = KTUtil.getUniqueID('event');
            window.KTUtilDelegatedEventHandlers[eventId] = function (e) {
                var targets = element.querySelectorAll(selector);
                var target = e.target;
                while (target && target !== element) {
                    for (var i = 0, j = targets.length; i < j; i++) {
                        if (target === targets[i]) {
                            handler.call(target, e);
                        }
                    }
                    target = target.parentNode;
                }
            };
            KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
            return eventId;
        },
        off: function (element, event, eventId) {
            if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
                return;
            }
            KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
            delete window.KTUtilDelegatedEventHandlers[eventId];
        },
        one: function onetime(el, type, callback) {
            el.addEventListener(type, function callee(e) {
                // remove event
                if (e.target && e.target.removeEventListener) {
                    e.target.removeEventListener(e.type, callee);
                }
                // need to verify from https://themeforest.net/author_dashboard#comment_23615588
                if (el && el.removeEventListener) {
                    e.currentTarget.removeEventListener(e.type, callee);
                }
                // call handler
                return callback(e);
            });
        },
        hash: function (str) {
            var hash = 0, i, chr;
            if (str.length === 0)
                return hash;
            for (i = 0; i < str.length; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        },
        animateClass: function (el, animationName, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd',
            };
            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }
            KTUtil.addClass(el, 'animated ' + animationName);
            KTUtil.one(el, animation, function () {
                KTUtil.removeClass(el, 'animated ' + animationName);
            });
            if (callback) {
                KTUtil.one(el, animation, callback);
            }
        },
        transitionEnd: function (el, callback) {
            var transition;
            var transitions = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'mozTransitionEnd',
                WebkitTransition: 'webkitTransitionEnd',
                msTransition: 'msTransitionEnd'
            };
            for (var t in transitions) {
                if (el.style[t] !== undefined) {
                    transition = transitions[t];
                }
            }
            KTUtil.one(el, transition, callback);
        },
        animationEnd: function (el, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd'
            };
            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }
            KTUtil.one(el, animation, callback);
        },
        animateDelay: function (el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-delay', value);
            }
        },
        animateDuration: function (el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-duration', value);
            }
        },
        scrollTo: function (target, offset, duration) {
            var duration = duration ? duration : 500;
            var targetPos = target ? KTUtil.offset(target).top : 0;
            var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var from, to;
            if (offset) {
                scrollPos += offset;
            }
            from = scrollPos;
            to = targetPos;
            KTUtil.animate(from, to, duration, function (value) {
                document.documentElement.scrollTop = value;
                document.body.parentNode.scrollTop = value;
                document.body.scrollTop = value;
            }); //, easing, done
        },
        scrollTop: function (offset, duration) {
            KTUtil.scrollTo(null, offset, duration);
        },
        isArray: function (obj) {
            return obj && Array.isArray(obj);
        },
        ready: function (callback) {
            if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
                callback();
            }
            else {
                document.addEventListener('DOMContentLoaded', callback);
            }
        },
        isEmpty: function (obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }
            return true;
        },
        numberString: function (nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        },
        detectIE: function () {
            var ua = window.navigator.userAgent;
            // Test values; Uncomment to check result …
            // IE 10
            // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
            // IE 11
            // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
            // Edge 12 (Spartan)
            // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
            // Edge 13
            // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }
            // other browser
            return false;
        },
        isRTL: function () {
            var html = KTUtil.getByTagName('html')[0];
            if (html) {
                return (KTUtil.attr(html, 'direction') == 'rtl');
            }
        },
        // Scroller
        scrollInit: function (element, options) {
            if (!element) {
                return;
            }
            // Learn more: https://github.com/mdbootstrap/perfect-scrollbar#options
            var pluginDefOptions = {
                wheelSpeed: 0.5,
                swipeEasing: true,
                wheelPropagation: false,
                minScrollbarLength: 40,
                maxScrollbarLength: 300,
                suppressScrollX: true
            };
            options = KTUtil.deepExtend({}, pluginDefOptions, options);
            // Define init function
            function init() {
                var ps;
                var height;
                // Get extra options via data attributes
                var attrs = element.getAttributeNames();
                if (attrs.length > 0) {
                    attrs.forEach(function (attrName) {
                        // more options; https://github.com/ganlanyuan/tiny-slider#options
                        if ((/^data-.*/g).test(attrName)) {
                            if (['scroll', 'height', 'mobile-height'].includes(optionName) == false) {
                                var optionName = attrName.replace('data-', '').toLowerCase().replace(/(?:[\s-])\w/g, function (match) {
                                    return match.replace('-', '').toUpperCase();
                                });
                                options[optionName] = KTUtil.filterBoolean(element.getAttribute(attrName));
                            }
                        }
                    });
                }
                if (options.height instanceof Function) {
                    height = options.height.call();
                }
                else {
                    if (KTUtil.isMobileDevice() === true && options.mobileHeight) {
                        height = parseInt(options.mobileHeight);
                    }
                    else if (options.height) {
                        height = parseInt(options.height);
                    }
                    else {
                        height = parseInt(KTUtil.css(element, 'height'));
                    }
                }
                if (height === false) {
                    KTUtil.scrollDestroy(element, true);
                    return;
                }
                height = parseInt(height);
                // Destroy scroll on table and mobile modes
                if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isMobileDevice() === true) {
                    ps = KTUtil.data(element).get('ps');
                    if (ps) {
                        if (options.resetHeightOnDestroy) {
                            KTUtil.css(element, 'height', 'auto');
                        }
                        else {
                            KTUtil.css(element, 'overflow', 'auto');
                            if (height > 0) {
                                KTUtil.css(element, 'height', height + 'px');
                            }
                        }
                        ps.destroy();
                        ps = KTUtil.data(element).remove('ps');
                    }
                    else if (height > 0) {
                        KTUtil.css(element, 'overflow', 'auto');
                        KTUtil.css(element, 'height', height + 'px');
                    }
                    return;
                }
                if (height > 0) {
                    KTUtil.css(element, 'height', height + 'px');
                }
                if (options.desktopNativeScroll) {
                    KTUtil.css(element, 'overflow', 'auto');
                    return;
                }
                // Pass options via HTML Attributes
                if (KTUtil.attr(element, 'data-window-scroll') == 'true') {
                    options.windowScroll = true;
                }
                // Init scroll
                ps = KTUtil.data(element).get('ps');
                if (ps) {
                    ps.update();
                }
                else {
                    KTUtil.css(element, 'overflow', 'hidden');
                    KTUtil.addClass(element, 'scroll');
                    ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](element, options);
                    KTUtil.data(element).set('ps', ps);
                }
                // Remember scroll position in cookie
                var uid = KTUtil.attr(element, 'id');
                try {
                    if (uid) {
                        var cookie = _cookie_js__WEBPACK_IMPORTED_MODULE_1__["KTCookie"].getCookie(uid);
                        if (options.rememberPosition === true && cookie) {
                            var pos = parseInt(cookie);
                            if (pos > 0) {
                                element.scrollTop = pos;
                            }
                            element.addEventListener('ps-scroll-y', function () {
                                _cookie_js__WEBPACK_IMPORTED_MODULE_1__["KTCookie"].setCookie(uid, element.scrollTop, {});
                            });
                        }
                    }
                }
                catch (e) {
                    console.error(e);
                }
                // Todo:Consider using Localstorage
                if (options.rememberPosition === true && _cookie_js__WEBPACK_IMPORTED_MODULE_1__["KTCookie"] && uid) {
                    if (_cookie_js__WEBPACK_IMPORTED_MODULE_1__["KTCookie"].getCookie(uid)) {
                        var pos = parseInt(_cookie_js__WEBPACK_IMPORTED_MODULE_1__["KTCookie"].getCookie(uid));
                        if (pos > 0) {
                            element.scrollTop = pos;
                        }
                    }
                    element.addEventListener('ps-scroll-y', function () {
                        _cookie_js__WEBPACK_IMPORTED_MODULE_1__["KTCookie"].setCookie(uid, element.scrollTop);
                    });
                }
            }
            // Init
            init();
            // Handle window resize
            if (options.handleWindowResize) {
                KTUtil.addResizeHandler(function () {
                    init();
                });
            }
        },
        scrollUpdate: function (element) {
            var ps = KTUtil.data(element).get('ps');
            if (ps) {
                ps.update();
            }
        },
        scrollUpdateAll: function (parent) {
            var scrollers = KTUtil.findAll(parent, '.ps');
            for (var i = 0, len = scrollers.length; i < len; i++) {
                KTUtil.scrollUpdate(scrollers[i]);
            }
        },
        scrollDestroy: function (element, resetAll) {
            var ps = KTUtil.data(element).get('ps');
            if (ps) {
                ps.destroy();
                ps = KTUtil.data(element).remove('ps');
            }
            if (element && resetAll) {
                element.style.setProperty('overflow', '');
                element.style.setProperty('height', '');
            }
        },
        filterBoolean: function (val) {
            // Convert string boolean
            if (val === true || val === 'true') {
                return true;
            }
            if (val === false || val === 'false') {
                return false;
            }
            return val;
        },
        setHTML: function (el, html) {
            el.innerHTML = html;
        },
        getHTML: function (el) {
            if (el) {
                return el.innerHTML;
            }
        },
        getDocumentHeight: function () {
            var body = document.body;
            var html = document.documentElement;
            return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        },
        getScrollTop: function () {
            return (document.scrollingElement || document.documentElement).scrollTop;
        },
        changeColor: function (col, amt) {
            var usePound = false;
            if (col[0] == "#") {
                col = col.slice(1);
                usePound = true;
            }
            var num = parseInt(col, 16);
            var r = (num >> 16) + amt;
            if (r > 255)
                r = 255;
            else if (r < 0)
                r = 0;
            var b = ((num >> 8) & 0x00FF) + amt;
            if (b > 255)
                b = 255;
            else if (b < 0)
                b = 0;
            var g = (num & 0x0000FF) + amt;
            if (g > 255)
                g = 255;
            else if (g < 0)
                g = 0;
            return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
        },
        // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
        throttle: function (timer, func, delay) {
            // If setTimeout is already scheduled, no need to do anything
            if (timer) {
                return;
            }
            // Schedule a setTimeout after delay seconds
            timer = setTimeout(function () {
                func();
                // Once setTimeout function execution is finished, timerId = undefined so that in <br>
                // the next scroll event function execution can be scheduled by the setTimeout
                timer = undefined;
            }, delay);
        },
        // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
        debounce: function (timer, func, delay) {
            // Cancels the setTimeout method execution
            clearTimeout(timer);
            // Executes the func after delay time.
            timer = setTimeout(func, delay);
        },
        btnWait: function (el, cls, message, disable) {
            if (!el) {
                return;
            }
            if (typeof disable !== 'undefined' && disable === true) {
                KTUtil.attr(el, "disabled", true);
            }
            if (cls) {
                KTUtil.addClass(el, cls);
                KTUtil.attr(el, "wait-class", cls);
            }
            if (message) {
                var caption = KTUtil.find(el, '.btn-caption');
                if (caption) {
                    KTUtil.data(caption).set('caption', KTUtil.getHTML(caption));
                    KTUtil.setHTML(caption, message);
                }
                else {
                    KTUtil.data(el).set('caption', KTUtil.getHTML(el));
                    KTUtil.setHTML(el, message);
                }
            }
        },
        btnRelease: function (el) {
            if (!el) {
                return;
            }
            /// Show loading state on button
            KTUtil.removeAttr(el, "disabled");
            if (KTUtil.hasAttr(el, "wait-class")) {
                KTUtil.removeClass(el, KTUtil.attr(el, "wait-class"));
            }
            var caption = KTUtil.find(el, '.btn-caption');
            if (caption && KTUtil.data(caption).has('caption')) {
                KTUtil.setHTML(caption, KTUtil.data(caption).get('caption'));
            }
            else if (KTUtil.data(el).has('caption')) {
                KTUtil.setHTML(el, KTUtil.data(el).get('caption'));
            }
        },
        isOffscreen: function (el, direction, offset) {
            offset = offset || 0;
            var windowWidth = KTUtil.getViewPort().width;
            var windowHeight = KTUtil.getViewPort().height;
            var top = KTUtil.offset(el).top;
            var height = KTUtil.outerHeight(el) + offset;
            var left = KTUtil.offset(el).left;
            var width = KTUtil.outerWidth(el) + offset;
            if (direction == 'bottom') {
                if (windowHeight < top + height) {
                    return true;
                }
                else if (windowHeight > top + height * 1.5) {
                    return true;
                }
            }
            if (direction == 'top') {
                if (top < 0) {
                    return true;
                }
                else if (top > height) {
                    return true;
                }
            }
            if (direction == 'left') {
                if (left < 0) {
                    return true;
                }
                else if (left * 2 > width) {
                    //console.log('left 2');
                    //return true;
                }
            }
            if (direction == 'right') {
                if (windowWidth < left + width) {
                    return true;
                }
                else {
                    //console.log('right 2');
                    //return true;
                }
            }
            return false;
        }
    };
}();
// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTUtil;
}
// Initialize KTUtil class on document ready
KTUtil.ready(function () {
    if (typeof KTAppSettings !== 'undefined') {
        KTUtil.init(KTAppSettings);
    }
    else {
        KTUtil.init();
    }
});
//# sourceMappingURL=util.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "sH0w":
/*!**********************************************!*\
  !*** ./src/assets/js/layout/base/content.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "2x+x");
/* harmony import */ var _subheader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subheader.js */ "Czx3");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "ZyiO");
/* eslint-disable */





var KTLayoutContent = function () {
    // Private properties
    var _element;
    // Private functions
    var _getHeight = function () {
        var height;
        height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getViewPort().height;
        if (_element) {
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingBottom'));
        }
        height = height - _header_js__WEBPACK_IMPORTED_MODULE_1__["default"].getHeight();
        height = height - _subheader_js__WEBPACK_IMPORTED_MODULE_2__["default"].getHeight();
        height = height - _footer_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeight();
        return height;
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
        },
        getHeight: function () {
            return _getHeight();
        },
        getElement: function () {
            return _element;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutContent;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutContent);
//# sourceMappingURL=content.js.map

/***/ }),

/***/ "svdS":
/*!***********************************************!*\
  !*** ./src/assets/js/components/offcanvas.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "rh/z");
/* eslint-disable */


// Component Definition
var KTOffcanvas = function (elementId, options) {
    // Main object
    var the = this;
    var init = false;
    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody();
    if (!element) {
        return;
    }
    // Default options
    var defaultOptions = {
        attrCustom: ''
    };
    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////
    var Plugin = {
        construct: function (options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).has('offcanvas')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).get('offcanvas');
            }
            else {
                // Reset offcanvas
                Plugin.init(options);
                // Build offcanvas
                Plugin.build();
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).set('offcanvas', the);
            }
            return the;
        },
        init: function (options) {
            the.events = [];
            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].deepExtend({}, defaultOptions, options);
            the.classBase = the.options.baseClass;
            the.attrCustom = the.options.attrCustom;
            the.classShown = the.classBase + '-on';
            the.classOverlay = the.classBase + '-overlay';
            the.target;
            the.state = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(element, the.classShown) ? 'shown' : 'hidden';
        },
        build: function () {
            // offcanvas toggle
            if (the.options.toggleBy) {
                if (typeof the.options.toggleBy === 'string') {
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(the.options.toggleBy), 'click', function (e) {
                        e.preventDefault();
                        the.target = this;
                        Plugin.toggle();
                    });
                }
                else if (the.options.toggleBy && the.options.toggleBy[0]) {
                    if (the.options.toggleBy[0].target) {
                        for (var i in the.options.toggleBy) {
                            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(the.options.toggleBy[i].target), 'click', function (e) {
                                e.preventDefault();
                                the.target = this;
                                Plugin.toggle();
                            });
                        }
                    }
                    else {
                        for (var i in the.options.toggleBy) {
                            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(the.options.toggleBy[i]), 'click', function (e) {
                                e.preventDefault();
                                the.target = this;
                                Plugin.toggle();
                            });
                        }
                    }
                }
                else if (the.options.toggleBy && the.options.toggleBy.target) {
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(the.options.toggleBy.target), 'click', function (e) {
                        e.preventDefault();
                        the.target = this;
                        Plugin.toggle();
                    });
                }
            }
            // offcanvas close
            var closeBy = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(the.options.closeBy);
            if (closeBy) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(closeBy, 'click', function (e) {
                    e.preventDefault();
                    the.target = this;
                    Plugin.hide();
                });
            }
        },
        isShown: function () {
            return (the.state == 'shown' ? true : false);
        },
        toggle: function () {
            Plugin.eventTrigger('toggle');
            if (the.state == 'shown') {
                Plugin.hide();
            }
            else {
                Plugin.show();
            }
        },
        show: function () {
            if (the.state == 'shown') {
                return;
            }
            Plugin.eventTrigger('beforeShow');
            Plugin.toggleClass('show');
            // Offcanvas panel
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(body, 'data-offcanvas-' + the.classBase, 'on');
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(element, the.classShown);
            if (the.attrCustom.length > 0) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(body, 'data-offcanvas-' + the.classCustom, 'on');
                //KTUtil.addClass(body, the.classCustom);
            }
            the.state = 'shown';
            if (the.options.overlay) {
                the.overlay = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].insertAfter(document.createElement('DIV'), element);
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(the.overlay, the.classOverlay);
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(the.overlay, 'click', function (e) {
                    //e.stopPropagation();
                    e.preventDefault();
                    Plugin.hide(the.target);
                });
            }
            Plugin.eventTrigger('afterShow');
        },
        hide: function () {
            if (the.state == 'hidden') {
                return;
            }
            Plugin.eventTrigger('beforeHide');
            Plugin.toggleClass('hide');
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeAttr(body, 'data-offcanvas-' + the.classBase);
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(element, the.classShown);
            if (the.attrCustom.length > 0) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeAttr(body, 'data-offcanvas-' + the.attrCustom);
            }
            the.state = 'hidden';
            if (the.options.overlay && the.overlay) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].remove(the.overlay);
            }
            Plugin.eventTrigger('afterHide');
        },
        toggleClass: function (mode) {
            var id = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(the.target, 'id');
            var toggleBy;
            if (the.options.toggleBy && the.options.toggleBy[0] && the.options.toggleBy[0].target) {
                for (var i in the.options.toggleBy) {
                    if (the.options.toggleBy[i].target === id) {
                        toggleBy = the.options.toggleBy[i];
                    }
                }
            }
            else if (the.options.toggleBy && the.options.toggleBy.target) {
                toggleBy = the.options.toggleBy;
            }
            if (toggleBy) {
                var el = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(toggleBy.target);
                if (mode === 'show') {
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(el, toggleBy.state);
                }
                if (mode === 'hide') {
                    _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(el, toggleBy.state);
                }
            }
        },
        eventTrigger: function (name, args) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the, args);
                        }
                    }
                    else {
                        return event.handler.call(this, the, args);
                    }
                }
            }
        },
        addEvent: function (name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };
    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////
    /**
     * Set default options
     * @param options
     */
    the.setDefaults = function (options) {
        defaultOptions = options;
    };
    /**
     * Check if canvas is shown
     * @returns {boolean}
     */
    the.isShown = function () {
        return Plugin.isShown();
    };
    /**
     * Set to hide the canvas
     */
    the.hide = function () {
        return Plugin.hide();
    };
    /**
     * Set to show the canvas
     */
    the.show = function () {
        return Plugin.show();
    };
    /**
     * Attach event
     * @param name
     * @param handler
     */
    the.on = function (name, handler) {
        return Plugin.addEvent(name, handler);
    };
    /**
     * Attach event that will be fired once
     * @param name
     * @param handler
     */
    the.one = function (name, handler) {
        return Plugin.addEvent(name, handler, true);
    };
    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////
    // Run plugin
    Plugin.construct.apply(the, [options]);
    // Init done
    init = true;
    // Return plugin instance
    return the;
};
// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTOffcanvas;
}
/* harmony default export */ __webpack_exports__["default"] = (KTOffcanvas);
//# sourceMappingURL=offcanvas.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "t/UT":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);
//# sourceMappingURL=perfect-scrollbar.esm.js.map


/***/ }),

/***/ "tM0M":
/*!****************************************************!*\
  !*** ./src/app/modules/i18n/translation.module.ts ***!
  \****************************************************/
/*! exports provided: TranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationModule", function() { return TranslationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class TranslationModule {
}
TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TranslationModule });
TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TranslationModule_Factory(t) { return new (t || TranslationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vMR4":
/*!***********************************************!*\
  !*** ./src/assets/js/components/scrolltop.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "rh/z");
/* eslint-disable */


// Component Definition
var KTScrolltop = function (elementId, options) {
    // Main object
    var the = this;
    var init = false;
    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getBody();
    if (!element) {
        return;
    }
    // Default options
    var defaultOptions = {
        offset: 300,
        speed: 6000
    };
    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////
    var Plugin = {
        /**
         * Run plugin
         * @returns {mscrolltop}
         */
        construct: function (options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).has('scrolltop')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).get('scrolltop');
            }
            else {
                // reset scrolltop
                Plugin.init(options);
                // build scrolltop
                Plugin.build();
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).set('scrolltop', the);
            }
            return the;
        },
        /**
         * Handles subscrolltop click toggle
         * @returns {mscrolltop}
         */
        init: function (options) {
            the.events = [];
            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].deepExtend({}, defaultOptions, options);
        },
        build: function () {
            var timer;
            window.addEventListener('scroll', function () {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].throttle(timer, function () {
                    Plugin.handle();
                }, 200);
            });
            // handle button click
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(element, 'click', Plugin.scroll);
        },
        /**
         * Handles scrolltop click scrollTop
         */
        handle: function () {
            var pos = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getScrollTop(); // current vertical position
            if (pos > the.options.offset) {
                if (body.hasAttribute('data-scrolltop') === false) {
                    body.setAttribute('data-scrolltop', 'on');
                }
            }
            else {
                if (body.hasAttribute('data-scrolltop') === true) {
                    body.removeAttribute('data-scrolltop');
                }
            }
        },
        /**
         * Handles scrolltop click scrollTop
         */
        scroll: function (e) {
            e.preventDefault();
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollTop(0, the.options.speed);
        },
        /**
         * Trigger events
         */
        eventTrigger: function (name, args) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the, args);
                        }
                    }
                    else {
                        return event.handler.call(this, the, args);
                    }
                }
            }
        },
        addEvent: function (name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };
    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////
    /**
     * Set default options
     */
    the.setDefaults = function (options) {
        defaultOptions = options;
    };
    /**
     * Get subscrolltop mode
     */
    the.on = function (name, handler) {
        return Plugin.addEvent(name, handler);
    };
    /**
     * Set scrolltop content
     * @returns {mscrolltop}
     */
    the.one = function (name, handler) {
        return Plugin.addEvent(name, handler, true);
    };
    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////
    // Run plugin
    Plugin.construct.apply(the, [options]);
    // Init done
    init = true;
    // Return plugin instance
    return the;
};
// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTScrolltop;
}
/* harmony default export */ __webpack_exports__["default"] = (KTScrolltop);
//# sourceMappingURL=scrolltop.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "vcVu":
/*!**************************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-notifications.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* eslint-disable */



var KTLayoutQuickNotifications = function () {
    // Private properties
    var _element;
    var _offcanvasObject;
    // Private functions
    var _init = function () {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-content');
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_notifications_close',
            toggleBy: 'kt_quick_notifications_toggle'
        });
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getViewPort().height);
                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginBottom'));
                }
                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginBottom'));
                }
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingBottom'));
                height = height - 2;
                return height;
            }
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            if (!_element) {
                return;
            }
            // Initialize
            _init();
        },
        getElement: function () {
            return _element;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutQuickNotifications;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutQuickNotifications);
//# sourceMappingURL=quick-notifications.js.map

/***/ }),

/***/ "wIU9":
/*!******************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-panel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ "svdS");
/* eslint-disable */



var KTLayoutQuickPanel = function () {
    // Private properties
    var _element;
    var _offcanvasObject;
    var _notificationsElement;
    var _logsElement;
    var _settingsElement;
    // Private functions
    var _getContentHeight = function () {
        var height;
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(_element, '.offcanvas-content');
        var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getViewPort().height);
        if (header) {
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].actualHeight(header));
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginTop'));
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(header, 'marginBottom'));
        }
        if (content) {
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginTop'));
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(content, 'marginBottom'));
        }
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingTop'));
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].css(_element, 'paddingBottom'));
        height = height - 2;
        return height;
    };
    var _init = function () {
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_panel_close',
            toggleBy: 'kt_quick_panel_toggle'
        });
    };
    var _initNotifications = function () {
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(_notificationsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                return _getContentHeight();
            }
        });
    };
    var _initLogs = function () {
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(_logsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                return _getContentHeight();
            }
        });
    };
    var _initSettings = function () {
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollInit(_settingsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function () {
                return _getContentHeight();
            }
        });
    };
    var _updateScrollbars = function () {
        $(_element).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollUpdate(_notificationsElement);
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollUpdate(_logsElement);
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].scrollUpdate(_settingsElement);
        });
    };
    // Public methods
    return {
        init: function (id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById(id);
            _notificationsElement = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById('kt_quick_panel_notifications');
            _logsElement = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById('kt_quick_panel_logs');
            _settingsElement = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].getById('kt_quick_panel_settings');
            _init();
            _initNotifications();
            _initLogs();
            _initSettings();
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutQuickPanel;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutQuickPanel);
//# sourceMappingURL=quick-panel.js.map

/***/ }),

/***/ "zZCj":
/*!********************************************!*\
  !*** ./src/assets/js/components/toggle.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "rh/z");
/* eslint-disable */


// Component Definition
var KTToggle = function (toggleElement, targetElement, options) {
    // Main object
    var the = this;
    var init = false;
    // Get element object
    var element = toggleElement;
    var target = targetElement;
    if (!element) {
        return;
    }
    // Default options
    var defaultOptions = {
        targetToggleMode: 'class' // class|attribute
    };
    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////
    var Plugin = {
        /**
         * Construct
         */
        construct: function (options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).has('toggle')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).get('toggle');
            }
            else {
                // reset menu
                Plugin.init(options);
                // build menu
                Plugin.build();
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].data(element).set('toggle', the);
            }
            return the;
        },
        /**
         * Handles subtoggle click toggle
         */
        init: function (options) {
            the.element = element;
            the.events = [];
            // Merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].deepExtend({}, defaultOptions, options);
            //alert(the.options.target.tagName);
            the.target = target;
            the.targetState = the.options.targetState;
            the.toggleState = the.options.toggleState;
            if (the.options.targetToggleMode == 'class') {
                the.state = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClasses(the.target, the.targetState) ? 'on' : 'off';
            }
            else {
                the.state = _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasAttr(the.target, 'data-' + the.targetState) ? _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(the.target, 'data-' + the.targetState) : 'off';
            }
        },
        /**
         * Setup toggle
         */
        build: function () {
            _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(element, 'mouseup', Plugin.toggle);
        },
        /**
         * Handles offcanvas click toggle
         */
        toggle: function (e) {
            Plugin.eventTrigger('beforeToggle');
            if (the.state == 'off') {
                Plugin.toggleOn();
            }
            else {
                Plugin.toggleOff();
            }
            Plugin.eventTrigger('afterToggle');
            e.preventDefault();
            return the;
        },
        /**
         * Handles toggle click toggle
         */
        toggleOn: function () {
            Plugin.eventTrigger('beforeOn');
            if (the.options.targetToggleMode == 'class') {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(the.target, the.targetState);
            }
            else {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].attr(the.target, 'data-' + the.targetState, 'on');
            }
            if (the.toggleState) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(element, the.toggleState);
            }
            the.state = 'on';
            Plugin.eventTrigger('afterOn');
            Plugin.eventTrigger('toggle');
            return the;
        },
        /**
         * Handles toggle click toggle
         */
        toggleOff: function () {
            Plugin.eventTrigger('beforeOff');
            if (the.options.targetToggleMode == 'class') {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(the.target, the.targetState);
            }
            else {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeAttr(the.target, 'data-' + the.targetState);
            }
            if (the.toggleState) {
                _util__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(element, the.toggleState);
            }
            the.state = 'off';
            Plugin.eventTrigger('afterOff');
            Plugin.eventTrigger('toggle');
            return the;
        },
        /**
         * Trigger events
         */
        eventTrigger: function (name) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    }
                    else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },
        addEvent: function (name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
            return the;
        }
    };
    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////
    /**
     * Set default options
     */
    the.setDefaults = function (options) {
        defaultOptions = options;
    };
    /**
     * Get toggle state
     */
    the.getState = function () {
        return the.state;
    };
    /**
     * Toggle
     */
    the.toggle = function () {
        return Plugin.toggle();
    };
    /**
     * Toggle on
     */
    the.toggleOn = function () {
        return Plugin.toggleOn();
    };
    /**
     * Toggle off
     */
    the.toggleOff = function () {
        return Plugin.toggleOff();
    };
    /**
     * Attach event
     * @returns {KTToggle}
     */
    the.on = function (name, handler) {
        return Plugin.addEvent(name, handler);
    };
    /**
     * Attach event that will be fired once
     * @returns {KTToggle}
     */
    the.one = function (name, handler) {
        return Plugin.addEvent(name, handler, true);
    };
    // Construct plugin
    Plugin.construct.apply(the, [options]);
    return the;
};
// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTToggle;
}
/* harmony default export */ __webpack_exports__["default"] = (KTToggle);
//# sourceMappingURL=toggle.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "zd2x":
/*!****************************************************!*\
  !*** ./src/assets/js/layout/base/header-topbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/toggle.js */ "zZCj");
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/util.js */ "rh/z");
/* eslint-disable */



var KTLayoutHeaderTopbar = function () {
    // Private properties
    var _toggleElement;
    var _toggleObject;
    // Private functions
    var _init = function () {
        _toggleObject = new _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__["default"](_toggleElement, _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].getBody(), {
            targetState: 'topbar-mobile-on',
            toggleState: 'active',
        });
    };
    // Public methods
    return {
        init: function (id) {
            _toggleElement = _components_util_js__WEBPACK_IMPORTED_MODULE_1__["KTUtil"].getById(id);
            if (!_toggleElement) {
                return;
            }
            // Initialize
            _init();
        },
        getToggleElement: function () {
            return _toggleElement;
        }
    };
}();
// Webpack support
if (true) {
    // module.exports = KTLayoutHeaderTopbar;
}
/* harmony default export */ __webpack_exports__["default"] = (KTLayoutHeaderTopbar);
//# sourceMappingURL=header-topbar.js.map

/***/ })

}]);
//# sourceMappingURL=default~pages-layout-gestion-module~pages-layout-portal-module-es2015.js.map