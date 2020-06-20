import { CheckSessionService } from './services/check-session.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginTelefonoComponent } from './componentes/login/login-telefono/login-telefono.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { RegisterComponent } from './componentes/login/register/register.component';
import { TelefonoComponent } from './componentes/login/telefono/telefono.component';
import { LoginButtonsComponent } from './componentes/login-buttons/login-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginTelefonoComponent,
    LoginComponent,
    RegisterComponent,
    TelefonoComponent,
    LoginButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    CheckSessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
