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

    this.vCardInfo = `BEGIN:VCARD
VERSION:3.0
N:${};${this.obj.nombre}
FN:${surname} ${name}
ORG:${this.obj.org}
URL:${this.obj.descuento}
EMAIL:${this.obj.correo}
TEL;TYPE=voice,work,oref:${this.obj.Telefono}
END:VCARD`
   }
   

  ngOnInit(): void {
    let urlapi=`http://localhost:3000/qr`;
    this.codigoqrService.getJson(urlapi)
    .subscribe((data:any)=>{
      console.log(data);
      this.obj=data;
    });
  }