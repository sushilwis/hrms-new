import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomPaycodeComponent } from './create-custom-paycode.component';

describe('CreateCustomPaycodeComponent', () => {
  let component: CreateCustomPaycodeComponent;
  let fixture: ComponentFixture<CreateCustomPaycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomPaycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomPaycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
