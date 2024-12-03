import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {CrearActualizarMascotaComponent} from "../mascota/crear-actualizar-mascota/crear-actualizar-mascota.component";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarProductoComponent} from "./crear-actualizar-producto/crear-actualizar-producto.component";

@Component({
  selector: 'fury-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{

  dataSource : MatTableDataSource<any> = new MatTableDataSource([]);

  columns : ListColumn[] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Precio Unitario', property: 'precioUnitario', visible: true , isModelProperty: true },
    { name: 'Stock', property: 'stock', visible: true, isModelProperty: true  },
    { name: 'Descripcion', property: 'descripcion', visible: true, isModelProperty: true  },
    { name: 'Categoria', property: 'nombreCategoria', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },

  ] as ListColumn[];

  pageSize = 10;

  ngOnInit(): void {
    this.getProducto();
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient:ApiClientService,
              private dialog: MatDialog) {
  }

  getProducto() {
    this.apiClient.getRequest('/api/producto')
      .subscribe({
        next: (producto: any[]) => {
          this.dataSource.data = producto
          console.log(producto);
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

  createProducto() {
    console.info('Abre dialogo');
    this.dialog.open(CrearActualizarProductoComponent, {width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        console.info('Al crear el dialogo de crear', data);
        this.apiClient.postRequest('/api/producto', data)
          .subscribe({
            next: (body: any) => {
              console.info('OK', body);
              this.getProducto();
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

  deleteProducto(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/producto')
      .subscribe({
        next: (body: any) => {
          this.getProducto();
        },
        error: (error) => {
          // console.error(error)
        }
      })
  }

  updateProducto(row) {
    console.info(row)
    this.dialog.open(CrearActualizarProductoComponent, {
      data: row,
      width: '400px'
    }).afterClosed().subscribe((data: any) => {
      if (data) {
        this.apiClient.putRequest('/api/producto',data.id, data)
          .subscribe({
            next: (body: any) => {
              this.getProducto();
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
