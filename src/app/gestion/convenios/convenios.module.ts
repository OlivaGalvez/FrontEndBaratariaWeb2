import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbDateParserFormatter, NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateCustomParserFormatter } from "src/app/services/date-formatter.service";
import { NuevoComponent } from "./nuevo/nuevo.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { GeneralModule } from "src/app/_metronic_gestion/partials/content/general/general.module";
import { InlineSVGModule } from "ng-inline-svg";
import { CRUDTableModule } from "src/app/_metronic_gestion/shared/crud-table";
import { DocumentacionModalComponent } from './nuevo/documentacion-modal/documentacion-modal.component';
import { EliminarDocumentacionModalComponent } from './nuevo/eliminar-documentacion-modal/eliminar-documentacion-modal.component';
import { EnlaceModalComponent } from './nuevo/enlace-modal/enlace-modal.component';
import { EliminarEnlaceModalComponent } from './nuevo/eliminar-enlace-modal/eliminar-enlace-modal.component';
import { EliminarConvenioComponent } from './nuevo/eliminar-convenio/eliminar-convenio.component';

@NgModule({
    declarations: [
      NuevoComponent,
      ListadoComponent,
      DocumentacionModalComponent,
      EliminarDocumentacionModalComponent,
      EnlaceModalComponent,
      EliminarEnlaceModalComponent,
      EliminarConvenioComponent
    ],
    imports: [
      RouterModule.forChild([
        {
          path: 'nuevo',
          component: NuevoComponent,
        },
        {
          path: 'gestion/:id',
          component: NuevoComponent,
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
      ReactiveFormsModule
    ],
    providers: [
      { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }  // <-- add this
    ],
    entryComponents: [
      DocumentacionModalComponent,
      EliminarDocumentacionModalComponent,
      EnlaceModalComponent,
      EliminarEnlaceModalComponent,
      EliminarConvenioComponent
    ]
  })
  export class ConveniosModule {}