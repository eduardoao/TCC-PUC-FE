import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciaarmafogoComponent } from './ocorrenciaarmafogo.component';

describe('OcorrenciaarmafogoComponent', () => {
  let component: OcorrenciaarmafogoComponent;
  let fixture: ComponentFixture<OcorrenciaarmafogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcorrenciaarmafogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcorrenciaarmafogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
