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
            "https://docs.google.com/uc?export=open&id=1IlhyROi7Guzfr4hWCgrocOJ6zcEjgbPE",
          title: "“that new girl is kinᵭa cute”",
          artist: "vallenteen",
          coverArt: this.coverArts[0],
          discographyArt: this.discographyArts[0],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[0]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1F1023OZzZtwnFNUGbturTdA3GvZ08GbL",
          title: "“when you starƭ to like someone”",
          artist: "vallenteen",
          coverArt: this.coverArts[1],
          discographyArt: this.discographyArts[1],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[1]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1qFcHT8FgYo378rOGKshKQ3WF8C7XWejM",
          title: "“when you're thinƙing about your crush in class”",
          artist: "vallenteen",
          coverArt: this.coverArts[2],
          discographyArt: this.discographyArts[2],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[2]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1Mu3kPveisiGwByWhK-T8adniyGIKE2Cy",
          title: "“when you can't sleeҏ and she's on your mind”",
          artist: "vallenteen",
          coverArt: this.coverArts[3],
          discographyArt: this.discographyArts[3],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[3]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1mD0PoUdu-f1b2bxKOFjICEd6N1AeZYvJ",
          title: "“staring at your crush's instagram photos”",
          artist: "vallenteen",
          coverArt: this.coverArts[4],
          discographyArt: this.discographyArts[4],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[4]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1AI3j5sc4K8F50iGVbNyiSLcYKPHgf690",
          title: "“how to talk to your cruȿh tutorial”",
          artist: "vallenteen",
          coverArt: this.coverArts[5],
          discographyArt: this.discographyArts[5],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[5]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1Qb9qutqVtU4ZXQUTLBZFEVuMAfi2eQrm",
          title: "“why are you so perʃect all the time”",
          artist: "vallenteen",
          coverArt: this.coverArts[6],
          discographyArt: this.discographyArts[6],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[6]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1j-GX7MRM9eeLKacIbQEUDnO_l5eHYOx3",
          title: "“butterflies and ƅlooming flowers from within”",
          artist: "vallenteen",
          coverArt: this.coverArts[7],
          discographyArt: this.discographyArts[7],
          info: "The “crushes” album",
          bandcampLink: this.bandcampLinks[7]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1Ne9EPpKgwoaCxnWI99lcwlmme8FdsjPm",
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
          "https://docs.google.com/uc?export=open&id=1ywRks1n0dMoEs2poVF5uVUlwQr8x9TiO",
          title: "“don't even bⱺther to understand”",
          artist: "vallenteen",
          coverArt: this.coverArts[9],
          discographyArt: this.discographyArts[9],
          info: "Single",
          bandcampLink: this.bandcampLinks[9]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1oVvHBKmCRVSTeBBTLUoEenEQkfzN7qMa",
          title: "“coming home from school, it's fridᴀy, sun is shining”",
          artist: "vallenteen",
          coverArt: this.coverArts[10],
          discographyArt: this.discographyArts[10],
          info: "Single",
          bandcampLink: this.bandcampLinks[10]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1so7ceUiTue3o7dZSLPnBX5PyG4KlE4Z2",
          title: "“i think i got ᶙsed to my acne”",
          artist: "vallenteen",
          coverArt: this.coverArts[11],
          discographyArt: this.discographyArts[11],
          info: "Single",
          bandcampLink: this.bandcampLinks[11]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1Wt28R4Ez8uXuDASu3_Tze_dEqE8dQSvL",
          title: "“not anotḫer sad song”",
          artist: "vallenteen",
          coverArt: this.coverArts[12],
          discographyArt: this.discographyArts[12],
          info: "Single",
          bandcampLink: this.bandcampLinks[12]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1upJe8eRjafYHFS4QL93ri9BRETmifgUv",
          title: "“when ỿou're feeling a bit homesick”",
          artist: "vallenteen",
          coverArt: this.coverArts[13],
          discographyArt: this.discographyArts[13],
          info: "Single",
          bandcampLink: this.bandcampLinks[13]
        },
        {
          url:
          "https://docs.google.com/uc?export=open&id=1-Bnxs9rYh9C3mBJJs7MMLpsH496-s3I4",
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