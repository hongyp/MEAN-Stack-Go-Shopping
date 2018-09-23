import { Injectable } from '@angular/core';

import { MOCK_COUNTRY_LOOKUP } from './mock-countries-lookup';
import { CountryLookup } from './country-lookup';

@Injectable()
export class CountryLookupService {

  constructor() { }

  getCountriesLookup(): CountryLookup[] {
    return MOCK_COUNTRY_LOOKUP;
  }

}
