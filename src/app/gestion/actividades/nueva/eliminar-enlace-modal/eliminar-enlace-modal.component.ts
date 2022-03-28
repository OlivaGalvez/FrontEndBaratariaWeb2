import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar-enlace-modal',
  templateUrl: './eliminar-enlace-modal.component.html',
  styleUrls: ['./eliminar-enlace-modal.component.scss']
})
export class EliminarEnlaceModalComponent implements OnInit {

  @Input() id: number;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  eliminarEnlace ()
  {
    this.modal.close();
  }

}
