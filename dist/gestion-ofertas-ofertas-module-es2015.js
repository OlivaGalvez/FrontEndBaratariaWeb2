(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestion-ofertas-ofertas-module"],{

/***/ "6YdR":
/*!********************************************************************************************!*\
  !*** ./src/app/gestion/ofertas/nueva/documentacion-modal/documentacion-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DocumentacionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionModalComponent", function() { return DocumentacionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DocumentacionModalComponent_ng_container_2_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DocumentacionModalComponent_ng_container_2_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nuevo documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DocumentacionModalComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocumentacionModalComponent_ng_container_2_h3_1_Template, 2, 0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DocumentacionModalComponent_ng_container_2_h3_2_Template, 2, 0, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.documento.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.documento.id);
} }
function DocumentacionModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre del documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentacionModalComponent_ng_container_4_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroup);
} }
function DocumentacionModalComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentacionModalComponent_ng_container_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.formGroup.invalid);
} }
class DocumentacionModalComponent {
    constructor(fb, modal) {
        this.fb = fb;
        this.modal = modal;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.loadForm();
    }
    loadForm() {
        this.formGroup = this.fb.group({
            nombre: [this.documento.nombre, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onChange(event) {
        const file = event.target.files[0];
        this.formGroup.patchValue({
            file: file
        });
        this.formGroup.get('file').updateValueAndValidity();
    }
    guardar() {
        const formData = this.formGroup.value;
        if (!this.documento.id) {
            this.documento.id = Math.floor((Math.random() * 6) + 1);
        }
        this.documento.nombre = formData.nombre;
        this.documento.file = formData.file;
        this.documento.tamanio = this.niceBytes(formData.file.size);
        this.passEntry.emit(this.documento);
        this.modal.close(this.documento);
        this.formGroup.reset();
    }
    niceBytes(x) {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0, n = parseInt(x, 10) || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }
}
DocumentacionModalComponent.ɵfac = function DocumentacionModalComponent_Factory(t) { return new (t || DocumentacionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
DocumentacionModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentacionModalComponent, selectors: [["app-documentacion-modal"]], inputs: { documento: "documento" }, outputs: { passEntry: "passEntry" }, decls: 9, vars: 3, consts: [[1, "modal-content"], [1, "modal-header"], [4, "ngIf"], [1, "overlay", "overlay-block", "cursor-default", "modal-body", 2, "min-height", "204px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], ["class", "card-label", 4, "ngIf"], [1, "card-label"], ["action", "#", 1, "form", "form-label-right", 3, "formGroup"], [1, "form-group", "row"], [1, "col-lg-12"], [1, "form-label"], ["type", "text", "formControlName", "nombre", 1, "form-control", "form-control-lg", "form-control-solid"], [1, "form-group"], ["type", "file", "accept", "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n                    text/plain, application/pdf, image/*", 3, "change"], ["fileInput", ""], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "disabled", "click"]], template: function DocumentacionModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DocumentacionModalComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DocumentacionModalComponent_ng_container_4_Template, 10, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentacionModalComponent_Template_button_click_6_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DocumentacionModalComponent_ng_container_8_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documento);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudGFjaW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentacionModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-documentacion-modal',
                templateUrl: './documentacion-modal.component.html',
                styleUrls: ['./documentacion-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }]; }, { documento: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "8c57":
/*!********************************************!*\
  !*** ./src/app/services/oferta.service.ts ***!
  \********************************************/
/*! exports provided: OfertaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaService", function() { return OfertaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _metronic_portal_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_metronic_portal/shared/crud-table */ "Vivx");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_fake */ "ArPJ");







class OfertaService extends _metronic_portal_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__["TableService"] {
    constructor(http) {
        super(http);
        this.API_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}` + 'api/Ofertas/';
    }
    aniadirOferta(oferta) {
        const formData = new FormData();
        formData.append("oferta", JSON.stringify(oferta));
        formData.append("imagen", oferta.file, oferta.file.name);
        return this.http.post(this.API_URL, formData);
    }
    getById(id) {
        return this.http.get(this.API_URL + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result));
    }
    modificarOferta(oferta) {
        const formData = new FormData();
        formData.append("oferta", JSON.stringify(oferta));
        if (oferta.file)
            formData.append("imagen", oferta.file, oferta.file.name);
        return this.http.put(this.API_URL + oferta.id, formData);
    }
    eliminarOferta(id) {
        return this.http.delete(this.API_URL + id);
    }
    obtenerOfertas() {
        return this.http.get(this.API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result));
    }
    // Necesario para mostrar las actividades en la tabla de listado
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
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
}
OfertaService.ɵfac = function OfertaService_Factory(t) { return new (t || OfertaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OfertaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OfertaService, factory: OfertaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfertaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "JJe5":
/*!***************************************************!*\
  !*** ./src/app/gestion/ofertas/ofertas.module.ts ***!
  \***************************************************/
/*! exports provided: OfertasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasModule", function() { return OfertasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
/* harmony import */ var src_app_services_date_formatter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/date-formatter.service */ "4NA8");
/* harmony import */ var src_app_metronic_portal_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_metronic_portal/partials/content/general/general.module */ "ry4o");
/* harmony import */ var src_app_metronic_gestion_shared_crud_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_metronic_gestion/shared/crud-table */ "BJ2y");
/* harmony import */ var _nueva_nueva_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nueva/nueva.component */ "cZTG");
/* harmony import */ var _listado_listado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listado/listado.component */ "rmBQ");
/* harmony import */ var _nueva_documentacion_modal_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nueva/documentacion-modal/documentacion-modal.component */ "6YdR");
/* harmony import */ var _nueva_eliminar_documentacion_modal_eliminar_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nueva/eliminar-documentacion-modal/eliminar-documentacion-modal.component */ "gmsZ");
















class OfertasModule {
}
OfertasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OfertasModule });
OfertasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OfertasModule_Factory(t) { return new (t || OfertasModule)(); }, providers: [
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], useClass: src_app_services_date_formatter_service__WEBPACK_IMPORTED_MODULE_7__["NgbDateCustomParserFormatter"] } // <-- add this
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: 'nueva',
                    component: _nueva_nueva_component__WEBPACK_IMPORTED_MODULE_10__["NuevaComponent"],
                },
                {
                    path: 'gestion/:id',
                    component: _nueva_nueva_component__WEBPACK_IMPORTED_MODULE_10__["NuevaComponent"],
                },
                {
                    path: 'listado',
                    component: _listado_listado_component__WEBPACK_IMPORTED_MODULE_11__["ListadoComponent"],
                }
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            src_app_metronic_portal_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_8__["GeneralModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"],
            src_app_metronic_gestion_shared_crud_table__WEBPACK_IMPORTED_MODULE_9__["CRUDTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OfertasModule, { declarations: [_nueva_nueva_component__WEBPACK_IMPORTED_MODULE_10__["NuevaComponent"],
        _listado_listado_component__WEBPACK_IMPORTED_MODULE_11__["ListadoComponent"],
        _nueva_documentacion_modal_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_12__["DocumentacionModalComponent"],
        _nueva_eliminar_documentacion_modal_eliminar_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_13__["EliminarDocumentacionModalComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        src_app_metronic_portal_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_8__["GeneralModule"],
        ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"],
        src_app_metronic_gestion_shared_crud_table__WEBPACK_IMPORTED_MODULE_9__["CRUDTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfertasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _nueva_nueva_component__WEBPACK_IMPORTED_MODULE_10__["NuevaComponent"],
                    _listado_listado_component__WEBPACK_IMPORTED_MODULE_11__["ListadoComponent"],
                    _nueva_documentacion_modal_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_12__["DocumentacionModalComponent"],
                    _nueva_eliminar_documentacion_modal_eliminar_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_13__["EliminarDocumentacionModalComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                        {
                            path: 'nueva',
                            component: _nueva_nueva_component__WEBPACK_IMPORTED_MODULE_10__["NuevaComponent"],
                        },
                        {
                            path: 'gestion/:id',
                            component: _nueva_nueva_component__WEBPACK_IMPORTED_MODULE_10__["NuevaComponent"],
                        },
                        {
                            path: 'listado',
                            component: _listado_listado_component__WEBPACK_IMPORTED_MODULE_11__["ListadoComponent"],
                        }
                    ]),
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    src_app_metronic_portal_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_8__["GeneralModule"],
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"],
                    src_app_metronic_gestion_shared_crud_table__WEBPACK_IMPORTED_MODULE_9__["CRUDTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [
                    { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], useClass: src_app_services_date_formatter_service__WEBPACK_IMPORTED_MODULE_7__["NgbDateCustomParserFormatter"] } // <-- add this
                ],
                entryComponents: [
                    _nueva_documentacion_modal_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_12__["DocumentacionModalComponent"],
                    _nueva_eliminar_documentacion_modal_eliminar_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_13__["EliminarDocumentacionModalComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "cZTG":
/*!**********************************************************!*\
  !*** ./src/app/gestion/ofertas/nueva/nueva.component.ts ***!
  \**********************************************************/
/*! exports provided: NuevaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaComponent", function() { return NuevaComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _documentacion_modal_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentacion-modal/documentacion-modal.component */ "6YdR");
/* harmony import */ var _eliminar_documentacion_modal_eliminar_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eliminar-documentacion-modal/eliminar-documentacion-modal.component */ "gmsZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_oferta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/oferta.service */ "8c57");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _metronic_portal_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../_metronic_portal/partials/content/general/notice/notice.component */ "RT6c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");


















const _c0 = ["fileInput"];
function NuevaComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.form.invalid);
} }
function NuevaComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.editarForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NuevaComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.eliminarForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NuevaComponent_button_60_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_button_60_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.crearDocumentacion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " A\u00F1adir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NuevaComponent_tr_77_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_tr_77_div_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.editarDocumento(item_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_tr_77_div_12_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.eliminarDocumento(item_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Communication/Write.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/General/Trash.svg");
} }
function NuevaComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_tr_77_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const item_r16 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.download(item_r16.url, item_r16.original); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_tr_77_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const item_r16 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.download(item_r16.url, item_r16.original); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NuevaComponent_tr_77_div_12_Template, 5, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.original);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.tamanio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.mostrarBotonesGeneral);
} }
function NuevaComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NuevaComponent_div_86_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_div_86_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.reset(_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r8.mostrarImagen ? "mostrarImagenArea" : "ocultarImagenArea");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NuevaComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r9.mostrarImagen ? "mostrarImagenArea" : "ocultarImagenArea");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r9.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class NuevaComponent {
    constructor(formBuilder, activatedRouter, router, ofertaService, uploadService, ref, toastr, modalService) {
        this.formBuilder = formBuilder;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.ofertaService = ofertaService;
        this.uploadService = uploadService;
        this.ref = ref;
        this.toastr = toastr;
        this.modalService = modalService;
        this.disabledCampos = true;
        this.mostrarBotonesGeneral = true;
        this.mostrarBotonEdit = true;
        this.mostrarBotonDelete = false;
        this.currentDate = new Date();
        this.base64textString = "";
        this.imagePath = "";
        this.mostrarImagen = false;
        this.listDocumentacion = [];
    }
    ngOnInit() {
        this.idOferta = this.activatedRouter.snapshot.paramMap.get('id');
        this.isAddMode = !this.idOferta;
        if (this.isAddMode) {
            this.disabledCampos = false;
            this.mostrarBotonEdit = false;
        }
        else {
            this.mostrarBotonesGeneral = false;
        }
        this.form = this.formBuilder.group({
            id: 0,
            titulo: [{
                    value: '',
                    disabled: this.disabledCampos,
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fechaAlta: [{
                    value: null,
                    disabled: true,
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fechaInicio: [{
                    value: null,
                    disabled: this.disabledCampos,
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fechaFin: [{
                    value: null,
                    disabled: this.disabledCampos,
                }],
            mostrar: [{
                    value: null,
                    disabled: this.disabledCampos,
                }],
            file: [null],
            imagenServidor: [null]
        });
        if (this.isAddMode) {
            const fechaAltaAux = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1,
                day: this.currentDate.getDate() };
            this.form.patchValue({
                fechaAlta: fechaAltaAux,
                fechaInicio: fechaAltaAux
            });
        }
        else {
            this.ofertaService.getById(this.idOferta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.mostrarDatosAlEditar(data))).subscribe(result => this.form.patchValue({
                titulo: result.titulo,
                mostrar: result.mostrar,
                fechaAlta: { year: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
                    month: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getMonth(),
                    day: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getDate() },
                fechaInicio: result.fechaInicio != null ? { year: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaInicio).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
                    month: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaInicio).format("YYYY-MM-DD HH:mm:ss")).getMonth(),
                    day: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaInicio).format("YYYY-MM-DD HH:mm:ss")).getDate() } : null,
                fechaFin: result.fechaFin != null ? { year: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaFin).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
                    month: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaFin).format("YYYY-MM-DD HH:mm:ss")).getMonth(),
                    day: new Date(moment__WEBPACK_IMPORTED_MODULE_3__(result.fechaFin).format("YYYY-MM-DD HH:mm:ss")).getDate() } : null,
            }));
        }
    }
    mostrarDatosAlEditar(data) {
        this.oferta = data;
        this.mostrarImagen = true;
        this.imagePath = this.oferta.imagenServidorBase64;
        this.listDocumentacion = this.oferta.listDocumentos;
    }
    editarForm() {
        this.mostrarBotonesGeneral = true;
        this.mostrarBotonEdit = false;
        this.mostrarBotonDelete = true;
        this.form.get('titulo').enable();
        this.form.get('fechaInicio').enable();
        this.form.get('fechaFin').enable();
        this.form.get('mostrar').enable();
    }
    download(url, original) {
        this.uploadService.download(url).subscribe((x) => {
            var newBlob = new Blob([x], { type: "application/pdf" });
            const data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            link.download = original;
            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            setTimeout(function () {
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
    }
    eliminarForm() {
        /*const modalRef = this.modalService.open(EliminarActividadComponent, { size: 'lg' });
        modalRef.result.then((result) => {
          this.actividadService.eliminarActividad(this.actividad.id).subscribe((data)=>{
            this.router.navigate(['/admin/actividad/listado/']);
            this.toastr.error('Actividad borrada', 'Actividad');
          });
          
        }).catch(e => {
          console.log(e);
        });*/
    }
    ngOnDestroy() {
        if (this.suscription) {
            this.suscription.unsubscribe();
        }
    }
    guardarOferta() {
        var _a, _b, _c, _d, _e;
        let validar = true;
        const oferta = {
            id: this.oferta != null ? this.oferta.id : 0,
            titulo: (_a = this.form.get('titulo')) === null || _a === void 0 ? void 0 : _a.value,
            fechaAlta: moment__WEBPACK_IMPORTED_MODULE_3__["utc"]((_b = this.form.get('fechaAlta')) === null || _b === void 0 ? void 0 : _b.value),
            fechaInicio: moment__WEBPACK_IMPORTED_MODULE_3__["utc"]((_c = this.form.get('fechaInicio')) === null || _c === void 0 ? void 0 : _c.value),
            fechaFin: moment__WEBPACK_IMPORTED_MODULE_3__["utc"]((_d = this.form.get('fechaFin')) === null || _d === void 0 ? void 0 : _d.value),
            mostrar: this.form.get('mostrar') != null ? this.form.get('mostrar').value : false,
            file: (_e = this.form.get('file')) === null || _e === void 0 ? void 0 : _e.value,
            imagenServidor: this.form.get('imagenServidor').value,
            listDocumentos: this.listDocumentacion
        };
        if (oferta.fechaFin != null && oferta.fechaInicio > oferta.fechaFin) {
            this.toastr.error('La fecha fin no puede ser anterior a la fecha inicio', 'Error');
            validar = false;
        }
        if (this.isAddMode && oferta.file == null) {
            this.toastr.error('Inserte una imagen', 'Error');
            validar = false;
        }
        if (validar) {
            //Nueva oferta
            if (this.isAddMode) {
                this.ofertaService.aniadirOferta(oferta).subscribe(data => {
                    this.toastr.success('Oferta guardada', 'Oferta');
                    this.router.navigate(['/admin/ofertas/gestion/' + data.id]);
                });
            }
            //Editar oferta
            else {
                this.ofertaService.modificarOferta(oferta).subscribe(data => {
                    this.toastr.success('Oferta guardada', 'Oferta');
                    this.myInputVariable.nativeElement.value = "";
                    this.mostrarImagen = false;
                    this.listDocumentacion = null;
                    this.mostrarBotonEdit = true;
                    this.mostrarBotonDelete = false;
                    this.form.get('titulo').disable();
                    this.form.get('fechaInicio').disable();
                    this.form.get('fechaFin').disable();
                    this.form.get('mostrar').disable();
                    this.form.reset();
                    this.ngOnInit();
                    this.ref.detectChanges();
                });
            }
        }
    }
    onUpload(event) {
        const file = event.target.files[0];
        this.form.patchValue({
            file: file
        });
        this.form.get('file').updateValueAndValidity();
        this.uploadService.uploadImagen(this.form.value.file).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress:
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response:
                    var reader = new FileReader();
                    reader.onload = this._handleReaderLoaded.bind(this);
                    reader.readAsBinaryString(this.form.value.file);
                    this.form.patchValue({
                        imagenServidor: event.body.fileName
                    });
                    this.form.get('imagenServidor').updateValueAndValidity();
            }
        });
    }
    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        this.imagePath = "data:image/png;base64," + this.base64textString;
        this.mostrarImagen = true;
        this.ref.detectChanges();
    }
    reset(element) {
        this.mostrarImagen = false;
        this.form.patchValue({
            file: null
        });
        element.value = "";
    }
    crearDocumentacion() {
        this.editarDocumento(undefined);
    }
    editarDocumento(id) {
        const modalRef = this.modalService.open(_documentacion_modal_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_5__["DocumentacionModalComponent"], { size: 'lg' });
        if (id != undefined) {
            var result2 = this.listDocumentacion.find(x => x.id === id);
            const documento = {
                id: result2.id,
                nombre: result2.nombre
            };
            modalRef.componentInstance.documento = documento;
        }
        else {
            const documento = {
                id: undefined,
                nombre: ''
            };
            modalRef.componentInstance.documento = documento;
        }
        modalRef.result.then((result) => {
            if (result) {
                /*let index = this.listDocumentacion.findIndex(d => d.id === id);
                if (index > -1) this.listDocumentacion.splice(index, 1);*/
                this.listDocumentacion = [];
                this.subirDocAlta(result);
            }
        }).catch(e => {
            console.log(e);
        });
    }
    subirDocAlta(result) {
        this.uploadService.uploadDocumento(result.file).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress:
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response:
                    result.url = event.body.url;
                    result.servidor = event.body.fileName;
                    result.original = result.file.name;
                    this.listDocumentacion.push(result);
                    this.ref.detectChanges();
            }
        });
    }
    eliminarDocumento(id) {
        const modalRef = this.modalService.open(_eliminar_documentacion_modal_eliminar_documentacion_modal_component__WEBPACK_IMPORTED_MODULE_6__["EliminarDocumentacionModalComponent"], { size: 'lg' });
        modalRef.componentInstance.id = id;
        modalRef.result.then((result) => {
            /* let index = this.listDocumentacion.findIndex(d => d.id === id);
             if (index > -1) this.listDocumentacion.splice(index, 1);*/
            this.listDocumentacion = [];
            this.ref.detectChanges();
        }).catch(e => {
            console.log(e);
        });
    }
}
NuevaComponent.ɵfac = function NuevaComponent_Factory(t) { return new (t || NuevaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_oferta_service__WEBPACK_IMPORTED_MODULE_8__["OfertaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"])); };
NuevaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NuevaComponent, selectors: [["app-nueva"]], viewQuery: function NuevaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myInputVariable = _t.first);
    } }, decls: 88, vars: 8, consts: [["id", "kt_form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "text-right"], ["class", "btn btn-success ", "type", "submit", "name", "btn-guardar", 3, "disabled", 4, "ngIf"], ["class", "btn btn-info ", "name", "btn-editar", 3, "click", 4, "ngIf"], ["class", "btn btn-danger ml-2", "name", "btn-eliminar", 3, "click", 4, "ngIf"], [1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title", "mb-0", "text-right"], [1, "card-body"], ["data-wizard-type", "step-content", "data-wizard-state", "current", 1, "pb-5"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["type", "text", "formControlName", "titulo", "placeholder", "T\u00EDtulo de la oferta", 1, "form-control"], [1, "col-md-3"], [1, "input-group"], ["placeholder", "dd-mm-yyyy", "name", "dp", "ngbDatepicker", "", "formControlName", "fechaAlta", 1, "form-control"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar"], ["placeholder", "dd-mm-yyyy", "name", "dp", "ngbDatepicker", "", "formControlName", "fechaInicio", 1, "form-control"], ["e", "ngbDatepicker"], ["placeholder", "dd-mm-yyyy", "name", "dp", "ngbDatepicker", "", "formControlName", "fechaFin", 1, "form-control"], ["f", "ngbDatepicker"], [1, "form-group", "mt-0", "mt-md-10"], ["formControlName", "mostrar", 1, "example-margin"], [1, "col-12"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "table-responsive", "angular-bootstrap-table"], [1, "table", "table-head-custom", "table-vertical-center", "overflow-hidden"], [4, "ngFor", "ngForOf"], [1, "col-12", "col-md-5"], ["class", "row", 4, "ngIf"], ["type", "submit", "name", "btn-guardar", 1, "btn", "btn-success", 3, "disabled"], [1, "fa", "fa-check"], ["name", "btn-editar", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-edit"], ["name", "btn-eliminar", 1, "btn", "btn-danger", "ml-2", 3, "click"], [1, "fa", "fa-trash"], [1, "fa", "fa-plus"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["title", "", "target", "_blank", 1, "btn", "btn-outline-success", 3, "click"], ["title", "", 1, "btn", "btn-outline-success", 3, "click"], [1, "fa", "fa-download"], ["class", "text-center accion", 4, "ngIf"], [1, "text-center", "accion"], ["title", "Editar documento", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-3", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-primary", 3, "inlineSVG"], ["title", "Eliminar documento", 1, "btn", "btn-icon", "btn-light", "btn-hover-danger", "btn-sm", 3, "click"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-md", "svg-icon-danger", 3, "inlineSVG"], ["type", "file", "accept", "image/*", 3, "change"], ["fileInput", ""], [1, "col-12", "text-center"], [3, "className"], ["id", "imagen-subida", 1, "img-responsive", "img-container", 2, "max-width", "100%", 3, "src"], [1, "btn", "btn-danger", "btn-eliminar-img", 3, "click"], ["id", "imagen-subida", 1, "img-responsive", 2, "max-width", "100%", 3, "src"]], template: function NuevaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NuevaComponent_Template_form_ngSubmit_0_listener() { return ctx.guardarOferta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-notice", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NuevaComponent_button_2_Template, 3, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NuevaComponent_a_3_Template, 3, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NuevaComponent_a_4_Template, 3, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Informaci\u00F3n de la oferta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Fecha Alta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); return _r3.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Fecha Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return _r4.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Fecha Fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44); return _r5.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-checkbox", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Mostrar en la web");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Documentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, NuevaComponent_button_60_Template, 3, 0, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Original");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Tama\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, NuevaComponent_tr_77_Template, 13, 4, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, NuevaComponent_div_86_Template, 10, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, NuevaComponent_div_87_Template, 4, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostrarBotonesGeneral);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostrarBotonEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostrarBotonDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostrarBotonesGeneral);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDocumentacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostrarBotonesGeneral);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mostrarBotonesGeneral);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _metronic_portal_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_12__["NoticeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGDirective"]], styles: [".ocultarImagenArea[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mostrarImagenArea[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px;\n  height: auto;\n  overflow: auto;\n}\n\n.btn-eliminar-img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 89%;\n  bottom: -2%;\n  transform: translate(-50%, -50%);\n}\n\n.accion[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbnVldmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0oiLCJmaWxlIjoibnVldmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2N1bHRhckltYWdlbkFyZWEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm1vc3RyYXJJbWFnZW5BcmVhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZWxpbWluYXItaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDg5JTtcclxuICAgIGJvdHRvbTogLTIlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2Npb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NuevaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nueva',
                templateUrl: './nueva.component.html',
                styleUrls: ['./nueva.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_services_oferta_service__WEBPACK_IMPORTED_MODULE_8__["OfertaService"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] }]; }, { myInputVariable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fileInput']
        }] }); })();


/***/ }),

/***/ "gmsZ":
/*!**************************************************************************************************************!*\
  !*** ./src/app/gestion/ofertas/nueva/eliminar-documentacion-modal/eliminar-documentacion-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EliminarDocumentacionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarDocumentacionModalComponent", function() { return EliminarDocumentacionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class EliminarDocumentacionModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    eliminarDocumento() {
        this.modal.close();
    }
}
EliminarDocumentacionModalComponent.ɵfac = function EliminarDocumentacionModalComponent_Factory(t) { return new (t || EliminarDocumentacionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
EliminarDocumentacionModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EliminarDocumentacionModalComponent, selectors: [["app-eliminar-documentacion-modal"]], inputs: { id: "id" }, decls: 13, vars: 0, consts: [[1, "modal-header"], [1, "modal-title", "h4"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-elevate", 3, "click"]], template: function EliminarDocumentacionModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eliminar documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00BFEst\u00E1s seguro de eliminar este documento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EliminarDocumentacionModalComponent_Template_button_click_8_listener() { return ctx.modal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EliminarDocumentacionModalComponent_Template_button_click_11_listener() { return ctx.eliminarDocumento(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbGltaW5hci1kb2N1bWVudGFjaW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EliminarDocumentacionModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eliminar-documentacion-modal',
                templateUrl: './eliminar-documentacion-modal.component.html',
                styleUrls: ['./eliminar-documentacion-modal.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rmBQ":
/*!**************************************************************!*\
  !*** ./src/app/gestion/ofertas/listado/listado.component.ts ***!
  \**************************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ListadoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListadoComponent.ɵfac = function ListadoComponent_Factory(t) { return new (t || ListadoComponent)(); };
ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoComponent, selectors: [["app-listado"]], decls: 2, vars: 0, template: function ListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "listado works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listado',
                templateUrl: './listado.component.html',
                styleUrls: ['./listado.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=gestion-ofertas-ofertas-module-es2015.js.map