import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { MusicCarouselComponent } from './home/music-carousel/music-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavMusicPlayerComponent } from './nav-music-player/nav-music-player.component';
import { SafeStylePipe} from './_helpers/safe-style.pipe';
import { MaterialModule } from './material.module';
import { ClickToPlayComponent } from './home/click-to-play/click-to-play.component';
import { AlertsComponent } from './_alerts/alerts.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomePhotosComponent } from './home/home-photos/home-photos.component';
import { PreFooterComponent } from './home/pre-footer/pre-footer.component';
import appRoutes from './routes';
import { AboutComponent } from './about/about.component';
import { DiscographyComponent } from './discography/discography.component';
import { SongCardComponent} from './discography/song-card/song-card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
      FooterComponent,
      HomeComponent,
      HomePhotosComponent,
     
      PreFooterComponent,
      AboutComponent,
      DiscographyComponent,
      GalleryComponent,
      ContactComponent,
      SongCardComponent
   ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes,{
        scrollPositionRestoration: 'enabled' // Add options right here
      })
  ],
  providers: [
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
