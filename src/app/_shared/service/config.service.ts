import { Injectable, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Config } from '../model/config';
import {environment} from '../../../environments/environment'

const branch = environment.branch

@Injectable()
export class ConfigService {
  config = new Config();

  constructor(
  ) { }

  initConfigByRoute(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let routePath: string = state.url;

    this.config.owner = routePath.substring(0, routePath.indexOf('.github.io'));
    if (routePath == '/') {
      this.config.repo = this.config.owner;
    } else {
      this.config.repo = routePath.substring(1, routePath.length);
      if (this.config.repo.endsWith('/')) {
        this.config.repo = this.config.repo.substring(0, this.config.repo.length - 1);
      }
    }
    this.config.branch = branch;
  }

  initConfig(): void {

    var urlPath = window.location.host

    this.config.owner = urlPath.substring(0, urlPath.indexOf('.github.io'));
    if (urlPath == '/') {
      this.config.repo = this.config.owner;
    } else {
      this.config.repo = urlPath.substring(1, urlPath.length);
      if (this.config.repo.endsWith('/')) {
        this.config.repo = this.config.repo.substring(0, this.config.repo.length - 1);
      }
    }
    this.config.branch = branch;
  }
}
