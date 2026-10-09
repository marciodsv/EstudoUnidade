import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesComponent } from '../../componentes/unidades/unidades.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UnidadesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}