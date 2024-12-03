import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearReporteCompraComponent } from './crear-reporte-compra.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    CrearReporteCompraComponent
  ],
  exports:[CrearReporteCompraComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class CrearReporteCompraModule { }
