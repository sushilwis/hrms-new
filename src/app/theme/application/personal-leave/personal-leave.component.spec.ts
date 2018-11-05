import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLeaveComponent } from './personal-leave.component';

describe('PersonalLeaveComponent', () => {
  let component: PersonalLeaveComponent;
  let fixture: ComponentFixture<PersonalLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
