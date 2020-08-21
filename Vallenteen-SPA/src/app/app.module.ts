import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel'; 

import { AppComponent } from './app.component';
import { MusicCarouselComponent } from './music-carousel/music-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [		
    AppComponent,
    MusicCarouselComponent,
    NavBarComponent
   ],
  imports: [
    BrowserModule,
    OwlModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
