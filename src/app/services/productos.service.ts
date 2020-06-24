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

  addProducto(nombre: string, cantidad: number) {
    let prod = new Producto();
    prod.nombre = nombre;
    prod.cantidad = cantidad;
    this.db.list('productos').push(prod);
  }
}
