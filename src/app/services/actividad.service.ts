import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { ITableState } from '../_metronic_gestion/shared/crud-table';


@Injectable({
    providedIn: 'root'
  })
  
export class ActividadesService extends TableService<Actividad> {
  myAppUrl = 'https://localhost:44334/';
  myApiUrl = 'api/Actividades/';

  list: Actividad[];
  private actualizarFormulario = new BehaviorSubject<Actividad>({} as any);

  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  aniadirActividad (actividad: Actividad): Observable<Actividad> 
  {
    const formData = new FormData(); 
          
    formData.append("actividad", JSON.stringify(actividad));
    formData.append("file", actividad.file, actividad.file.name);

    return this.http.post<Actividad>(this.myAppUrl + this.myApiUrl, formData);
  }

  obtenerActividades () {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
      .then(data => {
        this.list = data as Actividad []
      });
  }

  obtenerActividades$(): Observable<Actividad>{
    return this.actualizarFormulario.asObservable();
  }

}