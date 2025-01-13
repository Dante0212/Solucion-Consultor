import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaSeleccionPage } from './tabla-seleccion.page';

describe('TablaSeleccionPage', () => {
  let component: TablaSeleccionPage;
  let fixture: ComponentFixture<TablaSeleccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSeleccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
