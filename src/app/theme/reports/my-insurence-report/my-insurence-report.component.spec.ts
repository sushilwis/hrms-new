import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInsurenceReportComponent } from './my-insurence-report.component';

describe('MyInsurenceReportComponent', () => {
  let component: MyInsurenceReportComponent;
  let fixture: ComponentFixture<MyInsurenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInsurenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInsurenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
