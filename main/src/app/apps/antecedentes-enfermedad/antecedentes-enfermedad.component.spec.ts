import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesEnfermedadComponent } from './antecedentes-enfermedad.component';

describe('AntecedentesEnfermedadComponent', () => {
  let component: AntecedentesEnfermedadComponent;
  let fixture: ComponentFixture<AntecedentesEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntecedentesEnfermedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentesEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
