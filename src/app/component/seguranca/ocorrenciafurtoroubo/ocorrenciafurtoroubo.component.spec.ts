import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciafurtorouboComponent } from './ocorrenciafurtoroubo.component';

describe('OcorrenciafurtorouboComponent', () => {
  let component: OcorrenciafurtorouboComponent;
  let fixture: ComponentFixture<OcorrenciafurtorouboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcorrenciafurtorouboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcorrenciafurtorouboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
