import { Component, Input, OnInit } from '@angular/core';
import { AudioFile } from 'src/app/_interfaces/audio-file';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {
  @Input() song: AudioFile;
  @Input() idx: number;
  playTextVisible = false;
  supportTextVisible = false;
  visible = "visible";
  hidden = "hidden";

  constructor() { }


  ngOnInit() {
  }

  playButtonMouseEnter()
  {
    this.playTextVisible = true;
  }

  playButtonMouseLeave()
  {
    this.playTextVisible = false;
  }

  supportButtonMouseEnter()
  {
    this.supportTextVisible = true;
  }

  supportButtonMouseLeave()
  {
    this.supportTextVisible = false;
  }

}
