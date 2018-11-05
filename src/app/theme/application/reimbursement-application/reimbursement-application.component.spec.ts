import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementApplicationComponent } from './reimbursement-application.component';

describe('ReimbursementApplicationComponent', () => {
  let component: ReimbursementApplicationComponent;
  let fixture: ComponentFixture<ReimbursementApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbursementApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
