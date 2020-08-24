import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudRechazadasComponent } from './listar-solicitud-rechazadas.component';

describe('ListarSolicitudRechazadasComponent', () => {
  let component: ListarSolicitudRechazadasComponent;
  let fixture: ComponentFixture<ListarSolicitudRechazadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudRechazadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
