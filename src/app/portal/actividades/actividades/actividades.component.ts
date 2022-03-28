import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { EnlaceActividad } from 'src/app/models/EnlaceActividad';
import { ActividadesService } from 'src/app/services/actividad.service';
import { LayoutService } from 'src/app/_metronic_portal/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  list: Actividad [];
  listEnlaces: EnlaceActividad [];
  constructor(private layout: LayoutService, public actividadesService: ActividadesService) { 
   
  }

  ngOnInit() {
    //this.list.push(this.actividadesService.obtenerActividades());
    this.actividadesService.obtenerActividades().subscribe(res => {
      this.list = res;

      this.list.forEach( (element) => {
        this.listEnlaces = element.listEnlaces;
      });

    });
  }
}
