import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDescripcionVacunaComponent } from './update-descripcion-vacuna.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UpdateDescripcionVacunaComponent
  ],
  exports : [UpdateDescripcionVacunaComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UpdateDescripcionVacunaModule { }
