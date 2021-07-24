import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KevinIntroComponent } from './kevin-intro.component';

describe('KevinIntroComponent', () => {
  let component: KevinIntroComponent;
  let fixture: ComponentFixture<KevinIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KevinIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KevinIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
