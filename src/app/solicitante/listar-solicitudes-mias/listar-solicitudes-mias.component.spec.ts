import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudesMiasComponent } from './listar-solicitudes-mias.component';

describe('ListarSolicitudesMiasComponent', () => {
  let component: ListarSolicitudesMiasComponent;
  let fixture: ComponentFixture<ListarSolicitudesMiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudesMiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudesMiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
