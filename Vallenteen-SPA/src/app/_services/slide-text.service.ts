import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideTextService {

slideTexts: string[];

constructor(){
  this.slideTexts = [
    `you're riding the public transport, minding your own business, and then your thoughts pause for a second... there she walks in, sits down, taking out a book from her backpack. 
    who's that beautiful girl over there? and so station by station go by with you two standing one opposite the other... and suddenly she gets off, leaving you with a little pang of regret. aww no... since you were too busy indulging in her beauty, you forgot to ask for her name.
    will you ever meet her again? 🎒🚌`,

    `turns out that the girl you met is new in your school. exciting, isn't it?
    here's a song about the time when you can't help but think about that someone. uncounsciously, repeatedly... but it can't be that you like the person already, you don't even know each other.
    it's naive, isn't it? but yet it feels so good 🕊️🎡`
  ];
 }

 getSlideTexts() {
  return of(this.slideTexts);
}
}
