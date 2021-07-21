import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleWearableComponent } from './detalle-wearable.component';

describe('DetalleWearableComponent', () => {
  let component: DetalleWearableComponent;
  let fixture: ComponentFixture<DetalleWearableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleWearableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleWearableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
