import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AudioService } from "../_services/audio.service";
import { CloudService } from "../_services/cloud.service";
import { StreamState } from "../_interfaces/stream-state";
import { AudioFile } from "../_interfaces/audio-file";
declare var musicPlayer: any;
declare var GreenAudioPlayer: any;

@Component({
  selector: 'app-nav-music-player',
  templateUrl: './nav-music-player.component.html',
  styleUrls: ['./nav-music-player.component.scss']
})
export class NavMusicPlayerComponent implements OnInit {
  @ViewChild('scrollingText') scrollingText : ElementRef;
  files: Array<AudioFile> = [];
  state: StreamState;
  isPlaying = false;
  isSongLoaded = false;
  url1 = 'url("';
  url2 = '")';
  currentFile: any = {
   };

  constructor(
    public audioService: AudioService,
    public cloudService: CloudService,
    private elRef: ElementRef
  ) {
    
  }

  ngOnInit() {
    // get media files
    musicPlayer = new musicPlayer();
    this.cloudService.getFiles().subscribe(files => {
      this.files = files;
      console.log(this.files);
    });
    this.currentFile.file = this.files[0];
    this.currentFile.index = 0;
    this.openFile(this.currentFile.file, this.currentFile.index);
    // var url = 'url("' + this.currentFile.file.coverArt.url +'")';
    // console.log(url);
    // document.getElementById('album-art').style.backgroundImage = url;

     // listen to stream state
     this.audioService.getState().subscribe(state => {
      this.state = state;
      if(this.state.ended)
      {
        if(!this.isLastPlaying())
          this.next();
        else {
          this.currentFile.file = this.files[0];
          this.currentFile.index = 0;
          this.openFile(this.currentFile.file, this.currentFile.index);
        }
      }
    });
    
  }
  ngAfterViewInit() {
    console.log(this.scrollingText.nativeElement);
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      
    });
  }
  changeStream(url) {
    this.audioService.changeStream(url).subscribe(events => {
    });
  }

  openFile(file : AudioFile, index: number) {
    this.currentFile.index = index;
    this.currentFile.file = file;
    this.audioService.stop();
    // var url = 'url("' + this.currentFile.file.coverArt.url +'")';
    // document.documentElement.style.setProperty('--album-art', url);
    if (this.isPlaying)
      this.playStream(file.url);
    else {
      this.changeStream(file.url);
    }
  }

  playOrPause()
  {
    if (this.isPlaying)
    {
      this.pause();
    }
    else {
      this.play();
    }
  }

  pause() {
    this.isPlaying = !this.isPlaying;
    this.audioService.pause();
  }

  play() {
    this.isPlaying = !this.isPlaying;
    if(this.state.ended)
    {
      this.audioService.playStream(this.currentFile.file.url);
    }
    else{
    this.audioService.play();
    }
  }
  stop() {
    this.isPlaying = !this.isPlaying;
    this.audioService.stop();
  }
  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  isFirstPlaying() {
    return this.currentFile.index === 0;
  }
  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }
  isNotLoaded()
  {
    return this.currentFile.index === null;
  }
  isEnded()
  {
    return this.state.ended;
  }

  onSliderChangeEnd(change) {
    console.log(change.value);
    this.audioService.seekTo(change.value);
  }

}
