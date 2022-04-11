import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Console } from 'console';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Asociacion } from 'src/app/models/Asociacion';
import { Documento } from 'src/app/models/Documento';
import { AsociacionService } from 'src/app/services/asociacion.service';
import { UploadService } from 'src/app/services/upload.service';
import { DocumentacionModelComponent } from './documentacion-model/documentacion-model.component';
import { EliminarDocumentacionModelComponent } from './eliminar-documentacion-model/eliminar-documentacion-model.component';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.scss']
})
export class AsociacionComponent implements OnInit, OnDestroy {

  form: FormGroup;
  suscription: Subscription;
  asociacion: Asociacion;
  idAsociacion: string;

  currentDate = new Date();
  listDocumentacion: Documento [] = [];

  mostrarBotonesGeneral: boolean = false;
  mostrarBotonEdit: boolean = true;
  disabledCampos: boolean = true;
  editorDisabled = true;

  public config: any = {
    airMode: false,
    tabDisable: true,
    popover: {
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
      ],
      image: [
        ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']]
      ],
      link: [['link', ['linkDialogShow', 'unlink']]],
      air: [
        [
          'font',
          [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            'clear'
          ]
        ]
      ]
    },
    height: '400px',
    uploadImagePath: '/api/File/Upload',
    toolbar: [
      //['misc', ['codeview', 'undo', 'redo', 'codeBlock']],
      [
        'font',
        [
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'superscript',
          'subscript',
          'clear'
        ]
      ],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style0', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'picture', 'link']]
    ],
    fontSizes: ['8','9','10','11','12','14','18','24','36','44','56','64','76','84','96'],
    fontNames: ['Arial', 'Times New Roman','Inter', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times', 'MangCau', 'BayBuomHep','BaiSau','BaiHoc','CoDien','BucThu', 'KeChuyen', 'MayChu', 'ThoiDai', 'ThuPhap-Ivy', 'ThuPhap-ThienAn'],
  };

  constructor(private formBuilder: FormBuilder,  private activatedRouter: ActivatedRoute, private router: Router,
    private uploadService: UploadService, private ref: ChangeDetectorRef, private toastr: ToastrService,
    private modalService: NgbModal, private asociacionService: AsociacionService
    ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: 0,
      titulo: [{
        value: null,
        disabled: this.disabledCampos,
      },  [Validators.required]],
      fechaAlta: [{
        value: null,
        disabled: true
      },  [Validators.required]],
      texto: [{
        value: '',
        disabled: this.disabledCampos,
      }]
    })

    const fechaAltaAux = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth()+ 1, 
      day: this.currentDate.getDate() };
    this.form.patchValue({
        fechaAlta: fechaAltaAux,
    }); 

    this.asociacionService.obtenerDatos().pipe(
      tap(data =>  this.mostrarDatosAlEditar(data)),
    ).subscribe(result => 
      this.form.patchValue({
        titulo: result.titulo,
        texto: result.texto
      })
    );
    
  }

  mostrarDatosAlEditar (data) {
    this.asociacion = data;
    this.listDocumentacion = this.asociacion.listDocumentos;
    this.ref.detectChanges();
  }

  editarForm ()
  {
    this.mostrarBotonesGeneral = true;
    this.mostrarBotonEdit = false;
    this.form.get('titulo').enable();
    this.editorDisabled = false;
  }

  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  guardar () {
    const asociacion: Asociacion = {
      id: this.asociacion != null ? this.asociacion.id : 0,
      titulo: this.form.get('titulo')?.value,
      fechaAlta: moment.utc(this.form.get('fechaAlta')?.value),
      texto: this.form.get('texto')?.value,
      listDocumentos: this.listDocumentacion
    };

    this.asociacionService.guardar(asociacion).subscribe(data => {
      this.toastr.success('Datos guardados', 'Asociacion');

      this.listDocumentacion = null;

      this.mostrarBotonEdit = true;
      this.mostrarBotonesGeneral = false;

      this.form.get('titulo').disable();
      this.editorDisabled = true;

      this.ngOnInit();
      this.form.reset();
      this.ref.detectChanges();
     
    }); 
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

  crearDocumentacion() {
    this.editarDocumento(undefined);
  }

  editarDocumento(id: number) {
    const modalRef = this.modalService.open(DocumentacionModelComponent, { size: 'lg' });
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

  eliminarDocumento (id: number) 
  {
    const modalRef = this.modalService.open(EliminarDocumentacionModelComponent, { size: 'lg' });
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
