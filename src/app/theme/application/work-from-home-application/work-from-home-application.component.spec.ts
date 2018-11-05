import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFromHomeApplicationComponent } from './work-from-home-application.component';

describe('WorkFromHomeApplicationComponent', () => {
  let component: WorkFromHomeApplicationComponent;
  let fixture: ComponentFixture<WorkFromHomeApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFromHomeApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFromHomeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
