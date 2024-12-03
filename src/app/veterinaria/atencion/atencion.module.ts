import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionRoutingModule } from './atencion-routing.module';
import { AtencionComponent } from './atencion.component';
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
import {CrearActualizarAtencionModule} from "./crear-actualizar-atencion/crear-actualizar-atencion.module";


@NgModule({
  declarations: [
    AtencionComponent
  ],
  imports: [
    CommonModule,
    AtencionRoutingModule,
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
    CrearActualizarAtencionModule
  ]
})
export class AtencionModule{



}
