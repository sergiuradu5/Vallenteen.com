import { Component, OnInit } from '@angular/core';
declare var Instafeed: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var userFeed = new Instafeed({
    //   get: 'user',
    //   target: "instafeed-container",
    //     resolution: 'high_resolution',
    //   userId: '30093904107',
    //   accessToken: 'IGQVJWb2tzUnFaVkFfZAExxTkxtQTd0Q3lMSVRSMm9MR1NUQU1RNnlqMlVCek1kaGduWFhBc2xpOEp2empXc0QwSHZAsNDJnZA2ZAGV2Jad2lZAUUxiQnJJVGtYenpSSzJHYVNTTXkwWm9jZAWdNMUUzSWFnRgZDZD'
    // });
    // userFeed.run();
  }

}
