import { Component, OnInit } from '@angular/core';
import { AudioFile } from '../_interfaces/audio-file';
import { CloudService } from '../_services/cloud.service';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {
  songs: AudioFile[];

  constructor(private cloudService: CloudService) { }

  ngOnInit() {
    this.cloudService.getFiles().subscribe(songs => {
      this.songs = songs;
    });
  }

}
