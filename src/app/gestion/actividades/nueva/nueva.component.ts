import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Actividad } from 'src/app/models/Actividad';
import { Documento } from 'src/app/models/Documento';
import { EnlaceActividad } from 'src/app/models/EnlaceActividad';
import { ActividadesService } from 'src/app/services/actividad.service';
import { UploadService } from 'src/app/services/upload.service';
import { DocumentacionModalComponent } from './documentacion-modal/documentacion-modal.component';
import { EliminarDocumentacionModalComponent } from './eliminar-documentacion-modal/eliminar-documentacion-modal.component';
import { EliminarEnlaceModalComponent } from './eliminar-enlace-modal/eliminar-enlace-modal.component';
import { EnlaceModalComponent } from './enlace-modal/enlace-modal.component';


@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription: Subscription;
  actividad: Actividad;
  idActividad: string;
  isAddMode: boolean;

  currentDate = new Date();
  progress: number = 0;
  base64textString:String="";
  imagePath:String="";
  mostrarImagen: boolean = false;

  @ViewChild('fileInput')
  myInputVariable: ElementRef;


  listEnlaces: EnlaceActividad [] = [];
  listDocumentacion: Documento [] = [];

  constructor(private formBuilder: FormBuilder,  private router: ActivatedRoute, private actividadService: ActividadesService,
    private uploadService: UploadService, private ref: ChangeDetectorRef, private toastr: ToastrService,
    private modalService: NgbModal) 
  { 
  }

  ngOnInit(): void {

    this.idActividad = this.router.snapshot.paramMap.get('id');

    this.isAddMode = !this.idActividad;


    this.form = this.formBuilder.group({
      id: 0,
      titulo: ['', [Validators.required]],
      fechaAlta: ['', [Validators.required]],
      fechaBaja: [null],
      mostrar: [null],
      texto: ['', [Validators.required]],
      file: [null, Validators.required],
      imagenServidor: [null]
    })

    if (this.isAddMode)
    {
      const fechaAltaAux = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth()+ 1, 
        day: this.currentDate.getDate() };
      this.form.patchValue({
          fechaAlta: fechaAltaAux
      });
    }
    else
    {
      this.actividadService.getById(this.idActividad).pipe(first()).subscribe(result => 
        this.form.patchValue({
          
          titulo: result.titulo,
          mostrar: result.mostrar,
          texto: result.texto,
          fechaBaja: result.fechaBaja != null ? {year: new Date(moment(result.fechaBaja).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
          month: new Date(moment(result.fechaBaja).format("YYYY-MM-DD HH:mm:ss")).getMonth(), 
          day: new Date(moment(result.fechaBaja).format("YYYY-MM-DD HH:mm:ss")).getDate()} : null,
          fechaAlta:  {year: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
            month: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getMonth(), 
            day: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getDate()}
        })
      );
    }
  }

  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  guardarActividad ()
  {
    let validar = true;
    const actividad: Actividad = {
      titulo: this.form.get('titulo')?.value,
      fechaAlta: moment.utc(this.form.get('fechaAlta')?.value),
      fechaBaja: this.form.get('fechaBaja') != null ? moment.utc(this.form.get('fechaBaja').value) : null,
      mostrar: this.form.get('mostrar') != null ? this.form.get('mostrar').value : false,
      texto: this.form.get('texto')?.value,
      file: this.form.get('file')?.value,
      imagenServidor: this.form.get('imagenServidor').value,
      listEnlaces: this.listEnlaces,
      listDocumentos: this.listDocumentacion
    };

    if (actividad.fechaBaja != null && actividad.fechaAlta >= actividad.fechaBaja)  
    {
      this.toastr.error('La fecha de baja no puede ser igual o anterior a la fecha de alta', 'Error');
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
          break;
        case HttpEventType.Response:
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(this.form.value.file);

          this.form.patchValue({
            imagenServidor: event.body.fileName
          });
          this.form.get('imagenServidor').updateValueAndValidity();
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

    if (id != undefined)
    {
      var result2 = this.listEnlaces.find(x => x.id === id);
      const enlace: EnlaceActividad = {
        id: result2.id,
        nombre: result2.nombre,
        url: result2.url,
      };

      modalRef.componentInstance.enlace = enlace;
    }
    else {
      const enlace: EnlaceActividad = {
        id: undefined,
        nombre: '',
        url: '',
      };
      modalRef.componentInstance.enlace = enlace;
    }

    modalRef.result.then((result) => {
      if (result) {
        let index = this.listEnlaces.findIndex(d => d.id === id);
        if (index > -1) this.listEnlaces.splice(index, 1);
        this.listEnlaces.push(result);
        this.ref.detectChanges();
      }
    }).catch(e => {
      console.log(e);
    });
  }

  eliminarEnlace (id: number) 
  {
    const modalRef = this.modalService.open(EliminarEnlaceModalComponent, { size: 'lg' });
    modalRef.componentInstance.id = id;
    modalRef.result.then((result) => {
      let index = this.listEnlaces.findIndex(d => d.id === id); //find index in your array
      if (index > -1) this.listEnlaces.splice(index, 1);//remove element from array
      this.ref.detectChanges();
    }).catch(e => {
      console.log(e);
    });
  }

  crearDocumentacion() {
    this.editarDocumento(undefined);
  }

  editarDocumento(id: number) {
    const modalRef = this.modalService.open(DocumentacionModalComponent, { size: 'lg' });
    if (id != undefined)
    {
      var result2 = this.listDocumentacion.find(x => x.id === id);
      const documento: Documento = {
        id: result2.id,
        nombre: result2.nombre
      };

      modalRef.componentInstance.documento = documento;
    }
    else {
      const documento: Documento = {
        id: undefined,
        nombre: ''
      };
      modalRef.componentInstance.documento = documento;
    }

    modalRef.result.then((result: Documento) => {
      if (result) {
        let index = this.listDocumentacion.findIndex(d => d.id === id);
        if (index > -1) this.listDocumentacion.splice(index, 1);
        this.subirDocAlta(result);
      }
    }).catch(e => {
      console.log(e);
    });
  }

  subirDocAlta (result) 
  {
    this.uploadService.uploadDocumento(result.file).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          break;
        case HttpEventType.Response:
          result.fullPath =  event.body.fullPath;
          result.servidor = event.body.fileName;
          result.original = result.file.name;
          this.listDocumentacion.push(result);
          console.log(this.listDocumentacion);
          this.ref.detectChanges();
      }
    })
  }

  eliminarDocumento (id: number) 
  {
    const modalRef = this.modalService.open(EliminarDocumentacionModalComponent, { size: 'lg' });
    modalRef.componentInstance.id = id;
    modalRef.result.then((result) => {
      let index = this.listDocumentacion.findIndex(d => d.id === id); //find index in your array
      if (index > -1) this.listDocumentacion.splice(index, 1);//remove element from array
      this.ref.detectChanges();
    }).catch(e => {
      console.log(e);
    });
  }

}