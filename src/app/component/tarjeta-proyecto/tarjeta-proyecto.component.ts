import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-proyecto',
  templateUrl: './tarjeta-proyecto.component.html',
  styleUrls: ['./tarjeta-proyecto.component.css']
})
export class TarjetaProyectoComponent {

  @Input() proyecto: Proyecto;

  public mostrarInfo(){
    console.log(this.proyecto);
    
    Swal.fire({
      title: this.proyecto.nombre,
      text: `${this.proyecto.explicacion}`,
      footer: `
        <a href="${this.proyecto.url}" target="_blank" style="text-decoration: none; color: var(--turquesa); font-size: 24px">
          ${this.proyecto.url}
        </a>`
        })
  }

  public irApp() {
    // URL del enlace al que deseas redirigir
    const url = 'https://3-en-raya.vercel.app/';
  
    // Abre el enlace en una nueva pestaña o ventana del navegador
    window.open(url, '_blank');
  }
  

}
