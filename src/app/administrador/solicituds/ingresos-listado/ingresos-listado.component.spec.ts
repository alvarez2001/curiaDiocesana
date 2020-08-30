import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosListadoComponent } from './ingresos-listado.component';

describe('IngresosListadoComponent', () => {
  let component: IngresosListadoComponent;
  let fixture: ComponentFixture<IngresosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
