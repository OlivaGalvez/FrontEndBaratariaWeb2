import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { ActividadesService } from 'src/app/services/actividad.service';
import { UploadService } from 'src/app/services/upload.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  PaginatorState,
} from 'src/app/_metronic_portal/shared/crud-table';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit, OnDestroy {
  paginator: PaginatorState;
  isLoading: boolean;

  private subscriptions: Subscription[] = [];

  API_URL = `${environment.apiUrl}`;
  list: Observable<Actividad[]>;

  message: string;

  constructor(private ref: ChangeDetectorRef, public actividadesService: ActividadesService, private uploadService: UploadService) {  }

  ngOnInit() {
    /*this.actividadesService.fetch();
    this.list = this.actividadesService.obtenerActividades();
    this.paginator = this.actividadesService.paginator;
    this.actividadesService.fetch();*/
    this.actividadesService.fetch();
    const sb = this.actividadesService.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb);
    this.paginator = this.actividadesService.paginator;
    this.actividadesService.fetch();
  }

   // pagination
   paginate(paginator: PaginatorState) {
    this.actividadesService.patchState({ paginator });
  }

  
  download(url, original): void {
    this.uploadService.download(url).subscribe((x) => {
        var newBlob = new Blob([x], { type: "application/pdf" });
        const data = window.URL.createObjectURL(newBlob);
        
        var link = document.createElement('a');
        link.href = data;
        link.download = original;
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        
        setTimeout(function () {
            window.URL.revokeObjectURL(data);
            link.remove();
        }, 100);
    });
  }

  convertDate (actividad : Actividad)
  {
    let cadena = "";
    let fechaInicio = moment(actividad.fechaInicio).add(-1, 'M').locale('es');
   
    if (actividad.fechaInicio != null) {
      cadena = fechaInicio.format('DD') + " de " + fechaInicio.format('MMMM') + " del " + fechaInicio.format('YYYY');

      if (actividad.fechaFin != null &&  actividad.fechaInicio != actividad.fechaFin) {
        let fechaFin = moment(actividad.fechaFin).add(-1, 'M').locale('es');
        cadena += " - " + fechaFin.format('DD') + " de " + fechaFin.format('MMMM') + " del " + fechaFin.format('YYYY');
      } 
    } 
   
    return cadena;
  }

  toArrayDocumentos(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }

  toArrayEnlaces(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
