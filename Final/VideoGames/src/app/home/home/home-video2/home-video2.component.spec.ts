import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideo2Component } from './home-video2.component';

describe('HomeVideo2Component', () => {
  let component: HomeVideo2Component;
  let fixture: ComponentFixture<HomeVideo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVideo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
