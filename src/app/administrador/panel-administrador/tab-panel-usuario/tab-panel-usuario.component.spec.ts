import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelUsuarioComponent } from './tab-panel-usuario.component';

describe('TabPanelUsuarioComponent', () => {
  let component: TabPanelUsuarioComponent;
  let fixture: ComponentFixture<TabPanelUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPanelUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPanelUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
