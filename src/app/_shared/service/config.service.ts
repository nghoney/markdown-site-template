import { Injectable, OnInit, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Config } from '../model/config';
import { environment } from '../../../environments/environment'
import { GitService } from './git.service';
import { Location } from '@angular/common';

const targetBranch = environment.branch
const baseUrl = environment.baseUrl;
@Injectable()
export class ConfigService {
  config = new Config();

  constructor(
    @Inject(Location) private location: Location,
    private giService: GitService
  ) { }

  initConfigByRoute(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let routePath: string = state.url;

    this.config.owner = routePath.substring(0, routePath.indexOf(baseUrl));
    if (routePath == '/') {
      this.config.repo = this.config.owner;
    } else {
      this.config.repo = routePath.substring(1, routePath.length);
      if (this.config.repo.endsWith('/')) {
        this.config.repo = this.config.repo.substring(0, this.config.repo.length - 1);
      }
    }
    this.config.branch = targetBranch;
  }

  initConfig2(): void {

    var urlPath = window.location.host

    this.config.owner = urlPath.substring(0, urlPath.indexOf(baseUrl));
    if (urlPath == '/') {
      this.config.repo = this.config.owner;
    } else {
      this.config.repo = urlPath.substring(1, urlPath.length);
      if (this.config.repo.endsWith('/')) {
        this.config.repo = this.config.repo.substring(0, this.config.repo.length - 1);
      }
    }
    this.config.branch = targetBranch;
  }

  initConfig(): void {

    
    if (location.hostname == 'localhost') {
      this.config.owner = 'crazybber';
    }

    this.config.owner = location.host.substring(0, location.host.indexOf(baseUrl));
    if (window.location.pathname == '/') {
      this.config.repo = this.config.owner;
    } else {
      this.config.repo = location.pathname.substring(1, location.pathname.length);
      if (this.config.repo.endsWith('/')) {
        this.config.repo = this.config.repo.substring(0, this.config.repo.length - 1);
      }
    }
    this.config.branch = targetBranch;
    this.giService
      .getRepo(
        this.config.owner,
        this.config.repo
      )
      .then(repo => this.config.admin = repo.owner.login);
  }

}
