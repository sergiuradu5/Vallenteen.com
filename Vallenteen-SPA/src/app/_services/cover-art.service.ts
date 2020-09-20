import { Injectable } from '@angular/core';
import { CoverArt } from '../_interfaces/cover-art';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoverArtService {


  constructor() { }
  coverArts: CoverArt[] = [
    {
      url: '../../assets/img/cover-arts/[Cover Art] That new girl is kinda cute [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] When you start to like somebody [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] When you\'re thinking about your crush in class [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] When you can\'t sleep and she\'s on your mind [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] Staring at your crush\'s instagram photos [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] How to talk to your crush tutorial [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] Why are you so perfect all the time [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] Butterflies and blooming flowers from within [S].png'
    },
    {
      url: '../../assets/img/cover-arts/[Cover Art] When you finally ask your crush out [S].png'
    },
  ];

  heroSlides: CoverArt[] = [
    {
      url: '../../assets/img/hero-slides/That new girl is kinda cute [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you start to like someone [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you\'re thinking about your crush in class [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you can\'t sleep and she\'s on your mind [B].png'
    },
    {
      url: '../../assets/img/hero-slides/Staring at your crush\'s instagram photos [B].png'
    },
    {
      url: '../../assets/img/hero-slides/How to talk to your crush tutorial [B].png'
    },
    {
      url: '../../assets/img/hero-slides/Why are you so perfect all the time [B].png'
    },
    {
      url: '../../assets/img/hero-slides/Butterflies and blooming flowers from within [B].png'
    },
    {
      url: '../../assets/img/hero-slides/When you finally ask your crush out [B].png'
    },
  ];

  stickyNotes: CoverArt[] = [
    {
      url: '../../assets/img/hero-slides/That new girl is kinda cute [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you start to like someone [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you\'re thinking about your crush in class [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you can\'t sleep and she\'s on your mind [S].png'
    },
    {
      url: '../../assets/img/hero-slides/Staring at your crush\'s instagram photos [S].png'
    },
    {
      url: '../../assets/img/hero-slides/How to talk to your crush tutorial [S].png'
    },
    {
      url: '../../assets/img/hero-slides/Why are you so perfect all the time [S].png'
    },
    {
      url: '../../assets/img/hero-slides/Butterflies and blooming flowers from within [S].png'
    },
    {
      url: '../../assets/img/hero-slides/When you finally ask your crush out [S].png'
    },
  ];


  getCoverArts()
  {
    return of(this.coverArts);
  }

  getHeroSlides()
  {
    return of(this.heroSlides);
  }

  getStickyNotes()
  {
    return of(this.stickyNotes);
  }
}
