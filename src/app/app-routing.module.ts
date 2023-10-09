import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPageComponent } from './new-page/new-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new-page', component: NewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }