import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesUnidade } from './detalhes-unidade';

describe('DetalhesUnidade', () => {
  let component: DetalhesUnidade;
  let fixture: ComponentFixture<DetalhesUnidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesUnidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesUnidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
