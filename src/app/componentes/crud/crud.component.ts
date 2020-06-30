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
  altas;borrar;
  p;
  productos: Producto [];

  constructor(public router:Router, public formBuilder:FormBuilder, public peticion:ProductosService) {
    this.altas=formBuilder.group({
      cantidad:['',Validators.required],
      des:['',Validators.required],
      fecha:['',Validators.required],
      nombre:['',Validators.required],
      precio:['',Validators.required]  
    });
    this.borrar=formBuilder.group({
      eliminar:['',Validators.required]
    })
    this.peticion.getProductos()
    .snapshotChanges()
    .subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      console.log("entre");
      this.productos = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        //a["nom"]=item.nom;
        console.log(a);

         this.productos.push(a as Producto);
      })

      for (this.p in this.productos) {
        console.log(this.p);
      }
    });
   }

  ngOnInit(): void {
    
  }

  agregar():void{
    this.mostrarAgregar=true;
    this.mostrarEliminar=false;
    this.mostrarActualizar=false;
  }
  altasSubmit():void{
    if (this.altas.valid) {
      console.log(this.altas.value);
      let a=this.altas.value;
      console.log(a.cantidad);
      this.peticion.addProducto(this.altas.value);
    }
    else {
      alert ( "Llena todos los campos porfavor ");
    }
  }
  eliminar():void{
    this.mostrarEliminar=true;
    this.mostrarActualizar=false;
    this.mostrarAgregar=false;
  }
  eliminarSubmit(){
    if(this.borrar.valid){
      this.peticion.eraseProducto(this.borrar.value.borrar);
    }
    else{
      alert("Llena el campo");
    }
  }
  actualizar():void{
    this.mostrarActualizar=true;
    this.mostrarEliminar=false;
    this.mostrarAgregar=false;
  }
}
