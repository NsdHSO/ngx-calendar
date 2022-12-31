import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourTimeComponent } from './hour-time.component';

describe('HourTimeComponent', () => {
  let component: HourTimeComponent;
  let fixture: ComponentFixture<HourTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HourTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
