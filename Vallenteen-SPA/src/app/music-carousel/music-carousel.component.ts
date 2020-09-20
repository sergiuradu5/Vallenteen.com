import { Component, OnInit, Inject, ElementRef, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CoverArt } from '../_interfaces/cover-art';
import { CoverArtService } from '../_services/cover-art.service';
import {SlideTextService} from '../_services/slide-text.service';

@Component({
  selector: 'app-music-carousel',
  templateUrl: './music-carousel.component.html',
  styleUrls: ['./music-carousel.component.css']
})
export class MusicCarouselComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document, 
            private elementRef:ElementRef,
            private coverArtService: CoverArtService,
            private slideTextService: SlideTextService
  ){}
  fakeArray: any;
  url1 = 'url("';
  url2 = '")';
  coverArts: CoverArt[];
  stickyNotes: CoverArt[];
  slideTexts: string[];

  ngOnInit():void {
    this.coverArtService.getHeroSlides().subscribe(files => {
      this.coverArts = files;
    });
    this.coverArtService.getStickyNotes().subscribe(files => {
      this.stickyNotes = files;
    });
    this.slideTextService.getSlideTexts().subscribe(files => {
      this.slideTexts = files;
    });
  }
  ngAfterViewInit() {
  }
}
