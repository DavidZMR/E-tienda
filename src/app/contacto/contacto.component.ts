import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  ngOnInit(): void {
  }

  submit(){
    Swal.fire('¡Muy Bien!', '¡Tu Correo ha sido enviado exitosamente!', 'success');
  }
}


