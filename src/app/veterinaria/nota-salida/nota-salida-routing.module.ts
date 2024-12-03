import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaSalidaComponent } from './nota-salida.component';

const routes: Routes = [{ path: '', component: NotaSalidaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaSalidaRoutingModule { }
