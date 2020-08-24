import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarTasaModalComponent } from './asignar-tasa-modal.component';

describe('AsignarTasaModalComponent', () => {
  let component: AsignarTasaModalComponent;
  let fixture: ComponentFixture<AsignarTasaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarTasaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarTasaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
