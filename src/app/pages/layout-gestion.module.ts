import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { PagesRoutingModule } from './pages-gestion-routing.module';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslationModule } from '../modules/i18n/translation.module';
import { LayoutComponent } from './_layout-gestion/layout.component';
import { ScriptsInitComponent } from './_layout-gestion/init/scipts-init/scripts-init.component';
import { HeaderMobileComponent } from './_layout-gestion/components/header-mobile/header-mobile.component';
import { AsideComponent } from './_layout-gestion/components/aside/aside.component';
import { FooterComponent } from './_layout-gestion/components/footer/footer.component';
import { HeaderComponent } from './_layout-gestion/components/header/header.component';
import { HeaderMenuComponent } from './_layout-gestion/components/header/header-menu/header-menu.component';
import { TopbarComponent } from './_layout-gestion/components/topbar/topbar.component';
import { ExtrasModule } from '../_metronic_gestion/partials/layout/extras/extras.module';
import { LanguageSelectorComponent } from './_layout-gestion/components/topbar/language-selector/language-selector.component';
import { CoreModule } from '../_metronic_gestion/core';
import { SubheaderModule } from '../_metronic_gestion/partials/layout/subheader/subheader.module';
import { AsideDynamicComponent } from './_layout-gestion/components/aside-dynamic/aside-dynamic.component';
import { HeaderMenuDynamicComponent } from './_layout-gestion/components/header/header-menu-dynamic/header-menu-dynamic.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ScriptsInitComponent,
    HeaderMobileComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    LanguageSelectorComponent,
    AsideDynamicComponent,
    HeaderMenuDynamicComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslationModule,
    InlineSVGModule,
    ExtrasModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    CoreModule,
    SubheaderModule,
  ],
})
export class LayoutModule { }
