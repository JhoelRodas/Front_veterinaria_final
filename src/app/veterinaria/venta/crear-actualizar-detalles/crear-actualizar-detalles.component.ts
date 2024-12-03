import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiClientService} from "../../../service/api-client.service";
import {MatTableDataSource} from "@angular/material/table";
import { saveAs } from 'file-saver';

import {ListColumn} from "../../../../@fury/shared/list/list-column.model";

@Component({
  selector: 'fury-crear-actualizar-detalles',
  templateUrl: './crear-actualizar-detalles.component.html',
  styleUrls: ['./crear-actualizar-detalles.component.scss']
})
export class CrearActualizarDetallesComponent implements OnInit{
  form : UntypedFormGroup;
  detalles: any[] = []; // Lista para almacenar los productos agregados temporalmente

  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  displayedColumns: string[] = ['idProducto','idServicio', 'cant', 'monto'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<CrearActualizarDetallesComponent>,
              private apiClient : ApiClientService) {
  }

  ngOnInit(){
    this.form = new UntypedFormGroup({
      id: new UntypedFormControl(this.data.id),
      ci: new UntypedFormControl(this.data.ci),
      nombre: new UntypedFormControl(this.data.nombre),
      fecha: new UntypedFormControl(this.data.fecha),
      montoTotal: new UntypedFormControl(this.data.montoTotal),
      metodoPago: new UntypedFormControl(this.data.metodoPago),
    });
    console.log("idRecibo",this.data.id)
    this.apiClient.getRequest('/api/recibo/getRecibo',{ id: this.data.id })
      .subscribe({
        next: (recibo: any) => {
          console.info("ReciboCompleto",recibo)
          this.dataSource.data = [...recibo.detalles,...recibo.detallesServicios]
        },
        error: (error) => {
          console.error(error)
        }
      })

  }

  descargarPDF() {
    this.apiClient.getRequest('/api/recibo/download-pdf', { id: this.data.id })
      .subscribe({
        next: (response: any) => {
          if (response && response.pdf) {
            // Decodifica el Base64
            const pdfData = atob(response.pdf);
            const byteArray = new Uint8Array(pdfData.length);
            for (let i = 0; i < pdfData.length; i++) {
              byteArray[i] = pdfData.charCodeAt(i);
            }

            // Crea el Blob y descarga el PDF
            const blob = new Blob([byteArray], { type: 'application/pdf' });
            saveAs(blob, `nota_compra_${this.data.id}.pdf`);
          } else {
            console.error("Error: el PDF no contiene datos.");
            alert("No se pudo generar el PDF. Inténtalo de nuevo más tarde.");
          }
        },
        error: (error) => {
          console.error('Error al descargar el PDF', error);
          alert("Ocurrió un error al intentar descargar el PDF.");
        }
      });
  }

  closeDialog(): void {
    this.dialogRef.close(); // Cierra el diálogo sin pasar ningún dato
  }


}
