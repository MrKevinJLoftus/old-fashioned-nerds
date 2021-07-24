import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CjIntroComponent } from './cj-intro.component';

describe('CjIntroComponent', () => {
  let component: CjIntroComponent;
  let fixture: ComponentFixture<CjIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CjIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CjIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
