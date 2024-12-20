import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstanteComponent } from './estante.component';

const routes: Routes = [{ path: '', component: EstanteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstanteRoutingModule { }
