import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSolicitudModelComponent } from './info-solicitud-model.component';

describe('InfoSolicitudModelComponent', () => {
  let component: InfoSolicitudModelComponent;
  let fixture: ComponentFixture<InfoSolicitudModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSolicitudModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSolicitudModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
