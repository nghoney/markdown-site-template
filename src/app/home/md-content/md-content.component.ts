import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ContentService, AuthService, UtilsService } from '../../_shared/service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, materialize } from 'rxjs/operators';
@Component({
  selector: 'app-md-content',
  templateUrl: './md-content.component.html',
  styleUrls: ['./md-content.component.scss']
})
export class MdContentComponent implements OnInit {

  number: string;
  title: string;
  codeBackup: string;
  code: string;
  file: Observable<string>;
  isOnLoading = true;
  isChanged: boolean;
  private markTerms = new Subject<string>();

  constructor(
    public snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    public authService: AuthService,
    private contentService: ContentService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.file = this.markTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(code => this.utilsService.markdownText(this.utilsService.emojiParser(code)))
    );

    this.activatedRoute.params.pipe(
      switchMap((params: ParamMap) => {
        this.isOnLoading = true;
        this.number = params['number'];
        return this.contentService
          .getFile(params['number']);
      }),
      materialize(),
    ).subscribe(notification => {
      if (notification.hasValue) {
        this.code = notification.value.body;
        this.title = notification.value.title;
        this.codeBackup = this.code;
        this.mark(this.code);
        this.isOnLoading = false;
      } else if (notification.error) {
        this.code = "error loading";
        this.codeBackup = this.code;
        this.mark(this.code);
        this.isOnLoading = false;
      }
    });


  }

  mark(code: string): void {
    this.markTerms.next(code);
    this.checkFileChange();
  }

  updateFileContent(): void {
    this.contentService
      .updateFile(
        this.number,
        this.title,
        this.code,
        this.location.pathname
      )
      .then(() => {
        this.codeBackup = this.code;
        this.checkFileChange();
        this.snackBar.open("saved !", "", {
          duration: 600,
        });
      })
      .catch(this.handleError);
  }

  handleError(err: HttpErrorResponse): void {
    this.snackBar.open(this.utilsService.getErrorInfo(err), "", {
      duration: 1000,
    });
  }

  checkFileChange(): void {
    this.isChanged = this.code != this.codeBackup;
  }

  test(): void {
    document.getElementsByClassName('markdown-section')[0].innerHTML = document.getElementsByClassName('markdown-section')[0].innerHTML.replace(/<p>##&nbsp;\S*<\/p>/g, '<h2></h2>');
  }
}
