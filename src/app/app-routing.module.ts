<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import {ContactoComponent} from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RegistroComponent } from './registro/registro.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ArticuloComponent } from '../app/articulo/articulo.component';

const routes: Routes = [

   {path: 'home', component:HomeComponent},
   {path: 'tienda', component:TiendaComponent},
   {path: 'contacto', component:ContactoComponent},
   {path: 'acercade', component:AcercadeComponent},
   {path: 'preguntas', component:PreguntasComponent},
   {path: 'registro', component:RegistroComponent},
   {path: 'ingreso', component:IngresoComponent},
   {path: 'articulo/:id', component:ArticuloComponent},
  {path: 'buscador/:nombre', component:BuscadorComponent},
   {path: '**', pathMatch:'full', redirectTo: 'home'}
=======
import { RegisterComponent } from './componentes/login/register/register.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
>>>>>>> 1aa9d60ad1b0b3644cbbb474812ed982cbea8982
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD



=======
>>>>>>> 1aa9d60ad1b0b3644cbbb474812ed982cbea8982
