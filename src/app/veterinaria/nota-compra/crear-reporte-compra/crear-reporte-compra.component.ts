import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiClientService} from "../../../service/api-client.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import moment from "moment/moment";
import {ListColumn} from "../../../../@fury/shared/list/list-column.model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'fury-crear-reporte-compra',
  templateUrl: './crear-reporte-compra.component.html',
  styleUrls: ['./crear-reporte-compra.component.scss']
})
export class CrearReporteCompraComponent implements OnInit{

  form: FormGroup;
  columns: any[];
  proveedoresList: any[];

  constructor(private dialogRef: MatDialogRef<CrearReporteCompraComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { // Aquí se reciben los datos) {

    this.columns = data.columns; // Obtenemos las columnas enviadas desde el componente principal
    this.proveedoresList = data.proveedoresList; // Obtenemos la lista de proveedores

    this.form = new FormGroup({
      from: new FormControl(moment().subtract(10, "days").toDate()),
      to: new FormControl(moment().toDate()),
      montoMayor: new FormControl(null,[
        Validators.min(0),
        Validators.pattern(/^\d+(\.\d{1,2})?$/), // Acepta decimales con hasta 2 dígitos
      ]),
      montoMenor: new FormControl(null,[
        Validators.min(0),
        Validators.pattern(/^\d+(\.\d{1,2})?$/), // Acepta decimales con hasta 2 dígitos
      ]),
      nombreProveedor: new FormControl(null)
    });

  }




  ngOnInit(): void {

  }

    formatDecimals(controlName: string): void {
      const control = this.form.get(controlName);
      if (control?.value != null && control.value !== '') {
      control.setValue(parseFloat(control.value).toFixed(2)); // Siempre deja 2 decimales
    }
  }

  generateReport() {
    const selectedHeaders = this.columns
      .filter((column) => column.selected)
      .map(({ name, property }) => ({ name, property }));

    if (selectedHeaders.length === 0) {
      alert('Debe seleccionar al menos una cabecera para el reporte.');
      return;
    }

    const filters = {
      inicio: this.form.value.from ? formatDate(this.form.value.from, 'dd/MM/yyyy', 'en') : null,
      fin: this.form.value.to ? formatDate(this.form.value.to, 'dd/MM/yyyy', 'en') : null,
      montoMayor: this.form.value.montoMayor,
      montoMenor: this.form.value.montoMenor,
      nombreProveedor: this.form.value.nombreProveedor,
    };

    const reportData = {
      filtros: filters,
      headers: selectedHeaders,
      tipoReporte: 'Compras',
    };

    this.dialogRef.close(reportData);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

}
