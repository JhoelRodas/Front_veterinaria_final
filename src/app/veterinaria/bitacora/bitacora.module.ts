import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {BitacoraRoutingModule} from './bitacora-routing.module';
import {BitacoraComponent} from './bitacora.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {DetailLogComponent} from './detail-log/detail-log.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {FuryCardModule} from "../../../@fury/shared/card/card.module";
import {FurySharedModule} from "../../../@fury/fury-shared.module";
import {ListModule} from "../../../@fury/shared/list/list.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [BitacoraComponent, DetailLogComponent],
  imports: [
    CommonModule,
    FurySharedModule,
    FuryCardModule,
    FlexLayoutModule,
    ListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    BitacoraRoutingModule,
    MatDialogModule,
    MatTabsModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
    DatePipe
  ]
})
export class BitacoraModule {
}
