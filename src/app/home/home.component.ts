import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService, UtilsService, ContentService } from '../_shared/service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sideNav: MatSidenav;

  leftMenuCatalogs: any[];

  markedDir: string;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private contentService: ContentService,
    public authService: AuthService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.contentService
      .getLeftMenuCatalogs()
      .then(catalogs => {
        this.leftMenuCatalogs = catalogs;
        console.log('left menu catalog:', this.leftMenuCatalogs);
      });
  }

  getSideNavMode(): string {
    if (this.utilsService.isSmartDevice()) {
      return "over";
    }
    return "side";
  }

  isMarkedDir(dir: string): boolean {
    return dir == this.markedDir;
  }

  isDefaultOpen(): boolean {
    return !this.utilsService.isSmartDevice();
  }

  close(): void {
    if (this.utilsService.isSmartDevice()) {
      this.sideNav.close();
    }
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
