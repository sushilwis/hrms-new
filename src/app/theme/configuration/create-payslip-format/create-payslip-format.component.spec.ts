import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayslipFormatComponent } from './create-payslip-format.component';

describe('CreatePayslipFormatComponent', () => {
  let component: CreatePayslipFormatComponent;
  let fixture: ComponentFixture<CreatePayslipFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePayslipFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayslipFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
