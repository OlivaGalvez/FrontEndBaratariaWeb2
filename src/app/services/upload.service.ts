import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
    
    baseApiUrl = "https://localhost:44334/api/Upload"
      
    constructor(private http:HttpClient) { }
    
    uploadTemporal(file):Observable<any> {
    
        const formData = new FormData(); 
          
        formData.append("file", file, file.name);
          
        return this.http.post(this.baseApiUrl + "?temp=true", formData)
    } 
  }