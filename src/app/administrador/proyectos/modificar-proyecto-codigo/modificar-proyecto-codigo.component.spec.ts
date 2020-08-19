import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProyectoCodigoComponent } from './modificar-proyecto-codigo.component';

describe('ModificarProyectoCodigoComponent', () => {
  let component: ModificarProyectoCodigoComponent;
  let fixture: ComponentFixture<ModificarProyectoCodigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProyectoCodigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarProyectoCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
