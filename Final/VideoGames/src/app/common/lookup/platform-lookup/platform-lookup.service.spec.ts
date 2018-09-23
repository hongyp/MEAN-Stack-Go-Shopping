import { TestBed, inject } from '@angular/core/testing';

import { PlatformLookupService } from './platform-lookup.service';

describe('PlatformLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformLookupService]
    });
  });

  it('should be created', inject([PlatformLookupService], (service: PlatformLookupService) => {
    expect(service).toBeTruthy();
  }));
});
