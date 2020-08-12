import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInactivosComponent } from './listar-inactivos.component';

describe('ListarInactivosComponent', () => {
  let component: ListarInactivosComponent;
  let fixture: ComponentFixture<ListarInactivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInactivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
