import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiClientService} from "../../../../service/api-client.service";

@Component({
  selector: 'fury-create-update-vacuna-aplicada',
  templateUrl: './create-update-vacuna-aplicada.component.html',
  styleUrls: ['./create-update-vacuna-aplicada.component.scss']
})
export class CreateUpdateVacunaAplicadaComponent implements OnInit{

  form : UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  vaunasList: any[] = []
  //Revisar para entender despues...
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CreateUpdateVacunaAplicadaComponent>,
              private apiClient:ApiClientService){
  }

  ngOnInit():void {
    if (this.defaults) {
      this.mode = 'update';
      const parts = this.defaults.fechaColocada.split('/')
      const partss = this.defaults.proximaDosis.split('/')
      this.defaults.fechaColocada = `${parts[2]}-${parts[1]}-${parts[0]}`
      this.defaults.proximaDosis = `${partss[2]}-${partss[1]}-${partss[0]}`
    } else {
      this.defaults = {} as any;
    }
    this.form = new UntypedFormGroup({
      id: new UntypedFormControl(this.defaults.id),
      idVacuna: new UntypedFormControl(this.defaults.idVacuna),
      fechaColocada: new UntypedFormControl(this.defaults.fechaColocada),
      proximaDosis: new UntypedFormControl(this.defaults.proximaDosis),
      descripcion: new UntypedFormControl(this.defaults.descripcion),
    })

    this.apiClient.getRequest('/api/vacuna')
      .subscribe({
        next: (vacunas: any[]) => {
          this.vaunasList = vacunas
          console.info(vacunas)
        },
        error: (error) => {
          console.error(error)
        }
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
