import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UnidadeProxima {
  nome: string;
  local: string;
  distancia: string;
  imagem?: string;
}

@Component({
  selector: 'app-detalhes-unidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-unidade.html',
  styleUrls: ['./detalhes-unidade.scss']
})
export class DetalhesUnidadeComponent {
  // Lista de fotos reais do Bistrô
  fotos: string[] = [
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/BISTRO_SESCRJ_3515-2048x1365.jpg',
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/convento-do-carmo-2.jpg',
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/convento-do-carmo-3.jpg',
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/convento-do-carmo.jpg'
  ];

  unidadesProximas: UnidadeProxima[] = [
    {
      nome: 'Centro de Ciencias e Cultur...',
      local: 'Rio de Janeiro, RJ',
      distancia: '448 m'
    },
    {
      nome: 'Teatro Sesc Ginástico',
      local: 'Rio de Janeiro, RJ',
      distancia: '537 m',
      imagem: 'assets/teatro-sesc.jpg'
    },
    {
      nome: 'Sesc Santa Luzia',
      local: 'Rio de Janeiro, RJ',
      distancia: '824 m',
      imagem: 'assets/sesc-santa-luzia.jpg'
    },
    {
      nome: 'Restaurante Popular da...',
      local: 'Rio de Janeiro, RJ',
      distancia: '2,1 km',
      imagem: 'assets/restaurante-popular.jpg'
    }
  ];
}