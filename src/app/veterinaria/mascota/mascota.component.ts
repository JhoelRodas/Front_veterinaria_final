import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarClienteComponent} from "../cliente/crear-actualizar-cliente/crear-actualizar-cliente.component";
import {CrearActualizarMascotaComponent} from "./crear-actualizar-mascota/crear-actualizar-mascota.component";

@Component({
  selector: 'fury-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})

export class MascotaComponent implements OnInit{
  dataSource : MatTableDataSource<any> = new MatTableDataSource([]);

  columns: ListColumn[]=[
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Edad', property: 'edad', visible: true, isModelProperty: true },
    { name: 'Sexo', property: 'sexo', visible: true , isModelProperty: true },
    { name: 'Color', property: 'color', visible: true, isModelProperty: true  },
    { name: 'Especie', property: 'especie', visible: true, isModelProperty: true  },
    { name: 'Raza', property: 'raza', visible: true, isModelProperty: true  },
    { name: 'CI Cliente', property: 'ci', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;

  ngOnInit(): void {
    this.getMascotas();
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }


  constructor(private apiClient:ApiClientService,
              private dialog: MatDialog) {
  }

  getMascotas() {
    this.apiClient.getRequest('/api/mascota')
      .subscribe({
        next: (mascotas: any[]) => {
          this.dataSource.data = mascotas
          console.log(mascotas);
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

  createMascota() {
    console.info('Abre dialogo');
    this.dialog.open(CrearActualizarMascotaComponent, {width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        console.info('Al cerrar', data);
        this.apiClient.postRequest('/api/mascota', data)
          .subscribe({
            next: (body: any) => {
              console.info('OK', body);
              this.getMascotas();
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

  deleteMascota(row) {
    // console.info('deleteMascota', row)
    this.apiClient.deleteRequest(row.id, '/api/mascota')
      .subscribe({
        next: (body: any) => {
          this.getMascotas();
        },
        error: (error) => {
          // console.error(error)
        }
      })
  }

  updateMascota(row) {
    console.info(row)
    this.dialog.open(CrearActualizarMascotaComponent, {data: row, width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        this.apiClient.putRequest('/api/mascota', data.id, data)
          .subscribe({
            next: (body: any) => {
              this.getMascotas();
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
