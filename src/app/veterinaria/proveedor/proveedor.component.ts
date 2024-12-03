import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CrearActualizarProductoComponent
} from "../producto/crear-actualizar-producto/crear-actualizar-producto.component";
import {CrearActualizarProveedorComponent} from "./crear-actualizar-proveedor/crear-actualizar-proveedor.component";

@Component({
  selector: 'fury-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit{

  dataSource : MatTableDataSource<any> = new MatTableDataSource([]);

  columns : ListColumn[] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Telefono', property: 'telefono', visible: true , isModelProperty: true },
    { name: 'Correo', property: 'correo', visible: true, isModelProperty: true  },
    { name: 'Direccion', property: 'direccion', visible: true, isModelProperty: true  },
    { name: 'Encargado', property: 'encargado', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn [];


  pageSize = 10;

  ngOnInit(): void {
    this.getProveedor();
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient:ApiClientService,
              private dialog: MatDialog) {
  }

  getProveedor() {
    this.apiClient.getRequest('/api/proveedor')
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

  createProveedor() {
    console.info('Abre dialogo');
    this.dialog.open(CrearActualizarProveedorComponent, {width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        console.info('Al cerrar', data);
        this.apiClient.postRequest('/api/proveedor', data)
          .subscribe({
            next: (body: any) => {
              console.info('OK', body);
              this.getProveedor();
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

  deleteProveedor(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/proveedor')
      .subscribe({
        next: (body: any) => {
          this.getProveedor();
        },
        error: (error) => {
          // console.error(error)
        }
      })
  }

  updateProveedor(row) {
    console.info(row)
    this.dialog.open(CrearActualizarProveedorComponent, {
      data: row,
      width: '400px'
    }).afterClosed().subscribe((data: any) => {
      if (data) {
        this.apiClient.putRequest('/api/proveedor', data.id, data)
          .subscribe({
            next: (body: any) => {
              this.getProveedor();
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




