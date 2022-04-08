import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { Observable } from 'rxjs';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { environment } from 'src/environments/environment';
import { Convenio } from '../models/Convenio';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  
export class ConveniosService extends TableService<Convenio> implements OnDestroy{

  API_URL = `${environment.apiUrl}` + 'api/Convenios/';

  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  aniadirConvenio (convenio: Convenio): Observable<Convenio> 
  {
    const formData = new FormData(); 
          
    formData.append("convenio", JSON.stringify(convenio));
    formData.append("imagen", convenio.file, convenio.file.name);
    return this.http.post<Actividad>(this.API_URL, formData);
  }

  obtenerConvenios (): Observable<Convenio[]>{
    return this.http.get(this.API_URL).pipe(map(result=><Convenio[]>result));
 }

 /*  modificarActividad (actividad: Actividad): Observable<Actividad> 
  {
    const formData = new FormData(); 
    formData.append("actividad", JSON.stringify(actividad));
    if (actividad.file) formData.append("imagen", actividad.file, actividad.file.name);
    return this.http.put<Actividad>(this.API_URL + actividad.id, formData);
  }

  eliminarActividad (id:number)
  {
    return this.http.delete(this.API_URL + id);
  }

  

  getById (id: string): Observable<Actividad>{
    return this.http.get(this.API_URL + id).pipe(map(result=><Actividad>result));
  }

   // Necesario para mostrar las actividades en la tabla de listado
   find(tableState: ITableState): Observable<TableResponseModel<Actividad>> {
    return this.http.get<Actividad[]>(this.API_URL + "?portal=false").pipe(
      map((response: Actividad[]) => {
        const filteredResult = baseFilter(response, tableState);
        const result: TableResponseModel<Actividad> = {
          items: filteredResult.items,
          total: filteredResult.total
        };
        return result;
      })
    );
  } */

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}