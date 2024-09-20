import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeaPage } from './homea.page';

describe('HomeaPage', () => {
  let component: HomeaPage;
  let fixture: ComponentFixture<HomeaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
