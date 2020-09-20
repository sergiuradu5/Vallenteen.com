import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { AlertModule } from 'ngx-bootstrap/alert';


import { AppComponent } from './app.component';
import { MusicCarouselComponent } from './music-carousel/music-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavMusicPlayerComponent } from './nav-music-player/nav-music-player.component';
import { SafeStylePipe} from './_helpers/safe-style.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ClickToPlayComponent } from './click-to-play/click-to-play.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [							
    AppComponent,
    MusicCarouselComponent,
    NavBarComponent,
      NavMusicPlayerComponent,
      SafeStylePipe,
      ClickToPlayComponent,
      AlertsComponent,
      MainMenuComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    OwlModule,
    BrowserAnimationsModule,
    MaterialModule,
    AlertModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent,
    NavMusicPlayerComponent

  ]
})
export class AppModule { }
