import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPageComponent } from './new-page/new-page.component';
import { PredictionFormComponent } from './prediction-form/prediction-form.component'; // Update the import path


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new-page', component: NewPageComponent},
  { path: 'prediction-form', component: PredictionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }