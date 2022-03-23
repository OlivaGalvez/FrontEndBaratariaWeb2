import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { ActividadesService } from 'src/app/services/actividad.service';
import { UploadService } from 'src/app/services/upload.service';


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

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  /* filename = '';
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter(); */

  constructor(private formBuilder: FormBuilder, private actividadService: ActividadesService,
    private uploadService: UploadService) 
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

  
  onChange(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.uploadService.uploadTemporal(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}

/*public uploadFile = (files) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);
  this.http.post('https://localhost:44334/api/Upload?temp=true', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}*/

}
