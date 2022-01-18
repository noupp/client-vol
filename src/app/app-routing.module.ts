import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './pages/flights/flights.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacesComponent } from './pages/places/places.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'flights', component:  FlightsComponent},
  { path: '', redirectTo: '/flights', pathMatch: 'full'},
  { path: 'flights/:flight_id/places', component: PlacesComponent },
  { path: '**', redirectTo: '/flights', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
