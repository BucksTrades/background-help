import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import SimpleMap from '../SimpleMap'; // Update the path based on your folder structure

@Component({
  selector: 'app-map-wrapper',
  template: '<div #mapContainer></div>',
  styleUrls: ['./map-wrapper.component.css'],
})
export class MapWrapperComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    const mapElement = React.createElement(SimpleMap);

    // Use createRoot from "react-dom/client"
    createRoot(this.mapContainer.nativeElement).render(mapElement);
  }
}
