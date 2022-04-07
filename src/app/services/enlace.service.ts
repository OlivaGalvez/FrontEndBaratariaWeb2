import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Enlace } from "../models/Enlace";
import { TableService } from "../_metronic_gestion/shared/crud-table";

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
  
    /*modificarActividad (actividad: Actividad): Observable<Actividad> 
    {
      const formData = new FormData(); 
      formData.append("actividad", JSON.stringify(actividad));
      if (actividad.file) formData.append("imagen", actividad.file, actividad.file.name);
      formData.append("documentos", JSON.stringify(actividad.listDocumentos));
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
    }*/
  
    ngOnDestroy() {
      this.subscriptions.forEach(sb => sb.unsubscribe());
    }
  
  }