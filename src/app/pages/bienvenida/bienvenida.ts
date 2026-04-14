import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../components/card/card';

interface CardData {
  titulo: string;
  subtitulo: string;
  imagen: string;
  link: string;
}

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})
export class Bienvenida {
  cards: CardData[] = [
    {
      titulo: 'Angular',
      subtitulo: 'Framework frontend para SPAs.',
      imagen: 'https://angular.io/assets/images/logos/angular/angular.svg',
      link: 'https://angular.dev/'
    },
    {
      titulo: 'TypeScript',
      subtitulo: 'JavaScript tipado para aplicaciones grandes.',
      imagen: 'https://www.typescriptlang.org/icons/icon-512x512.png',
      link: 'https://www.typescriptlang.org/'
    },
    {
      titulo: 'Bootstrap',
      subtitulo: 'Componentes y estilos responsive.',
      imagen: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      link: 'https://getbootstrap.com/'
    },
    {
      titulo: 'GitHub',
      subtitulo: 'Control de versiones y colaboracion.',
      imagen: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://github.com/'
    }
  ];
}
