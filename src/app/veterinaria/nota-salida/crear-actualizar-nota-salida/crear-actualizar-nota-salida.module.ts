import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearActualizarNotaSalidaComponent } from './crear-actualizar-nota-salida.component';
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    CrearActualizarNotaSalidaComponent
  ],
  exports : [CrearActualizarNotaSalidaComponent],
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class CrearActualizarNotaSalidaModule { }
