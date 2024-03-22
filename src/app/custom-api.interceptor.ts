import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class customApiInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Response Interceptor - Status:', event.status);
          console.log('Response Interceptor - Body:', event.body);

          
           event.status === 401; 

            // Manually set status to 401 to trigger logout event
            // const unauthorizedResponse = new HttpResponse({
            //   status: 401,
            //   statusText: 'Unauthorized'
              // You can also include any other properties needed in the response
            // });
            // throw unauthorizedResponse;
            
            // alert('Excellent');
            
           
            if (event.status === 401 || event.status === 403) {
            alert('Session timeout');
            this.logout();
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Response Interceptor - Error:', error);
        return throwError(error);
      })
    );
  }

  public logout(): void {
    
    this.router.navigate(['/orders']); 
  }
}
