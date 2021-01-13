import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroeducacaoComponent } from './quadroeducacao.component';

describe('QuadroeducacaoComponent', () => {
  let component: QuadroeducacaoComponent;
  let fixture: ComponentFixture<QuadroeducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroeducacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroeducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
