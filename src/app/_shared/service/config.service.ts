import { Injectable, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../model/config';
import { environment } from '../../../environments/environment'
import { GitService } from './git.service';
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
    private gitService: GitService,
    private routes: ActivatedRoute
  ) {
    this.gitService.setupOwnerRepoBranch(this.config.owner, this.config.repo, this.config.branch)
  }

  initConfigByRoute() {
    console.log('routes snapshot url: ', this.routes.snapshot.url)
  }


  initConfigWithDefault(): void {

    this.initConfigByRoute()

    if (location.hostname !== 'localhost') {
      this.config.owner = location.host.substring(0, location.host.indexOf(baseUrl));
    }
    this.config.branch = targetBranch;
    this.gitService.fromUserRepo(this.config.owner, this.config.repo) /// xxx.xxx/crazybber/some-repo
      .getRepo()
      .then(repo => {
        this.config.admin = repo.owner.login;
        console.log('repo info from getRepo : ', repo)
      });
  }

}
