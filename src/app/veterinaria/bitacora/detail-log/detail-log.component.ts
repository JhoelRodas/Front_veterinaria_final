import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import * as moment from "moment";

@Component({
  selector: 'detail-log',
  templateUrl: './detail-log.component.html',
  styleUrls: ['./detail-log.component.scss']
})
export class DetailLogComponent implements OnInit {

  constructor(public bottomSheetRef: MatBottomSheetRef<DetailLogComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private matSnackBar: MatSnackBar
  ) {
  }

  async copyToClipboard() {
    await navigator.clipboard.writeText(this.data.log);
    this.matSnackBar.open('Copiado al porta papeles');
  }

  ngOnInit() {
  }


  downloadFileMessage(log: string) {
    // fileUtil.downloadTextAsFile(log, `log_${moment.utc(moment(this.data.modifiedDate)).format('YYYY_MM_DD_HH_MM_SS')}.txt`);
  }

}
