import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColigadaComponent } from './coligadaComponent';


describe('ColigadaComponent', () => {
  let component: ColigadaComponent;
  let fixture: ComponentFixture<ColigadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColigadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColigadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
