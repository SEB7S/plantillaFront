import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesProvider} from '../../../config/services'
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'obtener-formato',
  templateUrl: 'obtener-formato.component.html',
  styleUrls: ['./obtener-formato.component.scss']
})
export class ObtenerFormatoComponent implements OnInit{
  ckeditorContent: string ;
  arbol:any

  public model = {
    editorData: `<p style="margin-left:40px">Se&ntilde;or(a)<br />
    Mateo Garc&iacute;a Lopez<br />
    Tel&eacute;fono 3101115456<br />
    Direcci&oacute;n carrera 32 # 23-23<br />
    Manizales, Caldas<br />
    Correo electr&oacute;nico: mateogarcia@gmail.com</p>
    
    <p style="margin-left:40px">Asunto: Respuesta al radicado 2020022000123&nbsp;del 10 de 08&nbsp;de 2020.</p>
    
    <p style="margin-left:40px">Requerimiento CHEC No. 123456789<br />
    Instalaci&oacute;n CHEC No. 55224563</p>
    
    <p style="margin-left:40px">Cordial saludo se&ntilde;or(a) Mateo Garcia Lopez:<br />
    Para CHEC es muy importante conocer y entender sus necesidades, por ello, analizamos<br />
    su requerimiento relacionado con el beneficio de exenci&oacute;n a la contribuci&oacute;n de solidaridad,<br />
    y con el fin de brindarle una soluci&oacute;n, le informamos lo siguiente:<br />
    Validado el cumplimiento de los requisitos establecidos en el decreto 2860 de 2013, y<br />
    teniendo en cuenta que la actividad econ&oacute;mica principal que se desarrolla en el inmueble<br />
    se encuentra dentro de las actividades exentas de contribuci&oacute;n, <strong>CHEC encontr&oacute;<br />
    procedente otorgar este beneficio tributario a partir de los consumos de <span style="color:#c0392b">noviembre<br />
    de 2019.</span></strong><br />
    As&iacute; mismo, le recordamos la importancia de que nos presente el RUT actualizado entre el<br />
    mes de <span style="color:#cc0000">marzo y abril de 2020</span> para no perder este beneficio.<br />
    Realizar este tr&aacute;mite le hubiera generado descuentos en sus &uacute;ltimas 6 facturas de<br />
    $<span style="color:#c0392b">00.000</span><br />
    Para solicitar la continuidad puede ingresar a la p&aacute;gina web en el siguiente link<br />
    <u><span style="color:#3498db">https://www.chec.com.co/clientes-y-usuarios/Tramites-y-servicios?modo=2</span></u> en el m&oacute;dulo<br />
    de recepci&oacute;n de PQR y adjuntar el RUT con una vigencia no superior a los 30 d&iacute;as,<br />
    tambi&eacute;n podr&aacute; hacerlo a trav&eacute;s de nuestras oficinas de atenci&oacute;n al cliente.<br />
    Por &uacute;ltimo, le queremos extender una invitaci&oacute;n para que revise nuestro portafolio de<br />
    gesti&oacute;n energ&eacute;tica el cual le adjuntamos, cuyo objetivo es brindarle servicios, soluciones y<br />
    beneficios para su empresa. Si se encuentra interesado, por favor contactarnos al correo<br />
    electr&oacute;nico <span style="color:#3498db"><u>ofertasempresaschec@chec.com.co</u></span>, al tel&eacute;fono 8899000 extensi&oacute;n 1922, o al<br />
    #415.</p>`
};
  @ViewChild(CKEditorModule) ckEditor: CKEditorModule
  aPregunta:any =[]
  bMostrarPregunta = false
  bMostrarFormato= false
  constructor(public ServicesProvider: ServicesProvider) { }


  ngOnInit(){
    this.obtenerArbol();
  }
  obtenerArbol(){
    this.ServicesProvider.getjson("../../../../assets/data/proceso.json", {}).then(response => {
      this.arbol = response
     console.log(response)
    })

  }

  validarPQR(form) :void{
    /* this.ServicesProvider.preloaderOn() */
    console.log('Id', form.value.id_pqr, this.arbol[0].id_caso)
    if (this.arbol[0].id_caso == form.value.id_pqr) {

        this.ServicesProvider.preloaderOn()

      setTimeout(() => {
        this.bMostrarPregunta = true
        this.aPregunta.push(this.arbol[0].arbol[0])
        console.log(this.aPregunta)
      }, 3000);
    }
    setTimeout(() => {
      this.ServicesProvider.preloaderOff()
    }, 4000);
    

  }

  obtenerRespuesta(respuesta){
    console.log(respuesta)
    console.log(this.aPregunta)
    let aCopiaArbol
    for(let i in this.aPregunta){
      for(let j in this.aPregunta[i].respuesta){
        console.log(this.aPregunta[i].respuesta[j].texto_respuesta)

        if (this.aPregunta[i].respuesta[j].texto_respuesta == respuesta) {
          this.ServicesProvider.preloaderOn()
          setTimeout(() => {
            aCopiaArbol = this.aPregunta
            if(this.aPregunta[i].respuesta[j].nuevas_hojas.length ==0){this.bMostrarFormato = true}
            this.aPregunta = []
            this.aPregunta = aCopiaArbol[i].respuesta[j].nuevas_hojas
            aCopiaArbol= []
            this.ServicesProvider.preloaderOff()
          }, 1000);

        }
      
      }
    }
  }

  recorrerArbol(){

  }


 
}
