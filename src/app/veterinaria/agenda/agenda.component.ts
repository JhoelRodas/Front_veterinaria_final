import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CrearActualizarCategoriaComponent
} from "../categoria/crear-actualizar-categoria/crear-actualizar-categoria.component";
import {CrearActualizarAgendaComponent} from "./crear-actualizar-agenda/crear-actualizar-agenda.component";
import {formatDate} from "@angular/common";
import {cloneDeep} from "lodash-es";

@Component({
  selector: 'fury-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements  OnInit{

  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;

  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Cliente', property: 'cliente', visible: true, isModelProperty: true },
    { name: 'Fecha', property: 'fecha', visible: true, isModelProperty: true  },
    { name: 'Hora', property: 'hora', visible: true, isModelProperty: true  },
    { name: 'Descripcion', property: 'descripcion', visible: true, isModelProperty: true  },
    { name: 'Estado', property: 'estado', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;
  ngOnInit(): void {
    this.getAgenda()
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog : MatDialog) {

  }

  getAgenda(){
    this.apiClient.getRequest('/api/agenda')
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

  createAgenda(){
    console.info('Abre dialogo de creacion de Agenda');
    this.dialog.open(CrearActualizarAgendaComponent, {width: '400px'})
      .afterClosed()
      .subscribe((data:any) => {
        if (data){
          console.info('Al cerrar', data);
          if (data.fecha){
            data.fecha = formatDate(data.fecha,'dd/MM/yyyy','en')
          }
          this.apiClient.postRequest('/api/agenda',data)
            .subscribe({
              next:(body:any) =>{
                console.info('OK', body);
                this.getAgenda();
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

  updateAgenda(row) {
    // const rowCopy = {...row}
    const rowCopy = cloneDeep(row)
    console.info(rowCopy)
    this.dialog.open(CrearActualizarAgendaComponent,{data: rowCopy, width: '400px'})
      .afterClosed()
      .subscribe((data: any) => {
        if (data){
          if (data.fecha){
            data.fecha = formatDate(data.fecha,'dd/MM/yyyy','en')
          }
          this.apiClient.putRequest('/api/agenda',data.id,data)
            .subscribe({
              next:(body:any) => {
                this.getAgenda()
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


  deleteAgenda(row){
    console.info('deleteAgenda', row)
    this.apiClient.deleteRequest(row.id,'/api/agenda')
      .subscribe({
        next : (body:any) => {
          this.getAgenda();
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
