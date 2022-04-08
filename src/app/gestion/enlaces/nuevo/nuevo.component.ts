import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Enlace } from 'src/app/models/Enlace';
import { EnlaceService } from 'src/app/services/enlace.service';
import { UploadService } from 'src/app/services/upload.service';
import { EliminarEnlaceModalComponent } from './eliminar-enlace-modal/eliminar-enlace-modal.component';
import { EliminarEnlaceComponent } from './eliminar-enlace/eliminar-enlace.component';
import { EnlaceModalComponent } from './enlace-modal/enlace-modal.component';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription: Subscription;
  enlace: Enlace;
  idEnlace: string;

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
    private modalService: NgbModal, private enlaceService: EnlaceService) { }

  ngOnInit(): void {
    this.idEnlace = this.activatedRouter.snapshot.paramMap.get('id');

    this.isAddMode = !this.idEnlace;
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
      this.enlaceService.getById(this.idEnlace).pipe(
        tap(data =>  this.mostrarDatosAlEditar(data)),
      ).subscribe(result => 
        this.form.patchValue({
          titulo: result.titulo,
          mostrar: result.mostrar,
          fechaAlta:  {year: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getFullYear(),
            month: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getMonth(), 
            day: new Date(moment(result.fechaAlta).format("YYYY-MM-DD HH:mm:ss")).getDate()}
        })
      );
    }

  }

  mostrarDatosAlEditar (data) {
    this.enlace = data;
    this.mostrarImagen = true;
    this.imagePath = this.enlace.imagenServidorBase64;
    this.listEnlaces = [];
    this.listEnlaces.push(this.enlace.url);
    this.ref.detectChanges();
  }

  editarForm ()
  {
    this.mostrarBotonesGeneral = true;
    this.mostrarBotonEdit = false;
    this.mostrarBotonDelete = true;
    this.form.get('titulo').enable();
    this.form.get('mostrar').enable();
  }

  
  eliminarForm () 
  {
     const modalRef = this.modalService.open(EliminarEnlaceComponent, { size: 'lg' });
      modalRef.result.then((result) => {
      this.enlaceService.eliminarEnlace(this.enlace.id).subscribe((data)=>{
        this.router.navigate(['/admin/enlaces/listado/']);
        this.toastr.error('Enlace borrado', 'Enlace');
      });
      
    }).catch(e => {
      console.log(e);
    }); 
  }

  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  guardarConvenio ()
  {
    let validar = true;

    const enlace: Enlace = {
      id: this.enlace != null ? this.enlace.id : 0,
      titulo: this.form.get('titulo')?.value,
      fechaAlta: moment.utc(this.form.get('fechaAlta')?.value),
      mostrar: this.form.get('mostrar') != null ? this.form.get('mostrar').value : false,
      file: this.form.get('file')?.value,
      imagenServidor: this.form.get('imagenServidor').value,
      url: this.listEnlaces != null ? this.listEnlaces[0] : "",
    };

    if (this.isAddMode && enlace.file == null)
    {
      this.toastr.error('Inserte una imagen', 'Error');
      validar = false;
    }

    if (validar)
    {
      //Nuevo Convenio
      if (this.isAddMode)
      {
        this.enlaceService.aniadirEnlace(enlace).subscribe(data => {
          this.toastr.success('Enlace guardado', 'Enlaces');
          this.router.navigate(['/admin/enlaces/gestion/' + data.id]);
        }); 
      }
      //Editar enlace
      else {
         this.enlaceService.modificarEnlace(enlace).subscribe(data => {
          this.toastr.success('Enlace guardado', 'Enlaces');
          this.myInputVariable.nativeElement.value = "";
          this.mostrarImagen = false;
  
          this.listEnlaces = null;

          this.mostrarBotonEdit = true;
          this.mostrarBotonDelete = false;
          this.form.get('titulo').disable();
          this.form.get('mostrar').disable();
  
          this.ref.detectChanges();
          this.form.reset();
          this.ngOnInit();
        });  
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
      const enlace: Enlace = {
        id: undefined,
        url: url,
        titulo: '',
        fechaAlta: null
      };

      modalRef.componentInstance.enlace = enlace;
    }
    else {
      const enlace: Enlace = {
        id: undefined,
        url: undefined,
        titulo: '',
        fechaAlta: null
      };
      modalRef.componentInstance.enlace = enlace;
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
