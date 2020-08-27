// src/app/services/cloud.service.ts
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { AudioFile } from '../_interfaces/audio-file';
import { CoverArt } from '../_interfaces/cover-art';
import {CoverArtService} from './cover-art.service';

@Injectable({
  providedIn: "root"
})
export class CloudService {
  coverArts: CoverArt[];
  files: AudioFile[];
  constructor(private coverArtService: CoverArtService) {
    this.coverArtService.getFiles().subscribe(coverArts => {
      this.coverArts = coverArts;
      console.log(this.coverArts);
      this.files = [
        // tslint:disable-next-line: max-line-length
        {
          url:
            "../../assets/music/staring at your crush's instagram photos.mp3",
          title: "staring at your crush's instagram photos",
          artist: "vallenteen",
          coverArt: this.coverArts[0]
        },
        {
          // tslint:disable-next-line: max-line-length
          url:
            "../../assets/music/when you start to like someone.mp3",
          title: "when you start to like someone",
          artist: "vallenteen",
          coverArt: this.coverArts[1]
        },
        {
          url:
            "../../assets/music/how to talk to your crush tutorial.mp3",
          title: "how to talk to your crush tutorial",
          artist: "vallenteen",
          coverArt: this.coverArts[2]
        }
      ];
    

    });
  }
  
  
  getFiles() {
    return of(this.files);
  }
}