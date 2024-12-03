import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiClientService} from "../../../service/api-client.service";

@Component({
  selector: 'fury-crear-actualizar-producto',
  templateUrl: './crear-actualizar-producto.component.html',
  styleUrls: ['./crear-actualizar-producto.component.scss']
})
export class CrearActualizarProductoComponent implements OnInit{
  form : UntypedFormGroup;
  mode : 'create' | 'update' = 'create';
  categoriaList: any[] = []
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarProductoComponent>,
              private apiClient : ApiClientService) {
  }

  ngOnInit(): void {
    if (this.defaults){
      this.mode = 'update';
    }else{
      this.defaults ={} as any;
    }
    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl(this.defaults.nombre),
      precioUnitario: new UntypedFormControl(this.defaults.precioUnitario),
      stock: new UntypedFormControl(this.defaults.stock),
      descripcion: new UntypedFormControl(this.defaults.descripcion),
      idCategoria: new UntypedFormControl(this.defaults.idCategoria)
    })

    this.apiClient.getRequest('/api/categoria')
      .subscribe({
        next: (producto: any[]) => {
          this.categoriaList = producto
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
