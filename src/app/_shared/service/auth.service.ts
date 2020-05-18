import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ConfService } from './config.service';

@Injectable()
export class AuthService implements CanActivate {
  isLoggedIn = false;
  isAdmin = false;
  redirectUrl: string;

  constructor(
    private router: Router,
    private confService: ConfService
  ) { }

  login(accessToken: string, user: any): void {
    sessionStorage.setItem('access_token', accessToken);
    this.isLoggedIn = true;
    this.isAdmin = user.login == this.confService.config.admin;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    sessionStorage.removeItem('access_token');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('AuthGuard#canActivate called');
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.isLoggedIn) {
      return true;
    }
    this.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
