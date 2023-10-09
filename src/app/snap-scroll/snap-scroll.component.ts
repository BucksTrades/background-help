import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-snap-scroll',
  template: '<ng-content></ng-content>',
  styles: [`
    .snap-section {
      height: 100vh;
      scroll-snap-align: start;
      scroll-snap-stop: always;
      scroll-behavior: smooth;
    }
  `]
})
export class SnapScrollComponent {
  private snapSections: HTMLElement[] = [];

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.snapSections = this.el.nativeElement.querySelectorAll('.snap-section');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let closestSectionIndex = -1;
    let minDistance = Number.MAX_SAFE_INTEGER;

    this.snapSections.forEach((section: HTMLElement, index: number) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - scrollPos);

      if (distance < minDistance) {
        closestSectionIndex = index;
        minDistance = distance;
      }
    });

    if (closestSectionIndex >= 0) {
      this.snapToSection(closestSectionIndex);
    }
  }

  private snapToSection(index: number): void {
    this.snapSections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
