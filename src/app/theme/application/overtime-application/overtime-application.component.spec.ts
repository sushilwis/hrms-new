import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeApplicationComponent } from './overtime-application.component';

describe('OvertimeApplicationComponent', () => {
  let component: OvertimeApplicationComponent;
  let fixture: ComponentFixture<OvertimeApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimeApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
