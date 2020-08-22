import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBancoComponent } from './info-banco.component';

describe('InfoBancoComponent', () => {
  let component: InfoBancoComponent;
  let fixture: ComponentFixture<InfoBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
