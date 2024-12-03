"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_veterinaria_nota-compra_nota-compra_module_ts"],{

/***/ 75893:
/*!****************************************************************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/crear-actualizar-nota-compra/crear-actualizar-nota-compra.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearActualizarNotaCompraComponent: () => (/* binding */ CrearActualizarNotaCompraComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/api-client.service */ 97405);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 74061);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/shared/list/list.component */ 75063);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout.directive */ 43655);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-header.directive */ 53007);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-content.directive */ 15551);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 25175);
























function CrearActualizarNotaCompraComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r9.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r9.nombre, " ");
  }
}
function CrearActualizarNotaCompraComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r10.nombre, " ");
  }
}
function CrearActualizarNotaCompraComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 26)(1, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrearActualizarNotaCompraComponent_th_34_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CrearActualizarNotaCompraComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28)(1, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrearActualizarNotaCompraComponent_td_35_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CrearActualizarNotaCompraComponent_ng_container_36_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", column_r14.name, "");
  }
}
function CrearActualizarNotaCompraComponent_ng_container_36_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r19[column_r14.property], " ");
  }
}
function CrearActualizarNotaCompraComponent_ng_container_36_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CrearActualizarNotaCompraComponent_ng_container_36_ng_container_1_th_1_Template, 2, 1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CrearActualizarNotaCompraComponent_ng_container_36_ng_container_1_td_2_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matColumnDef", column_r14.property);
  }
}
function CrearActualizarNotaCompraComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CrearActualizarNotaCompraComponent_ng_container_36_ng_container_1_Template, 3, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r14.isModelProperty);
  }
}
function CrearActualizarNotaCompraComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 35);
  }
}
function CrearActualizarNotaCompraComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28)(1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrearActualizarNotaCompraComponent_td_39_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", 37, 38)(6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrearActualizarNotaCompraComponent_td_39_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const row_r22 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.deleteDetalle(row_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r23);
  }
}
function CrearActualizarNotaCompraComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 40);
  }
}
function CrearActualizarNotaCompraComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrearActualizarNotaCompraComponent_tr_41_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.updateDetalle(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Detalles-Compra"];
};
const _c1 = function () {
  return [];
};
class CrearActualizarNotaCompraComponent {
  constructor(apiClient, router) {
    this.apiClient = apiClient;
    this.router = router;
    this.productosList = [];
    this.proveedoresList = [];
    this.detalles = []; // Lista para almacenar los productos agregados temporalmente
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
    this.columns = [{
      name: 'ID Producto',
      property: 'idProducto',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Cantidad',
      property: 'cantidad',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Monto',
      property: 'monto',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Actions',
      property: 'actions',
      visible: true
    }];
    this.pageSize = 10;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormGroup({
      idProducto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      nombreProveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      cant: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: 0,
        disabled: true
      }),
      precioUnitario: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: 0,
        disabled: true
      }),
      monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl("") // Campo de solo lectura
    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  ngOnInit() {
    this.apiClient.getRequest('/api/producto').subscribe({
      next: producto => {
        this.productosList = producto;
        console.info(producto);
      },
      error: error => {
        console.error(error);
      }
    });
    this.apiClient.getRequest('/api/proveedor').subscribe({
      next: proveedor => {
        this.proveedoresList = proveedor;
        console.info(proveedor);
      },
      error: error => {
        console.error(error);
      }
    });
    // Escuchar cambios en el selector de productos
    this.form.get('idProducto')?.valueChanges.subscribe(productId => {
      this.actualizarCamposProducto(productId);
    });
    // Escuchar cambios en la cantidad para actualizar el monto automáticamente
    // this.form.get('cant')?.valueChanges.subscribe(() => {
    //   this.actualizarMonto();
    // });
  }

  agregarDetalle() {
    //    Obtén los valores actuales del formulario sin incluir precioUnitario y stock
    const {
      idProducto,
      cant,
      monto
    } = this.form.getRawValue();
    // Encuentra el producto seleccionado en la lista
    const productoSeleccionado = this.productosList.find(prod => prod.id === idProducto);
    console.log("pro", productoSeleccionado);
    if (!productoSeleccionado) {
      console.error("Producto no encontrado o no seleccionado");
      return;
    }
    productoSeleccionado.stock = productoSeleccionado.stock + Number(cant);
    console.log("proSelec", productoSeleccionado);
    this.apiClient.putRequest('/api/producto', productoSeleccionado.id, productoSeleccionado).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.error('Error al actualizar  producto:', error);
      }
    });
    const detalleExistente = this.detalles.find(detalle => detalle.idProducto === idProducto);
    console.log("detalleExistente", detalleExistente);
    if (detalleExistente) {
      // Si ya existe, actualiza la cantidad y el monto
      detalleExistente.cantidad = Number(detalleExistente.cantidad) + Number(cant);
      detalleExistente.monto = monto;
      // detalleExistente.monto = Number(detalleExistente.cantidad) * Number(productoSeleccionado.precioUnitario);
    } else {
      // Construye el objeto detalle sin incluir precioUnitario y stock
      //const monto = Number(cant) * productoSeleccionado.precioUnitario;
      const nuevoDetalle = {
        idProducto: idProducto,
        cantidad: cant,
        monto: monto
      };
      console.log("nuevo Detalle", nuevoDetalle);
      // Agrega el detalle a la lista y actualiza el dataSource
      this.detalles.push(nuevoDetalle);
    }
    console.log("listDetalles", this.detalles);
    this.dataSource.data = [...this.detalles];
    // Reinicia el formulario para la siguiente entrada
    this.form.patchValue({
      idProducto: null,
      cant: 0,
      precioUnitario: 0,
      stock: 0
    });
  }
  guardarDetalles() {
    // Obtén el valor de cliente desde el formulario
    const nombreProveedor = this.form.get('nombreProveedor')?.value;
    // Crear el objeto de envío que contiene los detalles y el cliente
    //objeto para  enviar al api
    const datosParaEnvio = {
      nombreProveedor: nombreProveedor,
      detalles: this.detalles,
      montoTotal: 0.00
    };
    console.log("DetallesCompra", datosParaEnvio);
    this.apiClient.postRequest('/api/notacompra', datosParaEnvio).subscribe({
      next: response => {
        console.info('Detalles guardados correctamente:', response);
        // Redirige a la pantalla de Recibos
        this.router.navigate(['compras/nota-Compra']);
      },
      error: error => {
        console.error('Error al guardar los detalles:', error);
      }
    });
  }
  actualizarCamposProducto(productId) {
    const productoSeleccionado = this.productosList.find(prod => prod.id === productId);
    console.log(productoSeleccionado);
    if (productoSeleccionado) {
      // Actualiza el precio unitario y el stock en el formulario
      this.form.patchValue({
        precioUnitario: productoSeleccionado.precioUnitario,
        stock: productoSeleccionado.stock
      });
    } else {
      // Si no hay producto seleccionado, limpia los campos
      this.form.patchValue({
        precioUnitario: 0,
        stock: 0
      });
    }
  }
  actualizarMonto() {
    const cantidad = this.form.get('cant')?.value || 0;
    const precioUnitario = this.form.get('precioUnitario')?.value || 0;
    //const monto = cantidad * precioUnitario;
    const monto = this.form.value;
    const a = monto.precio;
    // Actualiza el monto en el formulario
    this.form.patchValue({
      monto
    });
  }
  updateDetalle(row) {}
  deleteDetalle(row) {
    console.log("row", row);
    console.log("ListPro", this.productosList);
    const productoSeleccionado = this.productosList.find(prod => prod.id === row.idProducto);
    this.detalles = this.detalles.filter(item => item.idProducto !== row.idProducto);
    console.log("producto", productoSeleccionado);
    console.log("detallesList", this.detalles);
    productoSeleccionado.stock = Number(productoSeleccionado.stock) - Number(row.cantidad);
    this.apiClient.putRequest('/api/producto', productoSeleccionado.id, productoSeleccionado).subscribe({
      next: response => {
        console.log(response);
        this.apiClient.getRequest('/api/producto').subscribe({
          next: producto => {
            this.productosList = producto;
            console.info(producto);
          },
          error: error => {
            console.error(error);
          }
        });
        this.dataSource.data = this.dataSource.data.filter(it => {
          return it.idProducto !== row.idProducto;
        });
      },
      error: error => {
        console.error('Error al actualizar  producto:', error);
      }
    });
    // console.log(row)
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
  static {
    this.ɵfac = function CrearActualizarNotaCompraComponent_Factory(t) {
      return new (t || CrearActualizarNotaCompraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_api_client_service__WEBPACK_IMPORTED_MODULE_0__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CrearActualizarNotaCompraComponent,
      selectors: [["fury-crear-actualizar-nota-compra"]],
      inputs: {
        columns: "columns"
      },
      decls: 46,
      vars: 12,
      consts: [["mode", "card"], ["current", "Detalles", 3, "crumbs"], ["name", "Detalle de Compra", 3, "columns", "filterChange"], ["fxLayout", "row wrap", 3, "formGroup"], ["formControlName", "nombreProveedor"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "idProducto"], ["fxFlex", ""], ["type", "text", "matInput", "", "formControlName", "stock", "readonly", ""], ["type", "text", "formControlName", "cant", "matInput", ""], ["type", "text", "formControlName", "monto", "matInput", ""], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], [2, "margin-top", "20px", "text-align", "right"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
      template: function CrearActualizarNotaCompraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fury-breadcrumbs", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filterChange", function CrearActualizarNotaCompraComponent_Template_fury_list_filterChange_4_listener($event) {
            return ctx.onFilterChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "mat-form-field")(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Proveedor");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-select", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CrearActualizarNotaCompraComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-form-field")(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CrearActualizarNotaCompraComponent_mat_option_15_Template, 2, 2, "mat-option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 7)(17, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-form-field", 7)(21, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Cantidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 7)(25, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Monto");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 11)(29, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrearActualizarNotaCompraComponent_Template_button_click_29_listener() {
            return ctx.agregarDetalle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "table", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](33, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CrearActualizarNotaCompraComponent_th_34_Template, 2, 0, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, CrearActualizarNotaCompraComponent_td_35_Template, 2, 0, "td", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, CrearActualizarNotaCompraComponent_ng_container_36_Template, 2, 1, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](37, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, CrearActualizarNotaCompraComponent_th_38_Template, 1, 0, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, CrearActualizarNotaCompraComponent_td_39_Template, 9, 1, "td", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CrearActualizarNotaCompraComponent_tr_40_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, CrearActualizarNotaCompraComponent_tr_41_Template, 1, 0, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "mat-paginator", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 23)(44, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrearActualizarNotaCompraComponent_Template_button_click_44_listener() {
            return ctx.guardarDetalles();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " Guardar y Volver a Recibos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.proveedoresList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.productosList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", ctx.pageSize);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatMiniFabButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 73521:
/*!************************************************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/crear-reporte-compra/crear-reporte-compra.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearReporteCompraComponent: () => (/* binding */ CrearReporteCompraComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ 39545);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
















function CrearReporteCompraComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha de inicio inv\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CrearReporteCompraComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha de fin inv\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CrearReporteCompraComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El monto debe ser mayor o igual a 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CrearReporteCompraComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El monto debe ser mayor o igual a 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CrearReporteCompraComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r7.nombre, " ");
  }
}
function CrearReporteCompraComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearReporteCompraComponent_div_35_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const column_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](column_r8.selected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !column_r8.visible || column_r8.property === "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", column_r8.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", column_r8.name, " ");
  }
}
class CrearReporteCompraComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.columns = data.columns; // Obtenemos las columnas enviadas desde el componente principal
    this.proveedoresList = data.proveedoresList; // Obtenemos la lista de proveedores
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(10, "days").toDate()),
      to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()().toDate()),
      montoMayor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d+(\.\d{1,2})?$/) // Acepta decimales con hasta 2 dígitos
      ]),

      montoMenor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d+(\.\d{1,2})?$/) // Acepta decimales con hasta 2 dígitos
      ]),

      nombreProveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
  }
  ngOnInit() {}
  formatDecimals(controlName) {
    const control = this.form.get(controlName);
    if (control?.value != null && control.value !== '') {
      control.setValue(parseFloat(control.value).toFixed(2)); // Siempre deja 2 decimales
    }
  }

  generateReport() {
    const selectedHeaders = this.columns.filter(column => column.selected).map(({
      name,
      property
    }) => ({
      name,
      property
    }));
    if (selectedHeaders.length === 0) {
      alert('Debe seleccionar al menos una cabecera para el reporte.');
      return;
    }
    const filters = {
      inicio: this.form.value.from ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.form.value.from, 'dd/MM/yyyy', 'en') : null,
      fin: this.form.value.to ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(this.form.value.to, 'dd/MM/yyyy', 'en') : null,
      montoMayor: this.form.value.montoMayor,
      montoMenor: this.form.value.montoMenor,
      nombreProveedor: this.form.value.nombreProveedor
    };
    const reportData = {
      filtros: filters,
      headers: selectedHeaders,
      tipoReporte: 'Compras'
    };
    this.dialogRef.close(reportData);
  }
  closeDialog() {
    this.dialogRef.close(null);
  }
  static {
    this.ɵfac = function CrearReporteCompraComponent_Factory(t) {
      return new (t || CrearReporteCompraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CrearReporteCompraComponent,
      selectors: [["fury-crear-reporte-compra"]],
      decls: 41,
      vars: 9,
      consts: [["mat-dialog-title", ""], ["fxLayout", "row wrap", "fxLayoutGap", "16px", "fxLayoutAlign", "start start", 3, "formGroup"], ["fxFlex", "100", "fxFlex.xs", "100"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "from", "placeholder", "Inicio"], ["matEndDate", "", "formControlName", "to", "placeholder", "Fin"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["fxFlex", "50", "fxFlex.xs", "100"], ["matInput", "", "type", "number", "formControlName", "montoMayor", "placeholder", "Ingrese monto mayor", "min", "0", "step", "1", 3, "input", "blur"], ["matInput", "", "type", "number", "formControlName", "montoMenor", "placeholder", "Ingrese monto menor", "min", "0", "step", "1", 3, "input", "blur"], ["formControlName", "nombreProveedor"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutGap", "16px", "fxLayoutAlign", "start start", 1, "checkbox-container"], ["fxFlex", "25%", 3, "hidden", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "mat-dialog-close", ""], [3, "value"], ["fxFlex", "25%", 3, "hidden"], [3, "ngModel", "ngModelChange"]],
      template: function CrearReporteCompraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Generar Reporte");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content")(3, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Filtros del Reporte");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "mat-form-field", 2)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Rango de fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-date-range-input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4)(11, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-datepicker-toggle", 6)(13, "mat-date-range-picker", null, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CrearReporteCompraComponent_mat_error_15_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CrearReporteCompraComponent_mat_error_16_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 9)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Monto Mayor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CrearReporteCompraComponent_Template_input_input_20_listener() {
            return ctx.formatDecimals("montoMayor");
          })("blur", function CrearReporteCompraComponent_Template_input_blur_20_listener() {
            return ctx.formatDecimals("montoMayor");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CrearReporteCompraComponent_mat_error_21_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 9)(23, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Monto Menor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CrearReporteCompraComponent_Template_input_input_25_listener() {
            return ctx.formatDecimals("montoMenor");
          })("blur", function CrearReporteCompraComponent_Template_input_blur_25_listener() {
            return ctx.formatDecimals("montoMenor");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CrearReporteCompraComponent_mat_error_26_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 2)(28, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Proveedor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CrearReporteCompraComponent_mat_option_31_Template, 2, 2, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Cabeceras del Reporte");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CrearReporteCompraComponent_div_35_Template, 3, 3, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-dialog-actions", 16)(37, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrearReporteCompraComponent_Template_button_click_37_listener() {
            return ctx.generateReport();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Generar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Cancelar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.from.hasError("matStartDateInvalid"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.to.hasError("matEndDateInvalid"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.montoMayor.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.montoMenor.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.proveedoresList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columns);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangePicker, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 21332:
/*!*********************************************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/crear-reporte-compra/crear-reporte-compra.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearReporteCompraModule: () => (/* binding */ CrearReporteCompraModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _crear_reporte_compra_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-reporte-compra.component */ 73521);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 91447);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);













class CrearReporteCompraModule {
  static {
    this.ɵfac = function CrearReporteCompraModule_Factory(t) {
      return new (t || CrearReporteCompraModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CrearReporteCompraModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrearReporteCompraModule, {
    declarations: [_crear_reporte_compra_component__WEBPACK_IMPORTED_MODULE_0__.CrearReporteCompraComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule],
    exports: [_crear_reporte_compra_component__WEBPACK_IMPORTED_MODULE_0__.CrearReporteCompraComponent]
  });
})();

/***/ }),

/***/ 52977:
/*!************************************************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/nota-compra-detalles/nota-compra-detalles.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotaCompraDetallesComponent: () => (/* binding */ NotaCompraDetallesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api-client.service */ 97405);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);














function NotaCompraDetallesComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NotaCompraDetallesComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r8.nombreProducto, " ");
  }
}
function NotaCompraDetallesComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NotaCompraDetallesComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r9.cantidad, " ");
  }
}
function NotaCompraDetallesComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Monto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function NotaCompraDetallesComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, element_r10.monto), " ");
  }
}
function NotaCompraDetallesComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
  }
}
function NotaCompraDetallesComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 21);
  }
}
class NotaCompraDetallesComponent {
  constructor(data, dialogRef, apiClient) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.apiClient = apiClient;
    this.detalles = []; // Lista para almacenar los productos agregados temporalmente
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
    this.displayedColumns = ['nombreProducto', 'cantidad', 'monto'];
  }
  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.data.id),
      nombreProveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.data.nombreProveedor),
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.data.fecha),
      montoTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.data.montoTotal)
    });
    console.log("idNotaCompra", this.data.id);
    this.apiClient.getRequest('/api/notacompra/get', {
      id: this.data.id
    }).subscribe({
      next: body => {
        console.info("NotaCompraCompleto", body);
        this.dataSource.data = body.detalle;
      },
      error: error => {
        console.error(error);
      }
    });
  }
  descargarPDF() {
    this.apiClient.getRequest('/api/notacompra/download-pdf', {
      id: this.data.id
    }).subscribe({
      next: response => {
        if (response && response.pdf) {
          // Decodifica el Base64
          const pdfData = atob(response.pdf);
          const byteArray = new Uint8Array(pdfData.length);
          for (let i = 0; i < pdfData.length; i++) {
            byteArray[i] = pdfData.charCodeAt(i);
          }
          // Crea el Blob y descarga el PDF
          const blob = new Blob([byteArray], {
            type: 'application/pdf'
          });
          (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, `nota_compra_${this.data.id}.pdf`);
        } else {
          console.error("Error: el PDF no contiene datos.");
          alert("No se pudo generar el PDF. Inténtalo de nuevo más tarde.");
        }
      },
      error: error => {
        console.error('Error al descargar el PDF', error);
        alert("Ocurrió un error al intentar descargar el PDF.");
      }
    });
  }
  closeDialog() {
    this.dialogRef.close(); // Cierra el diálogo sin pasar ningún dato
  }

  static {
    this.ɵfac = function NotaCompraDetallesComponent_Factory(t) {
      return new (t || NotaCompraDetallesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_api_client_service__WEBPACK_IMPORTED_MODULE_1__.ApiClientService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NotaCompraDetallesComponent,
      selectors: [["fury-nota-compra-detalles"]],
      decls: 39,
      vars: 4,
      consts: [["mat-dialog-title", ""], [3, "formGroup"], ["fxLayout", "column wrap"], ["fxFlex", ""], ["matInput", "", "formControlName", "id", "readonly", ""], ["matInput", "", "formControlName", "nombreProveedor", "readonly", ""], ["matInput", "", "formControlName", "fecha", "readonly", ""], ["matInput", "", "formControlName", "montoTotal", "readonly", ""], [2, "text-align", "right", "margin-top", "15px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "margin-top", "20px", 3, "dataSource"], ["matColumnDef", "nombreProducto"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "monto"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function NotaCompraDetallesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Informacion Completa de la Nota de Compra ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1)(3, "mat-dialog-content")(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "id");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 3)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "nombre del Proveedor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 3)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 3)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "montoTotal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8)(22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotaCompraDetallesComponent_Template_button_click_22_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Cerrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8)(25, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotaCompraDetallesComponent_Template_button_click_25_listener() {
            return ctx.descargarPDF();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Descargar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, NotaCompraDetallesComponent_th_29_Template, 2, 0, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, NotaCompraDetallesComponent_td_30_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, NotaCompraDetallesComponent_th_32_Template, 2, 0, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, NotaCompraDetallesComponent_td_33_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](34, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, NotaCompraDetallesComponent_th_35_Template, 2, 0, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, NotaCompraDetallesComponent_td_36_Template, 3, 3, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, NotaCompraDetallesComponent_tr_37_Template, 1, 0, "tr", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, NotaCompraDetallesComponent_tr_38_Template, 1, 0, "tr", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 63700:
/*!*********************************************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/nota-compra-detalles/nota-compra-detalles.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotaCompraDetallesModule: () => (/* binding */ NotaCompraDetallesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _nota_compra_detalles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nota-compra-detalles.component */ 52977);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 91447);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);










class NotaCompraDetallesModule {
  static {
    this.ɵfac = function NotaCompraDetallesModule_Factory(t) {
      return new (t || NotaCompraDetallesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NotaCompraDetallesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotaCompraDetallesModule, {
    declarations: [_nota_compra_detalles_component__WEBPACK_IMPORTED_MODULE_0__.NotaCompraDetallesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule],
    exports: [_nota_compra_detalles_component__WEBPACK_IMPORTED_MODULE_0__.NotaCompraDetallesComponent]
  });
})();

/***/ }),

/***/ 81089:
/*!***********************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/nota-compra-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotaCompraRoutingModule: () => (/* binding */ NotaCompraRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _nota_compra_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nota-compra.component */ 60165);
/* harmony import */ var _crear_actualizar_nota_compra_crear_actualizar_nota_compra_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-actualizar-nota-compra/crear-actualizar-nota-compra.component */ 75893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _nota_compra_component__WEBPACK_IMPORTED_MODULE_0__.NotaCompraComponent
}, {
  path: 'detalles-compra',
  component: _crear_actualizar_nota_compra_crear_actualizar_nota_compra_component__WEBPACK_IMPORTED_MODULE_1__.CrearActualizarNotaCompraComponent
}];
class NotaCompraRoutingModule {
  static {
    this.ɵfac = function NotaCompraRoutingModule_Factory(t) {
      return new (t || NotaCompraRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NotaCompraRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotaCompraRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 60165:
/*!******************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/nota-compra.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotaCompraComponent: () => (/* binding */ NotaCompraComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_file_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/file.util */ 17206);
/* harmony import */ var _nota_compra_detalles_nota_compra_detalles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nota-compra-detalles/nota-compra-detalles.component */ 52977);
/* harmony import */ var _crear_reporte_compra_crear_reporte_compra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-reporte-compra/crear-reporte-compra.component */ 73521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api-client.service */ 97405);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 74061);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 75063);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 43655);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 53007);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 15551);
























function NotaCompraComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.generarReporte());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Generar Reporte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function NotaCompraComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_th_13_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function NotaCompraComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 20)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_td_14_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function NotaCompraComponent_ng_container_15_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", column_r13.name, "");
  }
}
function NotaCompraComponent_ng_container_15_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r18[column_r13.property], " ");
  }
}
function NotaCompraComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NotaCompraComponent_ng_container_15_ng_container_1_th_1_Template, 2, 1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NotaCompraComponent_ng_container_15_ng_container_1_td_2_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matColumnDef", column_r13.property);
  }
}
function NotaCompraComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NotaCompraComponent_ng_container_15_ng_container_1_Template, 3, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", column_r13.isModelProperty);
  }
}
function NotaCompraComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 27);
  }
}
function NotaCompraComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 20)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_td_18_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-menu", 29, 30)(6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_td_18_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.verDeatlles(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "ver detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_td_18_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.anularNotaDeCompra(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r22);
  }
}
function NotaCompraComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 32);
  }
}
function NotaCompraComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_tr_20_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.verDeatlles(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Nota de Compra"];
};
const _c1 = function () {
  return [];
};
class NotaCompraComponent {
  constructor(apiClient, dialog, router) {
    this.apiClient = apiClient;
    this.dialog = dialog;
    this.router = router;
    this.proveedoresList = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
    this.columns = [{
      name: 'ID',
      property: 'id',
      visible: true,
      isModelProperty: true,
      selected: true
    }, {
      name: 'Fecha',
      property: 'fecha',
      visible: true,
      isModelProperty: true,
      selected: true
    }, {
      name: 'Monto Total',
      property: 'montoTotal',
      visible: true,
      isModelProperty: true,
      selected: true
    }, {
      name: 'Proveedor',
      property: 'nombreProveedor',
      visible: true,
      isModelProperty: true,
      selected: true
    }, {
      name: 'Actions',
      property: 'actions',
      visible: true
    }];
    this.pageSize = 10;
    this.userActions = {};
    this.successActionList = data => {
      this.userActions = data;
    };
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      from: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(10, "days").toDate()),
      to: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(moment__WEBPACK_IMPORTED_MODULE_0___default()().toDate()),
      montoMayor: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(/^\d+(\.\d{1,2})?$/) // Acepta decimales con hasta 2 dígitos
      ]),

      montoMenor: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(/^\d+(\.\d{1,2})?$/) // Acepta decimales con hasta 2 dígitos
      ]),

      nombreProveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null)
    });
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  ngOnInit() {
    this.apiClient.getRequest('/api/proveedor').subscribe({
      next: proveedor => {
        this.proveedoresList = [{
          id: null,
          nombre: 'todos'
        }, ...proveedor];
        console.info('proveedoresList', proveedor);
      },
      error: error => {
        console.error(error);
      }
    });
    this.getNotasDeCompra();
    this.apiClient.getRequest(`/api/v1/resource/actions-by-user?frontendCode=PAGE_NOTACOMPRA`).subscribe({
      next: this.successActionList
    });
  }
  formatDecimals(controlName) {
    const control = this.form.get(controlName);
    if (control?.value != null && control.value !== '') {
      control.setValue(parseFloat(control.value).toFixed(2)); // Siempre deja 2 decimales
    }
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
  getNotasDeCompra() {
    this.apiClient.getRequest('/api/notacompra').subscribe({
      next: data => {
        this.dataSource.data = data;
        console.log(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }
  createNotaDeCompra() {
    this.router.navigate(['compras/nota-Compra/detalles-compra']).then(() => {
      // Asegúrate de que `getRecibos` se llama en la pantalla principal
      this.getNotasDeCompra(); // O utiliza algún método de actualización adecuado
    });
  }
  // generarReporte() {
  //
  //   // Extraer valores del formulario
  //   const selectedHeaders = this.columns
  //     .filter(column => column.selected) // Solo las columnas seleccionadas
  //     .map(({ name, property }) => ({ name, property })); // Mapea solo los datos necesarios
  //   const formValues = this.form.value; // Obtiene los valores del formulario
  //
  //   const filtroCompras = {
  //     inicio : formValues.from ? formatDate(formValues.from, 'dd/MM/yyyy', 'en') : null,
  //     fin : formValues.to ? formatDate(formValues.to, 'dd/MM/yyyy', 'en') : null,
  //     montoMayor:formValues.montoMayor ? parseFloat(formValues.montoMayor) : null,
  //     montoMenor:formValues.montoMenor ? parseFloat(formValues.montoMenor) : null,
  //     nombreProveedor:formValues.nombreProveedor,
  //   }
  //   console.log('filtros = ',filtroCompras);
  //   const bodyReporte = {
  //     filtros: filtroCompras,
  //     headers: selectedHeaders,
  //     tipoReporte: "Compras",
  //   }
  //   console.log('reporteFiltros',bodyReporte)
  //   this.apiClient.postRequest('/api/reporte/generar-excel', bodyReporte)
  //     .subscribe({
  //       next:(body:any) => {
  //         console.log(body)
  //         fileUtil.downloadFromBase64(body.base64Archivo, "excel.xlsx", body.tipoRespaldo);
  //       }
  //     })
  // }
  generarReporte() {
    this.dialog.open(_crear_reporte_compra_crear_reporte_compra_component__WEBPACK_IMPORTED_MODULE_3__.CrearReporteCompraComponent, {
      width: '600px',
      data: {
        columns: this.columns,
        proveedoresList: this.proveedoresList // También pasamos la lista de proveedores
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log('Datos para el reporte:', result);
        this.apiClient.postRequest('/api/reporte/generar-excel', result).subscribe({
          next: body => {
            console.log(body);
            _service_file_util__WEBPACK_IMPORTED_MODULE_1__.fileUtil.downloadFromBase64(body.base64Archivo, "excel.xlsx", body.tipoRespaldo);
          }
        });
      }
    });
  }
  anularNotaDeCompra(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/notacompra').subscribe({
      next: body => {
        this.getNotasDeCompra();
      },
      error: error => {
        // console.error(error)
      }
    });
  }
  verDeatlles(row) {
    console.info("Nota de compra", row);
    this.dialog.open(_nota_compra_detalles_nota_compra_detalles_component__WEBPACK_IMPORTED_MODULE_2__.NotaCompraDetallesComponent, {
      data: row,
      width: '400px'
    });
  }
  static {
    this.ɵfac = function NotaCompraComponent_Factory(t) {
      return new (t || NotaCompraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_api_client_service__WEBPACK_IMPORTED_MODULE_4__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: NotaCompraComponent,
      selectors: [["fury-nota-compra"]],
      decls: 22,
      vars: 10,
      consts: [["mode", "card"], ["current", "Nota de Compra", 3, "crumbs"], ["name", "Notas de Compra", 3, "columns", "filterChange"], [1, "actions"], ["fxLayout", "row", "fxLayoutGap", "16px"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["class", "generarReporte", "type", "button", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "generarReporte", 3, "click"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
      template: function NotaCompraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "fury-breadcrumbs", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("filterChange", function NotaCompraComponent_Template_fury_list_filterChange_4_listener($event) {
            return ctx.onFilterChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NotaCompraComponent_Template_button_click_7_listener() {
            return ctx.createNotaDeCompra();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, NotaCompraComponent_button_10_Template, 2, 0, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "table", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](12, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, NotaCompraComponent_th_13_Template, 2, 0, "th", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, NotaCompraComponent_td_14_Template, 2, 0, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, NotaCompraComponent_ng_container_15_Template, 2, 1, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, NotaCompraComponent_th_17_Template, 1, 0, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, NotaCompraComponent_td_18_Template, 12, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, NotaCompraComponent_tr_19_Template, 1, 0, "tr", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, NotaCompraComponent_tr_20_Template, 1, 0, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "mat-paginator", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userActions.toExcelAction);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSize", ctx.pageSize);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_6__.ListComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatMiniFabButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__.PageLayoutContentDirective],
      styles: ["@charset \"UTF-8\";\n.checkbox-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n@media (max-width: 600px) {\n  [fxFlex=\"33%\"][_ngcontent-%COMP%] {\n    flex: 0 0 100%; \n\n  }\n  [fxFlex=\"25%\"][_ngcontent-%COMP%] {\n    flex: 0 0 50%; \n\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmV0ZXJpbmFyaWEvbm90YS1jb21wcmEvbm90YS1jb21wcmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGNBQUEsRUFBQSw2Q0FBQTtFQUVGO0VBQUE7SUFDRSxhQUFBLEVBQUEsb0NBQUE7RUFFRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIFtmeEZsZXg9XCIzMyVcIl0ge1xyXG4gICAgZmxleDogMCAwIDEwMCU7IC8qIE9jdXBhIHRvZGEgbGEgZmlsYSBlbiBwYW50YWxsYXMgcGVxdWXDg8KxYXMgKi9cclxuICB9XHJcbiAgW2Z4RmxleD1cIjI1JVwiXSB7XHJcbiAgICBmbGV4OiAwIDAgNTAlOyAvKiBPY3VwYSA1MCUgZW4gcGFudGFsbGFzIHBlcXVlw4PCsWFzICovXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 152:
/*!***************************************************************!*\
  !*** ./src/app/veterinaria/nota-compra/nota-compra.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotaCompraModule: () => (/* binding */ NotaCompraModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _nota_compra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nota-compra-routing.module */ 81089);
/* harmony import */ var _nota_compra_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nota-compra.component */ 60165);
/* harmony import */ var _crear_actualizar_nota_compra_crear_actualizar_nota_compra_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crear-actualizar-nota-compra/crear-actualizar-nota-compra.component */ 75893);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.module */ 3632);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 91447);
/* harmony import */ var _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/list/list.module */ 91398);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.module */ 49320);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _nota_compra_detalles_nota_compra_detalles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nota-compra-detalles/nota-compra-detalles.module */ 63700);
/* harmony import */ var _crear_reporte_compra_crear_reporte_compra_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crear-reporte-compra/crear-reporte-compra.module */ 21332);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);

























class NotaCompraModule {
  static {
    this.ɵfac = function NotaCompraModule_Factory(t) {
      return new (t || NotaCompraModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: NotaCompraModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _nota_compra_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotaCompraRoutingModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_4__.ListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _nota_compra_detalles_nota_compra_detalles_module__WEBPACK_IMPORTED_MODULE_6__.NotaCompraDetallesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _crear_reporte_compra_crear_reporte_compra_module__WEBPACK_IMPORTED_MODULE_7__.CrearReporteCompraModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NotaCompraModule, {
    declarations: [_nota_compra_component__WEBPACK_IMPORTED_MODULE_1__.NotaCompraComponent, _crear_actualizar_nota_compra_crear_actualizar_nota_compra_component__WEBPACK_IMPORTED_MODULE_2__.CrearActualizarNotaCompraComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _nota_compra_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotaCompraRoutingModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_4__.ListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__.PageLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _nota_compra_detalles_nota_compra_detalles_module__WEBPACK_IMPORTED_MODULE_6__.NotaCompraDetallesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _crear_reporte_compra_crear_reporte_compra_module__WEBPACK_IMPORTED_MODULE_7__.CrearReporteCompraModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_veterinaria_nota-compra_nota-compra_module_ts.js.map