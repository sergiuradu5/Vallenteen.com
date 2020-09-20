import { Component, OnInit, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document, 
  private elementRef:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    
  }
}
