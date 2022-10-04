import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbDropdown, NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";
import { InlineSVGModule } from "ng-inline-svg";
import { DropdownMenusModule } from "src/app/_metronic_portal/partials/content/dropdown-menus/dropdown-menus.module";
import { ActividadesComponent } from "./actividades.component";
import { CRUDTableModule } from 'src/app/_metronic_portal/shared/crud-table';

@NgModule({
    declarations: [ActividadesComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: ActividadesComponent,
        }
      ]),
      DropdownMenusModule,
      InlineSVGModule,
      NgApexchartsModule,
      NgbDropdownModule,
      NgbModule,
      CRUDTableModule,
    ],
  })
  export class ActividadesModule {}