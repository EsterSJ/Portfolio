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
    
    const url = this.proyecto.github;
    window.open(url, '_blank');

  }

  public irApp() {
    const url = this.proyecto.url;
    window.open(url, '_blank');
  }
  

}
