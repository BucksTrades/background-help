import { Component } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleMap from '../SimpleMap'; // Update the path based on your folder structure
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  messageSent: string | null = null;
  messageError: string | null = null;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_0ntcp25', 'template_4hk4q7l', e.target as HTMLFormElement, 'WqN4xBYaHsKPy8y7r')
      .then((result: EmailJSResponseStatus) => {
        this.messageSent = 'Your message has been sent!'; // Set success message
        this.messageError = null; // Reset error message
        console.log(result.text);
      }, (error) => {
        this.messageError = 'Sorry, an error occurred. Please try again later.'; // Set error message
        this.messageSent = null; // Reset success message
        console.log(error.text);
      });
  }
}