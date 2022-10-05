import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";
import { InlineSVGModule } from "ng-inline-svg";
import { DropdownMenusModule } from "src/app/_metronic_portal/partials/content/dropdown-menus/dropdown-menus.module";
import { ConveniosComponent } from "./convenios.component";
import { CRUDTableModule } from 'src/app/_metronic_portal/shared/crud-table';
import { ConvenioPipe } from "../../pipes/convenio.pipe";

@NgModule({
    declarations: [ConveniosComponent, ConvenioPipe],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: ConveniosComponent,
        }
      ]),
      DropdownMenusModule,
      InlineSVGModule,
      NgApexchartsModule,
      NgbDropdownModule,
      NgbModule,
      CRUDTableModule
    ],
  })
  export class ConveniosModule {}