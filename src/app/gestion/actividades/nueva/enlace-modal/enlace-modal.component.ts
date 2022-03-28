import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Actividad } from 'src/app/models/Actividad';
import { Enlace } from 'src/app/models/Enlace';
import { ActividadesService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-enlace-modal',
  templateUrl: './enlace-modal.component.html',
  styleUrls: ['./enlace-modal.component.scss']
})

export class EnlaceModalComponent implements OnInit{
  
  @Input() enlace: Enlace;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  actividad: Actividad;
  
  formGroup: FormGroup;

  constructor(private actividadService: ActividadesService, private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      nombre: [this.enlace.nombre, [Validators.required]],
      ruta: [this.enlace.ruta, [Validators.required]],
    });
  }

  guardar ()
  {
    const formData = this.formGroup.value;
    if (!this.enlace.id)
    {
      this.enlace.id = Math.floor((Math.random()*6)+1);
    }
    this.enlace.nombre = formData.nombre;
    this.enlace.ruta = formData.ruta;

    this.passEntry.emit(this.enlace);
    this.modal.close(this.enlace);
    this.formGroup.reset();
  }

  
  /*ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }*/

}
