import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'fury-update-descripcion-vacuna',
  templateUrl: './update-descripcion-vacuna.component.html',
  styleUrls: ['./update-descripcion-vacuna.component.scss']
})
export class UpdateDescripcionVacunaComponent implements OnInit{
  form : UntypedFormGroup;
  mode : 'update' ;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<UpdateDescripcionVacunaComponent>) {

  }

  ngOnInit(): void {
    if (this.defaults) {
      this.mode = 'update';
    }
    this.form = new UntypedFormGroup({
      descripcion: new UntypedFormControl(this.defaults.descripcion)
    })
  }

  save() {
      this.updateCustomer();
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    this.dialogRef.close(customer);
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
