import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateCustomParserFormatter } from "src/app/services/date-formatter.service";
import { ListadoComponent } from "./listado/listado/listado.component";
import { NuevaComponent } from "./nueva/nueva/nueva.component";

@NgModule({
    declarations: [NuevaComponent, ListadoComponent],
    imports: [
      CommonModule,
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

      FormsModule,
      ReactiveFormsModule,
    ],
    providers: [
      { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }  // <-- add this
    ],
  })
  export class ActividadesModule {}