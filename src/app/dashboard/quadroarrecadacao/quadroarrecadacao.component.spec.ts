import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroarrecadacaoComponent } from './quadroarrecadacao.component';

describe('QuadroarrecadacaoComponent', () => {
  let component: QuadroarrecadacaoComponent;
  let fixture: ComponentFixture<QuadroarrecadacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroarrecadacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroarrecadacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
