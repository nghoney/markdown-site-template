/*
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-05-18 09:46:29
 * @LastEditors: Edward
 * @FilePath: \markdown-site-template\src\app\_shared\service\config.service.ts
 * @LastEditTime: 2020-05-25 16:48:33
 * @description: NG markdown site template @ MIT License
 */ 

import { Injectable, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../model/config';
import { environment } from '../../../environments/environment'
import { ApiService } from '../api/api.service';
import { Location } from '@angular/common';

const targetBranch = environment.branch
const baseUrl = environment.pageBaseUrl;
@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  //setup a default value for user、 repo and branch
  config = new Config('crazybber', 'markdown-site-template', 'master');

  constructor(
    @Inject(Location) private location: Location,
    private apiService: ApiService,
    private routes: ActivatedRoute
  ) {
    this.apiService.setupOwnerRepoBranch(this.config.owner, this.config.repo, this.config.branch)
  }

  initConfigByRoute() {
    //console.log('routes snapshot url: ', this.routes.snapshot.url)
  }


  initConfigWithDefault(): void {

    this.initConfigByRoute()

    if (location.hostname !== 'localhost') {
      this.config.owner = location.host.substring(0, location.host.indexOf(baseUrl));
    }
    this.config.branch = targetBranch;
    this.apiService.fromUserRepo(this.config.owner, this.config.repo) /// xxx.xxx/crazybber/some-repo
      .getRepo()
      .then(repo => {
        this.config.admin = repo.owner.login;
      //  console.log('repo info from getRepo : ', repo)
      });
  }

}
