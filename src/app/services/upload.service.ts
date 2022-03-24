import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
    
    baseApiUrl = "https://localhost:44334/api/Upload"
      
    constructor(private http:HttpClient) { }
    
    uploadTemporal(file):Observable<any> {
    
        const formData = new FormData(); 
          
        formData.append("file", file, file.name);
          
        //return this.http.post(this.baseApiUrl + "?temp=true", formData)

        return this.http
        .post(this.baseApiUrl + "?temp=true", formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(catchError(this.errorMgmt));
    } 

    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }

  }