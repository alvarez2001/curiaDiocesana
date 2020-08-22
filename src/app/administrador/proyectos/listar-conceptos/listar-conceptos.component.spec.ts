import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConceptosComponent } from './listar-conceptos.component';

describe('ListarConceptosComponent', () => {
  let component: ListarConceptosComponent;
  let fixture: ComponentFixture<ListarConceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
