import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteListadoComponent } from './reporte-listado.component';

describe('ReporteListadoComponent', () => {
  let component: ReporteListadoComponent;
  let fixture: ComponentFixture<ReporteListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
