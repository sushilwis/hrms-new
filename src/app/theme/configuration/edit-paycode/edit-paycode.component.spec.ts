import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaycodeComponent } from './edit-paycode.component';

describe('EditPaycodeComponent', () => {
  let component: EditPaycodeComponent;
  let fixture: ComponentFixture<EditPaycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
