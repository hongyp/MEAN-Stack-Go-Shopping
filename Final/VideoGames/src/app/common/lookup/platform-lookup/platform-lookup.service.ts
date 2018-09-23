import { Injectable } from '@angular/core';

import { MOCK_PLATFORM_LOOPUP } from './mock-platforms-lookyp';

@Injectable()
export class PlatformLookupService {

  getPlatformsLookup() {
    return MOCK_PLATFORM_LOOPUP;
  }

  constructor() { }

}
