import { Injectable, OnInit } from '@angular/core';

import { Config } from '../model/config';

export const branch = 'gh-pages';

@Injectable()
export class ConfService {
  config = new Config();

  constructor(
  ) { }

  initConfig(): void {
    this.config.owner = window.location.host.substring(0, window.location.host.indexOf('.github.io'));
    if (window.location.pathname == '/') {
      this.config.repo = this.config.owner;
    } else {
      this.config.repo = window.location.pathname.substring(1, window.location.pathname.length);
      if(this.config.repo.endsWith('/')) {
        this.config.repo = this.config.repo.substring(0, this.config.repo.length - 1);
      }
    }
    this.config.branch = branch;
  }
}
