import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async fireLogin(correo: string, pass: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(correo, pass);
    console.log("Login result: ");
    console.log(result);
    
    
    return result;
  }

  async fireRegister(correo: string, pass: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(correo, pass);
    console.log("Registrado: " + correo + " (" + pass + "): ");
    
    return result;
  }

  async logout() {
    await this.afAuth.signOut();
  }

  getCurrentUser() {
    //return this.afAuth.authState.pipe(first()).toPromise();
  }
}
