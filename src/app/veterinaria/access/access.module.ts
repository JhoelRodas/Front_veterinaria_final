import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccessRoutingModule} from './access-routing.module';
import {AccessComponent} from './access.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrivilegesComponent} from './privileges/privileges.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDividerModule} from "@angular/material/divider";
import {FurySharedModule} from "../../../@fury/fury-shared.module";
import {FuryCardModule} from "../../../@fury/shared/card/card.module";
import {ListModule} from "../../../@fury/shared/list/list.module";


@NgModule({
    declarations: [
        AccessComponent,
        PrivilegesComponent
    ],
    imports: [
        CommonModule,
        AccessRoutingModule,
        FurySharedModule,
        FuryCardModule,
        FlexLayoutModule,
        ListModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,

        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatDividerModule,
    ],
    exports: [
        AccessComponent
    ],
})
export class AccessModule {
}
