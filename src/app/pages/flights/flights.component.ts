import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/objets/flight';
import { FlightsService } from 'src/app/services/flights.service'
import { mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights: Flight[] = [];

  constructor(
    private flightsService : FlightsService,
  ) { }

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights(){
    this.flightsService.getFlights()
    .pipe(
      mergeMap(flights => from (flights)),
      tap(flight => {
        this.flights.push(flight);
      })
    ).subscribe();
  }
}
