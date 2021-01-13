import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptrComponent } from './iptr.component';

describe('IptrComponent', () => {
  let component: IptrComponent;
  let fixture: ComponentFixture<IptrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
