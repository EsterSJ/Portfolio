import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

public   descargarCV() {
  const url = '/assets/CV_Ester.pdf';
  const anchor = document.createElement('a');
  anchor.setAttribute('href', url);
  anchor.setAttribute('download', 'CV_Ester.pdf'); 
  anchor.click();
}

public videoCV(){
  Swal.fire({
    html: `
      <div class="video_container">
        <iframe src="assets/img/videoCV.mp4" frameborder="0" allowfullscreen></iframe>
      </div>
    `,
    width: '600px',
    showCancelButton: true,
    showConfirmButton: false,
  });
  
}

}
