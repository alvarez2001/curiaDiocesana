import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEgresoDetalladoComponent } from './info-egreso-detallado.component';

describe('InfoEgresoDetalladoComponent', () => {
  let component: InfoEgresoDetalladoComponent;
  let fixture: ComponentFixture<InfoEgresoDetalladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEgresoDetalladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEgresoDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
