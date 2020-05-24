import { Component, OnInit } from '@angular/core';
import { ConfigService } from './_shared/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'markdown-site-template';
  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit() {
    console.log('init config from page url')
    this.configService.initConfigWithDefault();
  }
}
