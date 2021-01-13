import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadevagaComponent } from './disponibilidadevaga.component';

describe('DisponibilidadevagaComponent', () => {
  let component: DisponibilidadevagaComponent;
  let fixture: ComponentFixture<DisponibilidadevagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadevagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadevagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
