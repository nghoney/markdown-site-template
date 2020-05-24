import { ConfigService,GitService } from './_shared/service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './_shared/mats';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavBarModule } from './_shared/navbar';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';
import { InitComponent } from './init/init.component';
import { MatPaginatorIntl } from '@angular/material/paginator';


//here we can override render
export function markedOptions(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
      return '<p>' + text + '</p>';
  };

  return { renderer };
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    UpdateComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    NavBarModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: { provide: MarkedOptions, useFactory: markedOptions },
      sanitize: SecurityContext.HTML, // default value
  }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    MatPaginatorIntl,
    ConfigService,
    GitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
