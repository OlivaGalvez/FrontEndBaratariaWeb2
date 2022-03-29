import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { Documento } from 'src/app/models/Documento';
import { EnlaceActividad } from 'src/app/models/EnlaceActividad';
import { ActividadesService } from 'src/app/services/actividad.service';
import { LayoutService } from 'src/app/_metronic_portal/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  list: Actividad [];
  listEnlaces: EnlaceActividad [];
  listDocumentos: Documento [];

  constructor(private layout: LayoutService, public actividadesService: ActividadesService) {  }

  ngOnInit() {
    const sb = this.actividadesService.obtenerActividades().subscribe(res => {
      this.list = res;
      this.list.forEach( (element) => {
        this.listEnlaces = element.listEnlaces;
        this.listDocumentos = element.listDocumentos;
      });
    });
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
