import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassConfComponent } from './change-pass-conf.component';

describe('ChangePassConfComponent', () => {
  let component: ChangePassConfComponent;
  let fixture: ComponentFixture<ChangePassConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
