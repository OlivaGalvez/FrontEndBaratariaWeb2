import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Asociacion } from '../models/Asociacion';

@Injectable({
    providedIn: 'root'
  })
  
export class AsociacionService extends TableService<Asociacion> implements OnDestroy{

  API_URL = `${environment.apiUrl}` + 'api/Asociacion/';

  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  guardar (asociacion: Asociacion): Observable<Asociacion> 
  {
    const formData = new FormData(); 
          
    formData.append("asociacion", JSON.stringify(asociacion));
    return this.http.post<Asociacion>(this.API_URL, formData);
  }

  obtenerDatos (): Observable<Asociacion>{
    return this.http.get(this.API_URL).pipe(map(result=><Asociacion>result));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}