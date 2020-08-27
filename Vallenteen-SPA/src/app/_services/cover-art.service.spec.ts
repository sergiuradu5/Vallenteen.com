/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoverArtService } from './cover-art.service';

describe('Service: CoverArt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoverArtService]
    });
  });

  it('should ...', inject([CoverArtService], (service: CoverArtService) => {
    expect(service).toBeTruthy();
  }));
});
