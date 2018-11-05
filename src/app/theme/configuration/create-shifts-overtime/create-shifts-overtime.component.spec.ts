import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShiftsOvertimeComponent } from './create-shifts-overtime.component';

describe('CreateShiftsOvertimeComponent', () => {
  let component: CreateShiftsOvertimeComponent;
  let fixture: ComponentFixture<CreateShiftsOvertimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShiftsOvertimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShiftsOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
