import { Component } from '@angular/core';

@Component({
  selector: 'app-prediction-form',
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.css']
})
export class PredictionFormComponent {
  prediction: number | undefined;
  loading: boolean = false;
  showButton: boolean = true;

  sendPredictionRequest = () => {
    this.showButton = false;
    this.loading = true;

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add your data as JSON here
      body: JSON.stringify({ key1: 'value1', key2: 'value2' }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Prediction:', data);
      this.prediction = data.prediction;
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      // Set loading to false after a delay (e.g., 3 seconds)
      setTimeout(() => {
        this.loading = false;
      }, 4300); // Adjust the time in milliseconds as needed
    });
  }
}