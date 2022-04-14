import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { environment } from 'src/environments/environment';
import { Oferta } from '../models/Oferta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITableState, TableResponseModel } from '../_metronic_gestion/shared/crud-table';
import { baseFilter } from '../_fake';

@Injectable({
    providedIn: 'root'
  })
  
export class OfertaService extends TableService<Oferta> implements OnDestroy{

  API_URL = `${environment.apiUrl}` + 'api/Ofertas/';

  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  aniadirOferta (oferta: Oferta): Observable<Oferta> 
  {
    const formData = new FormData(); 
          
    formData.append("oferta", JSON.stringify(oferta));
    formData.append("imagen", oferta.file, oferta.file.name);
    return this.http.post<Oferta>(this.API_URL, formData);
  }

  getById (id: string): Observable<Oferta>{
    return this.http.get(this.API_URL + id).pipe(map(result=><Oferta>result));
  }

  modificarOferta (oferta: Oferta): Observable<Oferta> 
  {
    const formData = new FormData(); 
    formData.append("oferta", JSON.stringify(oferta));
    if (oferta.file) formData.append("imagen", oferta.file, oferta.file.name);
    return this.http.put<Oferta>(this.API_URL + oferta.id, formData);
  }

  eliminarOferta (id:number)
  {
    return this.http.delete(this.API_URL + id);
  }

  obtenerOfertas (): Observable<Oferta[]>{
     return this.http.get(this.API_URL).pipe(map(result=><Oferta[]>result));
  }

   // Necesario para mostrar las actividades en la tabla de listado
   find(tableState: ITableState): Observable<TableResponseModel<Oferta>> {
    return this.http.get<Oferta[]>(this.API_URL + "?portal=false").pipe(
      map((response: Oferta[]) => {
        const filteredResult = baseFilter(response, tableState);
        const result: TableResponseModel<Oferta> = {
          items: filteredResult.items,
          total: filteredResult.total
        };
        return result;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}