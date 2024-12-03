import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'fury-crear-actualizar-agenda',
  templateUrl: './crear-actualizar-agenda.component.html',
  styleUrls: ['./crear-actualizar-agenda.component.scss']
})
export class CrearActualizarAgendaComponent implements OnInit{
  form : UntypedFormGroup;
  mode : 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarAgendaComponent>) {
  }

  ngOnInit(): void {
    if (this.defaults){
      this.mode = 'update';
      const parts = this.defaults.fecha.split('/')
      this.defaults.fecha = `${parts[2]}-${parts[1]}-${parts[0]}`
    }else{
      this.defaults ={} as any;
    }

    this.form = new UntypedFormGroup({
      cliente: new UntypedFormControl(this.defaults.cliente),
      ci: new UntypedFormControl(this.defaults.ci),
      fecha: new UntypedFormControl(this.defaults.fecha),
      hora: new UntypedFormControl(this.defaults.hora),
      descripcion: new UntypedFormControl(this.defaults.descripcion),
      estado: new UntypedFormControl(this.defaults.estado),
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
