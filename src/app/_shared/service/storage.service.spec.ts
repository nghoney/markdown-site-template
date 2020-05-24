import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService, SessionStorageService } from './storage.service';

describe('LocalStorageService ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  it('should be created', inject([LocalStorageService], (service: LocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});


describe('SessionStorageService ', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [SessionStorageService]
      });
    });
  
    it('should be created', inject([SessionStorageService], (service: SessionStorageService) => {
      expect(service).toBeTruthy();
    }));
  });
  