import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare var Instafeed: any;
declare var InstagramToken: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @HostListener('scroll', ['$event']) // for scroll events of the current element
  delay = "300ms";
  feed: any;
  instagramToken: any;
  constructor() {
    this.instagramToken = InstagramToken;
    this.feed = new Instafeed({
      accessToken: this.instagramToken,
      limit: 20,
      sortBy: 'most-recent',
      resolution: 'high_resolution',
      template: `<div class="mb-4 col-12 col-sm-6 col-lg-3 wow fadeInUp " data-wow-delay="{{this.delay}}">
      <a class="" target="_blank" href="{{link}}">
      <div class="card instaphoto">
        <div class="card-img-wrapper mt-1 text-center">
          <img class="img-brightness-change card-img-top img-cropped" src="{{image}}" alt="">
          <p class="p-2 d-flex align-self-center card-text card-movable-body text-white"><strong>{{caption}}</strong></p>
        </div>
          <!-- Gallery Content -->
          <div class="card-body p-2 gallery-content">
              <h5 class="card-title">{{timestamp}}</h5>
              
          </div>
      </div>
      </a>
  </div>`,
    transform: function(item) { //Transform receives each item as its argument
      // Over-write the original timestamp
      item.timestamp = new Date(item.timestamp).toLocaleString('en-AU', {
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        });

      // return the modified item
      return item;
      }
    });
   }

   onScroll(event) {
    this.countDownDelay();
  }

   countDownDelay()
   {
     setTimeout(() => {  this.delay="500ms" }, 200);
     setTimeout(() => {  this.delay="700ms" }, 200);
     setTimeout(() => {  this.delay="900ms" }, 200);
     setTimeout(() => {  this.delay="300ms" }, 200);
    
   }

  ngOnInit() {
  
    this.feed.run();

    console.log(InstagramToken);
    console.log(Instafeed);
  }

  

}
