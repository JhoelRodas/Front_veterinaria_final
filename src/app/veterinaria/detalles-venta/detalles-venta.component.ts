import {Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'fury-detalles-venta',
  templateUrl: './detalles-venta.component.html',
  styleUrls: ['./detalles-venta.component.scss']
})
export class DetallesVentaComponent implements OnInit{

  form: FormGroup;
  productosList: any[] = []
  serviciosList: any[] = []
  detalles: any[] = []; // Lista para almacenar los productos agregados temporalmente
  detallesServicios: any[] = []; // Lista para almacenar los productos agregados temporalmente
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  columns: ListColumn[] = [
    { name: 'ID Producto', property: 'idProducto', visible: true, isModelProperty: true },
     { name: 'ID Servicio', property: 'idServicio', visible: true, isModelProperty: true },
    { name: 'Cantidad', property: 'cant', visible: true, isModelProperty: true },
    { name: 'Monto', property: 'monto', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;

  constructor(private apiClient:ApiClientService,
              private router : Router) {

    this.form = new UntypedFormGroup({
      //Productos
      idProducto: new UntypedFormControl(""),
      cant: new UntypedFormControl(""),
      cliente: new UntypedFormControl(""),
      ciCliente: new UntypedFormControl(""),
      extension: new UntypedFormControl(""),
      stock: new UntypedFormControl({ value: 0, disabled: true }), // Campo de solo lectura
      precioUnitario: new UntypedFormControl({ value: 0, disabled: true }), // Campo de solo lectura

      //Servicios
      idServicio : new UntypedFormControl(""),
      precioServicio: new UntypedFormControl({ value: 0, disabled: true }), // Campo de solo lectura

    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    //Obtener lista de productos
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

    //Obtener lista de servicios
    this.apiClient.getRequest('/api/servicio')
      .subscribe({
        next: (servicios: any[]) => {
          this.serviciosList = servicios
          console.info(servicios)
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
    this.form.get('cant')?.valueChanges.subscribe(() => {
      this.actualizarMonto();
    });

    // Escuchar cambios en el selector de Servicios
    this.form.get('idServicio')?.valueChanges.subscribe(servicioId => {
      this.actualizarCampoServicio(servicioId);
    });

  }

  agregarDetalle(){
    // Obtén los valores actuales del formulario sin incluir precioUnitario y stock
    const { idProducto, cant } = this.form.getRawValue();

    // Encuentra el producto seleccionado en la lista
    const productoSeleccionado = this.productosList.find(prod => prod.id === idProducto);
    if (!productoSeleccionado) {
      console.error("Producto no encontrado o no seleccionado");
      return;
    }

    productoSeleccionado.stock = productoSeleccionado.stock - cant;
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

    console.log("detalles",this.detalles)
      this.dataSource.data = [...this.detalles,...this.detallesServicios];

      // Reinicia el formulario para la siguiente entrada
      this.form.patchValue({ idProducto: null, cant: 0, precioUnitario: 0, stock: 0 });
  }

  agregarServicio(){
    const { idServicio , cant } = this.form.getRawValue();
    // Encuentra el servicio seleccionado en la lista
    const servicioSeleccionado = this.serviciosList.find(servicio => servicio.id === idServicio);
    console.log('servicioSelecionado',servicioSeleccionado)
    if (!servicioSeleccionado) {
      console.error("Producto no encontrado o no seleccionado");
      return;
    }
    const detalleExistente = this.detallesServicios.find(detalle => detalle.idServicio === idServicio);

    if (detalleExistente){
      detalleExistente.cant = Number(detalleExistente.cant) + Number(cant);
      detalleExistente.monto = Number(detalleExistente.cant) * Number(servicioSeleccionado.precio);
    }else{
      // Si no existe, crea un nuevo detalle
      const monto  = cant * servicioSeleccionado.precio;
      console.log('precio',monto)
      const nuevoDetalle = {
        idServicio: idServicio,
        cant: cant,
        monto: monto
      };
    //  this.detalles.push(nuevoDetalle);
      this.detallesServicios.push(nuevoDetalle);
    }
    console.log("detalles",this.detallesServicios)
    this.dataSource.data = [...this.detalles,...this.detallesServicios];

    // Reinicia el formulario para la siguiente entrada
    this.form.patchValue({ idServicio: null, cant: 0, precioServicio: 0});

  }

  guardarDetalles(){
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
      metodoPago : "efectivo"
    };
    console.log(datosParaEnvio)
    this.apiClient.postRequest('/api/recibo',datosParaEnvio)
      .subscribe({
      next: (response) => {
        console.info('Detalles guardados correctamente:', response);

        // Redirige a la pantalla de Recibos
        this.router.navigate(['ventas/venta']);
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

  actualizarCampoServicio(servicioId:number){
    const servicioSeleccionado = this.serviciosList.find(servicio => servicio.id === servicioId);
    console.log(servicioSeleccionado);

    if (servicioSeleccionado) {
      // Actualiza el precio del servicio en el formulario
      this.form.patchValue({
        precioServicio: servicioSeleccionado.precio,
      });
    } else {
      // Si no hay producto seleccionado, limpia los campos
      this.form.patchValue({
        precioServicio: 0,
      });
    }
}

  deleteDetalle(row){
    console.log("row",row)
    console.log("ListPro",this.productosList)
    const productoSeleccionado = this.productosList.find(prod => prod.id === row.idProducto);
    this.detalles = this.detalles.filter(item => item.id !== row.idProducto);
    console.log("producto",productoSeleccionado)
    console.log("detalles",this.detalles)
    productoSeleccionado.stock = Number(productoSeleccionado.stock) + Number(row.cant);
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
