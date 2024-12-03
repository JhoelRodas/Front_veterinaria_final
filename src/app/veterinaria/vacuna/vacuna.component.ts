import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {
  CrearActualizarServicioComponent
} from "../servicio/crear-actualizar-servicio/crear-actualizar-servicio.component";
import {UpdateDescripcionVacunaComponent} from "./update-descripcion-vacuna/update-descripcion-vacuna.component";

@Component({
  selector: 'fury-vacuna',
  templateUrl: './vacuna.component.html',
  styleUrls: ['./vacuna.component.scss']
})
export class VacunaComponent implements OnInit{
  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;
  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Stock', property: 'stock', visible: true , isModelProperty: true },
    { name: 'Descripcion', property: 'descripcion', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;


  ngOnInit(): void {
    this.getVacunas();

  }


  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog : MatDialog) {

  }

  getVacunas(){
    this.apiClient.getRequest('/api/vacuna')
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

  updateDescripcionVacuna(row){
    console.info(row)
    this.dialog.open(UpdateDescripcionVacunaComponent,{data: row, width: '400px'})
      .afterClosed()
      .subscribe((data: any) => {
        if (data){
          this.apiClient.putRequest('/api/vacuna',data.id,data)
            .subscribe({
              next:(body:any) => {
                this.getVacunas()
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
