import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewShiftsOtComponent } from './add-new-shifts-ot.component';

describe('AddNewShiftsOtComponent', () => {
  let component: AddNewShiftsOtComponent;
  let fixture: ComponentFixture<AddNewShiftsOtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewShiftsOtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewShiftsOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
