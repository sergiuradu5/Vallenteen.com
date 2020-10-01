import { Component, OnInit, Inject, ElementRef, AfterViewInit } from '@angular/core';
import { CoverArt } from '../../_interfaces/cover-art';
import { CoverArtService } from '../../_services/cover-art.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-music-carousel',
  templateUrl: './music-carousel.component.html',
  styleUrls: ['./music-carousel.component.css']
})
export class MusicCarouselComponent implements OnInit  {

  constructor(private coverArtService: CoverArtService
  ){}
  fakeArray: any;
  url1 = 'url("';
  url2 = '")';
  coverArts: CoverArt[];
  stickyNotes: CoverArt[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 1500,
    dotsSpeed: 1500,
    dragEndSpeed: 1500,
    smartSpeed: 1500,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    autoplaySpeed: 1500,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      580: {
        items: 2
      },
      1280: {
        items: 3
      },
      2500: {
        items: 4
      }
    },
  }

  ngOnInit() {
    this.coverArtService.getHeroSlides().subscribe(files => {
      this.coverArts = files;
    });
    this.coverArtService.getStickyNotes().subscribe(files => {
      this.stickyNotes = files;
    });

  }
}
