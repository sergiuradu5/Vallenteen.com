import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from '../_services/audio.service';
import { CloudService } from '../_services/cloud.service';
import { StreamState } from '../_interfaces/stream-state';
import { AudioFile } from '../_interfaces/audio-file';

@Component({
  selector: 'app-click-to-play',
  templateUrl: './click-to-play.component.html',
  styleUrls: ['./click-to-play.component.css']
})
export class ClickToPlayComponent implements OnInit {

  constructor(private audioService: AudioService,
              private cloudService: CloudService
    ) { }
  
  @Input() idx : number;
  isPlaying : boolean;
  currentFile: any;
  state: StreamState;

  ngOnInit() {
    this.audioService.isPlaying.subscribe(value => {
      this.isPlaying = value;
    })
    this.audioService.currentFile.subscribe(file => {
      this.currentFile = file;
    });
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }
  play()
  {
    this.currentFile = {
      file: this.cloudService.files[this.idx],
      index: this.idx
    };

    this.openFile(this.currentFile.file, this.currentFile.index);
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
    if(this.isPlaying==false)
    this.audioService.changeIsPlaying(!this.isPlaying);
    this.audioService.changeCurrentFile(this.currentFile);
    this.playStream(file.url);
    
  }


}
