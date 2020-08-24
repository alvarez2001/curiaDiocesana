import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirClaveSeguridadComponent } from './introducir-clave-seguridad.component';

describe('IntroducirClaveSeguridadComponent', () => {
  let component: IntroducirClaveSeguridadComponent;
  let fixture: ComponentFixture<IntroducirClaveSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducirClaveSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducirClaveSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
