import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/objets/flight';
import { FlightsService } from 'src/app/services/flights.service'
import { mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Company } from 'src/app/objets/company';
import { Place } from 'src/app/objets/place';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  companies: Company[] = [];

  constructor(
    private flightsService : FlightsService,
    private companiesService : CompaniesService,
  ) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companiesService.getCompanies()
    .pipe(
      mergeMap(companies => from (companies)),
      tap(company => {
        this.companies.push(company);
      })
    ).subscribe(
      ()=>{
        for(let company of this.companies){
          company.flights = this.getFlightsFromCompany(company.name);
        }
      }
    );

  }

  getPlacesFromFlight(id : number) : Place[]{
    var places: Place[] = [];
    this.flightsService.getFlightPlaces(id)
    .pipe(
      mergeMap(places => from(places)),
      tap(place => {
        places.push(place);
      })
    ).subscribe();
    return places;
  }

  getFlightsFromCompany(name : string) : Flight[]{
    var flights: Flight[] = [];
    this.companiesService.getAllFlightsFromCompany(name)
    .pipe(
      mergeMap(flights => from (flights)),
      tap(flight => {
        flights.push(flight);
      })
    ).subscribe(
      ()=> {
        for(let flight of flights){
          flight.places = this.getPlacesFromFlight(flight.id);
        }
      }
    )
      return flights;
  }

}
