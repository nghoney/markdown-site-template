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
import { ConfigService, AuthService, GitService, UtilsService } from '../../../_shared/service';
import { CloseDialogComponent } from '../close-dialog/close-dialog.component';

@Component({
  selector: 'app-content-item',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() issue: any;
  @Output() onClosed = new EventEmitter<boolean>();
  headerImageStyle = {};
  user: string;
  createAt: string;
  title: string;
  body: string;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private confService: ConfigService,
    public authService: AuthService,
    private gitService: GitService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.user = this.issue.user.login;
    this.headerImageStyle = {
      'background-image': "url('" + this.issue.user.avatar_url + "')",
      'background-size': 'cover'
    }
    this.createAt = this.issue.created_at;
    this.title = this.issue.title;
    this.utilsService.markdownText(this.utilsService.emojiParser(this.issue.body))
      .then(body => this.body = body);

  }

  openCloseIssueDialog(): void {
    let dialogRef = this.dialog.open(CloseDialogComponent, {
      minWidth: '25vw',
      minHeight: '30vh',
      data: {
        title: this.issue.title
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
      this.issue.number,
      this.issue.title,
      sessionStorage.getItem('access_token'),
      'closed'
    )
      .then(() => this.onClosed.emit(true));
  }
}
