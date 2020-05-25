/*
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-05-21 21:46:48
 * @LastEditors: Edward
 * @FilePath: \markdown-site-template\src\app\home\news\content\content.component.ts
 * @LastEditTime: 2020-05-25 18:00:56
 * @description: NG markdown site template @ MIT License
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService, GitService, UtilsService } from '../../../_shared/service';
import { CloseDialogComponent } from '../close-dialog/close-dialog.component';

@Component({
  selector: 'app-content-item',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() 
  oneArticle: any;
  @Output() 
  onClosed = new EventEmitter<boolean>();
  headerImageStyle: any = {};
  user: string;
  createAt: string;
  title: string;
  body: string;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public authService: AuthService,
    private gitService: GitService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.user = this.oneArticle.user.login;
    this.headerImageStyle = {
      'background-image': "url('" + this.oneArticle.user.avatar_url + "')",
      'background-size': 'cover'
    }
    this.createAt = this.oneArticle.created_at;
    this.title = this.oneArticle.title;

    console.log('this.title', this.title)
    console.log('this.createAt', this.createAt)


    this.utilsService.markdownText(this.oneArticle.body)
      .then(body => this.body = body);

  }

  openCloseIssueDialog(): void {
    let dialogRef = this.dialog.open(CloseDialogComponent, {
      minWidth: '25vw',
      minHeight: '30vh',
      data: {
        title: this.oneArticle.title
      }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.closeIssue();
        }
      });
  }

  closeIssue(): void {
    this.gitService.updateIssue(
      this.oneArticle.number,
      this.oneArticle.title,
      sessionStorage.getItem('access_token'),
      'closed'
    ).then(() => this.onClosed.emit(true));
  }
}
