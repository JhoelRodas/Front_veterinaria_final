import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearActualizarServicioComponent } from './crear-actualizar-servicio.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {
  CrearActualizarProveedorComponent
} from "../../proveedor/crear-actualizar-proveedor/crear-actualizar-proveedor.component";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CrearActualizarServicioComponent
  ],
  exports:[CrearActualizarServicioComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexModule,
    MatButtonModule
  ]
})
export class CrearActualizarServicioModule { }
