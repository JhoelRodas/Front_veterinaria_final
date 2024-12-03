"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_veterinaria_detalles-venta_detalles-venta_module_ts"],{

/***/ 86525:
/*!*****************************************************************************!*\
  !*** ./src/app/veterinaria/detalles-venta/detalles-venta-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetallesVentaRoutingModule: () => (/* binding */ DetallesVentaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _detalles_venta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles-venta.component */ 42721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _detalles_venta_component__WEBPACK_IMPORTED_MODULE_0__.DetallesVentaComponent
}];
class DetallesVentaRoutingModule {
  static {
    this.ɵfac = function DetallesVentaRoutingModule_Factory(t) {
      return new (t || DetallesVentaRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DetallesVentaRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetallesVentaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 42721:
/*!************************************************************************!*\
  !*** ./src/app/veterinaria/detalles-venta/detalles-venta.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetallesVentaComponent: () => (/* binding */ DetallesVentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/api-client.service */ 97405);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 74061);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 75063);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 43655);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 53007);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 15551);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 25175);
























function DetallesVentaComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r9.nombre, " ");
  }
}
function DetallesVentaComponent_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 32);
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
function DetallesVentaComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33)(1, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_th_66_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DetallesVentaComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35)(1, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_td_67_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function DetallesVentaComponent_ng_container_68_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", column_r14.name, "");
  }
}
function DetallesVentaComponent_ng_container_68_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 41);
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
function DetallesVentaComponent_ng_container_68_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DetallesVentaComponent_ng_container_68_ng_container_1_th_1_Template, 2, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DetallesVentaComponent_ng_container_68_ng_container_1_td_2_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matColumnDef", column_r14.property);
  }
}
function DetallesVentaComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DetallesVentaComponent_ng_container_68_ng_container_1_Template, 3, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r14.isModelProperty);
  }
}
function DetallesVentaComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 42);
  }
}
function DetallesVentaComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 35)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_td_71_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", 44, 45)(6, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_td_71_Template_button_click_6_listener() {
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
function DetallesVentaComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 47);
  }
}
function DetallesVentaComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_tr_73_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.updateDetalle(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Detalles"];
};
const _c1 = function () {
  return [];
};
class DetallesVentaComponent {
  constructor(apiClient, router) {
    this.apiClient = apiClient;
    this.router = router;
    this.productosList = [];
    this.serviciosList = [];
    this.detalles = []; // Lista para almacenar los productos agregados temporalmente
    this.detallesServicios = []; // Lista para almacenar los productos agregados temporalmente
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
    this.columns = [{
      name: 'ID Producto',
      property: 'idProducto',
      visible: true,
      isModelProperty: true
    }, {
      name: 'ID Servicio',
      property: 'idServicio',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Cantidad',
      property: 'cant',
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
      //Productos
      idProducto: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      cant: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      ciCliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      extension: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: 0,
        disabled: true
      }),
      precioUnitario: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: 0,
        disabled: true
      }),
      //Servicios
      idServicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(""),
      precioServicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl({
        value: 0,
        disabled: true
      }) // Campo de solo lectura
    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  ngOnInit() {
    //Obtener lista de productos
    this.apiClient.getRequest('/api/producto').subscribe({
      next: producto => {
        this.productosList = producto;
        console.info(producto);
      },
      error: error => {
        console.error(error);
      }
    });
    //Obtener lista de servicios
    this.apiClient.getRequest('/api/servicio').subscribe({
      next: servicios => {
        this.serviciosList = servicios;
        console.info(servicios);
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
    this.form.get('cant')?.valueChanges.subscribe(() => {
      this.actualizarMonto();
    });
    // Escuchar cambios en el selector de Servicios
    this.form.get('idServicio')?.valueChanges.subscribe(servicioId => {
      this.actualizarCampoServicio(servicioId);
    });
  }
  agregarDetalle() {
    // Obtén los valores actuales del formulario sin incluir precioUnitario y stock
    const {
      idProducto,
      cant
    } = this.form.getRawValue();
    // Encuentra el producto seleccionado en la lista
    const productoSeleccionado = this.productosList.find(prod => prod.id === idProducto);
    if (!productoSeleccionado) {
      console.error("Producto no encontrado o no seleccionado");
      return;
    }
    productoSeleccionado.stock = productoSeleccionado.stock - cant;
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
      detalleExistente.cant = Number(detalleExistente.cant) + Number(cant);
      detalleExistente.monto = Number(detalleExistente.cant) * Number(productoSeleccionado.precioUnitario);
    } else {
      // Si no existe, crea un nuevo detalle
      const monto = cant * productoSeleccionado.precioUnitario;
      const nuevoDetalle = {
        idProducto: idProducto,
        cant: cant,
        monto: monto
      };
      this.detalles.push(nuevoDetalle);
    }
    console.log("detalles", this.detalles);
    this.dataSource.data = [...this.detalles, ...this.detallesServicios];
    // Reinicia el formulario para la siguiente entrada
    this.form.patchValue({
      idProducto: null,
      cant: 0,
      precioUnitario: 0,
      stock: 0
    });
  }
  agregarServicio() {
    const {
      idServicio,
      cant
    } = this.form.getRawValue();
    // Encuentra el servicio seleccionado en la lista
    const servicioSeleccionado = this.serviciosList.find(servicio => servicio.id === idServicio);
    console.log('servicioSelecionado', servicioSeleccionado);
    if (!servicioSeleccionado) {
      console.error("Producto no encontrado o no seleccionado");
      return;
    }
    const detalleExistente = this.detallesServicios.find(detalle => detalle.idServicio === idServicio);
    if (detalleExistente) {
      detalleExistente.cant = Number(detalleExistente.cant) + Number(cant);
      detalleExistente.monto = Number(detalleExistente.cant) * Number(servicioSeleccionado.precio);
    } else {
      // Si no existe, crea un nuevo detalle
      const monto = cant * servicioSeleccionado.precio;
      console.log('precio', monto);
      const nuevoDetalle = {
        idServicio: idServicio,
        cant: cant,
        monto: monto
      };
      //  this.detalles.push(nuevoDetalle);
      this.detallesServicios.push(nuevoDetalle);
    }
    console.log("detalles", this.detallesServicios);
    this.dataSource.data = [...this.detalles, ...this.detallesServicios];
    // Reinicia el formulario para la siguiente entrada
    this.form.patchValue({
      idServicio: null,
      cant: 0,
      precioServicio: 0
    });
  }
  guardarDetalles() {
    // Obtén el valor de cliente desde el formulario
    const cliente = this.form.get('cliente')?.value;
    const ciCliente = this.form.get('ciCliente')?.value;
    const extension = this.form.get('extension')?.value;
    // Crear el objeto de envío que contiene los detalles y el cliente
    //objeto para  enviar al api
    const datosParaEnvio = {
      nombre: cliente,
      ci: ciCliente,
      extension: extension,
      detalles: this.detalles,
      detallesServicios: this.detallesServicios,
      montoTotal: 0.00,
      metodoPago: "efectivo"
    };
    console.log(datosParaEnvio);
    this.apiClient.postRequest('/api/recibo', datosParaEnvio).subscribe({
      next: response => {
        console.info('Detalles guardados correctamente:', response);
        // Redirige a la pantalla de Recibos
        this.router.navigate(['ventas/venta']);
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
  actualizarCampoServicio(servicioId) {
    const servicioSeleccionado = this.serviciosList.find(servicio => servicio.id === servicioId);
    console.log(servicioSeleccionado);
    if (servicioSeleccionado) {
      // Actualiza el precio del servicio en el formulario
      this.form.patchValue({
        precioServicio: servicioSeleccionado.precio
      });
    } else {
      // Si no hay producto seleccionado, limpia los campos
      this.form.patchValue({
        precioServicio: 0
      });
    }
  }
  deleteDetalle(row) {
    console.log("row", row);
    console.log("ListPro", this.productosList);
    const productoSeleccionado = this.productosList.find(prod => prod.id === row.idProducto);
    this.detalles = this.detalles.filter(item => item.id !== row.idProducto);
    console.log("producto", productoSeleccionado);
    console.log("detalles", this.detalles);
    productoSeleccionado.stock = Number(productoSeleccionado.stock) + Number(row.cant);
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
    this.ɵfac = function DetallesVentaComponent_Factory(t) {
      return new (t || DetallesVentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_api_client_service__WEBPACK_IMPORTED_MODULE_0__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DetallesVentaComponent,
      selectors: [["fury-detalles-venta"]],
      decls: 78,
      vars: 12,
      consts: [["mode", "card"], ["current", "Detalle", 3, "crumbs"], ["name", "Detalle", 3, "columns", "filterChange"], ["fxLayout", "column", "fxLayoutGap", "16px", 3, "formGroup"], ["fxFlex", "100%"], ["fxLayout", "row wrap", "fxLayout.xs", "column"], ["fxFlex", ""], ["type", "text", "formControlName", "cliente", "matInput", ""], ["type", "text", "formControlName", "ciCliente", "matInput", ""], ["type", "text", "formControlName", "extension", "matInput", ""], ["formControlName", "idProducto"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", "formControlName", "stock", "readonly", ""], ["type", "text", "matInput", "", "formControlName", "precioUnitario", "readonly", ""], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["formControlName", "idServicio"], ["type", "text", "matInput", "", "formControlName", "precioServicio", "readonly", ""], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "50%", "fxFlex.md", "33%"], ["type", "text", "formControlName", "cant", "matInput", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], [2, "margin-top", "20px", "text-align", "right"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
      template: function DetallesVentaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fury-breadcrumbs", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filterChange", function DetallesVentaComponent_Template_fury_list_filterChange_4_listener($event) {
            return ctx.onFilterChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Datos del Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field", 6)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "CI Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-form-field", 6)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Extensi\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Agregar Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 5)(24, "mat-form-field")(25, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, DetallesVentaComponent_mat_option_28_Template, 2, 2, "mat-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-form-field", 6)(30, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-form-field", 6)(34, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 14)(38, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_Template_button_click_38_listener() {
            return ctx.agregarDetalle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Agregar Servicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 5)(44, "mat-form-field")(45, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Servicios");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, DetallesVentaComponent_mat_option_48_Template, 2, 2, "mat-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-form-field", 6)(50, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 14)(54, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_Template_button_click_54_listener() {
            return ctx.agregarServicio();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Cantidad de Producto o Servicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 5)(60, "mat-form-field", 18)(61, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Cantidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "table", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](65, 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, DetallesVentaComponent_th_66_Template, 2, 0, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, DetallesVentaComponent_td_67_Template, 2, 0, "td", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, DetallesVentaComponent_ng_container_68_Template, 2, 1, "ng-container", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](69, 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, DetallesVentaComponent_th_70_Template, 1, 0, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, DetallesVentaComponent_td_71_Template, 9, 1, "td", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, DetallesVentaComponent_tr_72_Template, 1, 0, "tr", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, DetallesVentaComponent_tr_73_Template, 1, 0, "tr", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "mat-paginator", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 30)(76, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetallesVentaComponent_Template_button_click_76_listener() {
            return ctx.guardarDetalles();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, " Guardar y Volver a Recibos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.productosList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.serviciosList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutContentDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 612:
/*!*********************************************************************!*\
  !*** ./src/app/veterinaria/detalles-venta/detalles-venta.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetallesVentaModule: () => (/* binding */ DetallesVentaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _detalles_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles-venta-routing.module */ 86525);
/* harmony import */ var _detalles_venta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalles-venta.component */ 42721);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.module */ 3632);
/* harmony import */ var _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/list/list.module */ 91398);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.module */ 49320);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ 91447);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);




















class DetallesVentaModule {
  static {
    this.ɵfac = function DetallesVentaModule_Factory(t) {
      return new (t || DetallesVentaModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: DetallesVentaModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _detalles_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetallesVentaRoutingModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_3__.ListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DetallesVentaModule, {
    declarations: [_detalles_venta_component__WEBPACK_IMPORTED_MODULE_1__.DetallesVentaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _detalles_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetallesVentaRoutingModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbsModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_3__.ListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _fury_shared_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_veterinaria_detalles-venta_detalles-venta_module_ts.js.map