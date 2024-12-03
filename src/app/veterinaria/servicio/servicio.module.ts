import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './servicio.component';
import {PageLayoutModule} from "../../../@fury/shared/page-layout/page-layout.module";
import {BreadcrumbsModule} from "../../../@fury/shared/breadcrumbs/breadcrumbs.module";
import {ListModule} from "../../../@fury/shared/list/list.module";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../../../@fury/shared/material-components.module";
import {CrearActualizarServicioModule} from "./crear-actualizar-servicio/crear-actualizar-servicio.module";


@NgModule({
  declarations: [
    ServicioComponent
  ],
  imports: [
    CommonModule,
    ServicioRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    ListModule,
    MatIconModule,
    MaterialModule,
    CrearActualizarServicioModule
  ]
})
export class ServicioModule {

}
