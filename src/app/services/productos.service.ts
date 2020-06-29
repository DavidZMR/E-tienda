import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/Producto';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable()
export class ProductosService {

  items: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) { 
    this.items = db.list('productos');
  }

  getProductos(): AngularFireList<any> {
    this.items = this.db.list('productos');
    return this.items;
  }

  addProducto(des:string,fecha:string,nom: string, precio: number) {
    let prod = new Producto();
    prod.des= des;
    prod.fecha=fecha;
    prod.nom = nom;
    prod.precio = precio;
    this.db.list('prom/push').push(prod);
  }
}
