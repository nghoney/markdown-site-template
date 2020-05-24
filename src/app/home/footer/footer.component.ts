import { UtilsService } from '../../_shared/service';
import { Component, OnInit, Input } from '@angular/core';
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
