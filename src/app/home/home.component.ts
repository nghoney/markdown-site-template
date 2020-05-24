import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../_shared/service/auth.service';
import { UtilsService } from '../_shared/service/utils.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav) sideNav: MatSidenav;
  dirs: any[];
  markedDir: string;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    //private blogService: contentService,
    public authService: AuthService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {

  }

  getSideNavMode(): string {
    return "side";
  }

  isMarkedDir(dir: string): boolean {
    return dir == this.markedDir;
  }

  isDefaultOpen(): boolean {
    return true;
  }

  close(): void {

  }

  openAddBlogDialog(): void {

  }

  createBlog(dir: string, file: string): void {

  }

  handleError(err: HttpErrorResponse): void {

  }

  onDeleted(isDeleted: boolean) {

  }

}
