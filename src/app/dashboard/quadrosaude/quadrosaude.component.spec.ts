import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrosaudeComponent } from './quadrosaude.component';

describe('QuadrosaudeComponent', () => {
  let component: QuadrosaudeComponent;
  let fixture: ComponentFixture<QuadrosaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadrosaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrosaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
