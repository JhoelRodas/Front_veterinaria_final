import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarServicioComponent} from "./crear-actualizar-servicio/crear-actualizar-servicio.component";

@Component({
  selector: 'fury-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit{
  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;
  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Precio', property: 'precio', visible: true , isModelProperty: true },
    { name: 'Descripcion', property: 'descripcion', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;
  ngOnInit(): void {
    this.getServicios()
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog : MatDialog) {

  }

  getServicios(){
    this.apiClient.getRequest('/api/servicio')
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

  createServicio(){
    console.info('Abre dialogo de creacion');
    this.dialog.open(CrearActualizarServicioComponent, {width: '400px'})
      .afterClosed()
      .subscribe((data:any) => {
        if (data){
          console.info('Al cerrar', data);
          this.apiClient.postRequest('/api/servicio',data)
            .subscribe({
              next:(body:any) =>{
                console.info('OK', body);
                this.getServicios();
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

  updateServicio(row){
    console.info(row)
    this.dialog.open(CrearActualizarServicioComponent,{data: row, width: '400px'})
      .afterClosed()
      .subscribe((data: any) => {
        if (data){
          this.apiClient.putRequest('/api/servicio',data.id,data)
            .subscribe({
              next:(body:any) => {
                this.getServicios()
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


  deleteServicio(row){
    console.info('deleteServicio', row)
    this.apiClient.deleteRequest(row.id,'/api/servicio')
      .subscribe({
        next : (body:any) => {
          this.getServicios();
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

  // protected readonly deleteOutputDir = deleteOutputDir;

}
