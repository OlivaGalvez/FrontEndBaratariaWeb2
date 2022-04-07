import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar-enlace',
  templateUrl: './eliminar-enlace.component.html',
  styleUrls: ['./eliminar-enlace.component.scss']
})
export class EliminarEnlaceComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  eliminarEnlace ()
  {
    this.modal.close();
  }

}
