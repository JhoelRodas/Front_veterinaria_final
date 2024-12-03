import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialClinicoComponent } from './historial-clinico.component';
import {HistorialDetallesComponent} from "./historial-detalles/historial-detalles.component";

const routes: Routes = [{ path: '', component: HistorialClinicoComponent },
                        { path: 'historial-detalles/:idHistorial', component: HistorialDetallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialClinicoRoutingModule { }
