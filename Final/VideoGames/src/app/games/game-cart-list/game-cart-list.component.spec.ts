import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCartListComponent } from './game-cart-list.component';

describe('GameCartListComponent', () => {
  let component: GameCartListComponent;
  let fixture: ComponentFixture<GameCartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
