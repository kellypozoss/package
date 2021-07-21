import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVariableComponent } from './detalle-variable.component';

describe('DetalleVariableComponent', () => {
  let component: DetalleVariableComponent;
  let fixture: ComponentFixture<DetalleVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
