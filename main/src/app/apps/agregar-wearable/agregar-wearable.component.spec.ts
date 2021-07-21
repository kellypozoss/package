import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarWearableComponent } from './agregar-wearable.component';

describe('AgregarWearableComponent', () => {
  let component: AgregarWearableComponent;
  let fixture: ComponentFixture<AgregarWearableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarWearableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarWearableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
