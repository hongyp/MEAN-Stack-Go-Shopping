import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup.routing';
import { SignupNewComponent } from './signup-new/signup-new.component';
import { HttpModule } from '@angular/http';
import { SignupService } from './signup.service';

@NgModule(
    {
        imports: [
            BrowserModule, 
            FormsModule, 
            SignupRoutingModule,
            HttpModule
        ],
        declarations: [
            SignupComponent, 
            SignupNewComponent
        ],
        providers: [SignupService]
    }
)

export class SignupModule {}