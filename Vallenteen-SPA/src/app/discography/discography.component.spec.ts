/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscographyComponent } from './discography.component';

describe('DiscographyComponent', () => {
  let component: DiscographyComponent;
  let fixture: ComponentFixture<DiscographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
