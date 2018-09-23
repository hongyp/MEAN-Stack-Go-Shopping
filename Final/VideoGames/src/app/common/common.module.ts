import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

import { RestApiService } from './restapi.service';
import { CountryLookupService } from './lookup/country-lookup/country-lookup.service';
import { PlatformLookupService } from './lookup/platform-lookup/platform-lookup.service';

@NgModule(
    {
        providers: [RestApiService, CountryLookupService, PlatformLookupService]
    }
)

export class CommonModule {}