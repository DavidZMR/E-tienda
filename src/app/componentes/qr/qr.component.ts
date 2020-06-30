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
      this.vCardInfo = 'BEGIN:VCARD VERSION:3.0 N:'+
      nombre +nombre +' FN:'+nombre + nombre+'ORG:'+data.org+
      'URL:'+data.descuento+
      'EMAIL:'+data.correo+
      'TEL;TYPE=voice,work,oref:'+data.Telefono+
      'END:VCARD'
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
