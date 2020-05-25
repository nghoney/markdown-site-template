/*
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-05-17 21:36:23
 * @LastEditors: Edward
 * @FilePath: \markdown-site-template\src\app\app.component.ts
 * @LastEditTime: 2020-05-25 16:48:11
 * @description: NG markdown site template @ MIT License
 */ 

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
    //console.log('init config from page url')
    this.configService.initConfigWithDefault();
  }
}
