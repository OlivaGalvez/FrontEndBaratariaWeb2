import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Documento } from 'src/app/models/Documento';

@Component({
  selector: 'app-documentacion-modal',
  templateUrl: './documentacion-modal.component.html',
  styleUrls: ['./documentacion-modal.component.scss']
})
export class DocumentacionModalComponent implements OnInit {
  @Input() documento: Documento;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      nombre: [this.documento.nombre, [Validators.required]],
      file: [null, Validators.required]
    });
  }

  onChange (event) 
  {
    const file = (event.target as HTMLInputElement).files[0];
    this.formGroup.patchValue({
      file: file
    });
    this.formGroup.get('file').updateValueAndValidity();
  }

  guardar ()
  {
    const formData = this.formGroup.value;
    if (!this.documento.id)
    {
      this.documento.id = Math.floor((Math.random()*6)+1);
    }
    this.documento.nombre = formData.nombre;
    this.documento.file= formData.file;
    this.documento.tamanio = this.niceBytes(formData.file.size);
    this.passEntry.emit(this.documento);
    this.modal.close(this.documento);
    this.formGroup.reset();
  }

  niceBytes(x){
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
     let l = 0, n = parseInt(x, 10) || 0;
     while(n >= 1024 && ++l){
         n = n/1024;
     }
     return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
   }

}
