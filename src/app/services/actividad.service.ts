import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
export class ActividadesService {
  myAppUrl = 'https://localhost:44334/';
  myApiUrl = 'api/Actividades/';

  list: Actividad[];
  private actualizarFormulario = new BehaviorSubject<Actividad>({} as any);

  constructor(private http: HttpClient) { }

  aniadirActividad (actividad: Actividad): Observable<Actividad> 
  {
    const formData = new FormData(); 
          
    formData.append("actividad", JSON.stringify(actividad));
    formData.append("file", actividad.file, actividad.file.name);

    return this.http.post<Actividad>(this.myAppUrl + this.myApiUrl, formData);
  }

  obtenerActividades$(): Observable<Actividad>{
    return this.actualizarFormulario.asObservable();
  }

}