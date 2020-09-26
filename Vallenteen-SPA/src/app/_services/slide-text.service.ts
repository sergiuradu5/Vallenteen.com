import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideTextService {

slideTexts: string[];

constructor(){
  this.slideTexts = [
    `you're riding the public transport, minding your own business, and then your thoughts pause for a second... there she walks in, sits down, taking out a book from her backpack. who's that beautiful girl over there?`,

    `turns out that the girl you met is new in your school. exciting, isn't it? here's a song about the time when you can't help but think about that someone. uncounsciously, repeatedly`
  ];
 }

 getSlideTexts() {
  return of(this.slideTexts);
}
}
