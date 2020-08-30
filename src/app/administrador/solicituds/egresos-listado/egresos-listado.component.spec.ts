import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosListadoComponent } from './egresos-listado.component';

describe('EgresosListadoComponent', () => {
  let component: EgresosListadoComponent;
  let fixture: ComponentFixture<EgresosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
