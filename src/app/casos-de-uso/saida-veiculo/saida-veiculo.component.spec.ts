import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaVeiculoComponent } from './saida-veiculo.component';

describe('SaidaVeiculoComponent', () => {
  let component: SaidaVeiculoComponent;
  let fixture: ComponentFixture<SaidaVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaidaVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaidaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
