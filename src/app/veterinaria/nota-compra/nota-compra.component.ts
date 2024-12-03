import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import moment from "moment";
import {fileUtil} from "../../service/file.util";
import {CrearActualizarDetallesComponent} from "../venta/crear-actualizar-detalles/crear-actualizar-detalles.component";
import {NotaCompraDetallesComponent} from "./nota-compra-detalles/nota-compra-detalles.component";
import {formatDate} from "@angular/common";
import {CrearReporteCompraComponent} from "./crear-reporte-compra/crear-reporte-compra.component";

@Component({
  selector: 'fury-nota-compra',
  templateUrl: './nota-compra.component.html',
  styleUrls: ['./nota-compra.component.scss']
})
export class NotaCompraComponent implements OnInit{

  form: FormGroup;
  proveedoresList : any[]=[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  columns: ListColumn[] = [
    {name: 'ID', property: 'id', visible: true, isModelProperty: true, selected: true},
    {name: 'Fecha', property: 'fecha', visible: true, isModelProperty: true, selected: true},
    {name: 'Monto Total', property: 'montoTotal', visible: true, isModelProperty: true, selected: true},
    {name: 'Proveedor', property: 'nombreProveedor', visible: true, isModelProperty: true, selected: true},
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
      nombreProveedor: new FormControl(null)
    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this.apiClient.getRequest('/api/proveedor')
      .subscribe({
        next: (proveedor: any[]) => {
          this.proveedoresList = [{ id: null, nombre: 'todos' }, ...proveedor];
          console.info('proveedoresList',proveedor)
        },
        error: (error) => {
          console.error(error)
        }
      })
    this.getNotasDeCompra();
    this.apiClient.getRequest(`/api/v1/resource/actions-by-user?frontendCode=PAGE_NOTACOMPRA`)
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

  getNotasDeCompra() {
    this.apiClient.getRequest('/api/notacompra')
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
    this.dialog.open(CrearReporteCompraComponent,{
      width: '600px',
      data: {
        columns: this.columns, // Pasamos las columnas al diálogo
        proveedoresList: this.proveedoresList, // También pasamos la lista de proveedores
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


  anularNotaDeCompra(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id,'/api/notacompra')
      .subscribe({
        next: (body: any) => {
          this.getNotasDeCompra();
        },
        error: (error) => {
          // console.error(error)
        }
      })
  }

  verDeatlles(row) {
    console.info("Nota de compra",row)
    this.dialog.open(NotaCompraDetallesComponent,{
      data: row,
      width: '400px'
    })
  }

}
