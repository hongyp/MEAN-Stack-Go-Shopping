import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAddtocartComponent } from './game-addtocart.component';

describe('GameAddtocartComponent', () => {
  let component: GameAddtocartComponent;
  let fixture: ComponentFixture<GameAddtocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAddtocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAddtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
