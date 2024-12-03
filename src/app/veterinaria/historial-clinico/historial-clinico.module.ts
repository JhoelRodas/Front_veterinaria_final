import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialClinicoRoutingModule } from './historial-clinico-routing.module';
import { HistorialClinicoComponent } from './historial-clinico.component';
import {BreadcrumbsModule} from "../../../@fury/shared/breadcrumbs/breadcrumbs.module";
import {ListModule} from "../../../@fury/shared/list/list.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {PageLayoutModule} from "../../../@fury/shared/page-layout/page-layout.module";
import { HistorialDetallesComponent } from './historial-detalles/historial-detalles.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import { CreateUpdateVacunaAplicadaComponent } from './historial-detalles/create-update-vacuna-aplicada/create-update-vacuna-aplicada.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    HistorialClinicoComponent,
    HistorialDetallesComponent,
    CreateUpdateVacunaAplicadaComponent
  ],
  imports: [
    CommonModule,
    HistorialClinicoRoutingModule,
    BreadcrumbsModule,
    ListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    PageLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class HistorialClinicoModule { }
