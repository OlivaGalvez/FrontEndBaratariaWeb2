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

@NgModule({
    declarations: [
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
    ]
  })
  export class EnlacesModule {}