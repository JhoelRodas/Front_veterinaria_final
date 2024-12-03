import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import moment from "moment";
//import * as moment from "moment";
import {DatePipe} from "@angular/common";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../@fury/shared/list/list-column.model";
import {DetailLogComponent} from "./detail-log/detail-log.component";
import {ApiClientService} from "../../service/api-client.service";

@Component({
  selector: "bitacora",
  templateUrl: "./bitacora.component.html",
  styleUrls: ["./bitacora.component.scss"],
})
export class BitacoraComponent implements OnInit {
  form: FormGroup;
  globalFilterText = ''
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  columns: ListColumn[] = [
    { name: 'Creador', property: 'createdBy', visible: true, isModelProperty: true },
    { name: 'Fecha Registro', property: 'createdDate', visible: true, isModelProperty: true },
    { name: 'IP Dispositivo', property: 'ip', visible: true, isModelProperty: true },
    { name: 'Tipo Proceso', property: 'tipoProceso', visible: true, isModelProperty: true },
    { name: 'Nivel Log', property: 'nivelLog', visible: true , isModelProperty: true },
    { name: 'Bitacora', property: 'logStr', visible: true, isModelProperty: true  },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  tipoProcesoList = [
    {codigo: '', descripcion: 'TODOS'},
    {codigo: 'INICIAR_SESION', descripcion: 'INICIAR SESION'},
    {codigo: 'GESTIONAR_USUARIO', descripcion: 'GESTIONAR USUARIO'},
    {codigo: 'GESTIONAR_ROL', descripcion: 'GESTIONAR ROL'},
    {codigo: 'GESTIONAR_CLIENTE', descripcion: 'GESTIONAR CLIENTE'},
    {codigo: 'GESTIONAR_MASCOTA', descripcion: 'GESTIONAR MASCOTA'},
    {codigo: 'GESTIONAR_PRODUCTO', descripcion: 'GESTIONAR PRODUCTO'},
    {codigo: 'GESTIONAR_CITA_MEDICA', descripcion: 'GESTIONAR CITA MEDICA'},

  ]
  constructor(
    private matBottomShet: MatBottomSheet,
    private datePipe: DatePipe,
    private apiClient:ApiClientService
  ) {
    this.form = new FormGroup({
      from: new FormControl(moment().subtract(10, "days").toDate()),
      to: new FormControl(moment().toDate()),
      process: new FormControl(""),
      q: new FormControl(""),
    });
  }

  async ngOnInit() {
    // this.utilService
    //   .requestEnumAsList("tipoProceso")
    //   .pipe(
    //     map((processType) => ({
    //       processType,
    //     }))
    //   )
    //   .subscribe((combineResp) => {
    //     this.processList = combineResp.processType;
    //     this.applyFilter();
    //   });
  }

  filterData(data: any) {
    this.globalFilterText = data.filter;
    this.applyFilter();
  }

  applyFilter() {
    const formValue = this.form.value
    console.info(formValue)
    this.apiClient.getRequest('/api/bitacora/listar', formValue)
      .subscribe({
        next: (bitacoraList: any[]) => {
          this.dataSource.data = bitacoraList.map(it => ({...it, logStr: `${it.log.substring(0, 20)}...`}))
          console.log(bitacoraList);
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  verMas(fila: any) {
    this.matBottomShet
      .open(
        DetailLogComponent,
        {
          autoFocus: "dialog",
          disableClose: false,
          closeOnNavigation: true,
          panelClass: "w80",
          data: fila
        }
      )
      .afterDismissed()
      .subscribe((res) => {
        if (res) {
          console.log("close dialog");
        }
      });
  }
}
