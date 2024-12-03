import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotaRoutingModule } from './mascota-routing.module';
import { MascotaComponent } from './mascota.component';
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
import {CrearActualizarMascotaComponent} from "./crear-actualizar-mascota/crear-actualizar-mascota.component";
import {CrearActualizarMascotaModule} from "./crear-actualizar-mascota/crear-actualizar-mascota.module";


@NgModule({
  declarations: [
    MascotaComponent
  ],
  imports: [
    CommonModule,
    MascotaRoutingModule,
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
    CrearActualizarMascotaModule
  ]
})
export class MascotaModule { }
