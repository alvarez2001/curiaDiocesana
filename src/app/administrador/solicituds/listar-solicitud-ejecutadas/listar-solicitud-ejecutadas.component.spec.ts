import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudEjecutadasComponent } from './listar-solicitud-ejecutadas.component';

describe('ListarSolicitudEjecutadasComponent', () => {
  let component: ListarSolicitudEjecutadasComponent;
  let fixture: ComponentFixture<ListarSolicitudEjecutadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudEjecutadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudEjecutadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
