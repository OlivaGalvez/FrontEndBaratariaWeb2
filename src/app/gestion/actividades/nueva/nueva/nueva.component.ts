import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  progress: number = 0;
  base64textString:String="";
  imagePath:String="";
  mostrarImagen: boolean = false;
 

  constructor(private formBuilder: FormBuilder, private actividadService: ActividadesService,
    private uploadService: UploadService, private ref: ChangeDetectorRef) 
  { 
    this.form = this.formBuilder.group({
      id: 0,
      titulo: ['', [Validators.required]],
      fechaAlta: ['', [Validators.required]],
      fechaBaja: [null],
      mostrar: [null],
      texto: ['', [Validators.required]],
      file: [Validators.required]
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
    this.actividadService.aniadirActividad(actividad).subscribe(data => {
      this.form.reset();
    }); 
  }

  onUpload(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: file
    });
    this.form.get('file').updateValueAndValidity();

    this.uploadService.uploadTemporal(this.form.value.file).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          //setTimeout( () => this.progress = Math.round(event.loaded / event.total * 100), 0);
          break;
        case HttpEventType.Response:
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(this.form.value.file);

          //setTimeout(() => {this.progress = 0; }, 1500);
      }
    })
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
    this.imagePath = "data:image/png;base64," + this.base64textString;
    this.mostrarImagen = true;
    this.ref.detectChanges();
   }

  reset(element) {
    this.mostrarImagen = false;
    this.form.patchValue({
      file: null
    });
    element.value = "";
  }

}
