import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { AccordionModule, ButtonModule, CardModule, FormModule, GridModule, ListGroupModule, SharedModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ExtractosComponent } from './extractos/extractos.component';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    ExtractosComponent
  ],
  imports: [
    AccordionModule,
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    DocsComponentsModule,
    ListGroupModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule {
}
