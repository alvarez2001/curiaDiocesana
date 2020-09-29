import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoRegComponent } from './egreso-reg.component';

describe('EgresoRegComponent', () => {
  let component: EgresoRegComponent;
  let fixture: ComponentFixture<EgresoRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresoRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresoRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
