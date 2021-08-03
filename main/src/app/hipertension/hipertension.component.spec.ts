import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertensionComponent } from './hipertension.component';

describe('HipertensionComponent', () => {
  let component: HipertensionComponent;
  let fixture: ComponentFixture<HipertensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipertensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipertensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
