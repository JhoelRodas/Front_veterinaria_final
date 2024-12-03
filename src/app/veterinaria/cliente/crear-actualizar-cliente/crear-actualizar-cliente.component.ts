import {Component, Inject, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


class Persona {
  id: number;
  nombre: string;
  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

interface IPersona {
  id: number;
  nombre: string;
}

type PersonaType = {
  id: number;
  nombre: string;
}

@Component({
  selector: 'fury-crear-actualizar-cliente',
  templateUrl: './crear-actualizar-cliente.component.html',
  styleUrls: ['./crear-actualizar-cliente.component.scss']
})
export class CrearActualizarClienteComponent implements OnInit{
  p1: Persona = new Persona(2, 'fmotero');
  P1: Persona = new Persona(2, 'fmotero');
  p3: IPersona = {
    id: 45,
    nombre: "nombre1"
  };
  p2: IPersona = {
    id: 0,
    nombre: "nombre"
  };
  p4: PersonaType = {
    id: 0,
    nombre: "nombre"
  };
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  title = 'Crear'
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarClienteComponent>) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as any;
    }
    this.form = new UntypedFormGroup({
      ci: new UntypedFormControl(this.defaults.ci??'12345'),
      extension: new UntypedFormControl(this.defaults.extension??'SCZ'),
      nombre: new UntypedFormControl(this.defaults.nombre??'Jairo Vargas'),
      telefono: new UntypedFormControl(this.defaults.telefono??'71010235'),
      correo: new UntypedFormControl(this.defaults.correo??'Jv@gmail.com'),
      direccion: new UntypedFormControl(this.defaults.direccion??'direccion demo'),
    });
    // this.form = new UntypedFormGroup({
    //   ci: new UntypedFormControl(),
    //   extension: new UntypedFormControl(),
    //   nombre: new UntypedFormControl(),
    //   telefono: new UntypedFormControl(),
    //   correo: new UntypedFormControl(),
    //   direccion: new UntypedFormControl(),
    // });
  }

  save() {
    // this.createCustomer();
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
