import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoDirectoReporteComponent } from './egreso-directo-reporte.component';

describe('EgresoDirectoReporteComponent', () => {
  let component: EgresoDirectoReporteComponent;
  let fixture: ComponentFixture<EgresoDirectoReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresoDirectoReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresoDirectoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
