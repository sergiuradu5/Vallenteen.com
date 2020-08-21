import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-carousel',
  templateUrl: './music-carousel.component.html',
  styleUrls: ['./music-carousel.component.css']
})
export class MusicCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = ['../../assets/img/bg-img/p1.png', '../../assets/img/bg-img/p2.png', '../../assets/img/bg-img/p3.png'];  
  
  SlideOptions = { items: 1, dots: false, nav: true };  
  CarouselOptions = { items: 3, dots: false, nav: true };  
}
