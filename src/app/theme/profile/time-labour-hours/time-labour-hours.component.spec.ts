import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLabourHoursComponent } from './time-labour-hours.component';

describe('TimeLabourHoursComponent', () => {
  let component: TimeLabourHoursComponent;
  let fixture: ComponentFixture<TimeLabourHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLabourHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLabourHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
