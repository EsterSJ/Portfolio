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
        <a href="${this.proyecto.github}" target="_blank" style="text-decoration: none; color: var(--turquesa); font-size: 24px">
          ${this.proyecto.github}
        </a>`
        })
  }

  public irApp() {
    // const url = 'https://3-en-raya.vercel.app/';
    const url = this.proyecto.url;
    window.open(url, '_blank');
  }
  

}
