import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AeditPage } from './aedit.page';

describe('AeditPage', () => {
  let component: AeditPage;
  let fixture: ComponentFixture<AeditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
