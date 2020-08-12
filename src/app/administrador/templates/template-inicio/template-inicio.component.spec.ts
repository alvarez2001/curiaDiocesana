import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInicioComponent } from './template-inicio.component';

describe('TemplateInicioComponent', () => {
  let component: TemplateInicioComponent;
  let fixture: ComponentFixture<TemplateInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
