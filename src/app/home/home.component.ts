import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog;
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  isDark: boolean;

  constructor(
    private overlayContainer: OverlayContainer,
    private router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.title = 'demo';
    this.isDark = false;

  }



  openDialog(): void {
    let dialogRef = this.dialog.open(AboutComponent, {
      minWidth: '25vw',
      minHeight: '30vh'
    });
  }

  toggleTheme(): void {
    if (!this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
    }
  }

}
