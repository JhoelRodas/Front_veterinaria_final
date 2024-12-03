import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiClientService} from "../../../service/api-client.service";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'fury-crear-actualizar-atencion',
  templateUrl: './crear-actualizar-atencion.component.html',
  styleUrls: ['./crear-actualizar-atencion.component.scss']
})
export class CrearActualizarAtencionComponent implements OnInit{
  form : UntypedFormGroup;
  mode : 'create' | 'update' = 'create';
  veterinariosList : any[]=[];
  filteredVeterinariosList : any[]=[];
  mascotasList : any[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<CrearActualizarAtencionComponent>,
              private apiClient : ApiClientService) {
  }

  ngOnInit(): void {
    if (this.defaults){
      this.mode = 'update';
    }else{
      this.defaults ={} as any;
    }
    this.form = new UntypedFormGroup({
      idMascota: new UntypedFormControl(this.defaults.idMascota),
      idUsuario: new UntypedFormControl(this.defaults.idUsuario),
      anamnesis: new UntypedFormControl(this.defaults.anamnesis),
      descripcion: new UntypedFormControl(this.defaults.descripcion),

    })

    this.apiClient.getRequest('/api/usuario/veterinarios')
      .subscribe({
        next:(data : any[]) => {
          this.veterinariosList = data;
          this.filteredVeterinariosList = data; // Lista filtrada para mostrar en el select
          console.log('ListVeterinarios ',data)
        },
        error: (error) => {
          console.error(error)
        }
      })

    this.apiClient.getRequest('/api/mascota')
      .subscribe({
        next:(data : any[]) => {
          this.mascotasList = data;
          console.log('ListMascotas',data)
        },
        error: (error) => {
          console.error(error)
        }
      })



  }

  // Método para filtrar veterinarios
  filterVeterinarios(searchText: string) {
    const lowerSearchText = searchText.toLowerCase();
    this.filteredVeterinariosList = this.veterinariosList.filter(vet =>
      vet.name.toLowerCase().includes(lowerSearchText)
    );
  }


  // Método llamado al abrir el select
  selectOpened(searchFieldId: string) {
    const searchField = document.getElementById(searchFieldId) as HTMLInputElement;
    if (searchField) {
      searchField.value = ''; // Limpia el campo de búsqueda
      this.filteredVeterinariosList = [...this.veterinariosList]; // Resetea la lista de opciones
    }
  }

  // Método llamado al cambiar la selección
  veterinarioChange(event: any) {
    console.log('Veterinario seleccionado:', event.value);
  }

  save() {
    // this.createCustomer();
    console.log(this.form.value)
    // return;
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }
  createCustomer() {
    const customer = this.form.value;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;

    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
