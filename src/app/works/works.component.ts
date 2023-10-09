import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  selectedItem: string | null = null; // Initialize the variable

  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter(item: string): void {
    this.selectedItem = item;
  }

  onMouseLeave(): void {
    // Don't change the selectedItem when leaving
  }

}
