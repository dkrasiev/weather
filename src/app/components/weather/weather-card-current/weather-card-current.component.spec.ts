import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardCurrentComponent } from './weather-card-current.component';

describe('WeatherCardCurrentComponent', () => {
  let component: WeatherCardCurrentComponent;
  let fixture: ComponentFixture<WeatherCardCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
