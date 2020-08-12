import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPermisosComponent } from './eliminar-permisos.component';

describe('EliminarPermisosComponent', () => {
  let component: EliminarPermisosComponent;
  let fixture: ComponentFixture<EliminarPermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarPermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
