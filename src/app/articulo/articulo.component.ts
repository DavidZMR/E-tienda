import { Component, OnInit, Input } from '@angular/core';
import { ArticulosService, Articulo } from '../articulos.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})

export class ArticuloComponent implements OnInit {
  @Input() articulo:Articulo;
  constructor(public articuloService:ArticulosService, public activatedRoute:ActivatedRoute) { 
    
    this.activatedRoute.params.subscribe(params => {
      console.log("parametro: "+params['id']);
      this.articulo=articuloService.getArt(params['id']);
      console.log(this.articulo);
    });

  }
  ngOnInit(): void {
  }

}

