import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel'; 

import { AppComponent } from './app.component';
import { MusicCarouselComponent } from './music-carousel/music-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavMusicPlayerComponent } from './nav-music-player/nav-music-player.component';
import { SafeStylePipe} from './_helpers/safe-style.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [			
    AppComponent,
    MusicCarouselComponent,
    NavBarComponent,
      NavMusicPlayerComponent,
      SafeStylePipe
   ],
  imports: [
    BrowserModule,
    OwlModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,
  NavMusicPlayerComponent
  ]
})
export class AppModule { }
