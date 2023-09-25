import { Component } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  public proyectos: Proyecto[];

  constructor(){
    this.proyectos = [
      new Proyecto("BookEster", "assets/img/bookEster.png", "Gestion de libreria online", "https://app-library-five.vercel.app/", "https://github.com/EsterSJ/appLibrary"),
      new Proyecto("3 en Raya", "assets/img/3enRaya.png", "Juego de 3 en raya inspirado en Super Mario Bross", "https://3-en-raya.vercel.app/", "https://github.com/EsterSJ"),
      new Proyecto("TuneTales", "assets/img/tunetales.png", "Red social para músicos", "https://tune-tales.vercel.app/", "https://github.com/EsterSJ/TuneTales"),
      new Proyecto("Portfolio", "assets/img/portfolio.png", "Diseño y desarrollo de portfolio personalizado", "https://tune-tales.vercel.app/", "https://github.com/EsterSJ/Portfolio"),
      new Proyecto("Gestión de vehículos", "assets/img/construccion.jpg", "Aplicación en construcción", "", ""),
    ];
  }
}
