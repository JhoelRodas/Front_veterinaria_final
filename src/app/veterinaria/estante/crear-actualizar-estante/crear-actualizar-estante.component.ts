import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'fury-crear-actualizar-estante',
  templateUrl: './crear-actualizar-estante.component.html',
  styleUrls: ['./crear-actualizar-estante.component.scss']
})
export class CrearActualizarEstanteComponent implements OnInit{
  form : UntypedFormGroup;
  mode : 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarEstanteComponent>) {
  }

  ngOnInit(): void {
    if (this.defaults){
      this.mode = 'update';
    }else{
      this.defaults ={} as any;
    }
    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl(this.defaults.nombre),
      descripcion: new UntypedFormControl(this.defaults.descripcion),
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
