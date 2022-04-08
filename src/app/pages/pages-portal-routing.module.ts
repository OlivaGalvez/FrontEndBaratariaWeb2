import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      { 
        path: 'convenios', 
        loadChildren: () =>
          import('../portal/convenios/convenios.module').then((m) => m.ConveniosModule),
      },
      { 
        path: 'enlaces', 
        loadChildren: () =>
          import('../portal/enlaces/enlaces.module').then((m) => m.EnlacesModule),
      },
      { 
        path: 'asociacion', 
        loadChildren: () =>
          import('../portal/asociacion/asociacion.module').then((m) => m.AsociacionModule),
      },
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
