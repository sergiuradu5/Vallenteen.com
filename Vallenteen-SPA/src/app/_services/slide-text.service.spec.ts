/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlideTextService } from './slide-text.service';

describe('Service: SlideText', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideTextService]
    });
  });

  it('should ...', inject([SlideTextService], (service: SlideTextService) => {
    expect(service).toBeTruthy();
  }));
});
