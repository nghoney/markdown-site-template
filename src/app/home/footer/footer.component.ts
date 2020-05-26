/*
 * @Repo: https://github.com/nghoney/markdown-site-template 
 * @Author: Edward https://github.com/crazybber 
 * @Date: 2020-05-26 13:19:21 
 * @Last Modified by: Edward 
 * @Last Modified time: 2020-05-26 13:19:21 
 */

import { UtilsService } from '../../_shared/service';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,

    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
  }

  close(): void {
    if (this.utilsService.isSmartDevice()) {
      this.sidenav.close();
    }
  }

}
