import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import moment from "moment";
import {formatDate} from "@angular/common";

@Component({
  selector: 'fury-crear-reporte-venta',
  templateUrl: './crear-reporte-venta.component.html',
  styleUrls: ['./crear-reporte-venta.component.scss']
})
export class CrearReporteVentaComponent implements OnInit{

  form: FormGroup;
  columns: any[];
  metodosDePago: any[];

  constructor(private dialogRef: MatDialogRef<CrearReporteVentaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { // Aquí se reciben los datos) {

    this.columns = data.columns; // Obtenemos las columnas enviadas desde el componente principal
    this.metodosDePago = data.metodosDePago; // Obtenemos la lista de metodods de pago

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
      metodoPago: new FormControl(null)
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
      metodoPago: this.form.value.metodoPago,
    };

    const reportData = {
      filtros: filters,
      headers: selectedHeaders,
      tipoReporte: 'Ventas',
    };

    this.dialogRef.close(reportData);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

}
