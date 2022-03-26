import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Enlace } from 'src/app/models/Enlace';
import { ActividadesService } from 'src/app/services/actividad.service';

const EMPTY_ENLACE: Enlace = {
  id: undefined,
  nombre: '',
  ruta: '',
};

@Component({
  selector: 'app-enlace-modal',
  templateUrl: './enlace-modal.component.html',
  styleUrls: ['./enlace-modal.component.scss']
})

export class EnlaceModalComponent implements OnInit, OnDestroy {
  @Input() id: number;
  isLoading$;
  enlace: Enlace;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(private actividadServices: ActividadesService,
    private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.isLoading$ = this.actividadServices.isLoading$;
    this.loadCustomer();
  }

  loadCustomer() {
    if (!this.id) {
      this.enlace = EMPTY_ENLACE;
      this.loadForm();
    } else {
      /*const sb = this.customersService.getItemById(this.id).pipe(
        first(),
        catchError((errorMessage) => {
          this.modal.dismiss(errorMessage);
          return of(EMPTY_CUSTOMER);
        })
      ).subscribe((customer: Customer) => {
        this.customer = customer;
        this.loadForm();
      });
      this.subscriptions.push(sb);*/
    }
  }

  loadForm() {
    this.formGroup = this.fb.group({
      nombre: [this.enlace.nombre, [Validators.required]],
      ruta: [this.enlace.ruta, [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
