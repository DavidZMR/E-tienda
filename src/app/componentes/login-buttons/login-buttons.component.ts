import { CheckSessionService } from './../../services/check-session.service';
import Swal from 'sweetalert2'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.css']
})
export class LoginButtonsComponent implements OnInit {
  session: boolean = false;
  usu: any;

  constructor(public checkSessionService: CheckSessionService, public router: Router) { 
    this.session = false;
    this.checkSession();
    this.usu = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.usu.nombre, localStorage['usuario']);
   }

  ngOnInit(): void {
  }

  goLogin(){
    this.router.navigate(['/login']);
  }
  goRegister(){
    this.router.navigate(['/register']);
  }
  logout(){
    localStorage.removeItem('usuario');
    console.log(localStorage['usuario']);
    Swal.fire({
      icon: 'success',
      title: 'Sesion Cerrada',
      showConfirmButton: false,
      timer: 1500
    })
    this.sleep(3000);
    location.reload();
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  checkSession(){
    
    if(localStorage.length == 0){
      this.session=false;
    }
    if(localStorage['usuario'] != null || this.checkSessionService.inSession === true){
      this.session=true;
    }
  }

}
