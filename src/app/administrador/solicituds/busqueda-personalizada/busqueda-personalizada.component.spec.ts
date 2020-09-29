import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPersonalizadaComponent } from './busqueda-personalizada.component';

describe('BusquedaPersonalizadaComponent', () => {
  let component: BusquedaPersonalizadaComponent;
  let fixture: ComponentFixture<BusquedaPersonalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPersonalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
