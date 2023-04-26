import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaVeiculoComponent } from './entrada-veiculo.component';

describe('EntradaVeiculoComponent', () => {
  let component: EntradaVeiculoComponent;
  let fixture: ComponentFixture<EntradaVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
