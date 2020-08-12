import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuarioProyectoComponent } from './agregar-usuario-proyecto.component';

describe('AgregarUsuarioProyectoComponent', () => {
  let component: AgregarUsuarioProyectoComponent;
  let fixture: ComponentFixture<AgregarUsuarioProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarUsuarioProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarUsuarioProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
