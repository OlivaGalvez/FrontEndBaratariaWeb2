import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { Observable } from 'rxjs';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { environment } from 'src/environments/environment';
import { Convenio } from '../models/Convenio';
import { map } from 'rxjs/operators';
import { ITableState, TableResponseModel } from '../_metronic_gestion/shared/crud-table';
import { baseFilter } from '../_fake';

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

  find(tableState: ITableState): Observable<TableResponseModel<Convenio>> {
    return this.http.get<Convenio[]>(this.API_URL + "?portal=false").pipe(
      map((response: Convenio[]) => {
        const filteredResult = baseFilter(response, tableState);
        const result: TableResponseModel<Convenio> = {
          items: filteredResult.items,
          total: filteredResult.total
        };
        return result;
      })
    );
  } 

  getById (id: string): Observable<Convenio>{
    return this.http.get(this.API_URL + id).pipe(map(result=><Convenio>result));
  }

   modificarConvenio (convenio: Convenio): Observable<Convenio> 
  {
    const formData = new FormData(); 
    formData.append("convenio", JSON.stringify(convenio));
    if (convenio.file) formData.append("imagen", convenio.file, convenio.file.name);
    return this.http.put<Convenio>(this.API_URL + convenio.id, formData);
  }

  eliminarConvenio (id:number)
  {
    return this.http.delete(this.API_URL + id);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}