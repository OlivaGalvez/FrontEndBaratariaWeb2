(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "64N7":
/*!********************************************!*\
  !*** ./src/app/services/enlace.service.ts ***!
  \********************************************/
/*! exports provided: EnlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnlaceService", function() { return EnlaceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_fake */ "ArPJ");
/* harmony import */ var _metronic_gestion_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_metronic_gestion/shared/crud-table */ "BJ2y");







class EnlaceService extends _metronic_gestion_shared_crud_table__WEBPACK_IMPORTED_MODULE_5__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}` + 'api/Enlaces/';
    }
    aniadirEnlace(enlace) {
        const formData = new FormData();
        formData.append("enlace", JSON.stringify(enlace));
        formData.append("imagen", enlace.file, enlace.file.name);
        return this.http.post(this.API_URL, formData);
    }
    obtenerEnlaces() {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result));
    }
    // Necesario para mostrar los enlaces en la tabla de listado
    find(tableState) {
        return this.http.get(this.API_URL + "?portal=false").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const filteredResult = Object(_fake__WEBPACK_IMPORTED_MODULE_4__["baseFilter"])(response, tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            return result;
        }));
    }
    getById(id) {
        return this.http.get(this.API_URL + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result));
    }
    modificarEnlace(enlace) {
        const formData = new FormData();
        formData.append("enlace", JSON.stringify(enlace));
        if (enlace.file)
            formData.append("imagen", enlace.file, enlace.file.name);
        return this.http.put(this.API_URL + enlace.id, formData);
    }
    eliminarEnlace(id) {
        return this.http.delete(this.API_URL + id);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
EnlaceService.ɵfac = function EnlaceService_Factory(t) { return new (t || EnlaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
EnlaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EnlaceService, factory: EnlaceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EnlaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "XFpC":
/*!***********************************************!*\
  !*** ./src/app/services/actividad.service.ts ***!
  \***********************************************/
/*! exports provided: ActividadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesService", function() { return ActividadesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _metronic_portal_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_metronic_portal/shared/crud-table */ "Vivx");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_fake */ "ArPJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");







class ActividadesService extends _metronic_portal_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}` + 'api/Actividades/';
    }
    aniadirActividad(actividad) {
        const formData = new FormData();
        formData.append("actividad", JSON.stringify(actividad));
        formData.append("imagen", actividad.file, actividad.file.name);
        return this.http.post(this.API_URL, formData);
    }
    modificarActividad(actividad) {
        const formData = new FormData();
        formData.append("actividad", JSON.stringify(actividad));
        if (actividad.file)
            formData.append("imagen", actividad.file, actividad.file.name);
        return this.http.put(this.API_URL + actividad.id, formData);
    }
    eliminarActividad(id) {
        return this.http.delete(this.API_URL + id);
    }
    obtenerActividades() {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result));
    }
    getById(id) {
        return this.http.get(this.API_URL + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result));
    }
    // Necesario para mostrar las actividades en la tabla de listado
    find(tableState) {
        return this.http.get(this.API_URL + "?portal=false").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const filteredResult = Object(_fake__WEBPACK_IMPORTED_MODULE_4__["baseFilter"])(response, tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            return result;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
ActividadesService.ɵfac = function ActividadesService_Factory(t) { return new (t || ActividadesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ActividadesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActividadesService, factory: ActividadesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActividadesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "qpnr":
/*!**********************************************!*\
  !*** ./src/app/services/convenio.service.ts ***!
  \**********************************************/
/*! exports provided: ConveniosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConveniosService", function() { return ConveniosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _metronic_portal_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_metronic_portal/shared/crud-table */ "Vivx");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_fake */ "ArPJ");







class ConveniosService extends _metronic_portal_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}` + 'api/Convenios/';
    }
    aniadirConvenio(convenio) {
        const formData = new FormData();
        formData.append("convenio", JSON.stringify(convenio));
        formData.append("imagen", convenio.file, convenio.file.name);
        return this.http.post(this.API_URL, formData);
    }
    obtenerConvenios() {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result));
    }
    find(tableState) {
        return this.http.get(this.API_URL + "?portal=false").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            const filteredResult = Object(_fake__WEBPACK_IMPORTED_MODULE_5__["baseFilter"])(response, tableState);
            const result = {
                items: filteredResult.items,
                total: filteredResult.total
            };
            return result;
        }));
    }
    getById(id) {
        return this.http.get(this.API_URL + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result));
    }
    modificarConvenio(convenio) {
        const formData = new FormData();
        formData.append("convenio", JSON.stringify(convenio));
        if (convenio.file)
            formData.append("imagen", convenio.file, convenio.file.name);
        return this.http.put(this.API_URL + convenio.id, formData);
    }
    eliminarConvenio(id) {
        return this.http.delete(this.API_URL + id);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
ConveniosService.ɵfac = function ConveniosService_Factory(t) { return new (t || ConveniosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ConveniosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConveniosService, factory: ConveniosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConveniosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map