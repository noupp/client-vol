import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/objets/flight';
import { Place } from 'src/app/objets/place';
import { FlightsService } from 'src/app/services/flights.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  private currentFlight : Flight = null;
  private places: Place[] = [];

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService,
    private placesService: PlacesService
  ) { }

  ngOnInit(): void {
    this.getFlight();
    this.getPlaces();
  }

  getFlight(){
    // obtenir le vol en cours
    const flightId = this.route.snapshot.paramMap.get('flight_id');
    var id: number = +flightId; // trouver le moyen de transformer un string en int ou faire une fonction dupliquée dans le service qui prend un string au lieu d'un int
    this.flightsService.getFlight(id)
    .pipe(
// faire en sorte de mettre le flight récupéré dans currentFlight
    )
  }

  getPlaces(){
    this.flightsService.getFlightPlaces(this.currentFlight.id)
    .pipe(
      //récupérer les places et les push dans places
    )
  }
}
