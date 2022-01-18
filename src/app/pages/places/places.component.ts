import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Flight } from 'src/app/objets/flight';
import { Place } from 'src/app/objets/place';
import { TypePlace } from 'src/app/objets/typePlace';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  currentFlight!: Flight;
  places: Place[] = [];
  selectedPlace!: Place;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService,
  ) { }

  ngOnInit(): void {
    this.getFlight();
  }

  getFlight(){
    // obtenir le vol en cours
    const flightId = this.route.snapshot.paramMap.get('flight_id');
    this.flightsService.getFlight(flightId)
    .pipe(
      tap(flight => {
        this.currentFlight = flight;
      })
      // faire en sorte de mettre le flight récupéré dans currentFlight
    ).subscribe(
      ()=> {
        this.getPlaces();
      }
    );
  }

  getPlaces(){
    this.flightsService.getFlightPlaces(this.currentFlight.id)
    .pipe(
      mergeMap(places => from (places)),
      tap(place => {
        this.places.push(place);
      })
    ).subscribe();
  }

  isFirstClass(place : String){
    console.log("place",place);
    console.log("type",TypePlace.FirstClass);
    console.log("result",place == TypePlace.FirstClass);
    return place == TypePlace.FirstClass;
  }

  isBusinessClass(place : Place){
    return place.placeType == TypePlace.BusinessClass;
  }

  isEcoClass(place : Place){
    return place.placeType == TypePlace.EconomyClass;
  }

  setSelectedPlace(place : Place){
    this.selectedPlace = place;
  }
}
