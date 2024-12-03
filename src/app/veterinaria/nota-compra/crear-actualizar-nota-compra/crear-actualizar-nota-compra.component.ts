import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../../service/api-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'fury-crear-actualizar-nota-compra',
  templateUrl: './crear-actualizar-nota-compra.component.html',
  styleUrls: ['./crear-actualizar-nota-compra.component.scss']
})
export class CrearActualizarNotaCompraComponent implements OnInit{

  form: FormGroup;
  productosList: any[] = []
  proveedoresList: any[] = []
  detalles: any[] = []; // Lista para almacenar los productos agregados temporalmente
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  @Input()
  columns: ListColumn[] = [
    { name: 'ID Producto', property: 'idProducto', visible: true, isModelProperty: true },
    { name: 'Cantidad', property: 'cantidad', visible: true, isModelProperty: true },
    { name: 'Monto', property: 'monto', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;

  constructor(private apiClient:ApiClientService,
              private router : Router) {

    this.form = new UntypedFormGroup({
      idProducto: new UntypedFormControl(""),
      nombreProveedor: new UntypedFormControl(""),
      cant: new UntypedFormControl(""),
      stock: new UntypedFormControl({ value: 0, disabled: true }), // Campo de solo lectura
      precioUnitario: new UntypedFormControl({ value: 0, disabled: true }), // Campo de solo lectura
      monto: new UntypedFormControl(""), // Campo de solo lectura


    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.apiClient.getRequest('/api/producto')
      .subscribe({
        next: (producto: any[]) => {
          this.productosList = producto
          console.info(producto)
        },
        error: (error) => {
          console.error(error)
        }
      })

    this.apiClient.getRequest('/api/proveedor')
      .subscribe({
        next: (proveedor: any[]) => {
          this.proveedoresList = proveedor
          console.info(proveedor)
        },
        error: (error) => {
          console.error(error)
        }
      })

    // Escuchar cambios en el selector de productos
    this.form.get('idProducto')?.valueChanges.subscribe(productId => {
      this.actualizarCamposProducto(productId);
    });

    // Escuchar cambios en la cantidad para actualizar el monto automáticamente
    // this.form.get('cant')?.valueChanges.subscribe(() => {
    //   this.actualizarMonto();
    // });
  }


  agregarDetalle(){
//    Obtén los valores actuales del formulario sin incluir precioUnitario y stock
    const { idProducto, cant , monto } = this.form.getRawValue();

    // Encuentra el producto seleccionado en la lista
    const productoSeleccionado = this.productosList.find(prod => prod.id === idProducto);
    console.log("pro",productoSeleccionado)

    if (!productoSeleccionado) {
      console.error("Producto no encontrado o no seleccionado");
      return;
    }

    productoSeleccionado.stock = productoSeleccionado.stock + Number(cant);
    console.log("proSelec",productoSeleccionado)
    this.apiClient.putRequest('/api/producto',productoSeleccionado.id,productoSeleccionado)
      .subscribe({
        next:(response) =>{
          console.log(response)
        },
        error: (error) => {
          console.error('Error al actualizar  producto:', error);
        }

      });

    const detalleExistente = this.detalles.find(detalle => detalle.idProducto === idProducto);

    console.log("detalleExistente",detalleExistente)

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
      console.log("nuevo Detalle",nuevoDetalle)
      // Agrega el detalle a la lista y actualiza el dataSource
      this.detalles.push(nuevoDetalle);
    }
      console.log("listDetalles",this.detalles)
      this.dataSource.data = [...this.detalles];

      // Reinicia el formulario para la siguiente entrada
      this.form.patchValue({ idProducto: null, cant: 0, precioUnitario: 0, stock: 0 });
  }

  guardarDetalles(){

    // Obtén el valor de cliente desde el formulario
    const nombreProveedor = this.form.get('nombreProveedor')?.value;

    // Crear el objeto de envío que contiene los detalles y el cliente
    //objeto para  enviar al api
    const datosParaEnvio = {
      nombreProveedor: nombreProveedor,
      detalles: this.detalles,
      montoTotal: 0.00,
    };
    console.log("DetallesCompra",datosParaEnvio)
    this.apiClient.postRequest('/api/notacompra',datosParaEnvio)
      .subscribe({
        next: (response) => {
          console.info('Detalles guardados correctamente:', response);

          // Redirige a la pantalla de Recibos
          this.router.navigate(['compras/nota-Compra']);
        },
        error: (error) => {
          console.error('Error al guardar los detalles:', error);
        }
      });
  }

  actualizarCamposProducto(productId: number) {
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
    const a = monto.precio

    // Actualiza el monto en el formulario
    this.form.patchValue({ monto });
  }

  updateDetalle(row){

  }

  deleteDetalle(row){
    console.log("row",row)
    console.log("ListPro",this.productosList)
    const productoSeleccionado = this.productosList.find(prod => prod.id === row.idProducto);
    this.detalles = this.detalles.filter(item => item.idProducto !== row.idProducto);
    console.log("producto",productoSeleccionado)
    console.log("detallesList",this.detalles)
    productoSeleccionado.stock = Number(productoSeleccionado.stock) - Number(row.cantidad);
    this.apiClient.putRequest('/api/producto',productoSeleccionado.id,productoSeleccionado)
      .subscribe({
        next:(response) =>{
          console.log(response)
          this.apiClient.getRequest('/api/producto')
            .subscribe({
              next: (producto: any[]) => {
                this.productosList = producto
                console.info(producto)
              },
              error: (error) => {
                console.error(error)
              }
            })

          this.dataSource.data = this.dataSource.data.filter((it) => {
            return it.idProducto !== row.idProducto
          })
        },
        error: (error) => {
          console.error('Error al actualizar  producto:', error);
        }

      });
    // console.log(row)
  }

  onFilterChange(value) {
    console.info(event)

    if (!this.dataSource) {
      return;
    }

    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }



}
