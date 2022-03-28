import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { Enlace } from 'src/app/models/Enlace';
import { ActividadesService } from 'src/app/services/actividad.service';
import { UploadService } from 'src/app/services/upload.service';
import { EnlaceModalComponent } from '../enlace-modal/enlace-modal.component';


@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription: Subscription;
  actividad: Actividad;
  idActividad: number;

  currentDate = new Date();
  progress: number = 0;
  base64textString:String="";
  imagePath:String="";
  mostrarImagen: boolean = false;

  @ViewChild('fileInput')
  myInputVariable: ElementRef;
  listEnlaces: Enlace [] = [];

  constructor(private formBuilder: FormBuilder, private actividadService: ActividadesService,
    private uploadService: UploadService, private ref: ChangeDetectorRef, private toastr: ToastrService,
    private modalService: NgbModal) 
  { 
    this.form = this.formBuilder.group({
      id: 0,
      titulo: ['', [Validators.required]],
      fechaAlta: ['', [Validators.required]],
      fechaBaja: [null],
      mostrar: [null],
      texto: ['', [Validators.required]],
      file: [Validators.required],
      imagenServidor: [null]
    })
  }

  ngOnInit(): void {
    const objBeginDate = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth()+ 1, 
      day: this.currentDate.getDate() };
    this.form.patchValue({
      fechaAlta: objBeginDate
    });
  }

  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  aniadirTarjeta ()
  {
    let validar = true;
    const actividad: Actividad = {
      titulo: this.form.get('titulo')?.value,
      fechaAlta: moment.utc(this.form.get('fechaAlta')?.value),
      fechaBaja: this.form.get('fechaBaja') != null ? moment.utc(this.form.get('fechaBaja').value) : null,
      mostrar: this.form.get('mostrar') != null ? this.form.get('mostrar').value : false,
      texto: this.form.get('texto')?.value,
      file: this.form.get('file').value,
      imagenServidor: this.form.get('imagenServidor').value
    };

    console.log(actividad);

    if (actividad.fechaBaja != null && actividad.fechaAlta >= actividad.fechaBaja)  
    {
      this.toastr.error('La fecha de baja no puede ser igual o anterior a la fecha de alta', 'Error');
      validar = false;
    }

    if (actividad.file == null)
    {
      this.toastr.error('Debes seleccionar una imagen', 'Error');
      validar = false;
    }

    if (validar)
    {
      this.actividadService.aniadirActividad(actividad).subscribe(data => {
        this.toastr.success('Actividad guardada', 'Actividad');
        this.myInputVariable.nativeElement.value = "";
        this.mostrarImagen = false;
        this.ref.detectChanges();
        
        this.form.reset();
        this.ngOnInit();
      }); 
    }
  }

  onUpload(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: file
    });
    this.form.get('file').updateValueAndValidity();

    this.uploadService.uploadImagen(this.form.value.file).subscribe((event: HttpEvent<any>) => {
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

          this.form.patchValue({
            imagenServidor: event.body.fileName
          });
          this.form.get('imagenServidor').updateValueAndValidity();

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

  crearEnlace() {
    this.editarEnlace(undefined);
  }

  editarEnlace(id: number) {
    const modalRef = this.modalService.open(EnlaceModalComponent, { size: 'lg' });
    modalRef.componentInstance.id = id;
    modalRef.result.then((result) => {
      if (result) {
        this.listEnlaces.push(result);
        this.ref.detectChanges();
      }
    }).catch(e => {
      console.log(e);
    });
  }

}
