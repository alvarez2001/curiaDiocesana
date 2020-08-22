import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobadoComponent } from './aprobado.component';

describe('AprobadoComponent', () => {
  let component: AprobadoComponent;
  let fixture: ComponentFixture<AprobadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
