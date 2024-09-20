import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoseditPage } from './autosedit.page';

describe('AutoseditPage', () => {
  let component: AutoseditPage;
  let fixture: ComponentFixture<AutoseditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoseditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
