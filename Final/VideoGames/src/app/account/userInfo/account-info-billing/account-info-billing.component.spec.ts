import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoBillingComponent } from './account-info-billing.component';

describe('AccountInfoBillingComponent', () => {
  let component: AccountInfoBillingComponent;
  let fixture: ComponentFixture<AccountInfoBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInfoBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfoBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
