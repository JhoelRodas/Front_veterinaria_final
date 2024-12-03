import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiClientService} from "../../service/api-client.service";
import {
  CrearActualizarProductoComponent
} from "../producto/crear-actualizar-producto/crear-actualizar-producto.component";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarDetallesComponent} from "./crear-actualizar-detalles/crear-actualizar-detalles.component";
import {Router} from "@angular/router";
import {fileUtil} from "../../service/file.util";
import moment from "moment/moment";
import { saveAs } from 'file-saver';
import {formatDate} from "@angular/common";
import {CrearReporteCompraComponent} from "../nota-compra/crear-reporte-compra/crear-reporte-compra.component";
import {CrearReporteVentaComponent} from "./crear-reporte-venta/crear-reporte-venta.component"; // Asegúrate de tener file-saver instalado

@Component({
  selector: 'fury-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  form: FormGroup;
  metodosDePago = [
    { value: 'todos', label: 'Todos' },
    { value: 'efectivo', label: 'Efectivo' },
    { value: 'qr', label: 'QR' },

  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  columns: ListColumn[] = [
    {name: 'ID', property: 'id', visible: true, isModelProperty: true, selected: true},
    {name: 'Cliente', property: 'nombre', visible: true, isModelProperty: true, selected: true},
    {name: 'Ci', property: 'ci', visible: true, isModelProperty: true, selected: true},
    {name: 'Fecha', property: 'fecha', visible: true, isModelProperty: true, selected: true},
    {name: 'Monto Total', property: 'montoTotal', visible: true, isModelProperty: true, selected: true},
    {name: 'Metodo de pago', property: 'metodoPago', visible: true, isModelProperty: true, selected: true},
    {name: 'Actions', property: 'actions', visible: true},
  ] as ListColumn[];

  pageSize = 10;
  userActions: any = {};
  constructor(private apiClient: ApiClientService,
              private dialog: MatDialog,
              private router: Router) {

    this.form = new FormGroup({
      from: new FormControl(moment().subtract(10, "days").toDate()),
      to: new FormControl(moment().toDate()),
      montoMayor: new FormControl(null,[
        Validators.min(0),
        Validators.pattern(/^\d+(\.\d{1,2})?$/), // Acepta decimales con hasta 2 dígitos
      ]),
      montoMenor: new FormControl(null,[
        Validators.min(0),
        Validators.pattern(/^\d+(\.\d{1,2})?$/), // Acepta decimales con hasta 2 dígitos
        ]),
      metodoPago: new FormControl(null)
    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.getRecibos();
    this.apiClient.getRequest(`/api/v1/resource/actions-by-user?frontendCode=PAGE_VENTA`)
      .subscribe({next: this.successActionList});

  }

  protected successActionList = (data: any) => {
    this.userActions = data;
  }

  formatDecimals(controlName: string): void {
    const control = this.form.get(controlName);
    if (control?.value != null && control.value !== '') {
      control.setValue(parseFloat(control.value).toFixed(2)); // Siempre deja 2 decimales
    }
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

  getRecibos() {
    this.apiClient.getRequest('/api/recibo')
      .subscribe({
        next: (data: any[]) => {
          this.dataSource.data = data
          console.log(data)
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  createRecibo() {
    this.router.navigate(['/detallesVenta']).then(() => {
      // Asegúrate de que `getRecibos` se llama en la pantalla principal
      this.getRecibos(); // O utiliza algún método de actualización adecuado
    });
  }


  generarReporte() {
    this.dialog.open(CrearReporteVentaComponent,{
      width: '600px',
      data: {
        columns: this.columns, // Pasamos las columnas al diálogo
        metodoPago: this.metodosDePago, // También pasamos la lista de metodos de pago
      },
    }).afterClosed().subscribe((result) => {
      if (result) {
        console.log('Datos para el reporte:', result);
        this.apiClient.postRequest('/api/reporte/generar-excel', result)
          .subscribe({
            next: (body: any) => {
              console.log(body);
              fileUtil.downloadFromBase64(body.base64Archivo, "excel.xlsx", body.tipoRespaldo);
            },
          });
      }
    });
  }

  anularRecibo(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/recibo')
      .subscribe({
        next: (body: any) => {
          this.getRecibos();
        },
        error: (error) => {
          // console.error(error)
        }
      })
  }

  verDetalles(row) {
    console.info(row)
    this.dialog.open(CrearActualizarDetallesComponent, {
      data: row,
      width: '400px'
     })
  }

}
