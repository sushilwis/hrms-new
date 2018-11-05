import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurenceReportComponent } from './insurence-report.component';

describe('InsurenceReportComponent', () => {
  let component: InsurenceReportComponent;
  let fixture: ComponentFixture<InsurenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
