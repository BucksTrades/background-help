import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSnapScroll]'
})
export class SnapScrollDirective {
  private snapSections: HTMLElement[] = [];

  constructor(private el: ElementRef) {}

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
