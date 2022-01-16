import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Flight } from "../objets/flight";
import { Place } from "../objets/place";

@Injectable({
  providedIn: 'root',
})
/**
 * Company Service
 * @param httpClient
 */
export class FlightsService {

  private apiUrl = '/api/flights';

  constructor(private http: HttpClient) {}

  /** GET all companies in a JSONFile from API */
  getAllFlights(): Observable<Flight[]> {
    return this.http
      .get<Flight[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Flight[]>('getFlights', [])));
  }

  /** GET one company by name in a JSONFile from API */
  getFlight(id: number): Observable<Flight> {
    return this.http
      .get<Flight>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError<Flight>('getFlight')));
  }

  /** GET all places from a flight in a JSONFile from API */
  getFlightPlaces(id:number): Observable<Place[]> {
    return this.http
      .get<Place[]>(`${this.apiUrl}/${id}/places`)
      .pipe(catchError(this.handleError<Place[]>('getFlightPlaces')));
  }

  /**
   * Handle error
   * @return the error catched
   */
   private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
       console.error(error);
       console.error(`${operation} failed: ${error.body}`);
       return of(result as T);
     };
   }
}
