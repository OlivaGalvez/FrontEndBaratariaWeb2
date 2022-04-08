import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";
import { InlineSVGModule } from "ng-inline-svg";
import { DropdownMenusModule } from "src/app/_metronic_portal/partials/content/dropdown-menus/dropdown-menus.module";
import { AsociacionComponent } from "./asociacion.component";

@NgModule({
    declarations: [AsociacionComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: AsociacionComponent,
        }
      ]),
      DropdownMenusModule,
      InlineSVGModule,
      NgApexchartsModule,
      NgbDropdownModule,
      NgbModule
    ],
  })
  export class AsociacionModule {}