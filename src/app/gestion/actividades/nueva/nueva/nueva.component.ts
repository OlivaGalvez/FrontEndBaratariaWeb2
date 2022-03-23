import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private actividadService: ActividadesService) 
  { 
    this.form = this.formBuilder.group({
      id: 0,
      titulo: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.suscription = this.actividadService.obtenerActividades$().subscribe(data =>{
      this.actividad = data;
      this.form.patchValue({
        titulo: this.actividad.titulo,
      });
      this.idActividad = this.actividad.id! as number;
    });
  }

  aniadirTarjeta ()
  {
    const actividad: Actividad = {
      titulo: this.form.get('titulo')?.value
    };
    this.actividadService.aniadirActividad(actividad).subscribe(data => {
      this.form.reset();
    });
  }

}
