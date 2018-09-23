import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home.routing';




import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './home/slide-show/slide-show.component';
import { HomeVideoComponent } from './home/home-video/home-video.component';
import { HomeVideo2Component } from './home/home-video2/home-video2.component';
import { HomeVideo3Component } from './home/home-video3/home-video3.component';
import { HomeService } from './home.service';


@NgModule(
    {
        imports: [
            BrowserModule,
            FormsModule,
            HomeRoutingModule,

            HttpModule,


        ],
        declarations: [



            HomeComponent,



            SlideShowComponent,



            HomeVideoComponent,



            HomeVideo2Component,



            HomeVideo3Component,






        ],
        providers: [HomeService, SlideShowComponent]
    }
)

export class HomeModule {}
