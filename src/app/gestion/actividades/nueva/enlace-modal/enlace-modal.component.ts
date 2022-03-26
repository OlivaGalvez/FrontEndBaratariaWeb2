import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Actividad } from 'src/app/models/Actividad';
import { Enlace } from 'src/app/models/Enlace';
import { ActividadesService } from 'src/app/services/actividad.service';
import { EnlaceService } from 'src/app/services/enlace.service';

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

export class EnlaceModalComponent implements OnInit/*, OnDestroy*/ {
  
  @Input() id: number;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  isLoading$;
  actividad: Actividad;
  enlace: Enlace;
  formGroup: FormGroup;

  constructor(private enlaceServices: EnlaceService,
    private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.isLoading$ = this.enlaceServices.isLoading$;
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

  guardar ()
  {
    this.prepareCustomer();
    if (this.enlace.id) {
     // this.edit();
    } else {
      this.enlace.id = 1;
      this.crearEnlace();
    }
  }

  private prepareCustomer() {
    const formData = this.formGroup.value;
    this.enlace.nombre = formData.nombre;
    this.enlace.ruta = formData.ruta;
  }

  crearEnlace () {
    this.passEntry.emit(this.enlace);
    this.modal.close(this.enlace);
  }

  /*ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }*/

}
