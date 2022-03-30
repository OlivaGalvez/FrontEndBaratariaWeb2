import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';
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
  constructor(private router: Router, private ref: ChangeDetectorRef, public actividadService: ActividadesService) { }

  ngOnInit(): void {
    this.actividadService.fetch();
    this.paginator = this.actividadService.paginator;
    /*const sb = this.actividadService.obtenerActividades().subscribe(res => {
      this.isLoading = true;
      this.list = res;
      this.ref.detectChanges();
    });*/
    const sb = this.actividadService.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb);
  }

  editarActividad (id: number){
    this.router.navigate(['/admin/actividad/gestion/' + id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  convertDate (date)
  {
    if (date != null) return new Date(moment(date).add(-1, 'M').format("YYYY-MM-DD HH:mm:ss"));
    return null;
  }

  // pagination
  paginate(paginator: PaginatorState) {
    this.actividadService.patchState({ paginator });
  }
  

}
