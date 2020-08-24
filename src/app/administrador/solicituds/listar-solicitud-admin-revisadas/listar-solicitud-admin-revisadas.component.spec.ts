import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudAdminRevisadasComponent } from './listar-solicitud-admin-revisadas.component';

describe('ListarSolicitudAdminRevisadasComponent', () => {
  let component: ListarSolicitudAdminRevisadasComponent;
  let fixture: ComponentFixture<ListarSolicitudAdminRevisadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudAdminRevisadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudAdminRevisadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
