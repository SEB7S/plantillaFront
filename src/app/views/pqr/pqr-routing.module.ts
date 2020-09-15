import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//PQR routing
import { ObtenerFormatoComponent } from './obtener-formato/obtener-formato.component'
import { CrearCasoComponent } from './crear-caso/crear-caso.component'
const routes: Routes = [{
  path: '',
  data: {
    title: 'PQR'
  },
  children: [
    {
      path: "",
      redirectTo: "obtenerFormato",
      pathMatch: "full"
    },
    {
      path: 'obtenerFormato',
      component: ObtenerFormatoComponent,
      data: {
        title: 'Obtener Formato'
      }
    },
    {
      path: 'crearCaso',
      component: CrearCasoComponent,
      data: {
        title: 'Crear Caso'
      }
    },
  

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PQRRoutingModule { }
