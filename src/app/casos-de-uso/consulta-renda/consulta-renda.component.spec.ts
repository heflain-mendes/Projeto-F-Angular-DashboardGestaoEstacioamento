import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRendaComponent } from './consulta-renda.component';

describe('ConsultaRendaComponent', () => {
  let component: ConsultaRendaComponent;
  let fixture: ComponentFixture<ConsultaRendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaRendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
