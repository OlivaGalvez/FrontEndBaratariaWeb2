(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~gestion-actividades-actividades-module~gestion-ofertas-ofertas-module~pages-layout-portal-module"], {
    /***/
    "6nXs":
    /*!*******************************************************************!*\
      !*** ./src/app/_metronic_portal/configs/default-layout.config.ts ***!
      \*******************************************************************/

    /*! exports provided: DefaultLayoutConfigPortal */

    /***/
    function nXs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutConfigPortal", function () {
        return DefaultLayoutConfigPortal;
      });

      var DefaultLayoutConfigPortal = {
        "demo": "demo1",
        "js": {
          "breakpoints": {
            "sm": 576,
            "md": 768,
            "lg": 992,
            "xl": 1200,
            "xxl": 1400
          },
          "colors": {
            "theme": {
              "base": {
                "white": "#ffffff",
                "primary": "#3699FF",
                "secondary": "#E5EAEE",
                "success": "#1BC5BD",
                "info": "#8950FC",
                "warning": "#FFA800",
                "danger": "#F64E60",
                "light": "#E4E6EF",
                "dark": "#181C32"
              },
              "light": {
                "white": "#ffffff",
                "primary": "#E1F0FF",
                "secondary": "#EBEDF3",
                "success": "#C9F7F5",
                "info": "#EEE5FF",
                "warning": "#FFF4DE",
                "danger": "#FFE2E5",
                "light": "#F3F6F9",
                "dark": "#D6D6E0"
              },
              "inverse": {
                "white": "#ffffff",
                "primary": "#ffffff",
                "secondary": "#3F4254",
                "success": "#ffffff",
                "info": "#ffffff",
                "warning": "#ffffff",
                "danger": "#ffffff",
                "light": "#464E5F",
                "dark": "#ffffff"
              }
            },
            "gray": {
              "gray-100": "#F3F6F9",
              "gray-200": "#EBEDF3",
              "gray-300": "#E4E6EF",
              "gray-400": "#D1D3E0",
              "gray-500": "#B5B5C3",
              "gray-600": "#7E8299",
              "gray-700": "#5E6278",
              "gray-800": "#3F4254",
              "gray-900": "#181C32"
            }
          },
          "fontFamily": "Poppins"
        },
        "self": {
          "layout": "default"
        },
        "pageLoader": {
          "type": ""
        },
        "header": {
          "self": {
            "display": true,
            "width": "fixed",
            "theme": "light",
            "fixed": {
              "desktop": true,
              "mobile": true
            }
          },
          "menu": {
            "self": {
              "display": true,
              "static": true,
              "layout": "default",
              "rootArrow": true,
              "iconStyle": "duotone"
            },
            "desktop": {
              "arrow": true,
              "toggle": "click",
              "submenu": {
                "theme": "light",
                "arrow": true
              }
            },
            "mobile": {
              "submenu": {
                "theme": "dark",
                "accordion": true
              }
            }
          }
        },
        "subheader": {
          "display": true,
          "displayDesc": true,
          "displayDaterangepicker": true,
          "layoutVersion": "v6",
          "fixed": true,
          "width": "fixed",
          "clear": false,
          "style": "solid"
        },
        "content": {
          "width": "fixed"
        },
        "brand": {
          "self": {
            "theme": "dark"
          }
        },
        "aside": {
          "self": {
            "theme": "dark",
            "display": false,
            "fixed": true,
            "minimize": {
              "toggle": true,
              "default": false,
              "hoverable": true
            }
          },
          "footer": {
            "self": {
              "display": false
            }
          },
          "menu": {
            "static": true,
            "dropdown": false,
            "scroll": true,
            "iconStyle": "duotone",
            "submenu": {
              "accordion": true,
              "dropdown": {
                "arrow": true,
                "hoverTimeout": 500
              }
            }
          }
        },
        "footer": {
          "display": true,
          "width": "fixed",
          "fixed": true
        },
        "extras": {
          "search": {
            "display": true,
            "layout": "dropdown",
            "offcanvas": {
              "direction": "right"
            }
          },
          "notifications": {
            "display": true,
            "layout": "dropdown",
            "dropdown": {
              "style": "dark"
            },
            "offcanvas": {
              "direction": "right"
            }
          },
          "quickActions": {
            "display": true,
            "layout": "dropdown",
            "dropdown": {
              "style": "dark"
            },
            "offcanvas": {
              "direction": "right"
            }
          },
          "user": {
            "display": true,
            "layout": "offcanvas",
            "dropdown": {
              "style": "dark"
            },
            "offcanvas": {
              "direction": "right"
            }
          },
          "languages": {
            "display": true
          },
          "cart": {
            "display": true,
            "layout": "dropdown",
            "offcanvas": {
              "direction": "right"
            },
            "dropdown": {
              "style": "dark"
            }
          },
          "chat": {
            "display": true
          },
          "quickPanel": {
            "display": true,
            "offcanvas": {
              "direction": "right"
            }
          },
          "toolbar": {
            "display": true
          },
          "scrolltop": {
            "display": true
          }
        }
      };
      /***/
    },

    /***/
    "8hzt":
    /*!************************************************!*\
      !*** ./src/app/_metronic_portal/core/index.ts ***!
      \************************************************/

    /*! exports provided: LayoutService, LayoutInitService, DynamicAsideMenuService, DynamicHeaderMenuService, getDateFromString, toInteger, CustomAdapter, CustomDateParserFormatter, CoreModule */

    /***/
    function hzt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/layout.service */
      "eaHq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
        return _services_layout_service__WEBPACK_IMPORTED_MODULE_0__["LayoutService"];
      });
      /* harmony import */


      var _services_layout_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/layout-init.service */
      "lUOe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LayoutInitService", function () {
        return _services_layout_init_service__WEBPACK_IMPORTED_MODULE_1__["LayoutInitService"];
      });
      /* harmony import */


      var _services_dynamic_aside_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/dynamic-aside-menu.service */
      "PpBy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicAsideMenuService", function () {
        return _services_dynamic_aside_menu_service__WEBPACK_IMPORTED_MODULE_2__["DynamicAsideMenuService"];
      });
      /* harmony import */


      var _services_dynamic_header_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/dynamic-header-menu.service */
      "Bf7C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DynamicHeaderMenuService", function () {
        return _services_dynamic_header_menu_service__WEBPACK_IMPORTED_MODULE_3__["DynamicHeaderMenuService"];
      });
      /* harmony import */


      var _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/types-convertion.utils */
      "CT2z");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getDateFromString", function () {
        return _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__["getDateFromString"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toInteger", function () {
        return _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__["toInteger"];
      });
      /* harmony import */


      var _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils/date-picker.utils */
      "qTXg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomAdapter", function () {
        return _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["CustomAdapter"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function () {
        return _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__["CustomDateParserFormatter"];
      });
      /* harmony import */


      var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core.module */
      "RDPZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return _core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"];
      }); // Services
      // Utils
      // Module

      /***/

    },

    /***/
    "Bf7C":
    /*!*******************************************************************************!*\
      !*** ./src/app/_metronic_portal/core/services/dynamic-header-menu.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: DynamicHeaderMenuService */

    /***/
    function Bf7C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicHeaderMenuService", function () {
        return DynamicHeaderMenuService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _configs_dynamic_header_menu_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../configs/dynamic-header-menu.config */
      "VehX");

      var emptyMenuConfig = {
        items: []
      };

      var DynamicHeaderMenuService = /*#__PURE__*/function () {
        function DynamicHeaderMenuService() {
          _classCallCheck(this, DynamicHeaderMenuService);

          this.menuConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](emptyMenuConfig);
          this.menuConfig$ = this.menuConfigSubject.asObservable();
          this.loadMenu();
        } // Here you able to load your menu from server/data-base/localeStorage
        // Default => from DynamicHeaderMenuConfig


        _createClass(DynamicHeaderMenuService, [{
          key: "loadMenu",
          value: function loadMenu() {
            this.setMenu(_configs_dynamic_header_menu_config__WEBPACK_IMPORTED_MODULE_2__["DynamicHeaderMenuConfig"]);
          }
        }, {
          key: "setMenu",
          value: function setMenu(menuConfig) {
            this.menuConfigSubject.next(menuConfig);
          }
        }, {
          key: "getMenu",
          value: function getMenu() {
            return this.menuConfigSubject.value;
          }
        }]);

        return DynamicHeaderMenuService;
      }();

      DynamicHeaderMenuService.ɵfac = function DynamicHeaderMenuService_Factory(t) {
        return new (t || DynamicHeaderMenuService)();
      };

      DynamicHeaderMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DynamicHeaderMenuService,
        factory: DynamicHeaderMenuService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicHeaderMenuService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "CT2z":
    /*!***********************************************************************!*\
      !*** ./src/app/_metronic_portal/core/utils/types-convertion.utils.ts ***!
      \***********************************************************************/

    /*! exports provided: getDateFromString, toInteger */

    /***/
    function CT2z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDateFromString", function () {
        return getDateFromString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toInteger", function () {
        return toInteger;
      });
      /**
       * Convert string to Date
       *
       * @param dateInStr: string (format => 'MM/dd/yyyy')
       */


      function getDateFromString() {
        var dateInStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (dateInStr && dateInStr.length > 0) {
          var dateParts = dateInStr.trim().split('/');
          var year = toInteger(dateParts[2]);
          var month = toInteger(dateParts[0]);
          var day = toInteger(dateParts[1]); // tslint:disable-next-line:prefer-const

          var result = new Date();
          result.setDate(day);
          result.setMonth(month - 1);
          result.setFullYear(year);
          return result;
        }

        return new Date();
      }
      /**
       * Covert value to number
       *
       * @param value: any
       */


      function toInteger(value) {
        return parseInt("".concat(value), 10);
      }
      /***/

    },

    /***/
    "PpBy":
    /*!******************************************************************************!*\
      !*** ./src/app/_metronic_portal/core/services/dynamic-aside-menu.service.ts ***!
      \******************************************************************************/

    /*! exports provided: DynamicAsideMenuService */

    /***/
    function PpBy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicAsideMenuService", function () {
        return DynamicAsideMenuService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../configs/dynamic-aside-menu.config */
      "rf0u");

      var emptyMenuConfig = {
        items: []
      };

      var DynamicAsideMenuService = /*#__PURE__*/function () {
        function DynamicAsideMenuService() {
          _classCallCheck(this, DynamicAsideMenuService);

          this.menuConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](emptyMenuConfig);
          this.menuConfig$ = this.menuConfigSubject.asObservable();
          this.loadMenu();
        } // Here you able to load your menu from server/data-base/localStorage
        // Default => from DynamicAsideMenuConfig


        _createClass(DynamicAsideMenuService, [{
          key: "loadMenu",
          value: function loadMenu() {
            this.setMenu(_configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_2__["DynamicAsideMenuConfig"]);
          }
        }, {
          key: "setMenu",
          value: function setMenu(menuConfig) {
            this.menuConfigSubject.next(menuConfig);
          }
        }, {
          key: "getMenu",
          value: function getMenu() {
            return this.menuConfigSubject.value;
          }
        }]);

        return DynamicAsideMenuService;
      }();

      DynamicAsideMenuService.ɵfac = function DynamicAsideMenuService_Factory(t) {
        return new (t || DynamicAsideMenuService)();
      };

      DynamicAsideMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DynamicAsideMenuService,
        factory: DynamicAsideMenuService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicAsideMenuService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "RDPZ":
    /*!******************************************************!*\
      !*** ./src/app/_metronic_portal/core/core.module.ts ***!
      \******************************************************/

    /*! exports provided: CoreModule */

    /***/
    function RDPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pipes/first-letter.pipe */
      "fNzJ");
      /* harmony import */


      var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes/safe.pipe */
      "SrwT");

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_2__["FirstLetterPipe"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_2__["FirstLetterPipe"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_2__["FirstLetterPipe"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_2__["FirstLetterPipe"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "SrwT":
    /*!**********************************************************!*\
      !*** ./src/app/_metronic_portal/core/pipes/safe.pipe.ts ***!
      \**********************************************************/

    /*! exports provided: SafePipe */

    /***/
    function SrwT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1"); // Angular

      /**
       * Sanitize HTML
       */


      var SafePipe = /*#__PURE__*/function () {
        /**
         * Pipe Constructor
         *
         * @param _sanitizer: DomSanitezer
         */
        // tslint:disable-next-line
        function SafePipe(_sanitizer) {
          _classCallCheck(this, SafePipe);

          this._sanitizer = _sanitizer;
        }
        /**
         * Transform
         *
         * @param value: string
         * @param type: string
         */


        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(value, type) {
            switch (type) {
              case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);

              case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);

              case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);

              case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);

              case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);

              default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
            }
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ɵfac = function SafePipe_Factory(t) {
        return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safe",
        type: SafePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'safe'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VehX":
    /*!************************************************************************!*\
      !*** ./src/app/_metronic_portal/configs/dynamic-header-menu.config.ts ***!
      \************************************************************************/

    /*! exports provided: DynamicHeaderMenuConfig */

    /***/
    function VehX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicHeaderMenuConfig", function () {
        return DynamicHeaderMenuConfig;
      });

      var DynamicHeaderMenuConfig = {
        items: [{
          title: 'Dashboards',
          root: true,
          alignment: 'left',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD'
        }, {
          title: 'Builder',
          root: true,
          alignment: 'left',
          page: '/builder'
        }, {
          title: 'Material UI',
          bullet: 'dot',
          page: '/material',
          icon: 'flaticon-interface-7',
          submenu: [{
            title: 'Form Controls',
            bullet: 'dot',
            svg: './assets/media/svg/icons/Design/PenAndRuller.svg',
            page: '/material/form-controls',
            submenu: [{
              title: 'Auto Complete',
              page: '/material/form-controls/autocomplete',
              permission: 'accessToECommerceModule'
            }, {
              title: 'Checkbox',
              page: '/material/form-controls/checkbox'
            }, {
              title: 'Radio Button',
              page: '/material/form-controls/radiobutton'
            }, {
              title: 'Datepicker',
              page: '/material/form-controls/datepicker'
            }, {
              title: 'Form Field',
              page: '/material/form-controls/formfield'
            }, {
              title: 'Input',
              page: '/material/form-controls/input'
            }, {
              title: 'Select',
              page: '/material/form-controls/select'
            }, {
              title: 'Slider',
              page: '/material/form-controls/slider'
            }, {
              title: 'Slider Toggle',
              page: '/material/form-controls/slidertoggle'
            }]
          }, {
            title: 'Navigation',
            bullet: 'dot',
            svg: './assets/media/svg/icons/Navigation/Up-down.svg',
            page: '/material/navigation',
            submenu: [{
              title: 'Menu',
              page: '/material/navigation/menu'
            }, {
              title: 'Sidenav',
              page: '/material/navigation/sidenav'
            }, {
              title: 'Toolbar',
              page: '/material/navigation/toolbar'
            }]
          }, {
            title: 'Layout',
            bullet: 'dot',
            svg: './assets/media/svg/icons/Layout/Layout-right-panel-2.svg',
            page: '/material/layout',
            submenu: [{
              title: 'Card',
              page: '/material/layout/card'
            }, {
              title: 'Divider',
              page: '/material/layout/divider'
            }, {
              title: 'Expansion panel',
              page: '/material/layout/expansion-panel'
            }, {
              title: 'Grid list',
              page: '/material/layout/grid-list'
            }, {
              title: 'List',
              page: '/material/layout/list'
            }, {
              title: 'Tabs',
              page: '/material/layout/tabs'
            }, {
              title: 'Stepper',
              page: '/material/layout/stepper'
            }, {
              title: 'Tree',
              page: '/material/layout/tree'
            }]
          }, {
            title: 'Buttons & Indicators',
            bullet: 'dot',
            svg: './assets/media/svg/icons/Home/Cupboard.svg',
            page: '/material/buttons-and-indicators',
            submenu: [{
              title: 'Button',
              page: '/material/buttons-and-indicators/button'
            }, {
              title: 'Button toggle',
              page: '/material/buttons-and-indicators/button-toggle'
            }, {
              title: 'Chips',
              page: '/material/buttons-and-indicators/chips'
            }, {
              title: 'Icon',
              page: '/material/buttons-and-indicators/icon'
            }, {
              title: 'Progress bar',
              page: '/material/buttons-and-indicators/progress-bar'
            }, {
              title: 'Progress spinner',
              page: '/material/buttons-and-indicators/progress-spinner'
            }, {
              title: 'Ripples',
              page: '/material/buttons-and-indicators/ripples'
            }]
          }, {
            title: 'Popups & Modals',
            bullet: 'dot',
            svg: './assets/media/svg/icons/General/Duplicate.svg',
            page: '/material/popups-and-modals',
            submenu: [{
              title: 'Bottom sheet',
              page: '/material/popups-and-modals/bottom-sheet'
            }, {
              title: 'Dialog',
              page: '/material/popups-and-modals/dialog'
            }, {
              title: 'Snackbar',
              page: '/material/popups-and-modals/snackbar'
            }, {
              title: 'Tooltip',
              page: '/material/popups-and-modals/tooltip'
            }]
          }, {
            title: 'Data table',
            bullet: 'dot',
            svg: './assets/media/svg/icons/Layout/Layout-top-panel-4.svg',
            page: '/material/data-table',
            submenu: [{
              title: 'Paginator',
              page: '/material/data-table/paginator'
            }, {
              title: 'Sort header',
              page: '/material/data-table/sort-header'
            }, {
              title: 'Table',
              page: '/material/data-table/table'
            }]
          }]
        }, {
          title: 'NgBootstrap',
          bullet: 'dot',
          icon: 'flaticon-web',
          page: '/ngbootstrap',
          mega: true,
          submenu: [{
            title: 'A ... C',
            submenu: [{
              title: 'Accordion',
              page: '/ngbootstrap/accordion'
            }, {
              title: 'Alert',
              page: '/ngbootstrap/alert'
            }, {
              title: 'Buttons',
              page: '/ngbootstrap/buttons'
            }, {
              title: 'Carousel',
              page: '/ngbootstrap/carousel'
            }]
          }, {
            title: 'C ... M',
            submenu: [{
              title: 'Collapse',
              page: '/ngbootstrap/collapse'
            }, {
              title: 'Datepicker',
              page: '/ngbootstrap/datepicker'
            }, {
              title: 'Dropdown',
              page: '/ngbootstrap/dropdown'
            }, {
              title: 'Modal',
              page: '/ngbootstrap/modal'
            }]
          }, {
            title: 'P ... R',
            submenu: [{
              title: 'Pagination',
              page: '/ngbootstrap/pagination'
            }, {
              title: 'Popover',
              page: '/ngbootstrap/popover'
            }, {
              title: 'Progressbar',
              page: '/ngbootstrap/progressbar'
            }, {
              title: 'Rating',
              page: '/ngbootstrap/rating'
            }]
          }, {
            title: 'T ... Z',
            submenu: [{
              title: 'Timepicker',
              page: '/ngbootstrap/timepicker'
            }, {
              title: 'Tooltips',
              page: '/ngbootstrap/tooltip'
            }, {
              title: 'Typehead',
              page: '/ngbootstrap/typehead'
            }]
          }]
        }, {
          title: 'Custom',
          root: true,
          alignment: 'left',
          toggle: 'click',
          page: '',
          submenu: [{
            title: 'eCommerce',
            bullet: 'dot',
            icon: 'flaticon-business',
            permission: 'accessToECommerceModule',
            page: '/ecommerce',
            submenu: [{
              title: 'Customers',
              page: '/ecommerce/customers'
            }, {
              title: 'Products',
              page: '/ecommerce/products'
            }]
          }, {
            title: 'User Management',
            bullet: 'dot',
            icon: 'flaticon-user',
            page: '/user-management',
            submenu: [{
              title: 'Users',
              page: '/user-management/users'
            }, {
              title: 'Roles',
              page: '/user-management/roles'
            }]
          }, {
            title: 'Error Pages',
            bullet: 'dot',
            icon: 'flaticon2-list-2',
            page: '/error',
            submenu: [{
              title: 'Error 1',
              page: '/error/error-1'
            }, {
              title: 'Error 2',
              page: '/error/error-2'
            }, {
              title: 'Error 3',
              page: '/error/error-3'
            }, {
              title: 'Error 4',
              page: '/error/error-4'
            }, {
              title: 'Error 5',
              page: '/error/error-5'
            }, {
              title: 'Error 6',
              page: '/error/error-6'
            }]
          }, {
            title: 'Wizards',
            bullet: 'dot',
            icon: 'flaticon2-mail-1',
            page: '/wizards',
            submenu: [{
              title: 'Wizard 1',
              page: '/wizards/wizard-1'
            }, {
              title: 'Wizard 2',
              page: '/wizards/wizard-2'
            }, {
              title: 'Wizard 3',
              page: '/wizards/wizard-3'
            }, {
              title: 'Wizard 4',
              page: '/wizards/wizard-4'
            }]
          }]
        }]
      };
      /***/
    },

    /***/
    "eaHq":
    /*!******************************************************************!*\
      !*** ./src/app/_metronic_portal/core/services/layout.service.ts ***!
      \******************************************************************/

    /*! exports provided: LayoutService */

    /***/
    function eaHq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
        return LayoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _configs_default_layout_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../configs/default-layout.config */
      "6nXs");
      /* harmony import */


      var object_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! object-path */
      "boci");
      /* harmony import */


      var object_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_4__);

      var LAYOUT_CONFIG_LOCAL_STORAGE_KEY = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appVersion, "-layoutConfig");

      var LayoutService = /*#__PURE__*/function () {
        function LayoutService() {
          _classCallCheck(this, LayoutService);

          this.layoutConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined); // scope list of css classes

          this.classes = {
            header: [],
            header_container: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: [],
            subheader: [],
            subheader_container: [],
            content: [],
            content_container: [],
            footer_container: []
          }; // scope list of html attributes

          this.attrs = {
            aside_menu: {}
          };
        }

        _createClass(LayoutService, [{
          key: "initConfig",
          value: function initConfig() {
            var configFromLocalStorage = localStorage.getItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY);

            if (configFromLocalStorage) {
              try {
                this.layoutConfigSubject.next(JSON.parse(configFromLocalStorage));
                return;
              } catch (error) {
                this.removeConfig();
                console.error('config parse from local storage', error);
              }
            }

            this.layoutConfigSubject.next(_configs_default_layout_config__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutConfigPortal"]);
          }
        }, {
          key: "removeConfig",
          value: function removeConfig() {
            localStorage.removeItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY);
          }
        }, {
          key: "refreshConfigToDefault",
          value: function refreshConfigToDefault() {
            this.setConfigWithPageRefresh(undefined);
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            var config = this.layoutConfigSubject.value;

            if (!config) {
              return _configs_default_layout_config__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutConfigPortal"];
            }

            return config;
          }
        }, {
          key: "setConfig",
          value: function setConfig(config) {
            if (!config) {
              this.removeConfig();
            } else {
              localStorage.setItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
            }

            this.layoutConfigSubject.next(config);
          }
        }, {
          key: "setConfigWithoutLocalStorageChanges",
          value: function setConfigWithoutLocalStorageChanges(config) {
            this.layoutConfigSubject.next(config);
          }
        }, {
          key: "setConfigWithPageRefresh",
          value: function setConfigWithPageRefresh(config) {
            this.setConfig(config);
            document.location.reload();
          }
        }, {
          key: "getProp",
          value: function getProp(path) {
            return object_path__WEBPACK_IMPORTED_MODULE_4__["get"](this.layoutConfigSubject.value, path);
          }
        }, {
          key: "setCSSClass",
          value: function setCSSClass(path, classesInStr) {
            var _this = this;

            var cssClasses = this.classes[path];

            if (!cssClasses) {
              this.classes[path] = [];
            }

            classesInStr.split(' ').forEach(function (cssClass) {
              return _this.classes[path].push(cssClass);
            });
          }
        }, {
          key: "getCSSClasses",
          value: function getCSSClasses(path) {
            var cssClasses = this.classes[path];

            if (!cssClasses) {
              return [];
            }

            return cssClasses;
          }
        }, {
          key: "getStringCSSClasses",
          value: function getStringCSSClasses(path) {
            return this.getCSSClasses(path).join(' ');
          }
        }, {
          key: "getHTMLAttributes",
          value: function getHTMLAttributes(path) {
            var attributesObj = this.attrs[path];

            if (!attributesObj) {
              return {};
            }

            return attributesObj;
          }
        }, {
          key: "setHTMLAttribute",
          value: function setHTMLAttribute(path, attrKey, attrValue) {
            var attributesObj = this.attrs[path];

            if (!attributesObj) {
              this.attrs[path] = {};
            }

            this.attrs[path][attrKey] = attrValue;
          }
        }]);

        return LayoutService;
      }();

      LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || LayoutService)();
      };

      LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayoutService,
        factory: LayoutService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fNzJ":
    /*!******************************************************************!*\
      !*** ./src/app/_metronic_portal/core/pipes/first-letter.pipe.ts ***!
      \******************************************************************/

    /*! exports provided: FirstLetterPipe */

    /***/
    function fNzJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirstLetterPipe", function () {
        return FirstLetterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Angular

      /**
       * Returns only first letter of string
       */


      var FirstLetterPipe = /*#__PURE__*/function () {
        function FirstLetterPipe() {
          _classCallCheck(this, FirstLetterPipe);
        }

        _createClass(FirstLetterPipe, [{
          key: "transform",
          value:
          /**
           * Transform
           *
           * @param value: any
           * @param args: any
           */
          function transform(value, args) {
            return value.split(' ').map(function (n) {
              return n[0];
            }).join('');
          }
        }]);

        return FirstLetterPipe;
      }();

      FirstLetterPipe.ɵfac = function FirstLetterPipe_Factory(t) {
        return new (t || FirstLetterPipe)();
      };

      FirstLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "firstLetter",
        type: FirstLetterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstLetterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'firstLetter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lUOe":
    /*!***********************************************************************!*\
      !*** ./src/app/_metronic_portal/core/services/layout-init.service.ts ***!
      \***********************************************************************/

    /*! exports provided: LayoutInitService */

    /***/
    function lUOe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutInitService", function () {
        return LayoutInitService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout.service */
      "eaHq");

      var LayoutInitService = /*#__PURE__*/function () {
        function LayoutInitService(layout) {
          _classCallCheck(this, LayoutInitService);

          this.layout = layout;
        }

        _createClass(LayoutInitService, [{
          key: "init",
          value: function init() {
            this.layout.initConfig();
            this.preInitLayout(); // init base layout

            this.initLayout();
            this.initLoader(); // init header and subheader menu

            this.initHeader();
            this.initSubheader(); // init content

            this.initContent(); // init aside and aside menu

            this.initAside(); // init footer

            this.initFooter();
            this.initSkins();
          } // init base layout

        }, {
          key: "preInitLayout",
          value: function preInitLayout() {
            var config = this.layout.getConfig();
            var updatedConfig = Object.assign({}, config);
            var subheaderFixed = this.layout.getProp('subheader.fixed');
            var headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');

            if (subheaderFixed && headerSelfFixedDesktop) {
              updatedConfig.subheader.style = 'solid';
            } else {
              updatedConfig.subheader.fixed = false;
            }

            this.layout.setConfigWithoutLocalStorageChanges(updatedConfig);
          }
        }, {
          key: "initLayout",
          value: function initLayout() {
            var selfBodyBackgroundImage = this.layout.getProp('self.body.background-image');

            if (selfBodyBackgroundImage) {
              document.body.style.backgroundImage = "url(\"".concat(selfBodyBackgroundImage, "\")");
            }

            var selfBodyClass = (this.layout.getProp('self.body.class') || '').toString();

            if (selfBodyClass) {
              var bodyClasses = selfBodyClass.split(' ');
              bodyClasses.forEach(function (cssClass) {
                return document.body.classList.add(cssClass);
              });
            }
          }
        }, {
          key: "initLoader",
          value: function initLoader() {} // init header and subheader menu

        }, {
          key: "initHeader",
          value: function initHeader() {
            // Fixed header
            var headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');

            if (headerSelfFixedDesktop) {
              document.body.classList.add('header-fixed');
              this.layout.setCSSClass('header', 'header-fixed');
            } else {
              document.body.classList.add('header-static');
            }

            var headerSelfFixedMobile = this.layout.getProp('header.self.fixed.mobile');

            if (headerSelfFixedMobile) {
              document.body.classList.add('header-mobile-fixed');
              this.layout.setCSSClass('header_mobile', 'header-mobile-fixed');
            } // Menu


            var headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display');
            var headerMenuSelfLayout = this.layout.getProp('header.menu.self.layout');

            if (headerMenuSelfDisplay) {
              this.layout.setCSSClass('header_menu', "header-menu-layout-".concat(headerMenuSelfLayout));

              if (this.layout.getProp('header.menu.self.rootArrow')) {
                this.layout.setCSSClass('header_menu', 'header-menu-root-arrow');
              }
            }

            if (this.layout.getProp('header.self.width') === 'fluid') {
              this.layout.setCSSClass('header_container', 'container-fluid');
            } else {
              this.layout.setCSSClass('header_container', 'container');
            }
          }
        }, {
          key: "initSubheader",
          value: function initSubheader() {
            var subheaderDisplay = this.layout.getProp('subheader.display');

            if (subheaderDisplay) {
              document.body.classList.add('subheader-enabled');
            } else {
              return;
            } // Fixed content head


            var subheaderFixed = this.layout.getProp('subheader.fixed');
            var headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');

            if (subheaderFixed && headerSelfFixedDesktop) {
              document.body.classList.add('subheader-fixed');
            }

            var subheaderStyle = this.layout.getProp('subheader.style');

            if (subheaderStyle) {
              this.layout.setCSSClass('subheader', "subheader-".concat(subheaderStyle));
            }

            if (this.layout.getProp('subheader.width') === 'fluid') {
              this.layout.setCSSClass('subheader_container', 'container-fluid');
            } else {
              this.layout.setCSSClass('subheader_container', 'container');
            }

            if (this.layout.getProp('subheader.clear')) {
              this.layout.setCSSClass('subheader', 'mb-0');
            }
          } // init content

        }, {
          key: "initContent",
          value: function initContent() {
            if (this.layout.getProp('content.fit-top')) {
              this.layout.setCSSClass('content', 'pt-0');
            }

            if (this.layout.getProp('content.fit-bottom')) {
              this.layout.setCSSClass('content', 'pb-0');
            }

            if (this.layout.getProp('content.width') === 'fluid') {
              this.layout.setCSSClass('content_container', 'container-fluid');
            } else {
              this.layout.setCSSClass('content_container', 'container');
            }
          } // init aside and aside menu

        }, {
          key: "initAside",
          value: function initAside() {
            if (this.layout.getProp('aside.self.display') !== true) {
              return;
            } // Enable Aside


            document.body.classList.add('aside-enabled'); // Fixed Aside

            if (this.layout.getProp('aside.self.fixed')) {
              document.body.classList.add('aside-fixed');
              this.layout.setCSSClass('aside', 'aside-fixed');
            } else {
              document.body.classList.add('aside-static');
            } // Check Aside


            if (this.layout.getProp('aside.self.display') !== true) {
              return;
            } // Default fixed


            if (this.layout.getProp('aside.self.minimize.default')) {
              document.body.classList.add('aside-minimize');
            }

            if (this.layout.getProp('aside.self.minimize.hoverable')) {
              document.body.classList.add('aside-minimize-hoverable');
            } // Menu
            // Dropdown Submenu


            var asideMenuDropdown = this.layout.getProp('aside.menu.dropdown');

            if (asideMenuDropdown) {
              this.layout.setCSSClass('aside_menu', 'aside-menu-dropdown');
              this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown', '1');
            } // Scrollable Menu


            if (asideMenuDropdown !== true) {
              this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '1');
            } else {
              this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '0');
            }

            var asideMenuSubmenuDropdownHoverTimout = this.layout.getProp('aside.menu.submenu.dropdown.hoverTimeout');

            if (asideMenuSubmenuDropdownHoverTimout) {
              this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown-timeout', asideMenuSubmenuDropdownHoverTimout);
            }
          } // init footer

        }, {
          key: "initFooter",
          value: function initFooter() {
            // Fixed header
            if (this.layout.getProp('footer.fixed') === true) {
              document.body.classList.add('footer-fixed');
            }

            if (this.layout.getProp('footer.width') === 'fluid') {
              this.layout.setCSSClass('footer_container', 'container-fluid');
            } else {
              this.layout.setCSSClass('footer_container', 'container');
            }
          }
          /**
           * Set the body class name based on page skin options
           */

        }, {
          key: "initSkins",
          value: function initSkins() {
            var headerSelfTheme = this.layout.getProp('header.self.theme') || '';
            var brandSelfTheme = this.layout.getProp('brand.self.theme') || '';
            var asideSelfDisplay = this.layout.getProp('aside.self.display');

            if (asideSelfDisplay === false) {
              document.body.classList.add("brand-".concat(headerSelfTheme));
            } else {
              document.body.classList.add("brand-".concat(brandSelfTheme));
            }
          }
        }]);

        return LayoutInitService;
      }();

      LayoutInitService.ɵfac = function LayoutInitService_Factory(t) {
        return new (t || LayoutInitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]));
      };

      LayoutInitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayoutInitService,
        factory: LayoutInitService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutInitService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qTXg":
    /*!******************************************************************!*\
      !*** ./src/app/_metronic_portal/core/utils/date-picker.utils.ts ***!
      \******************************************************************/

    /*! exports provided: CustomAdapter, CustomDateParserFormatter */

    /***/
    function qTXg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomAdapter", function () {
        return CustomAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function () {
        return CustomDateParserFormatter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /**
       * This Service handles how the date is represented in scripts i.e. ngModel.
       */


      var CustomAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(CustomAdapter, _ng_bootstrap_ng_boot);

        var _super = _createSuper(CustomAdapter);

        function CustomAdapter() {
          var _this2;

          _classCallCheck(this, CustomAdapter);

          _this2 = _super.apply(this, arguments);
          _this2.DELIMITER = '/';
          return _this2;
        }

        _createClass(CustomAdapter, [{
          key: "fromModel",
          value: function fromModel(value) {
            if (value) {
              var date = value.split(this.DELIMITER);
              return {
                month: parseInt(date[0], 10),
                day: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
              };
            }

            return null;
          }
        }, {
          key: "toModel",
          value: function toModel(date) {
            return date ? date.month + this.DELIMITER + date.day + this.DELIMITER + date.year : null;
          }
        }]);

        return CustomAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"]);

      CustomAdapter.ɵfac = function CustomAdapter_Factory(t) {
        return ɵCustomAdapter_BaseFactory(t || CustomAdapter);
      };

      CustomAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomAdapter,
        factory: CustomAdapter.ɵfac,
        providedIn: 'root'
      });

      var ɵCustomAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
       */


      var CustomDateParserFormatter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
        _inherits(CustomDateParserFormatter, _ng_bootstrap_ng_boot2);

        var _super2 = _createSuper(CustomDateParserFormatter);

        function CustomDateParserFormatter() {
          var _this3;

          _classCallCheck(this, CustomDateParserFormatter);

          _this3 = _super2.apply(this, arguments);
          _this3.DELIMITER = '/';
          return _this3;
        }

        _createClass(CustomDateParserFormatter, [{
          key: "parse",
          value: function parse(value) {
            if (value) {
              var date = value.split(this.DELIMITER);
              return {
                month: parseInt(date[0], 10),
                day: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
              };
            }

            return null;
          }
        }, {
          key: "format",
          value: function format(date) {
            return date ? date.month + this.DELIMITER + date.day + this.DELIMITER + date.year : '';
          }
        }]);

        return CustomDateParserFormatter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]);

      CustomDateParserFormatter.ɵfac = function CustomDateParserFormatter_Factory(t) {
        return ɵCustomDateParserFormatter_BaseFactory(t || CustomDateParserFormatter);
      };

      CustomDateParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CustomDateParserFormatter,
        factory: CustomDateParserFormatter.ɵfac,
        providedIn: 'root'
      });

      var ɵCustomDateParserFormatter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomDateParserFormatter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDateParserFormatter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "rf0u":
    /*!***********************************************************************!*\
      !*** ./src/app/_metronic_portal/configs/dynamic-aside-menu.config.ts ***!
      \***********************************************************************/

    /*! exports provided: DynamicAsideMenuConfig */

    /***/
    function rf0u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicAsideMenuConfig", function () {
        return DynamicAsideMenuConfig;
      });

      var DynamicAsideMenuConfig = {
        items: [{
          title: 'Dashboard',
          root: true,
          icon: 'flaticon2-architecture-and-city',
          svg: './assets/media/svg/icons/Design/Layers.svg',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD',
          bullet: 'dot'
        }, {
          title: 'Layout Builder',
          root: true,
          icon: 'flaticon2-expand',
          page: '/builder',
          svg: './assets/media/svg/icons/Home/Library.svg'
        }, {
          section: 'Components'
        }, {
          title: 'Google Material',
          root: true,
          bullet: 'dot',
          page: '/material',
          icon: 'flaticon2-browser-2',
          svg: './assets/media/svg/icons/Design/Cap-2.svg',
          submenu: [{
            title: 'Form Controls',
            bullet: 'dot',
            page: '/material/form-controls',
            submenu: [{
              title: 'Auto Complete',
              page: '/material/form-controls/autocomplete',
              permission: 'accessToECommerceModule'
            }, {
              title: 'Checkbox',
              page: '/material/form-controls/checkbox'
            }, {
              title: 'Radio Button',
              page: '/material/form-controls/radiobutton'
            }, {
              title: 'Datepicker',
              page: '/material/form-controls/datepicker'
            }, {
              title: 'Form Field',
              page: '/material/form-controls/formfield'
            }, {
              title: 'Input',
              page: '/material/form-controls/input'
            }, {
              title: 'Select',
              page: '/material/form-controls/select'
            }, {
              title: 'Slider',
              page: '/material/form-controls/slider'
            }, {
              title: 'Slider Toggle',
              page: '/material/form-controls/slidertoggle'
            }]
          }, {
            title: 'Navigation',
            bullet: 'dot',
            page: '/material/navigation',
            submenu: [{
              title: 'Menu',
              page: '/material/navigation/menu'
            }, {
              title: 'Sidenav',
              page: '/material/navigation/sidenav'
            }, {
              title: 'Toolbar',
              page: '/material/navigation/toolbar'
            }]
          }, {
            title: 'Layout',
            bullet: 'dot',
            page: '/material/layout',
            submenu: [{
              title: 'Card',
              page: '/material/layout/card'
            }, {
              title: 'Divider',
              page: '/material/layout/divider'
            }, {
              title: 'Expansion panel',
              page: '/material/layout/expansion-panel'
            }, {
              title: 'Grid list',
              page: '/material/layout/grid-list'
            }, {
              title: 'List',
              page: '/material/layout/list'
            }, {
              title: 'Tabs',
              page: '/material/layout/tabs'
            }, {
              title: 'Stepper',
              page: '/material/layout/stepper'
            }, {
              title: 'Tree',
              page: '/material/layout/tree'
            }]
          }, {
            title: 'Buttons & Indicators',
            bullet: 'dot',
            page: '/material/buttons-and-indicators',
            submenu: [{
              title: 'Button',
              page: '/material/buttons-and-indicators/button'
            }, {
              title: 'Button toggle',
              page: '/material/buttons-and-indicators/button-toggle'
            }, {
              title: 'Chips',
              page: '/material/buttons-and-indicators/chips'
            }, {
              title: 'Icon',
              page: '/material/buttons-and-indicators/icon'
            }, {
              title: 'Progress bar',
              page: '/material/buttons-and-indicators/progress-bar'
            }, {
              title: 'Progress spinner',
              page: '/material/buttons-and-indicators/progress-spinner'
            }, {
              title: 'Ripples',
              page: '/material/buttons-and-indicators/ripples'
            }]
          }, {
            title: 'Popups & Modals',
            bullet: 'dot',
            page: '/material/popups-and-modals',
            submenu: [{
              title: 'Bottom sheet',
              page: '/material/popups-and-modals/bottom-sheet'
            }, {
              title: 'Dialog',
              page: '/material/popups-and-modals/dialog'
            }, {
              title: 'Snackbar',
              page: '/material/popups-and-modals/snackbar'
            }, {
              title: 'Tooltip',
              page: '/material/popups-and-modals/tooltip'
            }]
          }, {
            title: 'Data table',
            bullet: 'dot',
            page: '/material/data-table',
            submenu: [{
              title: 'Paginator',
              page: '/material/data-table/paginator'
            }, {
              title: 'Sort header',
              page: '/material/data-table/sort-header'
            }, {
              title: 'Table',
              page: '/material/data-table/table'
            }]
          }]
        }, {
          title: 'Ng-Bootstrap',
          root: true,
          bullet: 'dot',
          page: '/ngbootstrap',
          icon: 'flaticon2-digital-marketing',
          svg: './assets/media/svg/icons/Shopping/Bitcoin.svg',
          submenu: [{
            title: 'Accordion',
            page: '/ngbootstrap/accordion'
          }, {
            title: 'Alert',
            page: '/ngbootstrap/alert'
          }, {
            title: 'Buttons',
            page: '/ngbootstrap/buttons'
          }, {
            title: 'Carousel',
            page: '/ngbootstrap/carousel'
          }, {
            title: 'Collapse',
            page: '/ngbootstrap/collapse'
          }, {
            title: 'Datepicker',
            page: '/ngbootstrap/datepicker'
          }, {
            title: 'Dropdown',
            page: '/ngbootstrap/dropdown'
          }, {
            title: 'Modal',
            page: '/ngbootstrap/modal'
          }, {
            title: 'Pagination',
            page: '/ngbootstrap/pagination'
          }, {
            title: 'Popover',
            page: '/ngbootstrap/popover'
          }, {
            title: 'Progressbar',
            page: '/ngbootstrap/progressbar'
          }, {
            title: 'Rating',
            page: '/ngbootstrap/rating'
          }, {
            title: 'Tabs',
            page: '/ngbootstrap/tabs'
          }, {
            title: 'Timepicker',
            page: '/ngbootstrap/timepicker'
          }, {
            title: 'Tooltips',
            page: '/ngbootstrap/tooltip'
          }, {
            title: 'Typehead',
            page: '/ngbootstrap/typehead'
          }]
        }, {
          section: 'Applications'
        }, {
          title: 'eCommerce',
          bullet: 'dot',
          icon: 'flaticon2-list-2',
          svg: './assets/media/svg/icons/Shopping/Cart3.svg',
          root: true,
          permission: 'accessToECommerceModule',
          page: '/ecommerce',
          submenu: [{
            title: 'Customers',
            page: '/ecommerce/customers'
          }, {
            title: 'Products',
            page: '/ecommerce/products'
          }]
        }, {
          title: 'User Management',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-user-outline-symbol',
          svg: './assets/media/svg/icons/General/User.svg',
          page: '/user-management',
          submenu: [{
            title: 'Users',
            page: '/user-management/users'
          }, {
            title: 'Roles',
            page: '/user-management/roles'
          }]
        }, {
          title: 'User Profile',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-user-outline-symbol',
          svg: './assets/media/svg/icons/Communication/Add-user.svg',
          page: '/user-profile'
        }, {
          section: 'Custom'
        }, {
          title: 'Wizards',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-mail-1',
          svg: './assets/media/svg/icons/Shopping/Box1.svg',
          page: '/wizards',
          submenu: [{
            title: 'Wizard 1',
            page: '/wizards/wizard-1'
          }, {
            title: 'Wizard 2',
            page: '/wizards/wizard-2'
          }, {
            title: 'Wizard 3',
            page: '/wizards/wizard-3'
          }, {
            title: 'Wizard 4',
            page: '/wizards/wizard-4'
          }]
        }, {
          title: 'Error Pages',
          root: true,
          bullet: 'dot',
          icon: 'flaticon2-list-2',
          svg: './assets/media/svg/icons/Code/Warning-2.svg',
          page: '/error',
          submenu: [{
            title: 'Error 1',
            page: '/error/error-1'
          }, {
            title: 'Error 2',
            page: '/error/error-2'
          }, {
            title: 'Error 3',
            page: '/error/error-3'
          }, {
            title: 'Error 4',
            page: '/error/error-4'
          }, {
            title: 'Error 5',
            page: '/error/error-5'
          }, {
            title: 'Error 6',
            page: '/error/error-6'
          }]
        }]
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~gestion-actividades-actividades-module~gestion-ofertas-ofertas-module~pages-layout-portal-module-es5.js.map