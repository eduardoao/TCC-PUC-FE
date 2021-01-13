import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomicidioComponent } from './homicidio.component';

describe('HomicidioComponent', () => {
  let component: HomicidioComponent;
  let fixture: ComponentFixture<HomicidioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomicidioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomicidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
