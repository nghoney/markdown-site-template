import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  public localStorage: any;

  constructor() {
    if (!localStorage) {
      throw new Error('Current runtime does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  public setLSString(key: string, value: string): void {
    this.localStorage[key] = value;
  }

  public getLSString(key: string): string {
    return this.localStorage[key];
  }

  public setLSObject(key: string, value: any): void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public getLSObject(key: string): any {
    if (!this.localStorage[key]) {
        return null;
    }
    return JSON.parse(this.localStorage[key]);
  }

  public remove(key: string): any {
    this.localStorage.removeItem(key);
  }

}

@Injectable()
export class SessionStorageService {

    public sessionStorage: any;

    constructor() {
      if (!sessionStorage) {
        throw new Error('Current runtime does not support Session Storage');
      }
      this.sessionStorage = sessionStorage;
    }

    public setSSString(key: string, value: string): void {
      this.sessionStorage[key] = value;
    }

    public getSSString(key: string): string {
      return this.sessionStorage[key];
    }

    public setSSObject(key: string, value: any): void {
      this.sessionStorage[key] = JSON.stringify(value);
    }

    public getSSObject(key: string): any {
      return JSON.parse(this.sessionStorage[key]);
    }

    public remove(key: string): any {
      this.sessionStorage.removeItem(key);
    }

  }
