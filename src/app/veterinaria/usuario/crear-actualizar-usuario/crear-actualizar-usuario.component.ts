import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ApiClientService} from "../../../service/api-client.service";

@Component({
  selector: 'fury-crear-actualizar-usuario',
  templateUrl: './crear-actualizar-usuario.component.html',
  styleUrls: ['./crear-actualizar-usuario.component.scss']
})
export class CrearActualizarUsuarioComponent implements OnInit {

  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  roleList: any[] = []
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarUsuarioComponent>,
              private apiClient: ApiClientService,
              private fb: UntypedFormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as any;
    }

    this.form = this.fb.group({
      id: [this.defaults.firstName || null],
      name: [this.defaults.name || '',],
      username: [this.defaults.name || '',],
      contrasenia: [this.defaults.contrasenia || ''],
      idAuthRole: [this.defaults.idAuthRole || ''],
    });
    this.apiClient.getRequest('/api/role')
      .subscribe({
        next: (roles: any[]) => {
          this.roleList = roles
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const customer = this.form.value;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;

    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
