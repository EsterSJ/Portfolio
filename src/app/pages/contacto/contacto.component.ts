import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public enviar() {
    setTimeout(() => {
      Swal.fire(
        '¡Gracias!',
        'Mensaje enviado correctamente',
        'success'
      );
    }, 500); 
  }
  
}
