import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilsService, ContentService } from '../../_shared/service';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteDialogComponent } from './delete-dialog.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() dir: string;
  @Input() sidenav: MatSidenav;
  @Output() onDeleted = new EventEmitter<boolean>();

  files: any[];
  isShow = true;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private contentService: ContentService,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.contentService.getFiles(this.dir)
      .then(files => this.files = files);
  }

  close(): void {
    if (this.utilsService.isSmartDevice()) {
      this.sidenav.close();
    }
  }

  openDeleteBlogDialog(path: string, number: string, title: string): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      minWidth: '25vw',
      minHeight: '30vh',
      data: {
        path: path
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBlog(number, title);
      }
    });
  }

  deleteBlog(number: string, title: string): void {
    this.contentService
      .deleteFile(number, title)
      .then(deleteResult => this.onDeleted.emit(true));
  }

  handleError(err: HttpErrorResponse): void {
    this.snackBar.open(this.utilsService.getErrorInfo(err), "error info:", {
      duration: 1000,
    });
  }

}
