import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IPrivilegeDialogData} from './privileges.interface';

import {before} from "lodash-es";
import {ApiClientService} from "../../../service/api-client.service";

@Component({
  selector: 'mc4-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PrivilegesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IPrivilegeDialogData,
              private apiClient: ApiClientService) { }

  ngOnInit() {
  }

  toggleActionChange(isChecked: boolean, item: any) {
    let isNew = true;
    for (let i = 0; i < this.data.privilegeList.length; i++) {
      if (this.data.privilegeList[i].idAuthAction === item.id) {
        this.data.privilegeList[i].enable = isChecked;
        isNew = false;
        break;
      }
    }
    if (isNew) {
      this.data.privilegeList.push({
        id: null,
        idAuthAction: item.id,
        idAuthRoleResource: null,
        enable: isChecked,
      });
    }
  }

  isActionChecked(item: any) {
    return !!this.data.privilegeList.find(priv => priv.idAuthAction === item.id && priv.enable);
  }


  //enviar datos
  submitData() {
    if (this.data.privilegeList.length === 0) {
      this.dialogRef.close(false);
      return;
    }
    //this.roleService.requestConfigurePrivileges(this.data.roleId, this.data.resourceId, this.data.privilegeList)
    this.apiClient.postRequest(`/api/role/configure-privileges?roleId=${this.data.roleId}&resourceId=${this.data.resourceId}`,this.data.privilegeList)
      .subscribe({next: this.successConfigure, error: console.error});
  }

  protected successConfigure = (body: boolean) => {
    this.dialogRef.close(body);
  }
  protected readonly before = before;
}
