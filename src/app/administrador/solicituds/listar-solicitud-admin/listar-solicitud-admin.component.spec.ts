import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudAdminComponent } from './listar-solicitud-admin.component';

describe('ListarSolicitudAdminComponent', () => {
  let component: ListarSolicitudAdminComponent;
  let fixture: ComponentFixture<ListarSolicitudAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
