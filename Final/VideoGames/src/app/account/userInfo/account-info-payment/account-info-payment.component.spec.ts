import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoPaymentComponent } from './account-info-payment.component';

describe('AccountInfoPaymentComponent', () => {
  let component: AccountInfoPaymentComponent;
  let fixture: ComponentFixture<AccountInfoPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInfoPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInfoPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
