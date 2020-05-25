/*
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-05-20 22:32:30
 * @LastEditors: Edward
 * @FilePath: \markdown-site-template\src\app\home\news\news.component.ts
 * @LastEditTime: 2020-05-25 16:54:05
 * @description: NG markdown site template @ MIT License
 */

import { GitService } from '../../_shared/service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {

  repo: any;
  newsContentList: Observable<any[]>;
  length = 0;
  pageSize = 7;
  pageSizeOptions = [7];

  pageEvent: PageEvent;

  constructor(
    private matPaginatorIntl: MatPaginatorIntl,
    public snackBar: MatSnackBar,
    private gitService: GitService
  ) { }

  ngOnInit() {
    this.matPaginatorIntl.itemsPerPageLabel = "count per page：";
    this.matPaginatorIntl.nextPageLabel = "";
    this.matPaginatorIntl.previousPageLabel = "";
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} / ${length}`;
    }

    console.log('init issue list')

    this.gitService.getRepo().then(repo => this.length = repo.open_issues_count);

    this.newsContentList = this.matPaginatorIntl.changes.pipe(switchMap(() => this.gitService.simpleGetIssues(
      'latest-news',
      this.pageEvent ? this.pageEvent.pageIndex + 1 : 1,
      this.pageSize)
    )
    );
    console.log('newsContentList',this.newsContentList);
  }

  ngAfterViewInit() {
    this.updatePaginatorDisplay();
  }

  updatePaginatorDisplay(): void {
    this.matPaginatorIntl.changes.next();
  }

  onClosed(isClosed: boolean) {
    this.updatePaginatorDisplay();
    this.snackBar.open("deleted finished !", "alert", {
      duration: 600
    });
  }

}
