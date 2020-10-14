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
  discographyArts: CoverArt[];
  files: AudioFile[];
  bandcampLinks: string[] = [
    //"crushes" album
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    "https://vallenteen.bandcamp.com/album/crushes?action=download&from=embed",
    //Non "crushes" album
    "https://vallenteen.bandcamp.com/track/dont-even-b-ther-to-understand?action=download&from=embed",
    "https://vallenteen.bandcamp.com/track/coming-home-from-school-its-frid-y-sun-is-shining?action=download&from=embed",
    "https://vallenteen.bandcamp.com/track/i-think-i-got-sed-to-my-acne?action=download&from=embed",
    "https://vallenteen.bandcamp.com/track/not-anot-er-sad-song?action=download&from=embed",
    "https://vallenteen.bandcamp.com/track/when-oure-feeling-a-bit-homesick?action=download&from=embed",
    "https://vallenteen.bandcamp.com/track/letting-g-of-the-past?action=download&from=embed"
  ];
  constructor(private coverArtService: CoverArtService) {
    this.coverArtService.getDiscographyArts().subscribe(discographyArts => {
      this.discographyArts = discographyArts;
    });
    this.coverArtService.getCoverArts().subscribe(coverArts => {
      this.coverArts = coverArts;

      this.files = [
        // tslint:disable-next-line: max-line-length
        // Songs inside the "crushes" album
        {
          url:
            "../../assets/music/that new girl is kinda cute.mp3",
          title: "“that new girl is kinᵭa cute”",
          artist: "vallenteen",
          coverArt: this.coverArts[0],
          discographyArt: this.discographyArts[0],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[0]
        },
        {
          url:
            "../../assets/music/when you start to like someone.mp3",
          title: "“when you starƭ to like someone”",
          artist: "vallenteen",
          coverArt: this.coverArts[1],
          discographyArt: this.discographyArts[1],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[1]
        },
        {
          url:
            "../../assets/music/when you're thinking about your crush in class.mp3",
          title: "“when you're thinƙing about your crush in class”",
          artist: "vallenteen",
          coverArt: this.coverArts[2],
          discographyArt: this.discographyArts[2],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[2]
        },
        {
          url:
            "../../assets/music/when you can't sleep and she's on your mind.mp3",
          title: "“when you can't sleeҏ and she's on your mind”",
          artist: "vallenteen",
          coverArt: this.coverArts[3],
          discographyArt: this.discographyArts[3],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[3]
        },
        {
          url:
            "../../assets/music/staring at your crush's instagram photos.mp3",
          title: "“staring at your crush's instagram photos”",
          artist: "vallenteen",
          coverArt: this.coverArts[4],
          discographyArt: this.discographyArts[4],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[4]
        },
        {
          url:
            "../../assets/music/how to talk to your crush tutorial.mp3",
          title: "“how to talk to your cruȿh tutorial”",
          artist: "vallenteen",
          coverArt: this.coverArts[5],
          discographyArt: this.discographyArts[5],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[5]
        },
        {
          url:
            "../../assets/music/why are you so perfect all the time.mp3",
          title: "“why are you so perʃect all the time”",
          artist: "vallenteen",
          coverArt: this.coverArts[6],
          discographyArt: this.discographyArts[6],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[6]
        },
        {
          url:
            "../../assets/music/butterflies and blooming flowers from within.mp3",
          title: "“butterflies and ƅlooming flowers from within”",
          artist: "vallenteen",
          coverArt: this.coverArts[7],
          discographyArt: this.discographyArts[7],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[7]
        },
        {
          url:
            "../../assets/music/when you fịnally ask your crush out.mp3",
          title: "“when you fịnally ask your crush out”",
          artist: "vallenteen",
          coverArt: this.coverArts[8],
          discographyArt: this.discographyArts[8],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[8]
        },
        // The songs outside the "crushes" album
        {
          url:
            "../../assets/music/don't even bother to understand.mp3",
          title: "“don't even bⱺther to understand”",
          artist: "vallenteen",
          coverArt: this.coverArts[9],
          discographyArt: this.discographyArts[9],
          info: "Single",
          bandcampLink: this.bandcampLinks[9]
        },
        {
          url:
            "../../assets/music/coming home from school, it's friday, sun is shining.mp3",
          title: "“coming home from school, it's fridᴀy, sun is shining”",
          artist: "vallenteen",
          coverArt: this.coverArts[10],
          discographyArt: this.discographyArts[10],
          info: "Single",
          bandcampLink: this.bandcampLinks[10]
        },
        {
          url:
            "../../assets/music/i think i got used to my acne.mp3",
          title: "“i think i got ᶙsed to my acne”",
          artist: "vallenteen",
          coverArt: this.coverArts[11],
          discographyArt: this.discographyArts[11],
          info: "Single",
          bandcampLink: this.bandcampLinks[11]
        },
        {
          url:
            "../../assets/music/not another sad song.mp3",
          title: "“not anotḫer sad song”",
          artist: "vallenteen",
          coverArt: this.coverArts[12],
          discographyArt: this.discographyArts[12],
          info: "Single",
          bandcampLink: this.bandcampLinks[12]
        },
        {
          url:
            "../../assets/music/when you're feeling a bit homesick.mp3",
          title: "“when ỿou're feeling a bit homesick”",
          artist: "vallenteen",
          coverArt: this.coverArts[13],
          discographyArt: this.discographyArts[13],
          info: "Single",
          bandcampLink: this.bandcampLinks[13]
        },
        {
          url:
            "../../assets/music/letting go of the past.mp3",
          title: "“letting gɵ of the past”",
          artist: "vallenteen",
          coverArt: this.coverArts[14],
          discographyArt: this.discographyArts[14],
          info: "Single",
          bandcampLink: this.bandcampLinks[14]
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