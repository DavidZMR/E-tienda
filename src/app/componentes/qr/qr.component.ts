import { Component, OnInit } from '@angular/core';
import {CodigoqrService} from '../../services/codigoqr.service';
import { database } from 'firebase';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  vCardInfo:string;
  obj:any;
  constructor(public codigoqrService:CodigoqrService) {
    let urlapi=`http://localhost:3000/qr`;
    this.codigoqrService.getJson(urlapi)
    .subscribe((data:any)=>{
      console.log(data);
      console.log(data["Telefono"]);
      console.log(data.Telefono);
      let nombre=data.nombre;
      this.obj=data;
      console.log(this.obj['Telefono']);
      this.vCardInfo = 'Nombre'+
      nombre+' '+data.Apellido +'\n Sitio web: '+data.org+
      '\nValido por un descuento de: '+data.descuento+
      '\nCodigo descuento ->: '+data.codigoDescuento+
      '\nEMAIL: '+data.correo+
      '\nTelefono: '+data.Telefono;
    });
    let name = 'Oscar',
    surname = 'Mora',
    org = 'Google',
    url = 'www.google.com',
    email = 'Oscar@Mora.com',
    tel = '000 111 222';

   
   }
   

  ngOnInit(): void {
    
  }

}
