import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Enlace } from "../models/Enlace";
import { baseFilter } from "../_fake";
import { ITableState, TableResponseModel, TableService } from "../_metronic_gestion/shared/crud-table";

@Injectable({
    providedIn: 'root'
  })
  
  export class EnlaceService extends TableService<Enlace> implements OnDestroy{

    API_URL = `${environment.apiUrl}` + 'api/Enlaces/';
  
    constructor(@Inject(HttpClient) http) {
      super(http);
    }
  
    aniadirEnlace (enlace: Enlace): Observable<Enlace> 
    {
      const formData = new FormData(); 
            
      formData.append("enlace", JSON.stringify(enlace));
      formData.append("imagen", enlace.file, enlace.file.name);
      return this.http.post<Enlace>(this.API_URL, formData);
    }

    obtenerEnlaces (): Observable<Enlace[]>{
      return this.http.get(this.API_URL).pipe(map(result=><Enlace[]>result));
   }

    // Necesario para mostrar los enlaces en la tabla de listado
    find(tableState: ITableState): Observable<TableResponseModel<Enlace>> {
      return this.http.get<Enlace[]>(this.API_URL + "?portal=false").pipe(
        map((response: Enlace[]) => {
          const filteredResult = baseFilter(response, tableState);
          const result: TableResponseModel<Enlace> = {
            items: filteredResult.items,
            total: filteredResult.total
          };
          return result;
        })
      );
    }

    getById (id: string): Observable<Enlace>{
      return this.http.get(this.API_URL + id).pipe(map(result=><Enlace>result));
    }
  
    modificarEnlace (enlace: Enlace): Observable<Enlace> 
    {
      const formData = new FormData(); 
      formData.append("enlace", JSON.stringify(enlace));
      if (enlace.file) formData.append("imagen", enlace.file, enlace.file.name);
      return this.http.put<Enlace>(this.API_URL + enlace.id, formData);
    }
  
    eliminarEnlace (id:number)
    {
      return this.http.delete(this.API_URL + id);
    }
  
    ngOnDestroy() {
      this.subscriptions.forEach(sb => sb.unsubscribe());
    }
  
  }