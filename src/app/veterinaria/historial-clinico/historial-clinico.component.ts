import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarEstanteComponent} from "../estante/crear-actualizar-estante/crear-actualizar-estante.component";
import {Router} from "@angular/router";

@Component({
  selector: 'fury-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.scss']
})
export class HistorialClinicoComponent implements OnInit{

  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;

  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Dueño', property: 'duenio', visible: true, isModelProperty: true  },
    { name: 'Mascota', property: 'mascota', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;
  ngOnInit(): void {
    this.getHistoriales()
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog : MatDialog,
              private router : Router) {

  }

  getHistoriales(){
    this.apiClient.getRequest('/api/historial')
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


  updateHistorial(row){
    console.info(row)

    this.router.navigate([`ventas/historialClinico/historial-detalles/${row.id}`]);
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
