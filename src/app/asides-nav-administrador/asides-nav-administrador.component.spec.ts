import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidesNavAdministradorComponent } from './asides-nav-administrador.component';

describe('AsidesNavAdministradorComponent', () => {
  let component: AsidesNavAdministradorComponent;
  let fixture: ComponentFixture<AsidesNavAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidesNavAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidesNavAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
