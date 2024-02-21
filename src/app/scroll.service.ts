import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollEvent: Observable<Event>;

  constructor() {
    this.scrollEvent = fromEvent(window, 'scroll');
  }
}
