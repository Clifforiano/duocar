import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApagosPage } from './apagos.page';

describe('ApagosPage', () => {
  let component: ApagosPage;
  let fixture: ComponentFixture<ApagosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
