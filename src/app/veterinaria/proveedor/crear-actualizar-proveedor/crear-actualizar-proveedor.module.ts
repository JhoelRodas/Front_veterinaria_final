import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearActualizarProveedorComponent } from './crear-actualizar-proveedor.component';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {CrearActualizarProductoModule} from "../../producto/crear-actualizar-producto/crear-actualizar-producto.module";



@NgModule({
  declarations:[CrearActualizarProveedorComponent],
  exports:[CrearActualizarProveedorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class CrearActualizarProveedorModule { }
