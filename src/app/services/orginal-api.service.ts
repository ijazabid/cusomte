import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrginalApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
  // simulate401(): Observable<any> {
  //   const url = `${this.apiUrl}/simulate401`;
  //   return this.http.get(url, { headers: this.getHeaders() }).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       return throwError(error);
  //     })
  //   );
  // }

  // simulate403(): Observable<any> {
  //   const url = `${this.apiUrl}/simulate403`;
  //   return this.http.get(url, { headers: this.getHeaders() }).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       return throwError(error);
  //     })
  //   );
  // }

  // private getHeaders(): HttpHeaders {
    
  //   return new HttpHeaders();
  // }
}
