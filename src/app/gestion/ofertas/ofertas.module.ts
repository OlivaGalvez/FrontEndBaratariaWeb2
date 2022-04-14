import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { RouterModule } from "@angular/router";
import { NgbDateParserFormatter, NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InlineSVGModule } from "ng-inline-svg";
import { NgbDateCustomParserFormatter } from "src/app/services/date-formatter.service";
import { GeneralModule } from "src/app/_metronic_portal/partials/content/general/general.module";
import { CRUDTableModule } from "src/app/_metronic_gestion/shared/crud-table";
import { NuevaComponent } from "./nueva/nueva.component";
import { ListadoComponent } from "./listado/listado.component";
import { DocumentacionModalComponent } from './nueva/documentacion-modal/documentacion-modal.component';
import { EliminarDocumentacionModalComponent } from './nueva/eliminar-documentacion-modal/eliminar-documentacion-modal.component';

@NgModule({
    declarations: [
      NuevaComponent,
      ListadoComponent,
      DocumentacionModalComponent,
      EliminarDocumentacionModalComponent
    ],
    imports: [
      RouterModule.forChild([
        {
          path: 'nueva',
          component: NuevaComponent,
        },
        {
          path: 'gestion/:id',
          component: NuevaComponent,
        },
        {
          path: 'listado',
          component: ListadoComponent,
        }
      ]),
      CommonModule,
      NgbModule,
      MatCheckboxModule,
      GeneralModule,
      InlineSVGModule,
      CRUDTableModule,

      FormsModule,
      ReactiveFormsModule,
    ],
    providers: [
      { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }  // <-- add this
    ],
    entryComponents: [
      DocumentacionModalComponent,
      EliminarDocumentacionModalComponent
    ]
  })
  export class OfertasModule {}