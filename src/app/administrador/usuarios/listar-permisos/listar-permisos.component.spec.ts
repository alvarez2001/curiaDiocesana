import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPermisosComponent } from './listar-permisos.component';

describe('ListarPermisosComponent', () => {
  let component: ListarPermisosComponent;
  let fixture: ComponentFixture<ListarPermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
