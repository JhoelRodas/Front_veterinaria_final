import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiClientService} from "../../../service/api-client.service";

@Component({
  selector: 'fury-crear-actualizar-categoria',
  templateUrl: './crear-actualizar-categoria.component.html',
  styleUrls: ['./crear-actualizar-categoria.component.scss']
})
export class CrearActualizarCategoriaComponent implements OnInit{
  form : UntypedFormGroup;
  estanteList : any[]=[];
  mode : 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarCategoriaComponent>,
              private apiClient : ApiClientService) {
  }

  ngOnInit(): void {
    if (this.defaults){
      this.mode = 'update';
    }else{
      this.defaults ={} as any;
    }

    this.apiClient.getRequest('/api/estante')
      .subscribe({
        next:(data : any[]) => {
          this.estanteList = data;
          console.log('ListEstante ',data)
        },
        error: (error) => {
          console.error(error)
        }
      })

    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl(this.defaults.nombre),
      idEstante: new UntypedFormControl(this.defaults.idEstante),
      // idCategoria: new UntypedFormControl(this.defaults.idCategoria)
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
