import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOperacionComponent } from './agregar-operacion.component';

describe('AgregarOperacionComponent', () => {
  let component: AgregarOperacionComponent;
  let fixture: ComponentFixture<AgregarOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
