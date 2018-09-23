import { TestBed, inject } from '@angular/core/testing';

import { CountryLookupService } from './country-lookup.service';

describe('CountryLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryLookupService]
    });
  });

  it('should be created', inject([CountryLookupService], (service: CountryLookupService) => {
    expect(service).toBeTruthy();
  }));
});
