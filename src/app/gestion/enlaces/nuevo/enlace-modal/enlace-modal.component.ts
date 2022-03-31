import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Convenio } from 'src/app/models/Convenio';

@Component({
  selector: 'app-enlace-modal',
  templateUrl: './enlace-modal.component.html',
  styleUrls: ['./enlace-modal.component.scss']
})
export class EnlaceModalComponent implements OnInit {

  @Input() convenio: Convenio;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      url: [this.convenio.url, [Validators.required]],
    });
  }

  guardar ()
  {
    const formData = this.formGroup.value;
    this.convenio.url = formData.url;

    this.passEntry.emit(this.convenio.url);
    this.modal.close(this.convenio.url);
    this.formGroup.reset();
  }

}
