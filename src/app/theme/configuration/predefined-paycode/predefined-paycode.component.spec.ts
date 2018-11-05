import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedPaycodeComponent } from './predefined-paycode.component';

describe('PredefinedPaycodeComponent', () => {
  let component: PredefinedPaycodeComponent;
  let fixture: ComponentFixture<PredefinedPaycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedPaycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedPaycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
