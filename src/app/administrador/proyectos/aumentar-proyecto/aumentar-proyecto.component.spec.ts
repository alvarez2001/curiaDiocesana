import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AumentarProyectoComponent } from './aumentar-proyecto.component';

describe('AumentarProyectoComponent', () => {
  let component: AumentarProyectoComponent;
  let fixture: ComponentFixture<AumentarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumentarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AumentarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
