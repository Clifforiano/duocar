import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajecPage } from './viajec.page';

describe('ViajecPage', () => {
  let component: ViajecPage;
  let fixture: ComponentFixture<ViajecPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
