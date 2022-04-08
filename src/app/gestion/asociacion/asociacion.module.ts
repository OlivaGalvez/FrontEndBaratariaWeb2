import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbDateParserFormatter, NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateCustomParserFormatter } from "src/app/services/date-formatter.service";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { GeneralModule } from "src/app/_metronic_gestion/partials/content/general/general.module";
import { InlineSVGModule } from "ng-inline-svg";
import { CRUDTableModule } from "src/app/_metronic_gestion/shared/crud-table";
import { AsociacionComponent } from "./asociacion.component";
import { NgxSummernoteModule } from "ngx-summernote";

@NgModule({
    declarations: [
      AsociacionComponent
    ],
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: AsociacionComponent
        }
      ]),
      CommonModule,
      NgbModule,
      MatCheckboxModule,
      GeneralModule,
      InlineSVGModule,
      CRUDTableModule,
      NgxSummernoteModule,
      
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [
      { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }  // <-- add this
    ],
    entryComponents: [
    ]
  })
  export class AsociacionModule {}