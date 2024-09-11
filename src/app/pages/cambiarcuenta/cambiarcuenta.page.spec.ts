import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarcuentaPage } from './cambiarcuenta.page';

describe('CambiarcuentaPage', () => {
  let component: CambiarcuentaPage;
  let fixture: ComponentFixture<CambiarcuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarcuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
