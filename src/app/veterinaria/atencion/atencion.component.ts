import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CrearActualizarCategoriaComponent
} from "../categoria/crear-actualizar-categoria/crear-actualizar-categoria.component";
import {CrearActualizarAtencionComponent} from "./crear-actualizar-atencion/crear-actualizar-atencion.component";
import {update} from "lodash-es";

@Component({
  selector: 'fury-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.scss']
})
export class AtencionComponent implements OnInit{
  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;

  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Fecha', property: 'fecha', visible: true, isModelProperty: true },
    { name: 'Hora', property: 'hora', visible: true, isModelProperty: true  },
   // { name: 'ID Mascota', property: 'idMascota', visible: true, isModelProperty: true  },
    { name: 'Mascota', property: 'mascota', visible: true, isModelProperty: true  },
    { name: 'Propietario', property: 'cliente', visible: true, isModelProperty: true  },
   // { name: 'id Veterinario', property: 'idUsuario', visible: true, isModelProperty: true  },
    { name: 'Veterinario', property: 'usuario', visible: true, isModelProperty: true  },
    { name: 'Anamnesis', property: 'anamnesis', visible: true, isModelProperty: true  },
    { name: 'Descripcion', property: 'descripcion', visible: true, isModelProperty: true  },

    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;

  ngOnInit(): void {
    this.getAtenciones();
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog : MatDialog) {

  }

  getAtenciones(){
    this.apiClient.getRequest('/api/atencion')
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

  createAtencion(){
    console.info('Abre dialogo de creacion');
    this.dialog.open(CrearActualizarAtencionComponent, {width: '400px'})
      .afterClosed()
      .subscribe((data:any) => {
        if (data){
          console.info('Al cerrar', data);
          this.apiClient.postRequest('/api/atencion',data)
            .subscribe({
              next:(body:any) =>{
                console.info('OK', body);
                this.getAtenciones();
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

  updateAtencion(row){
    console.info(row)
    this.dialog.open(CrearActualizarAtencionComponent,{data: row, width: '400px'})
      .afterClosed()
      .subscribe((data: any) => {
        if (data){
          this.apiClient.putRequest('/api/atencion',data.id,data)
            .subscribe({
              next:(body:any) => {
                this.getAtenciones()
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


  deleteAtencion(row){
    console.info('deleteServicio', row)
    this.apiClient.deleteRequest(row.id,'/api/atencion')
      .subscribe({
        next : (body:any) => {
          this.getAtenciones();
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

  protected readonly update = update;
}
