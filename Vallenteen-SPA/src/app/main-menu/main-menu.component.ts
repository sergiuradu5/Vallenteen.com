import { Component, OnInit, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document, 
  private elementRef:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

}
