import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ApiClientService} from "../../../service/api-client.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {ListColumn} from "../../../../@fury/shared/list/list-column.model";
import {
  CrearActualizarEstanteComponent
} from "../../estante/crear-actualizar-estante/crear-actualizar-estante.component";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateUpdateVacunaAplicadaComponent
} from "./create-update-vacuna-aplicada/create-update-vacuna-aplicada.component";
import {formatDate} from "@angular/common";
import {cloneDeep} from "lodash-es";

@Component({
  selector: 'fury-historial-detalles',
  templateUrl: './historial-detalles.component.html',
  styleUrls: ['./historial-detalles.component.scss']
})
export class HistorialDetallesComponent implements OnInit{
  form : UntypedFormGroup;
  // Fuente de datos para atenciones
  atencionesDataSource: MatTableDataSource<any> = new MatTableDataSource([]);

// Columnas para la tabla de atenciones
  atencionesColumns: string[] = ['id','fecha','hora','anamnesis','usuario'];

// Lista de atenciones (solo visualización)
  atenciones: any[] = [];
  idHistorial: string | null = null;

  // Lista de vacunas Aplicadas
  vacunas: any[] = [];
  dataSource:MatTableDataSource<any> = new MatTableDataSource([]) ;
  columns: ListColumn [] = [
    { name: 'ID', property: 'id', visible: true, isModelProperty: true },
    { name: 'ID Vacuna', property: 'idVacuna', visible: true, isModelProperty: true },
    { name: 'nombre', property: 'nombre', visible: true, isModelProperty: true  },
    { name: 'FechaColocada', property: 'fechaColocada', visible: true, isModelProperty: true },
    { name: 'ProximaDosis', property: 'proximaDosis', visible: true, isModelProperty: true },
    { name: 'Descripcion', property: 'descripcion', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];

  pageSize = 10;
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }


  constructor(private apiClient : ApiClientService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialog : MatDialog,
              private http: HttpClient) {

    this.form = new UntypedFormGroup({
      id: new UntypedFormControl({value: '', disabled: true}),
      nombreMascota: new UntypedFormControl({value: '', disabled: true}),
      especie: new UntypedFormControl({value: '', disabled: true}),
      raza: new UntypedFormControl({value: '', disabled: true}),
      sexo: new UntypedFormControl({value: '', disabled: true}),
      nombrePropietario: new UntypedFormControl({value: '', disabled: true}),
      estadoFc:     new UntypedFormControl(''),
      estadoFr:      new UntypedFormControl(''),
      mucosa:        new UntypedFormControl(''),
      apetito:       new UntypedFormControl(''),
      hidratacion:    new UntypedFormControl(''),
      estadoGeneral: new UntypedFormControl(''),
      // telefono: new UntypedFormControl({value: '', disabled: true}),
      // direccion: new UntypedFormControl({value: '', disabled: true}),
      // email: new UntypedFormControl({value: '', disabled: true}),
    });
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      this.idHistorial = data.get('idHistorial'); // Guarda el idHistorial
      if (this.idHistorial) {
        const params = new HttpParams().set('id', this.idHistorial); // Crea los HttpParams
        console.info(params);
        this.getHistorial(params); // Llama al método con los params
        //  this.getControlVacunas(params)
      }
    });
  }


  getHistorial(params){
    console.info('entro al metodo',params)
    this.apiClient.getRequest('/api/historial/get',params).subscribe({
      next: (data) => {
        console.info('historial',data)
        this.form.patchValue({
          id : data.id,
          nombreMascota: data.mascota,
          especie: data.especie,
          raza: data.raza,
          sexo: data.sexo,
          nombrePropietario: data.duenio,
          estadoFc: data.estadoFc,
          estadoFr:data.estadoFr,
          mucosa:data.mucosa,
          apetito:data.apetito,
          hidratacion:data.hidratacion,
          estadoGeneral:data.estadoGeneral
        });
        console.info(this.form.value)

        // Llenar la tabla de atenciones
        this.atenciones = data.atenciones || [];
        console.log("atenciones " , this.atenciones)
        this.atencionesDataSource.data = this.atenciones;

        // Llenar la tabla de vacunas aplicadas
        // this.vacunas = data.vacunas || []
        // this.dataSource.data = this.vacunas;
        this.apiClient.getRequest('/api/historial/control/vacunas',params)
          .subscribe({
            next: (vacunas: any[]) => {
              console.log(vacunas);
              this.dataSource.data = vacunas

            },
            error: (error) => {
              console.error(error)
            }
          })
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

  guardarDetallesDeHistorial(){
    const historial = this.form.getRawValue();
    //const id = new HttpParams().set('id', historial.toString());
    console.log("historialData",historial)
    this.apiClient.putRequest('/api/historial',historial.id,historial)
            .subscribe({
              next:(body:any) => {
                //this.getHistoriales()
                this.router.navigate(['ventas/historialClinico'])
              },
              error : (error) => {
                console.info(error)
              }
            })
  }

  registarVacunaAplicada(){
    console.info('Abre dialogo de creacion');
    this.dialog.open(CreateUpdateVacunaAplicadaComponent, {width: '400px'})
      .afterClosed()
      .subscribe((data:any) => {
        if (data){
          data.fechaColocada = formatDate(data.fechaColocada,'dd/MM/yyyy','en')
          data.proximaDosis = formatDate(data.proximaDosis,'dd/MM/yyyy','en')
          const vacuna ={
            idVacuna : data.id,
            idHistorial:this.form.get('id')?.value,
            descripcion:data.descripcion,
            fechaColocada:data.fechaColocada,
            proximaDosis:data.proximaDosis
          }
          console.info('Al cerrar', data);
          console.info('datos enviados', vacuna);
          this.apiClient.postRequest('/api/historial/control',vacuna)
            .subscribe({
              next:(body:any) =>{
                  const params = new HttpParams().set('id', this.idHistorial || '');
                  this.getHistorial(params);
              },
              error:(error) =>{
                console.error('error', error)
              }
            })
          console.info('Fin api call');
        }else{
          console.info('Cancelado')
        }
        console.info('Fin Metodo');
      })
  }

  editarVacunaAplicada(row: any): void {
    console.info('Vacuna a editar:', row);
    const rowCopy = cloneDeep(row);
    console.info('Fechas a editar:', rowCopy);

    this.dialog.open(CreateUpdateVacunaAplicadaComponent, { data: rowCopy, width: '400px' })
      .afterClosed()
      .subscribe((data: any) => {
        if (data) {
          // Validación y formateo de fechas
          if (data.fechaColocada) {
            data.fechaColocada = formatDate(data.fechaColocada, 'dd/MM/yyyy', 'en');
          }
          if (data.proximaDosis) {
            data.proximaDosis = formatDate(data.proximaDosis, 'dd/MM/yyyy', 'en');
          }

          console.info('Datos a enviar:', data);

          // Envío de datos al servidor
          this.apiClient.putRequest('/api/historial/control', rowCopy.id, data)
            .subscribe({
              next: (body: any) => {
                console.info('Actualización exitosa:', body);
                // Lógica adicional para actualizar la UI si es necesario
                const params = new HttpParams().set('id', this.idHistorial || '');
                this.getHistorial(params);
              },
              error: (error) => {
                console.error('Error al actualizar la vacuna:', error);
                // Muestra un mensaje al usuario (opcional)
              }
            });
        } else {
          console.info('Edición cancelada');
        }
      });
  }



}
