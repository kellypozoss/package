import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPronosticosComponent } from './mis-pronosticos.component';

describe('MisPronosticosComponent', () => {
  let component: MisPronosticosComponent;
  let fixture: ComponentFixture<MisPronosticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPronosticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPronosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
