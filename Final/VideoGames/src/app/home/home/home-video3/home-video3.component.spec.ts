import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideo3Component } from './home-video3.component';

describe('HomeVideo3Component', () => {
  let component: HomeVideo3Component;
  let fixture: ComponentFixture<HomeVideo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVideo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
