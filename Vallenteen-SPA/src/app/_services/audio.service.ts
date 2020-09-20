// src/app/services/audio.service.ts
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as moment from "moment";
import {StreamState} from '../_interfaces/stream-state';
import { CloudService } from './cloud.service';
@Injectable({
  providedIn: "root"
})
export class AudioService {
  private stop$ = new Subject();
  private audioObj = new Audio();
  constructor(
    private cloudService: CloudService
  ) {}
  /*By default the current file should be the first audio on the list */
  file = new BehaviorSubject<any>({
    file: this.cloudService.files[0],
    index: 0
  });
  /* This is the current playing file, using it to play from different components*/
  currentFile= this.file.asObservable();
  isPlaying = new BehaviorSubject<boolean>(false);
  isPlayingObservable = this.isPlaying.asObservable();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart",
    "ended"
  ];


  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
    ended: false
  };

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );
  changeIsPlaying(value: boolean)
  {
    this.isPlaying.next(value);
  }

  /*Changing the current playing file (method used in other components than nav-player) */
  changeCurrentFile(file: any)
  {
    this.file.next(file);
  }
  constructCurrrentFile(index : number)
  {
    var currentFileFromCloud;
    currentFileFromCloud=this.cloudService.getFile(index);
    this.changeCurrentFile(currentFileFromCloud);
  }


  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case "playing":
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        break;
      case "timeupdate":
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime
        );
        break;
      case "ended":
        this.state.ended = true;
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false,
      ended: false
    };
  }
  private streamObservableAndPlay(url) {
    return new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();
  
      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };
  
      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }
  private streamObservable(url) {
    return new Observable(observer => {
      // Load new audio
      this.audioObj.src = url;
      this.audioObj.load();
  
      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };
  
      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  private addEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url) {
    return this.streamObservableAndPlay(url).pipe(takeUntil(this.stop$));
  }

  changeStream(url) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next();
  }

  seekTo(seconds) {
    this.audioObj.currentTime = seconds;
  }

  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
  isEnded()
  {
    return this.audioObj.ended;
  }
}
  