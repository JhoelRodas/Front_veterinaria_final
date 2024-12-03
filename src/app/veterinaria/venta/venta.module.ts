import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { VentaComponent } from './venta.component';
import {BreadcrumbsModule} from "../../../@fury/shared/breadcrumbs/breadcrumbs.module";
import {FlexModule} from "@angular/flex-layout";
import {ListModule} from "../../../@fury/shared/list/list.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatOptionModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {PageLayoutModule} from "../../../@fury/shared/page-layout/page-layout.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CrearActualizarDetallesModule} from "./crear-actualizar-detalles/crear-actualizar-detalles.module";
import {MatInputModule} from "@angular/material/input";
import {CrearReporteVentaModule} from "./crear-reporte-venta/crear-reporte-venta.module";


@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    BreadcrumbsModule,
    FlexModule,
    ListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    PageLayoutModule,
    ReactiveFormsModule,
    MatTooltipModule,
    CrearActualizarDetallesModule,
    MatInputModule,
    FormsModule,
    CrearReporteVentaModule
  ]
})
export class VentaModule {



}
