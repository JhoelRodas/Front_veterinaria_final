"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_veterinaria_proveedor_proveedor_module_ts"],{

/***/ 3784:
/*!**********************************************************************************************************!*\
  !*** ./src/app/veterinaria/proveedor/crear-actualizar-proveedor/crear-actualizar-proveedor.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearActualizarProveedorComponent: () => (/* binding */ CrearActualizarProveedorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);










function CrearActualizarProveedorComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registrar Proveedor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
  }
}
function CrearActualizarProveedorComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualizar Proveedor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
  }
}
class CrearActualizarProveedorComponent {
  constructor(defaults, dialogRef) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.mode = 'create';
  }
  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(this.defaults.nombre),
      telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(this.defaults.telefono),
      correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(this.defaults.correo),
      direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(this.defaults.direccion),
      encargado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(this.defaults.encargado)
    });
  }
  save() {
    // this.createCustomer();
    console.log(this.form.value);
    // return;
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }
  createCustomer() {
    const customer = this.form.value;
    this.dialogRef.close(customer);
  }
  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    this.dialogRef.close(customer);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  static {
    this.ɵfac = function CrearActualizarProveedorComponent_Factory(t) {
      return new (t || CrearActualizarProveedorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CrearActualizarProveedorComponent,
      selectors: [["fury-crear-actualizar-proveedor"]],
      decls: 28,
      vars: 4,
      consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["fxLayout", "column wrap"], ["fxFlex", ""], ["type", "text", "formControlName", "nombre", "matInput", ""], ["type", "text", "formControlName", "telefono", "matInput", ""], ["type", "text", "formControlName", "correo", "matInput", ""], ["type", "text", "formControlName", "direccion", "matInput", ""], ["type", "text", "formControlName", "encargado", "matInput", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-flat-button", "", "color", "primary", 3, "disabled", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "disabled"]],
      template: function CrearActualizarProveedorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CrearActualizarProveedorComponent_Template_form_ngSubmit_2_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 3)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Telefono");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 3)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Direccion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3)(22, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Encargado");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-dialog-actions", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CrearActualizarProveedorComponent_button_26_Template, 2, 1, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CrearActualizarProveedorComponent_button_27_Template, 2, 1, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isCreateMode() ? "Crear" : "Actualizar", " Proveedor");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 19911:
/*!*******************************************************************************************************!*\
  !*** ./src/app/veterinaria/proveedor/crear-actualizar-proveedor/crear-actualizar-proveedor.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearActualizarProveedorModule: () => (/* binding */ CrearActualizarProveedorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _crear_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-actualizar-proveedor.component */ 3784);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 39981);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);











class CrearActualizarProveedorModule {
  static {
    this.ɵfac = function CrearActualizarProveedorModule_Factory(t) {
      return new (t || CrearActualizarProveedorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CrearActualizarProveedorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrearActualizarProveedorModule, {
    declarations: [_crear_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_0__.CrearActualizarProveedorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule],
    exports: [_crear_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_0__.CrearActualizarProveedorComponent]
  });
})();

/***/ }),

/***/ 89029:
/*!*******************************************************************!*\
  !*** ./src/app/veterinaria/proveedor/proveedor-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedorRoutingModule: () => (/* binding */ ProveedorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _proveedor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor.component */ 91353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _proveedor_component__WEBPACK_IMPORTED_MODULE_0__.ProveedorComponent
}];
class ProveedorRoutingModule {
  static {
    this.ɵfac = function ProveedorRoutingModule_Factory(t) {
      return new (t || ProveedorRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProveedorRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProveedorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91353:
/*!**************************************************************!*\
  !*** ./src/app/veterinaria/proveedor/proveedor.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedorComponent: () => (/* binding */ ProveedorComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _crear_actualizar_proveedor_crear_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-actualizar-proveedor/crear-actualizar-proveedor.component */ 3784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/api-client.service */ 97405);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 74061);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 43655);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 53007);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 15551);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 75063);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 22047);


















function ProveedorComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 15)(1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProveedorComponent_th_11_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ProveedorComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17)(1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProveedorComponent_td_12_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ProveedorComponent_ng_container_13_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", column_r10.name, "");
  }
}
function ProveedorComponent_ng_container_13_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r15[column_r10.property], " ");
  }
}
function ProveedorComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProveedorComponent_ng_container_13_ng_container_1_th_1_Template, 2, 1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProveedorComponent_ng_container_13_ng_container_1_td_2_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matColumnDef", column_r10.property);
  }
}
function ProveedorComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProveedorComponent_ng_container_13_ng_container_1_Template, 3, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", column_r10.isModelProperty);
  }
}
function ProveedorComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 24);
  }
}
function ProveedorComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProveedorComponent_td_16_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-menu", 26, 27)(6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProveedorComponent_td_16_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const row_r18 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.updateProveedor(row_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProveedorComponent_td_16_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const row_r18 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.deleteProveedor(row_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r19);
  }
}
function ProveedorComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 29);
  }
}
function ProveedorComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProveedorComponent_tr_18_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const row_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.updateProveedor(row_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Proveedores"];
};
const _c1 = function () {
  return [];
};
class ProveedorComponent {
  ngOnInit() {
    this.getProveedor();
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  constructor(apiClient, dialog) {
    this.apiClient = apiClient;
    this.dialog = dialog;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
    this.columns = [{
      name: 'ID',
      property: 'id',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Nombre',
      property: 'nombre',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Telefono',
      property: 'telefono',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Correo',
      property: 'correo',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Direccion',
      property: 'direccion',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Encargado',
      property: 'encargado',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Actions',
      property: 'actions',
      visible: true
    }];
    this.pageSize = 10;
  }
  getProveedor() {
    this.apiClient.getRequest('/api/proveedor').subscribe({
      next: data => {
        this.dataSource.data = data;
        console.log(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }
  onFilterChange(value) {
    console.info(event);
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  createProveedor() {
    console.info('Abre dialogo');
    this.dialog.open(_crear_actualizar_proveedor_crear_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_0__.CrearActualizarProveedorComponent, {
      width: '400px'
    }).afterClosed().subscribe(data => {
      if (data) {
        console.info('Al cerrar', data);
        this.apiClient.postRequest('/api/proveedor', data).subscribe({
          next: body => {
            console.info('OK', body);
            this.getProveedor();
          },
          error: error => {
            console.error('error', error);
          }
        });
        console.info('Fin api call');
      } else {
        console.info('Cancelado');
      }
    });
    console.info('Fin Metodo');
  }
  deleteProveedor(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/proveedor').subscribe({
      next: body => {
        this.getProveedor();
      },
      error: error => {
        // console.error(error)
      }
    });
  }
  updateProveedor(row) {
    console.info(row);
    this.dialog.open(_crear_actualizar_proveedor_crear_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_0__.CrearActualizarProveedorComponent, {
      data: row,
      width: '400px'
    }).afterClosed().subscribe(data => {
      if (data) {
        this.apiClient.putRequest('/api/proveedor', data.id, data).subscribe({
          next: body => {
            this.getProveedor();
          },
          error: error => {
            console.error(error);
          }
        });
      } else {
        console.info('Cancelado');
      }
    });
  }
  static {
    this.ɵfac = function ProveedorComponent_Factory(t) {
      return new (t || ProveedorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_api_client_service__WEBPACK_IMPORTED_MODULE_1__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ProveedorComponent,
      selectors: [["fury-proveedor"]],
      decls: 20,
      vars: 9,
      consts: [["mode", "card"], ["current", "Proveedor", 3, "crumbs"], ["name", "Proveedor", 3, "columns", "filterChange"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
      template: function ProveedorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fury-breadcrumbs", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("filterChange", function ProveedorComponent_Template_fury_list_filterChange_4_listener($event) {
            return ctx.onFilterChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProveedorComponent_Template_button_click_6_listener() {
            return ctx.createProveedor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "table", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](10, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ProveedorComponent_th_11_Template, 2, 0, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ProveedorComponent_td_12_Template, 2, 0, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ProveedorComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ProveedorComponent_th_15_Template, 1, 0, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ProveedorComponent_td_16_Template, 12, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ProveedorComponent_tr_17_Template, 1, 0, "tr", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ProveedorComponent_tr_18_Template, 1, 0, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "mat-paginator", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_6__.ListComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 85228:
/*!***********************************************************!*\
  !*** ./src/app/veterinaria/proveedor/proveedor.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedorModule: () => (/* binding */ ProveedorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _proveedor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor-routing.module */ 89029);
/* harmony import */ var _proveedor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proveedor.component */ 91353);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.module */ 3632);
/* harmony import */ var _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/list/list.module */ 91398);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.module */ 49320);
/* harmony import */ var _crear_actualizar_proveedor_crear_actualizar_proveedor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-actualizar-proveedor/crear-actualizar-proveedor.module */ 19911);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@fury/shared/card/card.module */ 60858);
/* harmony import */ var _pages_page_layouts_components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/page-layouts/components/page-layout-content/page-layout-demo-content.module */ 11801);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);


















class ProveedorModule {
  static {
    this.ɵfac = function ProveedorModule_Factory(t) {
      return new (t || ProveedorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: ProveedorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _proveedor_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProveedorRoutingModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_6__.FuryCardModule, _pages_page_layouts_components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_7__.PageLayoutDemoContentModule, _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_3__.ListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _crear_actualizar_proveedor_crear_actualizar_proveedor_module__WEBPACK_IMPORTED_MODULE_5__.CrearActualizarProveedorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProveedorModule, {
    declarations: [_proveedor_component__WEBPACK_IMPORTED_MODULE_1__.ProveedorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _proveedor_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProveedorRoutingModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_6__.FuryCardModule, _pages_page_layouts_components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_7__.PageLayoutDemoContentModule, _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_3__.ListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _crear_actualizar_proveedor_crear_actualizar_proveedor_module__WEBPACK_IMPORTED_MODULE_5__.CrearActualizarProveedorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_veterinaria_proveedor_proveedor_module_ts.js.map