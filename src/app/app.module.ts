import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './weather/components/weather-card/weather-card.component';
import { WeatherCardCurrentComponent } from './weather/components/weather-card-current/weather-card-current.component';
import { TempPipe } from './pipes/temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    WeatherComponent,
    HelloComponent,
    WeatherCardComponent,
    WeatherCardCurrentComponent,
    TempPipe,
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
