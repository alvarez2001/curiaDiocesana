import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAliasProyectoComponent } from './agregar-alias-proyecto.component';

describe('AgregarAliasProyectoComponent', () => {
  let component: AgregarAliasProyectoComponent;
  let fixture: ComponentFixture<AgregarAliasProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAliasProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAliasProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
