import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-paracord',
  templateUrl: './paracord.component.html',
  styleUrls: ['./paracord.component.css'],
})
export class ParacordComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {
    // Any initialization logic you have goes here
  }

  ngAfterViewInit() {
    this.addParallaxEffect();
  }

  private addParallaxEffect() {
    const stars = document.getElementById('stars');
    const moon = document.getElementById('moon');

    console.log('stars:', stars);
    console.log('moon:', moon);

    document.addEventListener('mousemove', (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      if (stars && moon) {
        stars.style.left = `${mouseX * 0.04}px`;
        moon.style.top = `${mouseY * 0.04}px`;
      }
    });
  }
}
