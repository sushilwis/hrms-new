import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOvertimeDetailsComponent } from './time-overtime-details.component';

describe('TimeOvertimeDetailsComponent', () => {
  let component: TimeOvertimeDetailsComponent;
  let fixture: ComponentFixture<TimeOvertimeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOvertimeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOvertimeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
