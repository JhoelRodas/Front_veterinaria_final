import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CrearActualizarServicioComponent
} from "../servicio/crear-actualizar-servicio/crear-actualizar-servicio.component";
import {CrearActualizarCategoriaComponent} from "./crear-actualizar-categoria/crear-actualizar-categoria.component";

@Component({
  selector: 'fury-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit{

  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;

  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'ID Estante', property: 'estante', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog : MatDialog) {

  }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.apiClient.getRequest('/api/categoria')
      .subscribe({
        next:(data:any[]) =>{
          this.dataSource.data = data;
          console.log(data);
        },
        error:(error) =>{
          console.error(error)
        }
      })
  }

  createCategoria(){
    console.info('Abre dialogo de creacion');
    this.dialog.open(CrearActualizarCategoriaComponent, {width: '400px'})
      .afterClosed()
      .subscribe((data:any) => {
        if (data){
          console.info('Al cerrar', data);
          this.apiClient.postRequest('/api/categoria',data)
            .subscribe({
              next:(body:any) =>{
                console.info('OK', body);
                this.getCategorias();
              },
              error:(error) =>{
                console.error('error', error)
              }
            })
          console.info('Fin api call');
        }else{
          console.info('Cancelado')
        }
        console.info('Fin Metodo');
      })
  }

  updateCategoria(row){
    console.info(row)
    this.dialog.open(CrearActualizarCategoriaComponent,{data: row, width: '400px'})
      .afterClosed()
      .subscribe((data: any) => {
        if (data){
          this.apiClient.putRequest('/api/categoria',data.id,data)
            .subscribe({
              next:(body:any) => {
                this.getCategorias()
              },
              error : (error) => {
                console.info(error)
              }
            })
        }else {
          console.info('Cancelado')
        }
      })
  }


  deleteCategoria(row){
    console.info('deleteServicio', row)
    this.apiClient.deleteRequest(row.id,'/api/categoria')
      .subscribe({
        next : (body:any) => {
          this.getCategorias();
        },
        error :(error) => {
          console.info(error);
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
}
