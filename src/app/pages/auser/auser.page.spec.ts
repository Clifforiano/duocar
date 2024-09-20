import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuserPage } from './auser.page';

describe('AuserPage', () => {
  let component: AuserPage;
  let fixture: ComponentFixture<AuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
