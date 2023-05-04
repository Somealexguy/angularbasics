import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({providedIn: 'root'})
export class HttpService<T> {
  private headers = new HttpHeaders()
    .set("X-CustomHeader", "custom header value");
  private baseUrl: string;
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.httpClient = httpClient;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  get(endpoint: string): Observable<T[]> {
    const res = this.httpClient.get<T[]>(`${this.baseUrl}/${endpoint}`);
    return res.pipe(retry(3), catchError(error => this.handleError(error)));
  }
  getById(endpoint: string,id:string): Observable<T> {
    const res = this.httpClient.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
    return res.pipe(retry(3), catchError(error => this.handleError(error)));
  }

}
