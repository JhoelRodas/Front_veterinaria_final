import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
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
import {CrearActualizarClienteComponent} from "./crear-actualizar-cliente/crear-actualizar-cliente.component";
import {CrearActualizarClienteModule} from "./crear-actualizar-cliente/crear-actualizar-cliente.module";
import {UsuarioRoutingModule} from "../usuario/usuario-routing.module";
import {FuryCardModule} from "../../../@fury/shared/card/card.module";
import {
  PageLayoutDemoContentModule
} from "../../pages/page-layouts/components/page-layout-content/page-layout-demo-content.module";
import {CrearActualizarUsuarioModule} from "../usuario/crear-actualizar-usuario/crear-actualizar-usuario.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
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
    CrearActualizarClienteModule,
    FormsModule
  ],

})
export class ClienteModule {
}
