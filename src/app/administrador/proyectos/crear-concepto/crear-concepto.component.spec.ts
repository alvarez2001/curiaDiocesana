import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConceptoComponent } from './crear-concepto.component';

describe('CrearConceptoComponent', () => {
  let component: CrearConceptoComponent;
  let fixture: ComponentFixture<CrearConceptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearConceptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
