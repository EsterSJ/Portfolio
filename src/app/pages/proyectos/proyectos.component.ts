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
      new Proyecto("BookEster", "assets/img/bookEster.png", "Este proyecto fué creado desde cero para la gestión de una librería online. En ella puedes registrarte y gestionar el perfil de tu usuario. Cada usuario podrá añadir libros a su lista, visualizarlos y buscar y si es necesario modificar alguno de los libros de su lista.", "https://app-library-five.vercel.app/", "https://github.com/EsterSJ/appLibrary"),
      new Proyecto("3 en Raya", "assets/img/3enRaya.png", "Juego de 3 en raya inspirado en Super Mario Bross desarrollado en colaboración. Actualmente está disponible en versión local para seguir desarrollando una versión donde dos jugadores puedan jugar desde diferentes lugares del mundo. Puedes elegir el personaje que mas te guste para cada jugador y ponerle tu nombre. ¡Que no pare la diversión!", "https://3-en-raya.vercel.app/", "https://github.com/EsterSJ"),
      new Proyecto("TuneTales", "assets/img/tunetales.png", "Red social para amantes del mundo de la música. Desarrollado en colaboración con un equipo de desarrollo ful stack, utilizando tecnologías punteras como GCS. Implementa funcionalidades como registro y login de usuario, configuración de perfil, gestión de publicacione y eventos y exploración e interacción de publicaciones de otros usuarios de la red.", "https://tune-tales.vercel.app/", "https://github.com/EsterSJ/TuneTales"),
      new Proyecto("Portfolio", "assets/img/portfolio.png", "Diseño y desarrollo de portfolio personalizado. Creación de mi propio portfolio personal desde el diseño basado en herramientas como Figma creando una interfaz y experiencia de usuario de éxito. en este proyecto puedes explorar mis propios proyectos, descargar mi CV, conocerme un poquito mejor a través de mi videoCV y contactar conmigo a través de diferentes vías. ¿Conectamos?", "https://portfolioestersj.vercel.app/", "https://github.com/EsterSJ/Portfolio"),
      new Proyecto("Próximamente", "assets/img/construccion.jpg", "Mi próximo proyecto en el que estoy trabajando, consiste en crear una aplicación de identificacion de IPs. En esta ocasión al no tratarse de un proyecto full stack quiero destacar la parte del diseño y crear una interfaz impactante...NEVER KEEP CODING!", "", ""),
    ];
  }
}
