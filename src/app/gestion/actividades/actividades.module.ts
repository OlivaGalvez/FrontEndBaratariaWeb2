import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WidgetsModule } from "src/app/_metronic_gestion/partials/content/widgets/widgets.module";
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
      WidgetsModule,
    ],
  })
  export class ActividadesModule {}