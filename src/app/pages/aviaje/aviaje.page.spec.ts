import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AviajePage } from './aviaje.page';

describe('AviajePage', () => {
  let component: AviajePage;
  let fixture: ComponentFixture<AviajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
