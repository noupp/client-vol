import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Company } from "../objets/company";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
/**
 * Company Service
 * @param httpClient
 */
export class CompaniesService {

  private apiUrl = '/api/companies';

  constructor(private http: HttpClient) {}

  /** GET all companies in a JSONFile from API */
  getCompanies(): Observable<Company[]> {
    return this.http
      .get<Company[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Company[]>('getCompanies', [])));
  }

  /** GET one company by name in a JSONFile from API */
  getCompany(name: string): Observable<Company> {
    return this.http
      .get<Company>(`${this.apiUrl}/${name}`)
      .pipe(catchError(this.handleError<Company>('getCompany')));
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
