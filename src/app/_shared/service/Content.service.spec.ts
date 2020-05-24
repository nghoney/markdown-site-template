import { TestBed, inject } from '@angular/core/testing';

import { contentService } from './content.service';

describe('contentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [contentService]
    });
  });

  it('should be created', inject([contentService], (service: contentService) => {
    expect(service).toBeTruthy();
  }));
});
