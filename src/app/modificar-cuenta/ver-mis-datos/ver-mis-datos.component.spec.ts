import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisDatosComponent } from './ver-mis-datos.component';

describe('VerMisDatosComponent', () => {
  let component: VerMisDatosComponent;
  let fixture: ComponentFixture<VerMisDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMisDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
