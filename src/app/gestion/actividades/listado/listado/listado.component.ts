import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { ActividadesService } from 'src/app/services/actividad.service';
import { PaginatorState } from 'src/app/_metronic_gestion/shared/crud-table';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  paginator: PaginatorState;

  list: Actividad [];

  private subscriptions: Subscription[] = [];
  constructor(private router: Router, private actividadService: ActividadesService) { }

  ngOnInit(): void {
   // this.actividadService.fetch();
   // this.paginator = this.actividadService.paginator;
    const sb = this.actividadService.obtenerActividades().subscribe(res => {
      this.list = res;
      console.log(this.list);
    });
    this.subscriptions.push(sb);
  }

  editarActividad (id: number){
    this.router.navigate(['/admin/actividad/gestion/' + id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

}
