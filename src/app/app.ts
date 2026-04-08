import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink , CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nombreUsuario:string='';

  constructor(private auth:AuthService){

    this.auth.usuario$.subscribe(usuario=>{

      if(usuario){

        this.nombreUsuario=usuario.nombre.toUpperCase();

      }else{

        this.nombreUsuario='';

      }

    });

  }

  logout(){

    this.auth.logout();

  }

}