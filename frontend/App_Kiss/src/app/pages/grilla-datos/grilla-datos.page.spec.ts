import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrillaDatosPage } from './grilla-datos.page';

describe('GrillaDatosPage', () => {
  let component: GrillaDatosPage;
  let fixture: ComponentFixture<GrillaDatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
