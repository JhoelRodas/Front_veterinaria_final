import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearReporteVentaComponent } from './crear-reporte-venta.component';
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
import {CrearReporteCompraComponent} from "../../nota-compra/crear-reporte-compra/crear-reporte-compra.component";



@NgModule({
  declarations: [
    CrearReporteVentaComponent
  ],
  exports : [CrearReporteVentaComponent],
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
export class CrearReporteVentaModule { }
