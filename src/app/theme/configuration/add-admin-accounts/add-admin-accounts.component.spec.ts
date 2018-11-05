import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminAccountsComponent } from './add-admin-accounts.component';

describe('AddAdminAccountsComponent', () => {
  let component: AddAdminAccountsComponent;
  let fixture: ComponentFixture<AddAdminAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
