import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudPorAutorizacionComponent } from './listar-solicitud-por-autorizacion.component';

describe('ListarSolicitudPorAutorizacionComponent', () => {
  let component: ListarSolicitudPorAutorizacionComponent;
  let fixture: ComponentFixture<ListarSolicitudPorAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudPorAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudPorAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
