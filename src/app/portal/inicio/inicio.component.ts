import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { ActividadesService } from 'src/app/services/actividad.service';
import { Convenio } from 'src/app/models/Convenio';
import { ConveniosService } from 'src/app/services/convenio.service';
import { UploadService } from 'src/app/services/upload.service';
import { environment } from 'src/environments/environment';
import {
  PaginatorState,
} from 'src/app/_metronic_portal/shared/crud-table';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  private subscriptions: Subscription[] = [];

   listActividades: Observable<Actividad[]>;

  API_URL = `${environment.apiUrl}`;

  constructor(private ref: ChangeDetectorRef, public actividadesService: ActividadesService, public conveniosServices: ConveniosService, private uploadService: UploadService) {  }


  ngOnInit(): void {
    this.actividadesService.fetch();
    const sb = this.actividadesService.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb);
    this.listActividades = this.actividadesService.obtenerActividades();

    this.conveniosServices.fetch();
    const sb2 = this.conveniosServices.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb2);
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
