import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css'],
  encapsulation: ViewEncapsulation.None // Disable style encapsulation
})
export class NewPageComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
 this.router.url.includes('new-page')
 if( this.router.url.includes('new-page'))
 {
  
 }

  } 

}
