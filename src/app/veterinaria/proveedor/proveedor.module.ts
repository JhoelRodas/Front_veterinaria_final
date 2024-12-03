import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor.component';
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
import {CrearActualizarProveedorComponent} from "./crear-actualizar-proveedor/crear-actualizar-proveedor.component";
import {CrearActualizarProveedorModule} from "./crear-actualizar-proveedor/crear-actualizar-proveedor.module";
import {ClienteRoutingModule} from "../cliente/cliente-routing.module";
import {FuryCardModule} from "../../../@fury/shared/card/card.module";
import {
  PageLayoutDemoContentModule
} from "../../pages/page-layouts/components/page-layout-content/page-layout-demo-content.module";
import {CrearActualizarClienteModule} from "../cliente/crear-actualizar-cliente/crear-actualizar-cliente.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  exports: [],
  providers: [],
  declarations: [
    ProveedorComponent
  ],
    imports: [
      CommonModule,
      ProveedorRoutingModule,
      BreadcrumbsModule,
      FuryCardModule,
      PageLayoutDemoContentModule,
      PageLayoutModule,
      ListModule,
      MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
      MatMenuModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule,
      CrearActualizarProveedorModule,
      FormsModule
    ]
})
export class ProveedorModule { }
