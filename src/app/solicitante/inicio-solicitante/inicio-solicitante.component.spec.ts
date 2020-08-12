import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSolicitanteComponent } from './inicio-solicitante.component';

describe('InicioSolicitanteComponent', () => {
  let component: InicioSolicitanteComponent;
  let fixture: ComponentFixture<InicioSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
