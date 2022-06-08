import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TimeComponent } from './time/time.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'time', component: TimeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
