import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ServicesProvider } from '../../config/services';
import { CKEditorModule } from 'ckeditor4-angular';

//PQR routing
import { PQRRoutingModule } from './pqr-routing.module'


import { ObtenerFormatoComponent } from './obtener-formato/obtener-formato.component'
import { CrearCasoComponent } from './crear-caso/crear-caso.component'
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    ObtenerFormatoComponent,
    CrearCasoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    PQRRoutingModule,
    ChartsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers:[
    ServicesProvider
  ]
})
export class PQRModule { }
