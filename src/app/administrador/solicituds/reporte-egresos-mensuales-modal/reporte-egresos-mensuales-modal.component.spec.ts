import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEgresosMensualesModalComponent } from './reporte-egresos-mensuales-modal.component';

describe('ReporteEgresosMensualesModalComponent', () => {
  let component: ReporteEgresosMensualesModalComponent;
  let fixture: ComponentFixture<ReporteEgresosMensualesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteEgresosMensualesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEgresosMensualesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
