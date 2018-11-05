import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLeavesComponent } from './add-new-leaves.component';

describe('AddNewLeavesComponent', () => {
  let component: AddNewLeavesComponent;
  let fixture: ComponentFixture<AddNewLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
