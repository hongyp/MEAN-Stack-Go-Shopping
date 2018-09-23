import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesProfileComponent } from './games-profile.component';

describe('GamesProfileComponent', () => {
  let component: GamesProfileComponent;
  let fixture: ComponentFixture<GamesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
