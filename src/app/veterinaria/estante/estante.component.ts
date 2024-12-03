import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CrearActualizarCategoriaComponent
} from "../categoria/crear-actualizar-categoria/crear-actualizar-categoria.component";
import {CrearActualizarEstanteComponent} from "./crear-actualizar-estante/crear-actualizar-estante.component";

@Component({
  selector: 'fury-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.scss']
})
export class EstanteComponent implements OnInit{

  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;

  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Descripcion', property: 'descripcion', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;
  ngOnInit(): void {
    this.getEstantes()
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog : MatDialog) {

  }

  getEstantes(){
    this.apiClient.getRequest('/api/estante')
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

  createEstante(){
    console.info('Abre dialogo de creacion');
    this.dialog.open(CrearActualizarEstanteComponent, {width: '400px'})
      .afterClosed()
      .subscribe((data:any) => {
        if (data){
          console.info('Al cerrar', data);
          this.apiClient.postRequest('/api/estante',data)
            .subscribe({
              next:(body:any) =>{
                console.info('OK', body);
                this.getEstantes();
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

  updateEstante(row){
    console.info(row)
    this.dialog.open(CrearActualizarEstanteComponent,{data: row, width: '400px'})
      .afterClosed()
      .subscribe((data: any) => {
        if (data){
          this.apiClient.putRequest('/api/estante',data.id,data)
            .subscribe({
              next:(body:any) => {
                this.getEstantes()
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


  deleteEstante(row){
    console.info('deleteServicio', row)
    this.apiClient.deleteRequest(row.id,'/api/estante')
      .subscribe({
        next : (body:any) => {
          this.getEstantes();
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
