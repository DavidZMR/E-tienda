import { CheckSessionService } from './../../services/check-session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.css']
})
export class LoginButtonsComponent implements OnInit {
  session: boolean = false;
  

  constructor(public checkSessionService: CheckSessionService, public router: Router) { 
    this.checkSession();
    console.log(this.session, localStorage['usuario']);
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
    location.reload();
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
