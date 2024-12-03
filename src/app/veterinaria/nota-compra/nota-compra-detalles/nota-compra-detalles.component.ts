import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiClientService} from "../../../service/api-client.service";
import { saveAs } from 'file-saver';


@Component({
  selector: 'fury-nota-compra-detalles',
  templateUrl: './nota-compra-detalles.component.html',
  styleUrls: ['./nota-compra-detalles.component.scss']
})
export class NotaCompraDetallesComponent implements OnInit{
  form : UntypedFormGroup;
  detalles: any[] = []; // Lista para almacenar los productos agregados temporalmente

  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  displayedColumns: string[] = ['nombreProducto', 'cantidad', 'monto'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<NotaCompraDetallesComponent>,
              private apiClient : ApiClientService) {
  }

  ngOnInit(){
    this.form = new UntypedFormGroup({
      id: new UntypedFormControl(this.data.id),
      nombreProveedor: new UntypedFormControl(this.data.nombreProveedor),
      fecha: new UntypedFormControl(this.data.fecha),
      montoTotal: new UntypedFormControl(this.data.montoTotal),
    });
    console.log("idNotaCompra",this.data.id)
    this.apiClient.getRequest('/api/notacompra/get',{ id: this.data.id })
      .subscribe({
        next: (body: any) => {
          console.info("NotaCompraCompleto",body)
          this.dataSource.data = body.detalle
        },
        error: (error) => {
          console.error(error)
        }
      })

  }

  descargarPDF() {
    this.apiClient.getRequest('/api/notacompra/download-pdf', { id: this.data.id })
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
