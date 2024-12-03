import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {FormControl, Validators} from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import {PrivilegesComponent} from './privileges/privileges.component';

import {IPrivilegeDialogData} from './privileges/privileges.interface';

import {BehaviorSubject} from 'rxjs';
import {SidenavService} from "../../layout/sidenav/sidenav.service";
import {ApiClientService} from "../../service/api-client.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'mc4-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  roleList: any[];
  commonTableActions: any;
  roleControl: FormControl;
  dataSource: MatTableDataSource<any>;
  columns: any[];

  rowActions: any[] = [];
  userActions: {[key: string]: boolean} = {};
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  constructor(private sidenavService: SidenavService,
              private matDialog: MatDialog,
              private apiClient: ApiClientService) {
    this.dataSource = new MatTableDataSource<any>([]);
    this.roleControl = new FormControl(null, Validators.required);
    this.commonTableActions = {
      actionConfigCode: '100',
    };
    this.columns = this.buildColumns();
    const queryParams = {page: 0, size: 1000};
   // this.roleService.requestRoleList(queryParams)
    this.apiClient.getRequest('/api/role', queryParams)
      .subscribe({
        next: (body) => this.roleList = body,
        error: this.serviceError
      });
  }

  ngOnInit() {
    this.apiClient.getRequest(`/api/v1/resource/actions-by-user?frontendCode=PAGE_ACCESOS`)
      .subscribe({next: this.successActionList});
  }

  rowOptionClick(row, actionCode) {
    this.rowActionEvent({actionCode, item: row});
  }

  roleSelected() {
    if (this.roleControl.valid) {
//      this.roleService.requestFindResourceByRole(this.roleControl.value)
      this.apiClient.getRequest(`/api/role/access-list?roleId=${this.roleControl.value}`)
        .subscribe({
          next: (body) => this.dataSource.data = body,
          error: this.serviceError
        });
    }
  }

  isGroupItem = (index, item: any) => !!item.isParent;

  protected successActionList = (data: any) => {
    this.userActions = data;
    this.rowActions = this.buildRowActions();
    if (this.rowActions.length === 0) this.columns = this.columns.filter(item => item.property !== 'actions');
  }

  protected tableActionManager = (event: any) => {
    if (event.event === 'ROW_CLICK') {
      this.rowActionEvent(event.data);
    }
  }

  protected rowActionEvent(event: {item: any, actionCode: string}) {
    const {item, actionCode} = event;
    if (actionCode === this.commonTableActions.actionConfigCode) {
      this.roleResourcePrivilegesConfig(item).then(console.log);
    }
  }

  private async roleResourcePrivilegesConfig(item: any) {
    const actionList =
      //await this.actionService.requestAvailableActionList(item.resourceId)
      await this.apiClient.getRequest(`/api/v1/action/find-available-by-resource?resourceId=${item.resourceId}`)
      .toPromise()
      .catch(this.serviceError);
    if (actionList) {
      const myPrivilegeList =
//        await this.actionService.requestPrivilegesByRolAndResource(this.roleControl.value, item.resourceId)
          await this.apiClient.getRequest(`/api/v1/action/privileges-by-role-and-resource?resourceId=${item.resourceId}&roleId=${this.roleControl.value}`)
        .toPromise()
        .catch(this.serviceError);

      if (myPrivilegeList) {
        const privilegeList: any[] = myPrivilegeList as any[];
        const data: IPrivilegeDialogData = {
          roleId: this.roleControl.value,
          resourceId: item.resourceId,
          actionList,
          privilegeList
        };
        console.log(data)


        this.matDialog.open(
          PrivilegesComponent,
          {
            width: "400px",
            height: '100%',
            autoFocus: false,
            disableClose: true,
            position: {right: '0'},
            data
          }
        ).afterClosed().subscribe(result => {
          if (result) {
            this.roleSelected();
            this.sidenavService.reloadResources();
          }
        });
      }
    }
  }

  protected serviceError = (error: any) => {
    console.error('ERROR: ', error);
  }

  protected buildRowActions = (): any[] => {
    const actions = [];
    actions.push({
      action: 'Configurar Acciones',
      actionCode: this.commonTableActions.actionConfigCode,
      icon: 'edit'
    });
    return actions;
  }

  protected buildColumns = (): any[] => ([
    { name: 'Check', property: 'checkbox', visible: true, isModelProperty: false },
    { name: 'Nombre', property: 'name', visible: true, isModelProperty: true },
    { name: 'Url', property: 'url', visible: true, isModelProperty: true },
    {name: 'Actions', property: 'actions', visible: true, isModelProperty: false },
  ])

}
