import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioSubject = new BehaviorSubject<any>(this.obtenerUsuario());

  usuario$ = this.usuarioSubject.asObservable();



  registro(usuario:any){

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const existe = usuarios.find(
      (u:any)=> u.email === usuario.email
    );

    if(existe) return false;

    usuarios.push(usuario);

    localStorage.setItem(
      'usuarios',
      JSON.stringify(usuarios)
    );

    return true;

  }



  login(email:string, password:string){

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuario = usuarios.find(
      (u:any)=>
        u.email === email &&
        u.password === password
    );

    if(usuario){

      localStorage.setItem(
        'usuarioLogueado',
        JSON.stringify(usuario)
      );

      this.usuarioSubject.next(usuario);

      return usuario;

    }

    return null;

  }



  logout(){

    localStorage.removeItem('usuarioLogueado');

    this.usuarioSubject.next(null);

  }



  obtenerUsuario(){

    return JSON.parse(
      localStorage.getItem('usuarioLogueado') || 'null'
    );

  }

}