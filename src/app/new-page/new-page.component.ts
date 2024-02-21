import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css'],
})
export class NewPageComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,) {}

  ngOnInit(): void {
    this.router.url.includes('new-page');
    if (this.router.url.includes('new-page')) {
      // ...
    }

    document.addEventListener('mousemove', (event) => {
      this.addParallaxEffect(event);
    });
  }

  ngAfterViewInit() {
    this.addParallaxEffect(null); // You can pass a default event or null if needed
  }

  private addParallaxEffect(event: MouseEvent | null) {
    const stars = document.getElementById('stars')!;
    const moon = document.getElementById('moon')!;
    const mountains_behind = document.getElementById('mountains_behind')!;
    const mountains_front = document.getElementById('mountains_front')!;
    const text = document.getElementById('text')!;
  
    let targetX = 0;
    let targetY = 0;
  
    if (event) {
      targetX = event.clientX;
      targetY = event.clientY;
    }
  
    const animate = () => {
      let currentXStars = parseFloat(stars.style.left) || 0;
      let currentYMoon = parseFloat(moon.style.top) || 0;
      let currentYBehind = parseFloat(mountains_behind.style.top) || 0;
      let currentYFront = parseFloat(mountains_front.style.top) || 0;
      
  
      currentXStars += (targetX * 0.1 - currentXStars) * 0.1;
      currentYMoon += (targetY * 0.2 - currentYMoon) * 0.1;
      currentYBehind += (targetY * 0.22 - currentYBehind) * 0.05;
      currentYFront += (targetY * -0.01 - currentYFront) * 0.1;
      
  
      stars.style.left = `${currentXStars}px`;
      moon.style.top = `${currentYMoon}px`;
      mountains_behind.style.top = `${currentYBehind}px`;
      mountains_front.style.top = `${currentYFront}px`;
      
  
      requestAnimationFrame(animate);
    };
  
    animate();
  }
}