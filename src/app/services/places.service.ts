import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Place } from "../objets/place";

@Injectable({
  providedIn: 'root',
})
/**
 * Company Service
 * @param httpClient
 */
export class PlacesService {

  private apiUrl = '/api/api-rest-vol/places';

  constructor(private http: HttpClient) {}

  /** GET all companies in a JSONFile from API */
  getPlaces(): Observable<Place[]> {
    return this.http
      .get<Place[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Place[]>('getPlaces', [])));
  }

  /** GET one company by name in a JSONFile from API */
  getPlace(id: number): Observable<Place> {
    return this.http
      .get<Place>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError<Place>('getPlace')));
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
