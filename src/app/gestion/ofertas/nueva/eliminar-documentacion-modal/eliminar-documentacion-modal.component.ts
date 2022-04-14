import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar-documentacion-modal',
  templateUrl: './eliminar-documentacion-modal.component.html',
  styleUrls: ['./eliminar-documentacion-modal.component.scss']
})
export class EliminarDocumentacionModalComponent implements OnInit {

 
  @Input() id: number;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  eliminarDocumento ()
  {
    this.modal.close();
  }

}
