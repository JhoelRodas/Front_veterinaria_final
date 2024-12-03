import {NgModule} from '@angular/core';

import {UsuarioComponent} from './usuario.component';
import {CommonModule} from "@angular/common";
import {UsuarioRoutingModule} from "./usuario-routing.module";
import {BreadcrumbsModule} from "../../../@fury/shared/breadcrumbs/breadcrumbs.module";
import {FuryCardModule} from "../../../@fury/shared/card/card.module";
import {
  PageLayoutDemoContentModule
} from "../../pages/page-layouts/components/page-layout-content/page-layout-demo-content.module";
import {PageLayoutModule} from "../../../@fury/shared/page-layout/page-layout.module";
import {ListModule} from "../../../@fury/shared/list/list.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {CrearActualizarUsuarioModule} from "./crear-actualizar-usuario/crear-actualizar-usuario.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
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
    CrearActualizarUsuarioModule,
    FormsModule
  ],
  exports: [],
  declarations: [UsuarioComponent],
  providers: [],
})
export class UsuarioModule {
}
