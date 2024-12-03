import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'fury-crear-actualizar-servicio',
  templateUrl: './crear-actualizar-servicio.component.html',
  styleUrls: ['./crear-actualizar-servicio.component.scss']
})
export class CrearActualizarServicioComponent implements OnInit{
  form : UntypedFormGroup;
  mode : 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarServicioComponent>) {

  }

  ngOnInit(): void {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as any;
    }
    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl(this.defaults.nombre),
      precio: new UntypedFormControl(this.defaults.precio),
      descripcion: new UntypedFormControl(this.defaults.descripcion)
    })
  }

  save() {
    // this.createCustomer();
    console.log(this.form.value)
    // return;
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
