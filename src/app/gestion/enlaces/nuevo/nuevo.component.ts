import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Convenio } from 'src/app/models/Convenio';
import { ConvenioService } from 'src/app/services/convenio.service';
import { UploadService } from 'src/app/services/upload.service';
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

  listEnlaces: string [];

  constructor(private formBuilder: FormBuilder, private activatedRouter: ActivatedRoute,private router: Router,
    private uploadService: UploadService, private ref: ChangeDetectorRef, private toastr: ToastrService,
    private modalService: NgbModal, private convenioService: ConvenioService) { }

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
     //FALTA CODIGO
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
      file: this.form.get('file')?.value,
      imagenServidor: this.form.get('imagenServidor').value,
      url: this.listEnlaces != null ? this.listEnlaces[0] : "",
    };

    if (this.isAddMode && convenio.file == null)
    {
      this.toastr.error('Inserte una imagen', 'Error');
      validar = false;
    }

    if (validar)
    {
      //Nuevo Convenio
      if (this.isAddMode)
      {
        this.convenioService.aniadirConvenio(convenio).subscribe(data => {
          this.toastr.success('Enlace guardado', 'Enlaces');
          this.myInputVariable.nativeElement.value = "";
          this.mostrarImagen = false;
  
          this.listEnlaces = null;
  
          this.ref.detectChanges();
          this.form.reset();
          this.ngOnInit();
        }); 
      }
      //Editar actividad
      else {
       /*  this.actividadService.modificarActividad(actividad).subscribe(data => {
          this.toastr.success('Actividad guardada', 'Actividad');
          this.myInputVariable.nativeElement.value = "";
          this.mostrarImagen = false;
  
          this.listEnlaces = null;
          this.listDocumentacion = null;
  
          this.ref.detectChanges();
          this.form.reset();
          this.ngOnInit();
        });  */
      }
     
    }
  }

  reset(element) {
    this.mostrarImagen = false;
    this.form.patchValue({
      file: null
    });
    element.value = "";
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

   crearEnlace() {
    this.editarEnlace(undefined);
  }

  editarEnlace(url: string) {
    const modalRef = this.modalService.open(EnlaceModalComponent, { size: 'lg' });

    if (url != undefined)
    {
      const convenio: Convenio = {
        id: undefined,
        url: url,
        titulo: '',
        fechaAlta: null
      };

      modalRef.componentInstance.convenio = convenio;
    }
    else {
      const convenio: Convenio = {
        id: undefined,
        url: undefined,
        titulo: '',
        fechaAlta: null
      };
      modalRef.componentInstance.convenio = convenio;
    }

    modalRef.result.then((result) => {
      if (result) {
        this.listEnlaces = [];
        this.listEnlaces.push(result);
        this.ref.detectChanges();
      }
    }).catch(e => {
      console.log(e);
    });
  }

  eliminarEnlace (url: string) 
  {
    const modalRef = this.modalService.open(EliminarEnlaceModalComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      this.listEnlaces = [];
      this.ref.detectChanges();
    }).catch(e => {
      console.log(e);
    });
  }

}
