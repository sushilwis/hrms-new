import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularizationComponent } from './regularization.component';

describe('RegularizationComponent', () => {
  let component: RegularizationComponent;
  let fixture: ComponentFixture<RegularizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
