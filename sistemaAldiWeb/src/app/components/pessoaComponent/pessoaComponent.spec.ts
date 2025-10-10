import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaComponent } from './pessoaComponent';

describe('Pessoa', () => {
  let component: PessoaComponent;
  let fixture: ComponentFixture<PessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
