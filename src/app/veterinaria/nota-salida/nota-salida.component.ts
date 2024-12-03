import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import moment from "moment/moment";

import {CrearActualizarMascotaComponent} from "../mascota/crear-actualizar-mascota/crear-actualizar-mascota.component";
import {
  CrearActualizarNotaSalidaComponent
} from "./crear-actualizar-nota-salida/crear-actualizar-nota-salida.component";
import {CrearActualizarNotaSalidaModule} from "./crear-actualizar-nota-salida/crear-actualizar-nota-salida.module";
import {formatDate} from "@angular/common";
import {cloneDeep} from "lodash-es";

@Component({
  selector: 'fury-nota-salida',
  templateUrl: './nota-salida.component.html',
  styleUrls: ['./nota-salida.component.scss']
})
export class NotaSalidaComponent implements OnInit{

  form: FormGroup;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  columns: ListColumn[] = [
    {name: 'ID', property: 'id', visible: true, isModelProperty: true},
    {name: 'Fecha', property: 'fecha', visible: true, isModelProperty: true},
    {name: 'Producto', property: 'nombreProducto', visible: true, isModelProperty: true},
    {name: 'Cantidad', property: 'cantidad', visible: true, isModelProperty: true},
    {name: 'Motivo', property: 'motivo', visible: true, isModelProperty: true},
    {name: 'Actions', property: 'actions', visible: true},
  ] as ListColumn[];

  pageSize = 10;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog: MatDialog) {
    this.form = new FormGroup({
    });
  }

  ngOnInit(): void {
    this.getNotasSalida()
  }

   getNotasSalida() {
    this.apiClient.getRequest('/api/notasalida')
      .subscribe({
        next: (notas: any[]) => {
         this.dataSource.data = notas
          console.log(notas);
        },
        error: (error) => {
          console.error(error)
        }
      })
  }


  createNotaSalida() {
    console.info('Abre dialogo');
    this.dialog.open(CrearActualizarNotaSalidaComponent, {width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        console.info('Al cerrar', data);
        if (data.fecha){
          data.fecha = formatDate(data.fecha,'dd/MM/yyyy','en')
        }
        this.apiClient.postRequest('/api/notasalida', data)
          .subscribe({
            next: (body: any) => {
              console.info('OK', body);
              this.getNotasSalida();
            },
            error: (error) => {
              console.error('error', error)
            }
          })
        console.info('Fin api call');
      } else {
        console.info('Cancelado')
      }
    });
    console.info('Fin Metodo');
  }

  deleteNotaSalida(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/notasalida')
      .subscribe({
        next: (body: any) => {
          this.getNotasSalida();
        },
        error: (error) => {
          // console.error(error)
        }
      })
  }

  updateNotaSalida(row) {
    console.info(row)
    const rowCopy = cloneDeep(row)
    console.info("rowCopy",rowCopy)
    this.dialog.open(CrearActualizarNotaSalidaComponent, {data: rowCopy, width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        if (data.fecha){
          data.fecha = formatDate(data.fecha,'dd/MM/yyyy','en')
        }
        this.apiClient.putRequest('/api/notasalida', data.id, data)
          .subscribe({
            next: (body: any) => {
              this.getNotasSalida();
            },
            error: (error) => {
              console.error(error)
            }
          })
      } else {
        console.info('Cancelado')
      }
    });
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
