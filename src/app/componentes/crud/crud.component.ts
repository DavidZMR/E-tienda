import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../modelos/Producto';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  mostrarAgregar:boolean=false;
  mostrarEliminar:boolean=false;
  mostrarActualizar:boolean=false;
  fs;
  altas;

  constructor(public router:Router, public formBuilder:FormBuilder) {
    this.altas=formBuilder.group({
      nombre:['',Validators.required],
      des:['',Validators.required],
      precio:['',Validators.required],
      fecha:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  getProductos() {
    let s = this.fs.getProductos();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)

      let productos = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        console.log(a);

         productos.push(a as Producto);
      })

      for (let p in productos) {
        console.log(p);
      }
    });
  }

  agregar():void{
    this.mostrarAgregar=true;
    this.mostrarEliminar=false;
    this.mostrarActualizar=false;
  }
  altasSubmit():void{
    if (this.altas.valid) {
      console.log(this.altas.value);
    }
    else {
      alert ( " FILL ALL FIELDS ");
    }
  }
  eliminar():void{
    this.mostrarEliminar=true;
    this.mostrarActualizar=false;
    this.mostrarAgregar=false;
  }
  actualizar():void{
    this.mostrarActualizar=true;
    this.mostrarEliminar=false;
    this.mostrarAgregar=false;
  }
}
