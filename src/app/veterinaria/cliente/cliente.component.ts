import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {ApiClientService} from "../../service/api-client.service";
import {MatDialog} from "@angular/material/dialog";
import {CrearActualizarClienteComponent} from "./crear-actualizar-cliente/crear-actualizar-cliente.component";
import {AbstractControl, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";


interface SomeClass<T> {
  id: T
}

type UntypedSomeClass = SomeClass<any>;

const someClass: SomeClass<string> = {id: '1'}
const someUntypedClass: UntypedSomeClass = {id: 123}

@Component({
  selector: 'fury-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  @Input()
  columns: ListColumn[] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'CI', property: 'ci', visible: true, isModelProperty: true },
    { name: 'Extension', property: 'extension', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'nombre', visible: true , isModelProperty: true },
    { name: 'Telefono', property: 'telefono', visible: true, isModelProperty: true  },
    { name: 'Correo', property: 'correo', visible: true, isModelProperty: true  },
    { name: 'Direccion', property: 'direccion', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;

  ngOnInit(): void {
    //Un campo de formulario
    const untypedControl: UntypedFormControl = new UntypedFormControl(123);
    console.info('untypedControl value', untypedControl.value)

    //Un grupo de campos de formulario
    const untypedGroup: UntypedFormGroup = new UntypedFormGroup({
      id: new UntypedFormControl(),
      ci: new UntypedFormControl(),
      extension: new UntypedFormControl(),
      nombre: new UntypedFormControl(),
      telefono: new UntypedFormControl(),
      correo: new UntypedFormControl(),
      direccion: new UntypedFormControl(),
    });
    console.info('untypedGroup value', untypedGroup.value)


    this.getClientes();
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private apiClient:ApiClientService,
              private dialog: MatDialog) {
  }

  getClientes() {
    this.apiClient.getRequest('/api/cliente')
      .subscribe({
        next: (clientes: any[]) => {
          this.dataSource.data = clientes
          console.log(clientes);
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  onFilterChange(value) {
    // console.info(event)
    if (!this.dataSource) {
      return;
    }

    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  updateCliente(row) {
    console.info(row)
    this.dialog.open(CrearActualizarClienteComponent, {data: row, width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        this.apiClient.putRequest('/api/cliente', data.id, data)
          .subscribe({
            next: (body: any) => {
              this.getClientes()
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


  deleteCliente(row) {
    console.info('deleteCliente', row)
    this.apiClient.deleteRequest(row.id, '/api/cliente')
      .subscribe({
        next: (body: any) => {
          this.getClientes()
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  createCliente() {
    console.info('Abre dialogo');
    this.dialog.open(CrearActualizarClienteComponent, {width: '400px'}).afterClosed().subscribe((data: any) => {
      if (data) {
        console.info('Al cerrar', data);
        this.apiClient.postRequest('/api/cliente', data)
          .subscribe({
            next: (body: any) => {
              console.info('OK', body);

              this.getClientes()
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


  protected readonly event = event;
}
