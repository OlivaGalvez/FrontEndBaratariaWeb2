import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadesComponent } from '../portal/actividades/actividades.component';
import { EnlacesComponent } from '../portal/enlaces/enlaces.component';
import { InicioComponent } from '../portal/inicio/inicio.component';
import { LayoutComponent } from './_layout-portal/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      {
        path: 'actividades',
        loadChildren: () =>
          import('../portal/actividades/actividades.module').then((m) => m.ActividadesModule),
      },
      { path: 'enlaces', component: EnlacesComponent },
      {
        path: 'normativa',
        loadChildren: () =>
          import('../portal/normativa/normativa.module').then((m) => m.NormativaModule),
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
