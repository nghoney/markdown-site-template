import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/mats';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { ContentComponent } from './news/content-item/content.component';
import { ConfigService, AuthService, UtilsService, ContentService } from '../_shared/service';
import { FolderComponent } from './folder/folder.component';
import { CloseDialogComponent } from './news/close-dialog/close-dialog.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [HomeComponent, FooterComponent, NewsComponent, ContentComponent, FolderComponent, CloseDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MarkdownModule
  ],
  providers: [
    { provide: Window, useValue: window },
    AuthService,
    ConfigService,
    UtilsService,
    ContentService
  ]
})
export class HomeModule { }
