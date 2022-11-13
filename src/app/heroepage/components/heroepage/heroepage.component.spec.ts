import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroepageComponent } from './heroepage.component';

describe('HeroepageComponent', () => {
  let component: HeroepageComponent;
  let fixture: ComponentFixture<HeroepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
