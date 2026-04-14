import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService, GithubUser } from '../../services/github';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
  usuarioGithub: GithubUser | null = null;
  cargando = true;
  error = false;
  mensajeError = '';

  private readonly githubUsername = 'Ondercraw';

  constructor(
    private githubService: GithubService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.githubService.getUser(this.githubUsername).subscribe({
      next: (data) => {
        this.usuarioGithub = data;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = true;
        this.mensajeError = 'No se pudieron obtener los datos de GitHub. Revisa tu conexion o intenta mas tarde.';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}
