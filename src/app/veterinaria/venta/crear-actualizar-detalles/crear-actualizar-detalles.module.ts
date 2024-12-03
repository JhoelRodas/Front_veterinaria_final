import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearActualizarDetallesComponent } from './crear-actualizar-detalles.component';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    CrearActualizarDetallesComponent
  ],
  exports : [CrearActualizarDetallesComponent],
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
    MatSelectModule,
    MatTableModule
  ]
})
export class CrearActualizarDetallesModule { }
