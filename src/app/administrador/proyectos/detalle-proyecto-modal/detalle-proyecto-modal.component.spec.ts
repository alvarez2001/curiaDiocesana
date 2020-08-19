import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProyectoModalComponent } from './detalle-proyecto-modal.component';

describe('DetalleProyectoModalComponent', () => {
  let component: DetalleProyectoModalComponent;
  let fixture: ComponentFixture<DetalleProyectoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProyectoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProyectoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
