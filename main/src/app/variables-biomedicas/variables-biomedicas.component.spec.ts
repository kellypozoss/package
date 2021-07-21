import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesBiomedicasComponent } from './variables-biomedicas.component';

describe('VariablesBiomedicasComponent', () => {
  let component: VariablesBiomedicasComponent;
  let fixture: ComponentFixture<VariablesBiomedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariablesBiomedicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesBiomedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
