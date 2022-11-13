import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './components/hello/hello.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './components/weather/weather-card/weather-card.component';
import { WeatherCardCurrentComponent } from './components/weather/weather-card-current/weather-card-current.component';
import { TempPipe } from './pipes/temp.pipe';
import { LocationPipe } from './pipes/location.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    WeatherComponent,
    HelloComponent,
    WeatherCardComponent,
    WeatherCardCurrentComponent,
    TempPipe,
    LocationPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
