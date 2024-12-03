import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearActualizarAtencionComponent } from './crear-actualizar-atencion.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    CrearActualizarAtencionComponent
  ],
  exports : [CrearActualizarAtencionComponent],
    imports: [
        CommonModule,
        FlexModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        MatIconModule,
    ]
})
export class CrearActualizarAtencionModule { }
