import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CrearActualizarMascotaModule} from "./crear-actualizar-mascota.module";

@Component({
  selector: 'fury-crear-actualizar-mascota',
  templateUrl: './crear-actualizar-mascota.component.html',
  styleUrls: ['./crear-actualizar-mascota.component.scss']
})
export class CrearActualizarMascotaComponent implements OnInit{

  form : UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  //Revisar para entender despues...
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarMascotaComponent>) {
  }

  ngOnInit():void {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as any;
    }
    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl(this.defaults.nombre),
      edad: new UntypedFormControl(this.defaults.edad),
      sexo: new UntypedFormControl(this.defaults.sexo),
      color: new UntypedFormControl(this.defaults.color),
      especie: new UntypedFormControl(this.defaults.especie),
      raza: new UntypedFormControl(this.defaults.raza),
      ci: new UntypedFormControl(this.defaults.ci)
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
