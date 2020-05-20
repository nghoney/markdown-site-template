import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  repo: any;
  issues: Observable<any[]>;
  length;
  pageSize = 7;
  pageSizeOptions = [7];

  pageEvent: PageEvent;

  constructor(
    private matPaginatorIntl: MatPaginatorIntl,
    public snackBar: MatSnackBar,
   // private confService: ConfService,
   // private gitProxyService: GitProxyService
  ) { }

  ngOnInit() {
    this.matPaginatorIntl.itemsPerPageLabel = "count per page：";
    this.matPaginatorIntl.nextPageLabel = "";
    this.matPaginatorIntl.previousPageLabel = "";
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => { if (length == 0 || pageSize == 0) { return `0 of ${length}`; } length = Math.max(length, 0); const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} - ${endIndex} / ${length}`; }
   
  }

  ngAfterViewInit() {
    this.search();
  }

  search(): void {
    this.matPaginatorIntl.changes.next();
  }

  onClosed(isClosed: boolean) {
    this.search();
    this.snackBar.open("done ! ", "", {
      duration: 600
    });
  }

}
