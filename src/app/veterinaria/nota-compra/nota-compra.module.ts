import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotaCompraRoutingModule } from './nota-compra-routing.module';
import { NotaCompraComponent } from './nota-compra.component';
import { CrearActualizarNotaCompraComponent } from './crear-actualizar-nota-compra/crear-actualizar-nota-compra.component';
import {BreadcrumbsModule} from "../../../@fury/shared/breadcrumbs/breadcrumbs.module";
import {FlexModule} from "@angular/flex-layout";
import {ListModule} from "../../../@fury/shared/list/list.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {PageLayoutModule} from "../../../@fury/shared/page-layout/page-layout.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {NotaCompraDetallesModule} from "./nota-compra-detalles/nota-compra-detalles.module";
import {CrearReporteCompraModule} from "./crear-reporte-compra/crear-reporte-compra.module";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    NotaCompraComponent,
    CrearActualizarNotaCompraComponent
  ],
    imports: [
        CommonModule,
        NotaCompraRoutingModule,
        BreadcrumbsModule,
        FlexModule,
        ListModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        PageLayoutModule,
        ReactiveFormsModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        NotaCompraDetallesModule,
        FormsModule,
        CrearReporteCompraModule,
        MatDialogModule,
    ]
})
export class NotaCompraModule { }
