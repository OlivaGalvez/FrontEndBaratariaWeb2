import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
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

  filename = '';
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private actividadService: ActividadesService,
    private http: HttpClient) 
  { 
    this.form = this.formBuilder.group({
      id: 0,
      titulo: ['', [Validators.required]],
      fechaAlta: ['', [Validators.required]],
      fechaBaja: null,
      mostrar: null,
      texto: ['', [Validators.required]],
      file: null
    })
  }

  ngOnInit(): void {
    this.suscription = this.actividadService.obtenerActividades$().subscribe(data =>{
      this.actividad = data;
      const objBeginDate = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth()+ 1, 
        day: this.currentDate.getDate() };
      this.form.patchValue({
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
      fechaAlta: moment.utc(this.form.get('fechaAlta')?.value),
      fechaBaja: this.form.get('fechaBaja') != null ? moment.utc(this.form.get('fechaBaja').value) : null,
      mostrar: this.form.get('mostrar') != null ? this.form.get('mostrar').value : false,
      texto: this.form.get('texto')?.value,
      file: this.form.get('file').value
    };

    console.log(actividad);
   /* this.actividadService.aniadirActividad(actividad).subscribe(data => {
      this.form.reset();
    }); */
  }

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.filename = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        /*if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.form.patchValue({
            fileSource: file
          });
        }*/

        /*const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();*/
    }
}

public uploadFile = (files) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);
  this.http.post('https://localhost:44334/api/upload', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}

}
