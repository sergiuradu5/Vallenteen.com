import { Injectable } from '@angular/core';
import { CoverArt } from '../_interfaces/cover-art';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoverArtService {


  constructor() { }
  coverArts: CoverArt[] = [
    {
      url: "../../assets/img/cover-arts/staring at your crush's instagram photos.jpg"
    },
    {
      url: "../../assets/img/cover-arts/when you start to like someone.jpg"
    },
    {
      url: "../../assets/img/cover-arts/how to talk to your crush tutorial.jpg"
    }
  ];

  getFiles()
  {
    return of(this.coverArts);
  }
}
