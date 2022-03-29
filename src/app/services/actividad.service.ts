import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { Observable } from 'rxjs';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { map } from 'rxjs/operators';
import { ITableState, PaginatorState, TableResponseModel } from '../_metronic_gestion/shared/crud-table';
import { baseFilter } from '../_fake';

@Injectable({
    providedIn: 'root'
  })
  
export class ActividadesService extends TableService<Actividad> implements OnDestroy{
  myAppUrl = 'https://localhost:44334/';
  myApiUrl = 'api/Actividades/';

  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  aniadirActividad (actividad: Actividad): Observable<Actividad> 
  {
    const formData = new FormData(); 
          
    formData.append("actividad", JSON.stringify(actividad));
    formData.append("imagen", actividad.file, actividad.file.name);
    formData.append("documentos", JSON.stringify(actividad.listDocumentos));
    return this.http.post<Actividad>(this.myAppUrl + this.myApiUrl, formData);
  }

  obtenerActividades (): Observable<Actividad[]>{
     return this.http.get(this.myAppUrl + this.myApiUrl).pipe(map(result=><Actividad[]>result));
  }

  getById (id: string): Observable<Actividad>{
    return this.http.get(this.myAppUrl + this.myApiUrl + id).pipe(map(result=><Actividad>result));
 }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}