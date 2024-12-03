import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CrearActualizarProveedorModule} from "./crear-actualizar-proveedor.module";

@Component({
  selector: 'fury-crear-actualizar-proveedor',
  templateUrl: './crear-actualizar-proveedor.component.html',
  styleUrls: ['./crear-actualizar-proveedor.component.scss']
})
export class CrearActualizarProveedorComponent implements OnInit{
  form : UntypedFormGroup;
  mode : 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarProveedorComponent>) {
  }

  ngOnInit():void {
    if (this.defaults){
      this.mode = 'update';
    }else{
      this.defaults ={} as any;
    }
    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl(this.defaults.nombre),
      telefono: new UntypedFormControl(this.defaults.telefono),
      correo: new UntypedFormControl(this.defaults.correo),
      direccion: new UntypedFormControl(this.defaults.direccion),
      encargado: new UntypedFormControl(this.defaults.encargado)
    });
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
