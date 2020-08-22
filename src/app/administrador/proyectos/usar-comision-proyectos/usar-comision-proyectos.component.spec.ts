import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsarComisionProyectosComponent } from './usar-comision-proyectos.component';

describe('UsarComisionProyectosComponent', () => {
  let component: UsarComisionProyectosComponent;
  let fixture: ComponentFixture<UsarComisionProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsarComisionProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsarComisionProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
