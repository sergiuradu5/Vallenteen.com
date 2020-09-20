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
    this.coverArtService.getCoverArts().subscribe(coverArts => {
      this.coverArts = coverArts;

      this.files = [
        // tslint:disable-next-line: max-line-length
        {
          url:
            "../../assets/music/that new girl is kinda cute.mp3",
          title: "“that new girl is kinᵭa cute”",
          artist: "vallenteen",
          coverArt: this.coverArts[0]
        },
        {
          url:
            "../../assets/music/when you start to like someone.mp3",
          title: "“when you starƭ to like someone”",
          artist: "vallenteen",
          coverArt: this.coverArts[1]
        },
        {
          url:
            "../../assets/music/when you're thinking about your crush in class.mp3",
          title: "“when you're thinƙing about your crush in class”",
          artist: "vallenteen",
          coverArt: this.coverArts[2]
        },
        {
          url:
            "../../assets/music/when you can't sleep and she's on your mind.mp3",
          title: "“when you can't sleeҏ and she's on your mind”",
          artist: "vallenteen",
          coverArt: this.coverArts[3]
        },
        {
          url:
            "../../assets/music/staring at your crush's instagram photos.mp3",
          title: "“staring at your crush's instagram photos”",
          artist: "vallenteen",
          coverArt: this.coverArts[4]
        },
        {
          url:
            "../../assets/music/how to talk to your crush tutorial.mp3",
          title: "“how to talk to your cruȿh tutorial”",
          artist: "vallenteen",
          coverArt: this.coverArts[5]
        },
        {
          url:
            "../../assets/music/why are you so perfect all the time.mp3",
          title: "“why are you so perʃect all the time”",
          artist: "vallenteen",
          coverArt: this.coverArts[6]
        },
        {
          url:
            "../../assets/music/butterflies and blooming flowers from within.mp3",
          title: "“butterflies and ƅlooming flowers from within”",
          artist: "vallenteen",
          coverArt: this.coverArts[7]
        },
        {
          url:
            "../../assets/music/when you fịnally ask your crush out.mp3",
          title: "“when you fịnally ask your crush out”",
          artist: "vallenteen",
          coverArt: this.coverArts[8]
        }
      ];
    

    });
  }
  
  
  getFiles() {
    return of(this.files);
  }
  getFile(index: number)
  {
    return this.files[index];
  }
}