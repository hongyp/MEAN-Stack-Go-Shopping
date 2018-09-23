import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortnavigatorComponent } from './games-sortnavigator.component';

describe('SortnavigatorComponent', () => {
  let component: SortnavigatorComponent;
  let fixture: ComponentFixture<SortnavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortnavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortnavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
