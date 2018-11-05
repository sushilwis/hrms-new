import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodDefinitionComponent } from './period-definition.component';

describe('PeriodDefinitionComponent', () => {
  let component: PeriodDefinitionComponent;
  let fixture: ComponentFixture<PeriodDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
