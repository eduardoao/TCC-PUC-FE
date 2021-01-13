import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrosegurancaComponent } from './quadroseguranca.component';

describe('QuadrosegurancaComponent', () => {
  let component: QuadrosegurancaComponent;
  let fixture: ComponentFixture<QuadrosegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadrosegurancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrosegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
