import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudRevisadasListoComponent } from './listar-solicitud-revisadas-listo.component';

describe('ListarSolicitudRevisadasListoComponent', () => {
  let component: ListarSolicitudRevisadasListoComponent;
  let fixture: ComponentFixture<ListarSolicitudRevisadasListoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudRevisadasListoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudRevisadasListoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
