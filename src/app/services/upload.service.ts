import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
    
    API_URL = `${environment.apiUrl}` + 'api/File/';
      
    constructor(private http:HttpClient) { }
    
    uploadImagen(file):Observable<any> {
    
        const formData = new FormData(); 
          
        formData.append("file", file, file.name);

        return this.http.post(this.API_URL + "Upload?carpeta=imagenes", formData, {
          reportProgress: true,
          observe: 'events',
        }).pipe(catchError(this.errorMgmt));
    } 


    uploadDocumento(file):Observable<any> {
    
      const formData = new FormData(); 
        
      formData.append("file", file, file.name);

      return this.http.post(this.API_URL + "Upload?carpeta=documentos", formData, {
        reportProgress: true,
        observe: 'events',
      }).pipe(catchError(this.errorMgmt));
    } 

    download(fileUrl: string): Observable<Blob> {
      
      return this.http.get(this.API_URL + 'Download?fileUrl=' + fileUrl, { responseType: 'blob'});
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