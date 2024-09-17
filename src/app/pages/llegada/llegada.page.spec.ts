import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlegadaPage } from './llegada.page';

describe('LlegadaPage', () => {
  let component: LlegadaPage;
  let fixture: ComponentFixture<LlegadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LlegadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
