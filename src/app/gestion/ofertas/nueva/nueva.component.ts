import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Documento } from 'src/app/models/Documento';
import { Oferta } from 'src/app/models/Oferta';
import { OfertaService } from 'src/app/services/oferta.service';
import { UploadService } from 'src/app/services/upload.service';
import { DocumentacionModalComponent } from './documentacion-modal/documentacion-modal.component';
import { EliminarDocumentacionModalComponent } from './eliminar-documentacion-modal/eliminar-documentacion-modal.component';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit, OnDestroy  {
  form: FormGroup;
  suscription: Subscription;
  oferta: Oferta;
  idOferta: string;

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

  listDocumentacion: Documento [] = [];

  constructor(private formBuilder: FormBuilder,  private activatedRouter: ActivatedRoute, private router: Router,
    private ofertaService: OfertaService,
    private uploadService: UploadService, private ref: ChangeDetectorRef, private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.idOferta = this.activatedRouter.snapshot.paramMap.get('id');

    this.isAddMode = !this.idOferta;
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
      fechaInicio: [{
        value: null,
        disabled: this.disabledCampos,
      },  [Validators.required]],
      fechaFin: [{
          value: null,
          disabled: this.disabledCampos,
      }],
      mostrar: [{
          value: null,
          disabled: this.disabledCampos,
      }],
      file: [null],
      imagenServidor: [null]
    })

    if (this.isAddMode)
    {
      const fechaAltaAux = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth()+ 1, 
        day: this.currentDate.getDate() };
      this.form.patchValue({
          fechaAlta: fechaAltaAux,
          fechaInicio: fechaAltaAux
      });
    }
    else
    {
      this.ofertaService.getById(this.idOferta).pipe(
        tap(data =>  this.mostrarDatosAlEditar(data)),
      ).subscribe(result => 
        this.form.patchValue({
          titulo: result.titulo,
          mostrar: result.mostrar,
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
      );
    }
   
  }

  mostrarDatosAlEditar (data) {
    this.oferta = data;
    this.mostrarImagen = true;
    this.imagePath = this.oferta.imagenServidorBase64;
    this.listDocumentacion = this.oferta.listDocumentos;
  }

  editarForm ()
  {
    this.mostrarBotonesGeneral = true;
    this.mostrarBotonEdit = false;
    this.mostrarBotonDelete = true;
    this.form.get('titulo').enable();
    this.form.get('fechaInicio').enable();
    this.form.get('fechaFin').enable();
    this.form.get('mostrar').enable();
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

  eliminarForm () 
  {
    /*const modalRef = this.modalService.open(EliminarActividadComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      this.actividadService.eliminarActividad(this.actividad.id).subscribe((data)=>{
        this.router.navigate(['/admin/actividad/listado/']);
        this.toastr.error('Actividad borrada', 'Actividad');
      });
      
    }).catch(e => {
      console.log(e);
    });*/
  }

  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  guardarOferta ()
  {
    let validar = true;
    const oferta: Oferta = {
      id: this.oferta != null ? this.oferta.id : 0,
      titulo: this.form.get('titulo')?.value,
      fechaAlta: moment.utc(this.form.get('fechaAlta')?.value),
      fechaInicio: moment.utc(this.form.get('fechaInicio')?.value),
      fechaFin: moment.utc(this.form.get('fechaFin')?.value),
      mostrar: this.form.get('mostrar') != null ? this.form.get('mostrar').value : false,
      file: this.form.get('file')?.value,
      imagenServidor: this.form.get('imagenServidor').value,
      listDocumentos: this.listDocumentacion
    };

    if (oferta.fechaFin != null && oferta.fechaInicio > oferta.fechaFin)  
    {
      this.toastr.error('La fecha fin no puede ser anterior a la fecha inicio', 'Error');
      validar = false;
    }

    if (this.isAddMode && oferta.file == null)
    {
      this.toastr.error('Inserte una imagen', 'Error');
      validar = false;
    }

    if (validar)
    {
      //Nueva oferta
      if (this.isAddMode)
      {
        this.ofertaService.aniadirOferta(oferta).subscribe(data => {
          this.toastr.success('Oferta guardada', 'Oferta');
          this.router.navigate(['/admin/ofertas/gestion/' + data.id]);
        }); 
      }
      //Editar oferta
      else {
        this.ofertaService.modificarOferta(oferta).subscribe(data => {
          this.toastr.success('Oferta guardada', 'Oferta');
          this.myInputVariable.nativeElement.value = "";
          this.mostrarImagen = false;
  
          this.listDocumentacion = null;

          this.mostrarBotonEdit = true;
          this.mostrarBotonDelete = false;

          this.form.get('titulo').disable();
          this.form.get('fechaInicio').disable();
          this.form.get('fechaFin').disable();
          this.form.get('mostrar').disable();
          
          this.form.reset();
          this.ngOnInit();
          this.ref.detectChanges();
        }); 
      }
     
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
        /*let index = this.listDocumentacion.findIndex(d => d.id === id);
        if (index > -1) this.listDocumentacion.splice(index, 1);*/
        this.listDocumentacion = [];
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

  eliminarDocumento (id: number) 
  {
    const modalRef = this.modalService.open(EliminarDocumentacionModalComponent, { size: 'lg' });
    modalRef.componentInstance.id = id;
    modalRef.result.then((result) => {
     /* let index = this.listDocumentacion.findIndex(d => d.id === id);
      if (index > -1) this.listDocumentacion.splice(index, 1);*/
      this.listDocumentacion = [];
      this.ref.detectChanges();
    }).catch(e => {
      console.log(e);
    });
  }

}
