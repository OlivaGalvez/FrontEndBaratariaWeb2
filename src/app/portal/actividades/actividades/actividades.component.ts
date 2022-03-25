import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividad.service';
import { LayoutService } from 'src/app/_metronic_portal/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  constructor(private layout: LayoutService, public actividadesService: ActividadesService) { 
   
  }

  ngOnInit(): void {
    this.actividadesService.obtenerActividades();
  }
}
