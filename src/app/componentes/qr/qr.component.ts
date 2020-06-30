import { Component, OnInit } from '@angular/core';
import {CodigoqrService} from '../../services/codigoqr.service';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  vCardInfo:string;
  obj;
  constructor(public codigoqrService:CodigoqrService) {
    
    let name = 'Oscar',
    surname = 'Mora',
    org = 'Google',
    url = 'www.google.com',
    email = 'Oscar@Mora.com',
    tel = '000 111 222';

//     this.vCardInfo = `BEGIN:VCARD
// VERSION:3.0
// N:${this.obj[0].nombre}
// FN:${surname} ${name}
// ORG:${this.obj[0].org}
// URL:${this.obj[0].descuento}
// EMAIL:${this.obj[0].correo}
// TEL;TYPE=voice,work,oref:${this.obj[0].Telefono}
// END:VCARD`
   }
   

  ngOnInit(): void {
    let urlapi=`http://localhost:3000/qr`;
    this.codigoqrService.getJson(urlapi)
    .subscribe((data:any)=>{
      console.log(data);
      this.obj=data;
    });
  }

}
