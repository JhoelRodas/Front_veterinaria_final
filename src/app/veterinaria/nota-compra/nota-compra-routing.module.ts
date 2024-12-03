import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaCompraComponent } from './nota-compra.component';
import {
  CrearActualizarNotaCompraComponent
} from "./crear-actualizar-nota-compra/crear-actualizar-nota-compra.component";

const routes: Routes = [{ path: '', component: NotaCompraComponent },
                        { path: 'detalles-compra', component: CrearActualizarNotaCompraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaCompraRoutingModule { }
