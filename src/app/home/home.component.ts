import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpErrorResponse } from '@angular/common/http';


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
