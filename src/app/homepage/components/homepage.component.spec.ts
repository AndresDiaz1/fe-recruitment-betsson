import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: any;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have a heading 1', () => {
    expect(component.querySelector("h1")).toBeTruthy();
  });

  it('should have a heading 3', () => {
    expect(component.querySelector("h3")).toBeTruthy();
  });

  it('should have an image', () => {
    expect(component.querySelector("img")).toBeTruthy();
  });

  it('should have a link to the list', () => {
    expect(component.querySelector("a")).toBeTruthy();
  });
});
