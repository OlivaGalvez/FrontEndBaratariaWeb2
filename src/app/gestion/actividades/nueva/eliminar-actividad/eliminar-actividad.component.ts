import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar-actividad',
  templateUrl: './eliminar-actividad.component.html',
  styleUrls: ['./eliminar-actividad.component.scss']
})
export class EliminarActividadComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  eliminarActividad ()
  {
    this.modal.close();
  }
}
