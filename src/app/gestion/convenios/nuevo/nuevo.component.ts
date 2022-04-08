import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Convenio } from 'src/app/models/Convenio';
import { DireccionWeb } from 'src/app/models/DireccionWeb';
import { Documento } from 'src/app/models/Documento';
import { ConveniosService } from 'src/app/services/convenio.service';
import { UploadService } from 'src/app/services/upload.service';
import { DocumentacionModalComponent } from './documentacion-modal/documentacion-modal.component';
import { EliminarDocumentacionModalComponent } from './eliminar-documentacion-modal/eliminar-documentacion-modal.component';
import { EliminarEnlaceModalComponent } from './eliminar-enlace-modal/eliminar-enlace-modal.component';
import { EnlaceModalComponent } from './enlace-modal/enlace-modal.component';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription: Subscription;
  convenio: Convenio;
  idConvenio: string;

  isAddMode: boolean;
  disabledCampos: boolean = true;
  mostrarBotonesGeneral: boolean = true;
  mostrarBotonEdit: boolean = true;
  mostrarBotonDelete: boolean = false;

  currentDate = new Date();
  base64textString:String="";
  imagePath:String="";
  mostrarImagen: boolean = false;

  @ViewChild('fileInput')
  myInputVariable: ElementRef;

  listEnlaces: DireccionWeb [] = [];
  listDocumentacion: Documento [] = [];

  constructor(private formBuilder: FormBuilder,  private activatedRouter: ActivatedRoute, private router: Router,
    private uploadService: UploadService, private ref: ChangeDetectorRef, private toastr: ToastrService,
    private modalService: NgbModal, private conveniosService: ConveniosService) 
  { 
  }

  ngOnInit(): void {
    this.idConvenio = this.activatedRouter.snapshot.paramMap.get('id');

    this.isAddMode = !this.idConvenio;
    if (this.isAddMode) {
      this.disabledCampos = false; this.mostrarBotonEdit = false; 
    }
    else {
      this.mostrarBotonesGeneral = false;
    }

    this.form = this.formBuilder.group({
      id: 0,
      titulo: [{
          value: '',
          disabled: this.disabledCampos,
      },  [Validators.required]],
      fechaAlta: [{
        value: null,
        disabled: true,
      },  [Validators.required]],
      mostrar: [{
          value: null,
          disabled: this.disabledCampos,
      }],
      texto: [{
        value: '',
        disabled: this.disabledCampos,
      },  [Validators.required]],
      file: [null],
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
      /* this.actividadService.getById(this.idActividad).pipe(
        tap(data =>  this.mostrarDatosAlEditar(data)),
      ).subscribe(result => 
        this.form.patchValue({
          titulo: result.titulo,
          mostrar: result.mostrar,
          texto: result.texto,
          fechaAlta:  {year: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
            month: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getMonth(), 
            day: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getDate()},
          fechaInicio: result.fechaInicio != null ? {year: new Date(moment(result.fechaInicio).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
            month: new Date(moment(result.fechaInicio).format("YYYY-MM-DD HH:mm:ss")).getMonth(), 
            day: new Date(moment(result.fechaInicio).format("YYYY-MM-DD HH:mm:ss")).getDate()} : null,
          fechaFin: result.fechaFin != null ? {year: new Date(moment(result.fechaFin).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
            month: new Date(moment(result.fechaFin).format("YYYY-MM-DD HH:mm:ss")).getMonth(), 
            day: new Date(moment(result.fechaFin).format("YYYY-MM-DD HH:mm:ss")).getDate()} : null,
        })
      ); */
    }

  }

  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  guardarConvenio ()
  {
    let validar = true;
    const convenio: Convenio = {
      id: this.convenio != null ? this.convenio.id : 0,
      titulo: this.form.get('titulo')?.value,
      fechaAlta: moment.utc(this.form.get('fechaAlta')?.value),
      mostrar: this.form.get('mostrar') != null ? this.form.get('mostrar').value : false,
      texto: this.form.get('texto')?.value,
      file: this.form.get('file')?.value,
      imagenServidor: this.form.get('imagenServidor').value,
      listEnlaces: this.listEnlaces,
      listDocumentos: this.listDocumentacion
    };

    if (this.isAddMode && convenio.file == null)
    {
      this.toastr.error('Inserte una imagen', 'Error');
      validar = false;
    }

    if (validar)
    {
      //Nuevo convenio
      if (this.isAddMode)
      {
         this.conveniosService.aniadirConvenio(convenio).subscribe(data => {
          this.toastr.success('Convenio guardado', 'Convenio');
          this.router.navigate(['/admin/convenios/gestion/' + data.id]);
        });  
      }
      //Editar convenio
      else {
        /* this.actividadService.modificarActividad(actividad).subscribe(data => {
          this.toastr.success('Actividad guardada', 'Actividad');
          this.myInputVariable.nativeElement.value = "";
          this.mostrarImagen = false;
  
          this.listEnlaces = null;
          this.listDocumentacion = null;

          this.mostrarBotonEdit = true;
          this.mostrarBotonDelete = false;

          this.form.get('titulo').disable();
          this.form.get('fechaInicio').disable();
          this.form.get('fechaFin').disable();
          this.form.get('mostrar').disable();
          this.form.get('texto').disable();
  
          this.ref.detectChanges();
          this.form.reset();
          this.ngOnInit();
        });  */
      }
     
    }
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
          result.url =  event.body.url;
          result.servidor = event.body.fileName;
          result.original = result.file.name;
          this.listDocumentacion.push(result);
          this.ref.detectChanges();
      }
    })
  }

  download(url, original): void {
    this.uploadService.download(url).subscribe((x) => {
        var newBlob = new Blob([x], { type: "application/pdf" });
        const data = window.URL.createObjectURL(newBlob);
        
        var link = document.createElement('a');
        link.href = data;
        link.download = original;
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        
        setTimeout(function () {
            window.URL.revokeObjectURL(data);
            link.remove();
        }, 100);
    });
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
      const enlace: DireccionWeb = {
        id: result2.id,
        nombre: result2.nombre,
        url: result2.url,
      };

      modalRef.componentInstance.enlace = enlace;
    }
    else {
      const enlace: DireccionWeb = {
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


}
