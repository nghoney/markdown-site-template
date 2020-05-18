import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent implements OnInit {

  title: string;
  isDark: boolean;

  constructor(
    private overlayContainer: OverlayContainer,
    //    private window: Window,
    private router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.title = 'markdown-site-template';
    this.isDark = false;

  }


  openDialog(): void {

  }

  toggleTheme(): void {

  }

}
