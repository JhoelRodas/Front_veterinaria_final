import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { RolComponent } from './rol.component';
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
import {CrearActualizarRolComponent} from "./crear-actualizar-rol/crear-actualizar-rol.component";
import {CrearActualizarRolModule} from "./crear-actualizar-rol/crear-actualizar-rol.module";


@NgModule({
  declarations: [
    RolComponent
  ],
    imports: [
        CommonModule,
        RolRoutingModule,
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
        CrearActualizarRolModule
    ]
})
export class RolModule { }
