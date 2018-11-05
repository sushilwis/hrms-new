import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorApplicationComponent } from './outdoor-application.component';

describe('OutdoorApplicationComponent', () => {
  let component: OutdoorApplicationComponent;
  let fixture: ComponentFixture<OutdoorApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
