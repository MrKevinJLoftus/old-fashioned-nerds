import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSplashComponent } from './game-splash.component';

describe('GameSplashComponent', () => {
  let component: GameSplashComponent;
  let fixture: ComponentFixture<GameSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
