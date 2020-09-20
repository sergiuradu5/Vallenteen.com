/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClickToPlayComponent } from './click-to-play.component';

describe('ClickToPlayComponent', () => {
  let component: ClickToPlayComponent;
  let fixture: ComponentFixture<ClickToPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickToPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
