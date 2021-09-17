import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRelatorioComponent } from './usuario-relatorio.component';

describe('UsuarioRelatorioComponent', () => {
  let component: UsuarioRelatorioComponent;
  let fixture: ComponentFixture<UsuarioRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioRelatorioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
