import { Component, OnInit, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare const $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(@Inject(DOCUMENT) private document: Document, 
            private elementRef:ElementRef
  ){};
  
  ngOnInit():void {
  }
   ngAfterViewInit() {
    var j = this.document.createElement("script");
    j.type = "text/javascript";
    j.src = "../assets/js/jquery/jquery-2.2.4.min.js";
    this.elementRef.nativeElement.appendChild(j);

    var c = this.document.createElement("script");
    c.type = "text/javascript";
    c.src = "../assets/js/popper.min.js";
    this.elementRef.nativeElement.appendChild(c);

    var b = this.document.createElement("script");
    b.type = "text/javascript";
    b.src = "../assets/js/bootstrap.min.js";
    this.elementRef.nativeElement.appendChild(b);

    var r = this.document.createElement("script");
    r.type = "text/javascript";
    r.src = "../assets/js/plugins.js";
    this.elementRef.nativeElement.appendChild(r);

    var s = this.document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/active.js";
    this.elementRef.nativeElement.appendChild(s);

    var mp = this.document.createElement("script");
    mp.type= "text/javascript";
    mp.src = "../assets/js/nav-music-player.js";
    this.elementRef.nativeElement.appendChild(mp);

    var owl = this.document.createElement("script");
    owl.type= "text/javascript";
    owl.src = "../assets/js/owl.carousel.min.js";
    this.elementRef.nativeElement.appendChild(owl);

    var i = this.document.createElement("script");
    i.type = "text/javascript";
    i.src = "../assets/js/instafeed.min.js";
    this.elementRef.nativeElement.appendChild(i);

    var ig_token = this.document.createElement("script");
    ig_token.type = "text/javascript";
    ig_token.src = "https://vallenteen-ig-token-agent.herokuapp.com/token.js";
    this.elementRef.nativeElement.appendChild(ig_token);

  }

}
