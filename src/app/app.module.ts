import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WeatherAppComponent } from './weather-app.component';
import { WeatherListComponent } from './weather/weather-list/weather-list-component';
import { NavBarComponent } from './nav/navbar.component';
import { WeatherThumbnailComponent } from './weather/weather-thumbnail/weather-thumbnal-component';

@NgModule({
  declarations: [
    WeatherAppComponent,
    WeatherListComponent,
    WeatherThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [WeatherAppComponent]
})
export class AppModule { }
