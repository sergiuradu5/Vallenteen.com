import { Component, OnInit, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare const $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
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

    var d = this.document.createElement("script");
    d.type = "text/javascript";
    d.src = "../assets/js/map-active.js";
    this.elementRef.nativeElement.appendChild(d);

  }

  title = 'Vallenteen-SPA';
}
