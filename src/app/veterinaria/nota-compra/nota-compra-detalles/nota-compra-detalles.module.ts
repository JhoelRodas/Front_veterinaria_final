import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaCompraDetallesComponent } from './nota-compra-detalles.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NotaCompraDetallesComponent
  ],
  exports : [NotaCompraDetallesComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class NotaCompraDetallesModule { }
