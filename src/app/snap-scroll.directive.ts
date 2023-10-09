import { Directive, ElementRef, HostListener } from '@angular/core';
import ScrollMagic from 'scrollmagic';

@Directive({
  selector: '[appSnapScroll]'
})
export class SnapScrollDirective {
  constructor(private el: ElementRef) { }

  @HostListener('window:load')
  onWindowLoad() {
    const controller = new ScrollMagic.Controller();

    // Get all snap sections
    const snapSections: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.snap-section');

    snapSections.forEach((section: HTMLElement, index: number) => { // Add type HTMLElement here
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0,
        duration: '100%',
      })
        .setPin(section)
        .addTo(controller);

      // Scroll to the next snap section when reaching the bottom of the current section
      if (index < snapSections.length - 1) {
        new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: 1,
          duration: '100%',
        })
          .on('end', () => {
            snapSections[index + 1].scrollIntoView({ behavior: 'smooth' });
          })
          .addTo(controller);
      }
    });
  }
}
