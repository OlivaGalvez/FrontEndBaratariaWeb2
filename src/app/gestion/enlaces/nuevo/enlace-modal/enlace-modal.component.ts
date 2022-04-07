import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Enlace } from 'src/app/models/Enlace';

@Component({
  selector: 'app-enlace-modal',
  templateUrl: './enlace-modal.component.html',
  styleUrls: ['./enlace-modal.component.scss']
})
export class EnlaceModalComponent implements OnInit {

  @Input() enlace: Enlace;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      url: [this.enlace.url, [Validators.required]],
    });
  }

  guardar ()
  {
    const formData = this.formGroup.value;
    this.enlace.url = formData.url;

    this.passEntry.emit(this.enlace.url);
    this.modal.close(this.enlace.url);
    this.formGroup.reset();
  }

}
