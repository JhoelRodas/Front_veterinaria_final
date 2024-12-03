import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiClientService} from "../../../service/api-client.service";

@Component({
  selector: 'fury-crear-actualizar-nota-salida',
  templateUrl: './crear-actualizar-nota-salida.component.html',
  styleUrls: ['./crear-actualizar-nota-salida.component.scss']
})
export class CrearActualizarNotaSalidaComponent implements OnInit{

  form : UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  productosList: any[] = []
  //Revisar para entender despues...
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarNotaSalidaComponent>,
              private apiClient : ApiClientService) {
  }

  ngOnInit():void {
    if (this.defaults){
      this.mode = 'update';
      const parts = this.defaults.fecha.split('/')
      this.defaults.fecha = `${parts[2]}-${parts[1]}-${parts[0]}`
    }else{
      this.defaults ={} as any;
    }
    this.form = new UntypedFormGroup({
      idProducto: new UntypedFormControl(this.defaults.idProducto),
      fecha: new UntypedFormControl(this.defaults.fecha),
      cantidad: new UntypedFormControl(this.defaults.cantidad),
      motivo: new UntypedFormControl(this.defaults.motivo),
    })

    this.apiClient.getRequest('/api/producto')
      .subscribe({
        next: (producto: any[]) => {
          this.productosList = producto
          console.info(producto)
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
