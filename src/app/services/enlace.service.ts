import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../_metronic_portal/shared/crud-table';
import { Enlace } from '../models/Enlace';


@Injectable({
    providedIn: 'root'
  })
  
export class EnlaceService extends TableService<Enlace> implements OnDestroy{

  constructor(@Inject(HttpClient) http) {
    super(http);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}