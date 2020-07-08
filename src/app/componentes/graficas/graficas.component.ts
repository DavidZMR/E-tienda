import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CrudComponent } from '../crud/crud.component';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] }
  };
  public barChartLabels: Label[] = ['Tortillas', 'Queso', 'Chorizo', 'Refrescos', 'Sal', 'Azucar'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  datos;
  
  public barChartData: ChartDataSets[] = [
    { data: [1,1,1,1,1,1], label: 'Mercancia' }
   // { data: [1,1,1,1,1,1], label: 'Junio' }
  ];
  arreglo:number[][]=[[1,2,3,4,5,6],[0,0,0,0,0,0]];
  constructor(public crudComponent:CrudComponent) { 
    this.llenarArreglo();
    console.log(this.arreglo);
    this.datos=crudComponent.productos;
    let i=0;
    for (let dat of this.datos){
      this.arreglo[0][i]=dat.cantidad;
      i++;
    }
    
        //console.log(this.barChartLabels.length);
       // this.barChartData[0].data = this.arreglo[0];
        
      
    
  }

  ngOnInit() {
  }
  llenarArreglo(): void {
    for(let a=0;a<2;a++){
    for ( let i = 0; i < 6 ; i++){
      this.arreglo[a][i]=(Math.floor((Math.random() * (i < 2 ? 100 : 200)) + 1));
      
    }
  }
  console.log(this.arreglo);
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.llenarArreglo();
    // Only Change 3 values
    for (let i=0; i<2;i++){
      //console.log(this.barChartLabels.length);
      this.barChartData[i].data = this.arreglo[i];
    }
  }

}
