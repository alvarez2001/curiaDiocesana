import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProyectoUsuarioComponent } from './modificar-proyecto-usuario.component';

describe('ModificarProyectoUsuarioComponent', () => {
  let component: ModificarProyectoUsuarioComponent;
  let fixture: ComponentFixture<ModificarProyectoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProyectoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarProyectoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
