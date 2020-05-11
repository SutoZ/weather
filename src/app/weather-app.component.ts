import { Component } from '@angular/core';

@Component({
  selector: 'weather-app',
  template: `<nav-bar></nav-bar>
            <weather-list></weather-list>`,
  styleUrls: ['./app.component.css']
})
export class WeatherAppComponent {
  title = 'weather';
}
