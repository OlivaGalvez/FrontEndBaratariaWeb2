import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Enlace } from 'src/app/models/Enlace';
import { EnlaceService } from 'src/app/services/enlace.service';
import { PaginatorState, SortState } from 'src/app/_metronic_gestion/shared/crud-table';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  isLoading: boolean;
  paginator: PaginatorState;
  sorting: SortState;
  filterGroup: FormGroup;

  list: Enlace [];

  private subscriptions: Subscription[] = [];
  constructor(private fb: FormBuilder, private router: Router, private ref: ChangeDetectorRef, 
    public enlaceServices: EnlaceService) { }

  ngOnInit(): void {
    this.filterForm();
    this.enlaceServices.fetch();
    this.paginator = this.enlaceServices.paginator;
    this.sorting = this.enlaceServices.sorting;
    const sb = this.enlaceServices.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb);
  }

  editarEnlace (id: number){
    this.router.navigate(['/admin/enlaces/gestion/' + id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  convertDate (date)
  {
    if (date != null) return new Date(moment(date).add(-1, 'M').format("YYYY-MM-DD HH:mm:ss"));
    return null;
  }

  // filtration
  filterForm() {
    this.filterGroup = this.fb.group({
      status: [''],
      type: [''],
      searchTerm: [''],
    });
    this.subscriptions.push(
      this.filterGroup.controls.status.valueChanges.subscribe(() =>
        this.filter()
      )
    );
    this.subscriptions.push(
      this.filterGroup.controls.type.valueChanges.subscribe(() => this.filter())
    );
  }

  filter() {
    const filter = {};
    const status = this.filterGroup.get('status').value;
    if (status) {
      filter['mostrar'] = status;
    }

    const type = this.filterGroup.get('type').value;
    if (type) {
      filter['type'] = type;
    }
    this.enlaceServices.patchState({ filter });
  }

  // sorting
  sort(column: string) {
    const sorting = this.sorting;
    const isActiveColumn = sorting.column === column;
    if (!isActiveColumn) {
      sorting.column = column;
      sorting.direction = 'asc';
    } else {
      sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
    }
    this.enlaceServices.patchState({ sorting });
  }


  // pagination
  paginate(paginator: PaginatorState) {
    this.enlaceServices.patchState({ paginator });
  }

}
