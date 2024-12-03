import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearActualizarAgendaComponent } from './crear-actualizar-agenda.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CrearActualizarAgendaComponent
  ],
  exports : [CrearActualizarAgendaComponent],
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
export class CrearActualizarAgendaModule { }
