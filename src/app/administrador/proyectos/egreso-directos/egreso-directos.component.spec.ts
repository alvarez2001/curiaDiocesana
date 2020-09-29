import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoDirectosComponent } from './egreso-directos.component';

describe('EgresoDirectosComponent', () => {
  let component: EgresoDirectosComponent;
  let fixture: ComponentFixture<EgresoDirectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresoDirectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresoDirectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
