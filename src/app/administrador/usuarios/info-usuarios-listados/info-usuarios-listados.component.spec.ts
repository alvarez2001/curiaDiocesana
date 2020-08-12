import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsuariosListadosComponent } from './info-usuarios-listados.component';

describe('InfoUsuariosListadosComponent', () => {
  let component: InfoUsuariosListadosComponent;
  let fixture: ComponentFixture<InfoUsuariosListadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUsuariosListadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUsuariosListadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
