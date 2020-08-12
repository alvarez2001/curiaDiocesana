import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelProyectosComponent } from './tab-panel-proyectos.component';

describe('TabPanelProyectosComponent', () => {
  let component: TabPanelProyectosComponent;
  let fixture: ComponentFixture<TabPanelProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPanelProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPanelProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
