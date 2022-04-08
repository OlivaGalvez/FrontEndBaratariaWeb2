import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar-convenio',
  templateUrl: './eliminar-convenio.component.html',
  styleUrls: ['./eliminar-convenio.component.scss']
})
export class EliminarConvenioComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  eliminarConvenio ()
  {
    this.modal.close();
  }

}
