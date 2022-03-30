import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { RouterModule } from "@angular/router";
import { NgbDateParserFormatter, NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InlineSVGModule } from "ng-inline-svg";
import { NgbDateCustomParserFormatter } from "src/app/services/date-formatter.service";
import { GeneralModule } from "src/app/_metronic_portal/partials/content/general/general.module";
import { PaginatorComponent } from "src/app/_metronic_gestion/shared/crud-table/components/paginator/paginator.component";
import { CRUDTableModule } from "src/app/_metronic_gestion/shared/crud-table";
import { NuevoComponent } from "./nuevo/nuevo.component";
import { ListadoComponent } from "./listado/listado.component";

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
      ReactiveFormsModule,
    ],
    providers: [
      { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }  // <-- add this
    ],
    entryComponents: [
    ]
  })
  export class EnlacesModule {}