import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeflatorComponent } from './deflator-component';

describe('DeflatorComponent', () => {
  let component: DeflatorComponent;
  let fixture: ComponentFixture<DeflatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeflatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeflatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
