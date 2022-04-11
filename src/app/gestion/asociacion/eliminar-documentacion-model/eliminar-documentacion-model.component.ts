import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar-documentacion-model',
  templateUrl: './eliminar-documentacion-model.component.html',
  styleUrls: ['./eliminar-documentacion-model.component.scss']
})
export class EliminarDocumentacionModelComponent implements OnInit {

  @Input() id: number;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  eliminarDocumento ()
  {
    this.modal.close();
  }

}
