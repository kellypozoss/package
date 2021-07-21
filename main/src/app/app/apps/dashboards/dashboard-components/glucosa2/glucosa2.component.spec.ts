import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glucosa2Component } from './glucosa2.component';

describe('Glucosa2Component', () => {
  let component: Glucosa2Component;
  let fixture: ComponentFixture<Glucosa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Glucosa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Glucosa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
