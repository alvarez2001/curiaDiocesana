import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUsuarioComponent } from './template-usuario.component';

describe('TemplateUsuarioComponent', () => {
  let component: TemplateUsuarioComponent;
  let fixture: ComponentFixture<TemplateUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
