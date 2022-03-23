import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { ActividadesService } from 'src/app/services/actividad.service';


@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
  form: FormGroup;
  suscription: Subscription;
  actividad: Actividad;
  idActividad: number;

  currentDate = new Date();

  constructor(private formBuilder: FormBuilder, private actividadService: ActividadesService) 
  { 
    this.form = this.formBuilder.group({
      id: 0,
      titulo: ['', [Validators.required]],
      fechaAlta: ['', [Validators.required]],
      fechaBaja: null,
    })
  }

  ngOnInit(): void {
    this.suscription = this.actividadService.obtenerActividades$().subscribe(data =>{
      this.actividad = data;
      const objBeginDate = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth()+ 1, 
        day: this.currentDate.getDate() };
      this.form.patchValue({
        titulo: this.actividad.titulo,
        fechaAlta: objBeginDate
      });
      this.idActividad = this.actividad.id! as number;
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  aniadirTarjeta ()
  {
    const actividad: Actividad = {
      titulo: this.form.get('titulo')?.value,
      fechaAlta: this.form.get('fechaAlta')?.value,
      fechaBaja: this.form.get('fechaBaja')?.value,
    };

    console.log(actividad);
  /*   this.actividadService.aniadirActividad(actividad).subscribe(data => {
      this.form.reset();
    }); */
  }

}
