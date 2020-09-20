import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { AudioService } from "../_services/audio.service";
import { CloudService } from "../_services/cloud.service";
import { StreamState } from "../_interfaces/stream-state";
import { AudioFile } from "../_interfaces/audio-file";
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
// declare var musicPlayer: any;

@Component({
  selector: 'app-nav-music-player',
  templateUrl: './nav-music-player.component.html',
  styleUrls: ['./nav-music-player.component.scss']
})
export class NavMusicPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollingText') scrollingText : ElementRef;
  
  files: Array<AudioFile> = [];
  state: StreamState;

  isPlaying: boolean;
  isSongLoaded = false;
  url1 = 'url("';
  url2 = '")';
  currentFile: any = {
   };

  constructor(
    @Inject(DOCUMENT) private document: Document, 
            private elementRef:ElementRef,
            public audioService: AudioService,
            public cloudService: CloudService,
  ) {
    
  }

  ngOnInit() {
    // get media files
    this.cloudService.getFiles().subscribe(files => {
      this.files = files;
  
    });
    this.audioService.isPlayingObservable.subscribe(value => {
      this.isPlaying = value;
    });
    this.audioService.currentFile.subscribe(file => {
      this.currentFile = file;
    });
    this.openFile(this.currentFile.file, this.currentFile.index);
     // listen to stream state
     this.audioService.getState().subscribe(state => {
      this.state = state;
      if(this.state.ended)
      {
        if(!this.isLastPlaying())
       {   this.next();}
        else {
         this.fromBeginning();
        }
      }
    });
    
  }

  ngAfterViewInit() {
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
    this.audioService.changeCurrentFile(this.currentFile);
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
    this.audioService.pause();
    this.audioService.changeIsPlaying(!this.isPlaying);
  }

  play() {
    if(this.state.ended)
    {
      // this.audioService.playStream(this.currentFile.file.url);
    }
    else{
    this.audioService.play();
    }
    this.audioService.changeIsPlaying(!this.isPlaying);
  }
  stop() {
    this.audioService.stop();
    this.audioService.changeIsPlaying(!this.isPlaying);
  }
  fromBeginning()
  {
    const index = 0;
    const file = this.files[index];
    this.openFile(file, index);
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
  
    this.audioService.seekTo(change.value);
  }

}
