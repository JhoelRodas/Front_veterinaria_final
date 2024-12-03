import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacunaRoutingModule } from './vacuna-routing.module';
import { VacunaComponent } from './vacuna.component';
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
import {UpdateDescripcionVacunaModule} from "./update-descripcion-vacuna/update-descripcion-vacuna.module";


@NgModule({
  declarations: [
    VacunaComponent
  ],
  imports: [
    CommonModule,
    VacunaRoutingModule,
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
    UpdateDescripcionVacunaModule
  ]
})
export class VacunaModule { }
