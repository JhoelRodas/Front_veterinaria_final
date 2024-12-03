import {Component, Inject} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'fury-crear-actualizar-rol',
  templateUrl: './crear-actualizar-rol.component.html',
  styleUrls: ['./crear-actualizar-rol.component.scss']
})
export class CrearActualizarRolComponent {

  form : UntypedFormGroup;
  mode : 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarRolComponent>) {
  }

  ngOnInit(): void {
    if (this.defaults){
      this.mode = 'update';
    }else{
      this.defaults ={} as any;
    }
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(this.defaults.name),
      description: new UntypedFormControl(this.defaults.description),
      // baseRole: new UntypedFormControl(this.defaults.baseRole),
      // roleStatus: new UntypedFormControl(this.defaults.roleStatus),
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
