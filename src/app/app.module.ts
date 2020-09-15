import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ModalComponent } from './views/modal/modal.component';
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthModule } from './auth/auth.module';
//Import Providers
import { ServicesProvider } from './config/services'; 
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr'


//Modulos PQR
import { PQRModule } from './views/pqr/pqr.module';
import { from } from 'rxjs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    AuthModule,
    ModalModule.forRoot(),
    HttpModule,
    ToastrModule.forRoot(), 
    PQRModule,
    CKEditorModule,
    FormsModule
  ],
  declarations: [
    ModalComponent,
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,

    
  ],
  providers: [
    ServicesProvider,
    DatePipe,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }

  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
