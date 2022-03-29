import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { ITableState } from '../_metronic_gestion/shared/crud-table';
import { map } from 'rxjs/operators';
import { Documento } from '../models/Documento';


@Injectable({
    providedIn: 'root'
  })
  
export class ActividadesService extends TableService<Actividad> implements OnDestroy{
  myAppUrl = 'https://localhost:44334/';
  myApiUrl = 'api/Actividades/';

  //list: Actividad[];
  private actualizarFormulario = new BehaviorSubject<Actividad>({} as any);

  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  aniadirActividad (actividad: Actividad): Observable<Actividad> 
  {
    const formData = new FormData(); 
          
    formData.append("actividad", JSON.stringify(actividad));
    formData.append("imagen", actividad.file, actividad.file.name);
    /*for (let i = 0; i < actividad.listDocumentos.length; i++) {
      const file = actividad.listDocumentos[i].file;
      formData.append('documentos', file, file.name);
    }*/
    formData.append("documentos", JSON.stringify(actividad.listDocumentos));
    return this.http.post<Actividad>(this.myAppUrl + this.myApiUrl, formData);
  }

  obtenerActividades (): Observable<Actividad[]>{
     return this.http.get(this.myAppUrl + this.myApiUrl).pipe(map(result=><Actividad[]>result));
  }

  /*obtenerActividades$(): Observable<Actividad>{
    return this.actualizarFormulario.asObservable();
  }*/

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}