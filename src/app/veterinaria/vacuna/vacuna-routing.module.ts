import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacunaComponent } from './vacuna.component';

const routes: Routes = [{ path: '', component: VacunaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacunaRoutingModule { }
