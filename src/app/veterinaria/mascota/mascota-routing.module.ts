import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from "../cliente/cliente.component";
import {MascotaComponent} from "./mascota.component";

const routes: Routes = [{
  path: '',
  component: MascotaComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule {
}
