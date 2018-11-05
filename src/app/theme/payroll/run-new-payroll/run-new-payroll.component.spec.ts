import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunNewPayrollComponent } from './run-new-payroll.component';

describe('RunNewPayrollComponent', () => {
  let component: RunNewPayrollComponent;
  let fixture: ComponentFixture<RunNewPayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunNewPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunNewPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
