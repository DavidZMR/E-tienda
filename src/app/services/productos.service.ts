import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/Producto';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable()
export class ProductosService {

  items: AngularFireList<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.items = db.list('promociones/prox');
  }

  getProductos(): AngularFireList<any> {
    this.items = this.db.list('promociones/prox');
    return this.items;
  }

  addProducto(prod:Producto) {
    //let prod = new Producto();
    //prod.cantidad=cantidad;
    // prod.des= des;
    // prod.fecha= fecha;
    // prod.nom = nom;
    // prod.precio = precio;
    console.log(prod+'servicio');
    this.db.list('promociones/prox').push(prod);
  }

  eraseProducto(nom:string){
    this.db.list('promociones/prox').remove(nom);
  }
}
