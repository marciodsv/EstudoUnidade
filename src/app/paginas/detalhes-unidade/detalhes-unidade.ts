import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UnidadeProxima {
  nome: string;
  local: string;
  distancia: string;
  imagem?: string;
  imagemErro?: boolean; // Flag para controlar se a imagem falhou ao carregar
}

@Component({
  selector: 'app-detalhes-unidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-unidade.html',
  styleUrls: ['./detalhes-unidade.scss']
})
export class DetalhesUnidadeComponent {
  // Nome do bistrô centralizado
  nomeBistro: string = 'Bistrô Sesc Convento do Carmo';

  fotos: string[] = [
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/BISTRO_SESCRJ_3515-2048x1365.jpg',
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/convento-do-carmo-2.jpg',
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/convento-do-carmo-3.jpg',
    'https://www.sescrio.org.br/wp-content/uploads/2023/10/convento-do-carmo.jpg'
  ];

  modalAberto = false;
  fotoSelecionadaIndex = 0;

  abrirModal(index: number = 0): void {
    this.fotoSelecionadaIndex = index;
    this.modalAberto = true;
  }

  fecharModal(): void {
    this.modalAberto = false;
  }

  fotoAnterior(event?: Event): void {
    event?.stopPropagation();
    this.fotoSelecionadaIndex =
      (this.fotoSelecionadaIndex - 1 + this.fotos.length) % this.fotos.length;
  }

  fotoProxima(event?: Event): void {
    event?.stopPropagation();
    this.fotoSelecionadaIndex =
      (this.fotoSelecionadaIndex + 1) % this.fotos.length;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.modalAberto) return;
    if (event.key === 'Escape') this.fecharModal();
    if (event.key === 'ArrowLeft') this.fotoAnterior();
    if (event.key === 'ArrowRight') this.fotoProxima();
  }

  // Método disparado quando uma imagem falha ao carregar
  tratarErroImagem(unidade: UnidadeProxima): void {
    unidade.imagemErro = true;
  }

  unidadesProximas: UnidadeProxima[] = [
    {
      nome: 'Centro de Ciências e Cultu...',
      local: 'Rio de Janeiro, RJ',
      distancia: '448 m',
      imagem: 'https://fvinhas.github.io/sescdigital/#/unit/centro-de-ciencias-e-culturas-sesc-rj/x.jpg' // Link quebrado
    },
    {
      nome: 'Teatro Sesc Ginástico',
      local: 'Rio de Janeiro, RJ',
      distancia: '537 m',
      imagem: 'https://cdnsesc.azureedge.net/assets/2021/09/WhatsApp-Image-2022-01-27-at-13.17.59-1024x453.jpeg'
    },
    {
      nome: 'Sesc Santa Luzia',
      local: 'Rio de Janeiro, RJ',
      distancia: '824 m',
      imagem: 'https://cdnsesc.azureedge.net/assets/2021/09/ANF72682-550x330-1.jpg'
    },
    {
      nome: 'Restaurante Popular da...',
      local: 'Rio de Janeiro, RJ',
      distancia: '2,1 km',
      imagem: 'https://www.sescrio.org.br/wp-content/uploads/2025/12/restaurante-do-povo-5-768x513.jpg'
    }
  ];
}