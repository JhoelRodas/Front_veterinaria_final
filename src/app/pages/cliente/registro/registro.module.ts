import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegistroComponent } from "./registro.component";
import { RegistroRoutingModule } from "./registro-routing.module";

@NgModule({
    imports: [
      CommonModule,
      RegistroRoutingModule
    ],
    declarations: [
        RegistroComponent
    ]
  })
  export class RegistroModule {
  }
  