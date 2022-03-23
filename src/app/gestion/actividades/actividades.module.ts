import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
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

      FormsModule,
      ReactiveFormsModule,
    ],
  })
  export class ActividadesModule {}