import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Unidade } from './unidade.model';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent {
  private router = inject(Router);

  unidadeDestaque: Unidade = {
    id: 1,
    nome: 'Teatro Sesc Ginástico', //[cite: 1]
    localizacao: 'Rio de Janeiro, RJ',
    distancia: '0 m',
    imagemUrl: 'assets/images/sesc-ginastico.jpg',
    destaque: true //[cite: 1]
  };

  unidades: Unidade[] = [
    {
      id: 2,
      nome: 'Bistrô Sesc Convento do Carmo', //[cite: 1]
      localizacao: 'Rio de Janeiro, RJ', //[cite: 1]
      distancia: '912 m', //[cite: 1]
      imagemUrl: 'assets/images/convento-carmo.jpg'
    },
    {
      id: 3,
      nome: 'Centro de Ciencias e Culturas Sesc RJ', //[cite: 1]
      localizacao: 'Rio de Janeiro, RJ', //[cite: 1]
      distancia: '919 m', //[cite: 1]
      imagemUrl: '' //[cite: 1]
    },
    {
      id: 4,
      nome: 'Sesc Santa Luzia', //[cite: 1]
      localizacao: 'Rio de Janeiro, RJ', //[cite: 1]
      distancia: '976 m', //[cite: 1]
      imagemUrl: 'assets/images/santa-luzia.jpg'
    },
    {
      id: 5,
      nome: 'Restaurante Popular da Central do Brasil', //[cite: 1]
      localizacao: 'Rio de Janeiro, RJ', //[cite: 1]
      distancia: '1,3 km', //[cite: 1]
      imagemUrl: 'assets/images/restaurante-popular.jpg'
    },
    {
      id: 6,
      nome: 'Arte Sesc', //[cite: 1]
      localizacao: 'Rio de Janeiro, RJ', //[cite: 1]
      distancia: '3,4 km', //[cite: 1]
      imagemUrl: 'assets/images/arte-sesc.jpg'
    },
    {
      id: 7,
      nome: 'Sesc Botafogo', //[cite: 1]
      localizacao: 'Rio de Janeiro, RJ', //[cite: 1]
      distancia: '5,0 km', //[cite: 1]
      imagemUrl: 'assets/images/botafogo.jpg'
    }
  ];

  irParaDetalhes(id: number): void {
    this.router.navigate(['/detalhes-unidade', id]);
  }
}