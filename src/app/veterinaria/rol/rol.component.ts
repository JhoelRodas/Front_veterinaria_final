import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ListComponent} from "../../../@fury/shared/list/list.component";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CrearActualizarProductoComponent
} from "../producto/crear-actualizar-producto/crear-actualizar-producto.component";
import {CrearActualizarRolComponent} from "./crear-actualizar-rol/crear-actualizar-rol.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'fury-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements  OnInit{

  dataSource : MatTableDataSource<any> = new MatTableDataSource([]);
  columns : ListColumn[] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'name', visible: true, isModelProperty: true },
    { name: 'Description', property: 'description', visible: true, isModelProperty: true },
    { name: 'es Base?', property: 'baseRole', visible: true, isModelProperty: true },
    { name: 'Estado', property: 'roleStatus', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;
  userActions: any = {};
  constructor(private apiClient:ApiClientService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getRoles();
    this.apiClient.getRequest(`/api/v1/resource/actions-by-user?frontendCode=PAGE_ROL`)
      .subscribe({next: this.successActionList});
  }


  protected successActionList = (data: any) => {
    this.userActions = data;
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }


  getRoles() {
    this.apiClient.getRequest('/api/role')
      .subscribe({
        next: (data: any[]) => {
          this.dataSource.data = data
          console.log(data);
        },
        error: (error) => {
          console.error(error)
        }
      })
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

  createRol() {
    console.info('Abre dialogo');
    this.dialog.open(CrearActualizarRolComponent, {width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        console.info('Al cerrar', data);
        this.apiClient.postRequest('/api/role', data)
          .subscribe({
            next: (body: any) => {
              console.info('OK', body);
              this.getRoles();
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

  deleteRol(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/role')
      .subscribe({
        next: (body: any) => {
          this.getRoles();
        },
        error: (error) => {
          // console.error(error)
        }
      })
  }

  updateRol(row) {
    console.info(row)
    this.dialog.open(CrearActualizarRolComponent, {
      data: row,
      width: '400px'
    }).afterClosed().subscribe((data: any) => {
      if (data) {
        this.apiClient.putRequest(`/api/role/${data.id}`, data.id, data)
          .subscribe({
            next: (body: any) => {
              this.getRoles();
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

}
