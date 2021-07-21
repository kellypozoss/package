import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisWearablesComponent } from './mis-wearables.component';

describe('MisWearablesComponent', () => {
  let component: MisWearablesComponent;
  let fixture: ComponentFixture<MisWearablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisWearablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisWearablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
