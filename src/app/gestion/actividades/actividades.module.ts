import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgbDateParserFormatter, NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InlineSVGModule } from "ng-inline-svg";
//import { ToastrModule } from "ngx-toastr";
import { NgbDateCustomParserFormatter } from "src/app/services/date-formatter.service";
import { CRUDTableModule } from "src/app/_metronic_gestion/shared/crud-table";
import { GeneralModule } from "src/app/_metronic_portal/partials/content/general/general.module";
import { ListadoComponent } from "./listado/listado/listado.component";
import { EnlaceModalComponent } from "./nueva/enlace-modal/enlace-modal.component";
import { NuevaComponent } from "./nueva/nueva/nueva.component";
import { EliminarEnlaceModalComponent } from './nueva/eliminar-enlace-modal/eliminar-enlace-modal.component';

@NgModule({
    declarations: [NuevaComponent, ListadoComponent, EnlaceModalComponent, EliminarEnlaceModalComponent],
    imports: [
      RouterModule.forChild([
        {
          path: 'nueva',
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

      FormsModule,
      ReactiveFormsModule,
    ],
    providers: [
      { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }  // <-- add this
    ],
    entryComponents: [
      EnlaceModalComponent
    ]
  })
  export class ActividadesModule {}