import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'time', component: TimeComponent },
  { path: '', redirectTo: '/time', pathMatch: 'full' },
  { path: '**', redirectTo: '/time' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
