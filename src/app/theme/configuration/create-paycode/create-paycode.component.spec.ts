import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaycodeComponent } from './create-paycode.component';

describe('CreatePaycodeComponent', () => {
  let component: CreatePaycodeComponent;
  let fixture: ComponentFixture<CreatePaycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
