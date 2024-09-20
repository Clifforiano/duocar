import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AautosPage } from './aautos.page';

describe('AautosPage', () => {
  let component: AautosPage;
  let fixture: ComponentFixture<AautosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AautosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
