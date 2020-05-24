import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfigService } from 'src/app/_shared/service/config.service';
import { AuthService } from 'src/app/_shared/service/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() issue: any;
  @Output() onClosed = new EventEmitter<boolean>();
  headerImageStyle = { };
  user: string;
  createAt: string;
  title: string;
  body: string;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private confService: ConfigService ,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.user = this.issue.user.login;
    this.headerImageStyle = {
      'background-image': "url('" + this.issue.user.avatar_url + "')",
      'background-size': 'cover'
    }
    this.createAt = this.issue.created_at;
    this.title = this.issue.title;

  }

  openCloseIssueDialog(): void {

  }

  closeIssue(): void {

  }
}
