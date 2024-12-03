import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {
  CustomerCreateUpdateComponent
} from "../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.component";
import {Customer} from "../../pages/tables/all-in-one-table/customer-create-update/customer.model";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarUsuarioComponent} from "./crear-actualizar-usuario/crear-actualizar-usuario.component";


@Component({
  selector: 'fury-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit{
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  @Input()
  columns: ListColumn[] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'Name', property: 'name', visible: true, isModelProperty: true },
    { name: 'UserName', property: 'username', visible: true, isModelProperty: true },
    { name: 'Rol', property: 'idAuthRole', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient: ApiClientService,
              private dialog: MatDialog) {
    // this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.apiClient.getRequest('/api/usuario')
      .subscribe({
        next: (usuarios: any[]) => {
          this.dataSource.data = usuarios
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

  updateUser(row) {
    this.dialog.open(CrearActualizarUsuarioComponent, {data: row}).afterClosed().subscribe((data: any) => {
      if (data) {
        this.apiClient.putRequest(`/api/usuario/${data.id}`,data.id, data)
          .subscribe({
            next: (body: any) => {
              this.getUsers()
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

  deleteUser(row) {
    console.info('deleteUser', row)
    this.apiClient.deleteRequest(row.id, '/api/usuario')
      .subscribe({
        next: (body: any) => {
          this.getUsers()
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  createUser() {
    this.dialog.open(CrearActualizarUsuarioComponent).afterClosed().subscribe((usuario: any) => {
      if (usuario) {
        this.apiClient.postRequest('/api/usuario', usuario)
          .subscribe({
            next: (body: any) => {
              this.getUsers()
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
