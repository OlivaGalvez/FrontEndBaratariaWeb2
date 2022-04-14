import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../gestion/inicio/inicio/inicio.component';
import { LayoutComponent } from './_layout-gestion/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      {
        path: 'actividad',
        loadChildren: () =>
          import('../gestion/actividades/actividades.module').then((m) => m.ActividadesModule),
      },
      {
        path: 'convenio',
        loadChildren: () =>
          import('../gestion/convenios/convenios.module').then((m) => m.ConveniosModule),
      },
      {
        path: 'enlaces',
        loadChildren: () =>
          import('../gestion/enlaces/enlaces.module').then((m) => m.EnlacesModule),
      },
      {
        path: 'ofertas',
        loadChildren: () =>
          import('../gestion/ofertas/ofertas.module').then((m) => m.OfertasModule),
      },
      {
        path: '',
        redirectTo: '/admin/inicio',
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
